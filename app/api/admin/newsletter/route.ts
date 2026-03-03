import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { subject, message, testEmail } = body;

    // 验证必填字段
    if (!subject || !message) {
      return NextResponse.json(
        { success: false, error: '请填写主题和消息内容' },
        { status: 400 }
      );
    }

    // 创建邮件传输器
    const transporter = nodemailer.createTransport({
      host: 'smtp.feishu.cn',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 如果提供了测试邮箱，只发送到测试邮箱
    if (testEmail) {
      await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to: testEmail,
        subject: `[测试] ${subject}`,
        html: createEmailTemplate(message, testEmail),
      });

      return NextResponse.json({
        success: true,
        message: '测试邮件已发送',
      });
    }

    // 获取所有活跃的订阅者
    const subscribers = await prisma.subscriber.findMany({
      where: { active: true },
      select: { email: true },
    });

    if (subscribers.length === 0) {
      return NextResponse.json(
        { success: false, error: '没有活跃的订阅者' },
        { status: 400 }
      );
    }

    // 群发邮件
    const emailList = subscribers.map(s => s.email);
    const results = [];

    // 分批发送，避免被限制（每次发送 50 封）
    const batchSize = 50;
    for (let i = 0; i < emailList.length; i += batchSize) {
      const batch = emailList.slice(i, i + batchSize);

      try {
        const info = await transporter.sendMail({
          from: process.env.SMTP_EMAIL,
          bcc: batch,
          subject: subject,
          html: createEmailTemplate(message),
        });
        results.push({ success: true, count: batch.length });
      } catch (error) {
        console.error(`批量发送失败 (批次 ${i / batchSize + 1}):`, error);
        results.push({ success: false, error: error instanceof Error ? error.message : '未知错误' });
      }
    }

    // 等待一下，确保邮件发送完成
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: `已发送 ${emailList.length} 封邮件`,
      details: results,
    });
  } catch (error) {
    console.error('群发邮件失败:', error);
    return NextResponse.json(
      { success: false, error: '群发邮件失败，请稍后重试' },
      { status: 500 }
    );
  }
}

function createEmailTemplate(message: string, recipientEmail?: string): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #dc2626 0%, #f97316 100%); padding: 30px 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
          🏮 Wow Handicrafts
        </h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
          精选手工珠宝与配饰
        </p>
      </div>

      <!-- Content -->
      <div style="padding: 40px 30px;">
        ${message.replace(/\n/g, '<br>')}

        <div style="margin-top: 40px; text-align: center;">
          <a href="https://wowhandicrafts.zeabur.app/products"
             style="display: inline-block; background: linear-gradient(135deg, #dc2626 0%, #f97316 100%); color: white; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px;">
            立即选购 →
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background: #1f2937; color: #9ca3af; padding: 30px 20px; text-align: center; font-size: 14px;">
        <p style="margin: 0 0 10px 0;">
          收到此邮件是因为您订阅了 Wow Handicrafts
        </p>
        ${recipientEmail ? `<p style="margin: 0 0 10px 0; color: #d1d5db;">${recipientEmail}</p>` : ''}
        <p style="margin: 0;">
          <a href="https://wowhandicrafts.zeabur.app" style="color: #f97316; text-decoration: none;">
            查看网站
          </a> |
          <a href="mailto:wowhandicrafts@franklinzelo.uk" style="color: #f97316; text-decoration: none;">
            联系我们
          </a>
        </p>
        <p style="margin: 20px 0 0 0; font-size: 12px; color: #6b7280;">
          © ${new Date().getFullYear()} Wow Handicrafts. All rights reserved.
        </p>
      </div>
    </div>
  `;
}