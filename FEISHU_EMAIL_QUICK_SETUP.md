# 飞书邮箱 SMTP 快速配置

## 📧 您的情况

- 邮箱：wowhandicrafts@franklinzelo.uk
- SMTP 服务器：smtp.feishu.cn
- 端口：465 (SSL)
- 状态：✅ SMTP 已启用

## 🔐 获取授权密码（3步）

### 步骤 1: 登录飞书邮箱
访问：https://mail.feishu.cn

### 步骤 2: 获取 SMTP 授权密码
1. 点击右上角 **设置** ⚙️
2. 进入 **账户设置**
3. 找到 **SMTP 服务** 或 **客户端授权密码**
4. 点击 **生成授权密码**
5. 复制密码（格式通常为：`xxxxxxxx`）

### 步骤 3: 更新配置文件

编辑 `.env.local` 文件，替换 `SMTP_PASSWORD`：

```bash
SMTP_EMAIL="wowhandicrafts@franklinzelo.uk"
SMTP_PASSWORD="你复制的授权密码"
CONTACT_EMAIL="wowhandicrafts@franklinzelo.uk"
```

## ✅ 测试配置

运行测试脚本：
```bash
node test-email.js
```

如果看到：
```
✅ 邮件服务器连接成功！
📤 正在发送测试邮件...
✅ 邮件发送成功！
```

说明配置成功！

## 🎯 完成后的效果

1. 用户在联系页面填写表单
2. 点击"发送消息"按钮
3. 邮件自动发送到 wowhandicrafts@franklinzelo.uk
4. 邮件内容包含：
   - 发送人姓名和邮箱
   - 咨询主题
   - 详细消息
   - 发送时间

## 🐛 常见问题

### Q: 忘记授权密码怎么办？
A: 重新生成一个，旧的会失效

### Q: 授权密码和登录密码一样吗？
A: 不一样！授权密码是专门用于 SMTP 的独立密码

### Q: 测试失败怎么办？
A: 检查以下几点：
1. 授权密码是否正确
2. 邮箱 SMTP 服务是否启用（已在飞书启用 ✅）
3. 网络连接是否正常

### Q: 邮件发送有限制吗？
A: 飞书邮箱可能有发送频率限制，但日常使用应该足够

## 📞 需要帮助？

如果遇到问题，请提供错误信息，我会帮你解决！