# Craft Shop - Chinese Handcrafted Art E-commerce

A modern e-commerce platform for Chinese handcrafted jewelry and accessories, featuring seashell jewelry, traditional Chinese style accessories, and handknit items.

## 🎨 Design Philosophy

- **Colors**: Traditional Chinese red (#C8161D) + Deep green (#1B4D3E) + Pearl white background
- **Style**: Minimalist design with elegant Chinese elements
- **Focus**: Product quality and cultural storytelling

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI based)
- **Database**: PostgreSQL with Prisma ORM
- **Payment**: Stripe (international credit cards)
- **Deployment**: Zeabur

## 📁 Project Structure

```
craft-shop/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── Navbar.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   └── ProductCard.tsx    # Product display card
├── lib/
│   └── utils.ts           # Utility functions
├── prisma/
│   └── schema.prisma      # Database schema
└── public/                # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   cd craft-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - `DATABASE_URL`: PostgreSQL connection string
   - `STRIPE_SECRET_KEY`: Stripe secret key
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
   - `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret

4. **Initialize database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## 📦 Database Schema

### Core Models

- **Category**: Product categories (Seashell, Chinese Style, Handknit)
- **Product**: Products with variants, pricing, images, stock
- **Order**: Customer orders with items and shipping info
- **OrderItem**: Individual items in an order

### Product Features

- Multi-language support (Chinese/English)
- Multiple variants (color, size, style)
- Stock management
- Featured products
- View tracking

## 🎯 Product Categories

1. **Seashell Jewelry** (🐚)
   - Hairpins, necklaces, bracelets, rings
   - Ocean-themed designs

2. **Chinese Style** (🎋)
   - Pipa/Balalaika hair clips
   - Butterfly, palm fan, round mirrors
   - Wu Shi Pao (Buddha/child amulets)
   - Wedding accessories (gold locks, red strings, bracelets)

3. **Handknit Items** (🧶)
   - Dolls, bags, accessories
   - Handmade wool creations

## 💳 Payment Integration

### Stripe Setup

1. Create a Stripe account
2. Get API keys from Stripe Dashboard
3. Add keys to `.env` file
4. Configure webhook for payment events

### Supported Payment Methods

- Visa, Mastercard, American Express
- Multi-currency support (USD, EUR, GBP, etc.)

## 🌍 Deployment (Zeabur)

### Zeabur Deployment Steps

1. Push code to GitHub
2. Connect Zeabur to your repository
3. Configure environment variables
4. Deploy automatically

### Services Required on Zeabur

- Prebuilt Next.js service
- PostgreSQL database
- Object storage (for images)

## 📋 Features

### Frontend
- [x] Homepage with featured products
- [x] Product category pages
- [x] Product detail pages
- [x] Shopping cart
- [x] Checkout flow
- [x] Multi-currency display
- [x] Responsive design

### Backend
- [ ] Product management (CRUD)
- [ ] Order management
- [ ] Inventory tracking
- [ ] Customer management
- [ ] Email notifications
- [ ] Analytics dashboard

### Admin Panel
- [ ] Dashboard with statistics
- [ ] Product upload/edit
- [ ] Order processing
- [ ] Customer management
- [ ] Settings

## 🎨 Customization

### Color Scheme

Edit `app/globals.css` to modify colors:
```css
--color-primary: 357 78% 43%; /* Chinese Red */
--color-secondary: 169 52% 26%; /* Deep Green */
--color-accent: 45 93% 47%; /* Gold */
```

### Adding Products

Products can be added via:
1. Admin panel (when implemented)
2. Direct database insertion
3. CSV import (planned feature)

## 🚧 Roadmap

### Phase 1 - Demo (Current)
- [x] Basic UI structure
- [x] Homepage with categories
- [x] Product cards
- [ ] Product listing page
- [ ] Product detail page
- [ ] Shopping cart
- [ ] Stripe payment integration

### Phase 2 - Complete E-commerce
- [ ] User authentication
- [ ] Order management
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Inventory tracking

### Phase 3 - Advanced Features
- [ ] Multi-language (Chinese/English)
- [ ] Advanced search/filtering
- [ ] Coupon system
- [ ] Reviews & ratings
- [ ] Wishlist

## 📞 Support

For questions or support:
- Email: support@craftshop.com
- Documentation: See `/docs` folder

## 📄 License

Proprietary - All rights reserved

## 👥 Team

- Development: AI Assistant
- Design: Minimalist + Chinese aesthetic fusion
- Products: Handcrafted by skilled artisans

---

**Note**: This is a demo version. Full e-commerce functionality coming soon.