# Zeabur 部署指南

## 📋 部署前准备

### 1. GitHub 仓库

```bash
cd /home/admin/openclaw/workspace/craft-shop
git init
git add .
git commit -m "Initial commit: Craft Shop demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/craft-shop.git
git push -u origin main
```

### 2. 环境变量准备

在 Zeabur 中需要配置以下环境变量：

```bash
# 数据库连接（Zeabur 会自动生成）
DATABASE_URL=postgresql://postgres:password@host:5432/craftshop

# Stripe Keys（需要注册 Stripe）
STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# 站点配置
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

---

## 🚀 Zeabur 部署步骤

### 步骤 1: 创建 Zeabur 项目

1. 登录 [Zeabur](https://zeabur.com)
2. 点击 "Create New Project"
3. 命名项目为 `craft-shop`

### 步骤 2: 添加 Next.js 服务

1. 在项目中点击 "Create Service"
2. 选择 "Git Service"
3. 选择 GitHub 仓库
4. Zeabur 会自动检测为 Next.js 项目

**部署配置（自动检测到的配置应如下）:**

```yaml
Build Command: npm run build
Start Command: npm start
Port: 3000
```

### 步骤 3: 添加 PostgreSQL 数据库

1. 在项目中点击 "Create Service"
2. 选择 "Marketplace"
3. 搜索并选择 "PostgreSQL"
4. 选择免费套餐（Free）

**获取数据库连接字符串:**

在 PostgreSQL 服务页面，点击 "Connect" 按钮，复制连接字符串：

```
postgresql://postgres:[password]@[host]:5432/zeabur
```

### 步骤 4: 配置环境变量

在 Next.js 服务页面：

1. 点击 "Environment Variables"
2. 添加以下变量：

```bash
DATABASE_URL=<刚才复制的PostgreSQL连接字符串>
STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

### 步骤 5: 添加 Prisma 生成脚本

