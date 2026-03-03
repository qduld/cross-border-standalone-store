#!/usr/bin/env node

/**
 * 邮件发送测试脚本
 * 用法: node test-email.js
 */

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testEmail() {
  console.log('📧 开始测试邮件发送功能...\n');

  // 检查环境变量
  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    console.error('❌ 错误: 请在 .env.local 中配置 SMTP_EMAIL 和 SMTP_PASSWORD');
    console.log('\n示例配置:');
    console.log('SMTP_EMAIL="your-gmail@gmail.com"');
    console.log('SMTP_PASSWORD="xxxx xxxx xxxx xxxx"');
    process.exit(1);
  }

  console.log('📮 SMTP 邮箱:', process.env.SMTP_EMAIL);
  console.log('📨 目标邮箱:', process.env.CONTACT_EMAIL || 'wowhandicrafts@franklinzelo.uk');
  console.log('');

  try {
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

    console.log('🔗 正在连接邮件服务器...');

    // 验证连接
    await transporter.verify();
    console.log('✅ 邮件服务器连接成功！\n');

    // 发送测试邮件
    const testEmail = {
      from: process.env.SMTP_EMAIL,
      to: process.env.CONTACT_EMAIL || 'wowhandicrafts@franklinzelo.uk',
      subject: '[测试] 邮件发送功能测试',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #dc2626 0%, #f97316 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 24px;">🧪 测试邮件</h2>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <p style="margin: 0 0 20px; color: #374151; font-size: 16px;">
              恭喜！邮件发送功能配置成功！
            </p>
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">测试信息</p>
              <p style="margin: 10px 0 0; color: #111827; font-size: 14px;">
                <strong>发送时间:</strong> ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}<br>
                <strong>发送人:</strong> 测试用户<br>
                <strong>邮箱:</strong> test@example.com
              </p>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                这是一封测试邮件，来自 Craft Shop 联系我们表单
              </p>
            </div>
          </div>
        </div>
      `,
    };

    console.log('📤 正在发送测试邮件...');
    const info = await transporter.sendMail(testEmail);

    console.log('✅ 邮件发送成功！');
    console.log('📬 邮件 ID:', info.messageId);
    console.log('\n请检查您的邮箱，应该已收到测试邮件。\n');

    console.log('🎉 配置完成！现在可以访问联系我们页面测试表单提交功能了。');
    console.log('📍 访问地址: http://localhost:3000/contact\n');

  } catch (error) {
    console.error('❌ 测试失败:', error.message);

    // 提供错误诊断建议
    console.log('\n🔍 错误诊断:');
    if (error.message.includes('Invalid login')) {
      console.log('  → 请检查 SMTP_EMAIL 和 SMTP_PASSWORD 是否正确');
      console.log('  → 如果使用 Gmail，请确保使用"应用专用密码"而不是登录密码');
    } else if (error.message.includes('Timeout') || error.message.includes('ETIMEDOUT')) {
      console.log('  → 网络连接超时，请检查网络或防火墙设置');
    } else if (error.message.includes('Greeting never received')) {
      console.log('  → 邮件服务器连接失败，请检查 SMTP 配置');
    }

    console.log('\n📚 详细配置说明请参考: EMAIL_SETUP.md');
    process.exit(1);
  }
}

// 运行测试
testEmail();