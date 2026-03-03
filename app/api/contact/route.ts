import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // 验证必填字段
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: '请填写所有必填字段' },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: '请输入有效的邮箱地址' },
        { status: 400 }
      );
    }

    // 创建邮件传输器（使用飞书邮箱 SMTP）
    const transporter = nodemailer.createTransport({
      host: 'smtp.feishu.cn',
      port: 465,
      secure: true, // 使用 SSL
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 邮件内容
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.CONTACT_EMAIL || 'wowhandicrafts@franklinzelo.uk',
      subject: `[网站咨询] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #f97316 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 24px;">📧 新的网站咨询</h2>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 5px; color: #6b7280; font-size: 14px;">发送人姓名</p>
              <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500;">${name}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 5px; color: #6b7280; font-size: 14px;">发送人邮箱</p>
              <p style="margin: 0; color: #111827; font-size: 16px;">${email}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 5px; color: #6b7280; font-size: 14px;">咨询主题</p>
              <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 500;">${subject}</p>
            </div>
            <div>
              <p style="margin: 0 0 5px; color: #6b7280; font-size: 14px;">消息内容</p>
              <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                此邮件来自您的网站联系方式表单
              </p>
              <p style="margin: 5px 0 0; color: #9ca3af; font-size: 12px;">
                发送时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: '邮件发送成功！我们会尽快回复您。',
    });
  } catch (error) {
    console.error('邮件发送失败:', error);
    return NextResponse.json(
      { success: false, error: '邮件发送失败，请稍后重试' },
      { status: 500 }
    );
  }
}