在 `package.json` 中添加：

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "postinstall": "prisma generate"
  }
}
```

### 步骤 6: 部署

点击 "Deploy" 按钮，Zeabur 会自动：
- 拉取代码
- 安装依赖
- 生成 Prisma 客户端
- 运行数据库迁移
- 构建应用
- 启动服务

### 步骤 7: 初始化数据库

部署成功后，需要初始化数据库表：

1. 在 Zeabur 项目中，找到 Next.js 服务
2. 点击 "Console" 标签
3. 运行：

```bash
npx prisma db push
```

这会创建所有数据库表。

### 步骤 8: 添加域名

1. 在 Next.js 服务页面，点击 "Domains"
2. 如果你在 Zeabur 注册了域名，直接选择
3. 如果使用外部域名，输入域名并配置 DNS

**DNS 配置（如果使用外部域名）:**

```
类型: CNAME
名称: www
值: <Zeabur提供的域名>
```

### 步骤 9: 配置 SSL

Zeabur 会自动为你的域名配置 SSL 证书（Let's Encrypt），无需手动操作。

---

## 🗄️ 数据库初始化（种子数据）

### 创建种子数据脚本

创建文件 `prisma/seed.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 创建分类
  const seashell = await prisma.category.upsert({
    where: { slug: 'seashell' },
    update: {},
    create: {
      name: '贝壳饰品',
      nameEn: 'Seashell Jewelry',
      slug: 'seashell',
      icon: '🐚',
      order: 1,
    },
  })

  const chinese = await prisma.category.upsert({
    where: { slug: 'chinese' },
    update: {},
    create: {
      name: '中国风饰品',
      nameEn: 'Chinese Style Jewelry',
      slug: 'chinese',
      icon: '🎋',
      order: 2,
    },
  })

  const handknit = await prisma.category.upsert({
    where: { slug: 'handknit' },
    update: {},
    create: {
      name: '毛线织物',
      nameEn: 'Handknit Items',
      slug: 'handknit',
      icon: '🧶',
      order: 3,
    },
  })

  // 创建商品
  const products = [
    {
      title: '贝壳发夹 - 海浪纹',
      titleEn: 'Seashell Hairpin - Ocean Waves',
      slug: 'seashell-hairpin-ocean-waves',
      description: '精美的海洋主题发夹，采用天然贝壳手工制作。',
      descriptionEn: 'Exquisite ocean-themed hairpin, handcrafted with natural seashells.',
      price: 28.00,
      categoryId: seashell.id,
      images: ['https://your-cdn.com/seashell1.jpg'],
      stock: 15,
      status: 'ACTIVE',
      variants: {
        colors: ['Natural', 'Pink', 'Blue'],
        sizes: ['Small', 'Medium', 'Large'],
      },
    },
    // 添加更多商品...
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

### 运行种子数据

在 Zeabur Console 中运行：

```bash
npx ts-node prisma/seed.ts
```

---

## 💳 Stripe 集成

### 注册 Stripe 账号

1. 访问 [Stripe Dashboard](https://dashboard.stripe.com)
2. 注册账号（需要公司信息）
3. 获取 API Keys（测试模式和生产模式）

### 获取 API Keys

在 Stripe Dashboard:

1. 左侧菜单选择 "Developers" → "API Keys"
2. 复制以下 Keys:
   - Publishable key (测试): `pk_test_xxxxx`
   - Secret key (测试): `sk_test_xxxxx`
   - Publishable key (生产): `pk_live_xxxxx`
   - Secret key (生产): `sk_live_xxxxx`

### 配置 Webhook

1. 在 Stripe Dashboard 选择 "Developers" → "Webhooks"
2. 点击 "Add endpoint"
3. 输入 URL: `https://yourdomain.com/api/webhook/stripe`
4. 选择事件: `payment_intent.succeeded`, `payment_intent.failed`
5. 复制 Webhook Secret: `whsec_xxxxx`

---

## 🖼️ 图片存储方案

### 方案 1: 使用 Cloudflare R2（推荐）

1. 注册 [Cloudflare R2](https://dash.cloudflare.com/)
2. 创建 Bucket
3. 获取 API Keys
4. 使用 R2 SDK 或工具上传图片

### 方案 2: 使用 Zeabur 对象存储

1. 在 Zeabur 项目中，创建对象存储服务
2. 上传图片到存储
3. 获取图片 URL

### 方案 3: 将图片放到 public/ 目录（简单但不推荐生产环境）

```bash
# 在项目中创建 public/products 目录
mkdir -p public/products

# 复制图片到 public/products
cp /path/to/images/* public/products/
```

然后在代码中使用:

```typescript
<Image
  src="/products/image.jpg"
  alt="Product"
  width={400}
  height={400}
/>
```

---

## 🔍 常见问题

### Q1: 部署失败，提示数据库连接错误

**A:** 检查 `DATABASE_URL` 环境变量是否正确。确保 PostgreSQL 服务已经启动。

### Q2: 图片无法显示

**A:** 检查图片 URL 是否可访问。不要使用本地文件路径（`/home/admin/...`），使用公共 URL。

### Q3: Stripe 支付失败

**A:**
1. 确认使用的是测试模式的 Key
2. 使用 Stripe 测试卡号: `4242 4242 4242 4242`
3. 检查 Webhook Secret 是否配置正确

### Q4: 访问网站显示 404

**A:**
1. 确认部署成功
2. 检查域名 DNS 是否正确配置
3. 等待 DNS 传播（最多 48 小时）

---

## 📊 部署检查清单

部署前请确认：

- [ ] GitHub 仓库已推送代码
- [ ] `package.json` 包含 `"postinstall": "prisma generate"`
- [ ] 环境变量已配置
- [ ] Stripe 账号已注册，API Keys 已获取
- [ ] 图片已上传到公共存储或 public/ 目录
- [ ] 域名已配置（可选）
- [ ] 数据库已初始化

---

## 🎯 部署后验证

1. **访问网站**: 打开你的域名，确认页面正常加载
2. **测试商品**: 浏览商品列表和详情页
3. **测试下单**: 使用 Stripe 测试卡号完成下单
4. **检查后台**: 登录后台管理，确认订单创建成功
5. **测试邮件**: 确认订单确认邮件发送成功

---

**最后更新**: 2026-02-27