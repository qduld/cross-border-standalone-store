# 邮件发送功能配置说明

## 功能概述

联系我们页面现在支持用户填写表单后，自动发送邮件到您的公司邮箱 `wowhandicrafts@franklinzelo.uk`

## 配置步骤

### 选项 1: 飞书邮箱（推荐，已配置）

您已经在使用飞书邮箱，SMTP 服务已启用。

#### 获取 SMTP 授权密码

1. 登录飞书邮箱: https://mail.feishu.cn
2. 点击右上角 **设置** ⚙️
3. 进入 **账户设置**
4. 找到 **SMTP 服务** 或 **客户端授权密码**
5. 点击 **生成授权密码**
6. 复制生成的密码（不是登录密码）

#### 更新环境变量

编辑 `.env.local` 文件：
```bash
# 邮件配置（飞书邮箱）
SMTP_EMAIL="wowhandicrafts@franklinzelo.uk"
SMTP_PASSWORD="your-feishu-smtp-password"  # 生成的授权密码
CONTACT_EMAIL="wowhandicrafts@franklinzelo.uk"
```

#### SMTP 配置信息

- **服务器**: smtp.feishu.cn
- **端口**: 465 (SSL 加密)
- **安全**: SSL/TLS
- **认证**: 是

#### 测试邮件发送

```bash
node test-email.js
```

### 选项 2: Gmail（备选方案）

1. 登录您的 Google 账户
2. 进入 [账户设置](https://myaccount.google.com/security)
3. 启用 **两步验证**
4. 生成 **应用专用密码**：
   - 进入 "安全性" → "两步验证"
   - 选择 "应用专用密码"
   - 输入 "Craft Shop" 作为应用名称
   - 复制生成的密码（格式：xxxx xxxx xxxx xxxx）

5. 更新 `.env.local` 文件：
```bash
SMTP_EMAIL="your-gmail@gmail.com"
SMTP_PASSWORD="xxxx xxxx xxxx xxxx"  # 应用专用密码
```

#### 选项 2: Outlook/Hotmail

1. 登录 [Microsoft 账户设置](https://account.live.com/proofs/ManageAdd)
2. 启用两步验证
3. 生成应用密码

4. 更新 `.env.local` 文件：
```bash
SMTP_EMAIL="your-email@outlook.com"
SMTP_PASSWORD="your-app-password"
```

#### 选项 3: SendGrid（推荐生产环境）

1. 注册 [SendGrid](https://sendgrid.com/)
2. 创建 API Key

3. 安装额外依赖：
```bash
npm install @sendgrid/mail
```

4. 修改 `app/api/contact/route.ts`，替换邮件发送逻辑为 SendGrid

#### 选项 4: Resend（现代推荐）

1. 注册 [Resend](https://resend.com/)
2. 创建 API Key

3. 安装依赖：
```bash
npm install resend
```

4. 创建环境变量：
```bash
RESEND_API_KEY="re_xxxxxxxxx"
```

### 2. 更新环境变量

编辑 `.env.local` 文件：

```bash
# 邮件配置（选择以下任一方式）
# Gmail 示例
SMTP_EMAIL="your-gmail@gmail.com"
SMTP_PASSWORD="xxxx xxxx xxxx xxxx"  # 应用专用密码

# Outlook 示例
# SMTP_EMAIL="your-email@outlook.com"
# SMTP_PASSWORD="your-app-password"

# 目标邮箱（您的公司邮箱）
CONTACT_EMAIL="wowhandicrafts@franklinzelo.uk"
```

### 3. 测试邮件发送

启动开发服务器：
```bash
npm run dev
```

访问联系我们页面：`http://localhost:3000/contact`

填写表单并提交，检查：
1. 表单提交成功提示
2. 公司邮箱收到邮件
3. 邮件内容格式正确

### 4. 生产环境部署

对于生产环境，建议：

1. **不要使用个人邮箱**（Gmail/Outlook 有限制）
2. 使用专业的邮件服务：
   - SendGrid（每月 100 封免费）
   - Resend（每天 3,000 封免费）
   - AWS SES（非常便宜，但需要配置）

3. 在 Zeabur 等平台添加环境变量：
   - `SMTP_EMAIL`
   - `SMTP_PASSWORD`
   - `CONTACT_EMAIL`

## 邮件模板

邮件会自动格式化，包含：

- **发送人信息**：姓名、邮箱
- **咨询主题**：用户填写的内容
- **消息内容**：用户的消息
- **发送时间**：北京时间
- **精美样式**：红色渐变头部卡片，清晰的内容布局

## 故障排除

### 邮件发送失败

1. **检查 SMTP 配置**：
   ```bash
   # 在终端测试连接
   telnet smtp.gmail.com 587
   ```

2. **查看服务器日志**：
   - 开发环境：终端会显示错误信息
   - 生产环境：查看 Zeabur 日志

3. **常见错误**：
   - `Invalid login`：检查邮箱和密码
   - `Timeout`：检查网络连接
   - `Rate limit`：Gmail 有发送限制

### 邮件未收到

1. 检查垃圾邮件文件夹
2. 检查公司邮箱的过滤规则
3. 确认 `CONTACT_EMAIL` 环境变量设置正确

## 安全建议

1. **永远不要**提交 `.env.local` 到 Git
2. 在生产环境使用专用的邮件发送服务
3. 定期更换 SMTP 密码
4. 使用应用专用密码而不是登录密码

## 扩展功能

如果需要更多功能，可以考虑：

- **邮件附件**：允许用户上传图片
- **邮件确认**：给发送者发送确认邮件
- **邮件模板系统**：自定义邮件样式
- **邮件队列**：处理大量邮件发送

需要帮助配置？请随时联系！