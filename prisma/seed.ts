import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create categories
  console.log('Creating categories...')
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
  console.log(`✅ Created/Updated category: ${seashell.nameEn}`)

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
  console.log(`✅ Created/Updated category: ${chinese.nameEn}`)

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
  console.log(`✅ Created/Updated category: ${handknit.nameEn}`)

  // Create Seashell products
  console.log('\nCreating Seashell products...')
  const seashellProducts = [
    {
      title: '贝壳发夹 - 海浪纹',
      titleEn: 'Seashell Hairpin - Ocean Waves',
      slug: 'seashell-hairpin-ocean-waves',
      description: '精美的海洋主题发夹，采用天然贝壳手工制作，每件作品都独一无二。',
      descriptionEn: 'Exquisite ocean-themed hairpin, handcrafted with natural seashells. Each piece is unique.',
      price: 28.00,
      categoryId: seashell.id,
      images: ['/products/12d62135-8563-46a1-9e71-14f55e56b772.jpg'],
      stock: 15,
      status: 'ACTIVE',
      featured: true,
      variants: {
        colors: ['Natural', 'Pink', 'Blue'],
        sizes: ['Small', 'Medium', 'Large'],
      },
    },
    {
      title: '贝壳项链 - 珊瑚风',
      titleEn: 'Seashell Necklace - Coral Style',
      slug: 'seashell-necklace-coral',
      description: '精致贝壳项链，灵感来自珊瑚礁，优雅而自然。',
      descriptionEn: 'Delicate seashell necklace, inspired by coral reefs. Elegant and natural.',
      price: 42.00,
      categoryId: seashell.id,
      images: ['/products/76992cd5-3fc0-4234-b49e-8cfa198a2c75.jpg'],
      stock: 12,
      status: 'ACTIVE',
      featured: true,
      variants: {
        colors: ['Coral', 'White', 'Pink'],
        lengths: ['40cm', '45cm', '50cm'],
      },
    },
    {
      title: '贝壳手链 - 海星设计',
      titleEn: 'Seashell Bracelet - Starfish',
      slug: 'seashell-bracelet-starfish',
      description: '可爱海星造型手链，搭配贝壳串珠，适合日常佩戴。',
      descriptionEn: 'Cute starfish bracelet with seashell beads, perfect for daily wear.',
      price: 35.00,
      categoryId: seashell.id,
      images: ['/products/fcfb12aa-364d-4287-9dbf-4708c50abaea.jpg'],
      stock: 18,
      status: 'ACTIVE',
      featured: false,
      variants: {
        colors: ['Natural', 'Blue'],
        sizes: ['One Size'],
      },
    },
    {
      title: '贝壳戒指 - 珍珠点缀',
      titleEn: 'Seashell Ring - Pearl Accent',
      slug: 'seashell-ring-pearl',
      description: '精美贝壳戒指，搭配天然珍珠点缀。',
      descriptionEn: 'Exquisite seashell ring with natural pearl accent.',
      price: 25.00,
      categoryId: seashell.id,
      images: ['/products/031029c0-f688-41a0-acab-b736967ba122.jpg'],
      stock: 20,
      status: 'ACTIVE',
      featured: false,
      variants: {
        colors: ['Natural', 'Pink'],
        sizes: ['6', '7', '8', '9'],
      },
    },
  ]

  for (const product of seashellProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
    console.log(`  ✅ Created: ${product.titleEn}`)
  }

  // Create Chinese Style products
  console.log('\nCreating Chinese Style products...')
  const chineseProducts = [
    {
      title: '琵琶发夹 - 红色',
      titleEn: 'Pipa Style Hair Clip - Red',
      slug: 'pipa-hairclip-red',
      description: '精美的琵琶造型发夹，采用传统中国工艺制作。红色代表着吉祥和喜庆。',
      descriptionEn: 'Exquisite Pipa-shaped hair clip, crafted using traditional Chinese techniques. The red color symbolizes good luck and celebration.',
      price: 35.00,
      categoryId: chinese.id,
      images: ['/products/583ca2e7-a4f3-4945-9b68-cb18b4d80313.jpg'],
      stock: 20,
      status: 'ACTIVE',
      featured: true,
      variants: {
        colors: ['Red', 'Gold', 'Blue'],
        sizes: ['One Size'],
      },
    },
    {
      title: '蝴蝶发夹 - 金红色',
      titleEn: 'Butterfly Hairpin - Gold & Red',
      slug: 'butterfly-hairpin-gold-red',
      description: '精美蝴蝶造型发夹，金红色搭配，优雅大方。',
      descriptionEn: 'Exquisite butterfly hairpin in gold and red. Elegant and graceful.',
      price: 38.00,
      categoryId: chinese.id,
      images: ['/products/c0ad822d-f16f-40b4-b4ae-7f7425b6de54.jpg'],
      stock: 15,
      status: 'ACTIVE',
      featured: true,
      variants: {
        colors: ['Gold Red', 'Silver Blue', 'Copper Green'],
        sizes: ['One Size'],
      },
    },
    {
      title: '芭蕉扇发夹 - 绿色',
      titleEn: 'Palm Fan Hairpin - Green',
      slug: 'palm-fan-hairpin-green',
      description: '芭蕉扇造型发夹，绿色清新，夏天佩戴格外凉爽。',
      descriptionEn: 'Palm fan hairpin in refreshing green. Perfect for summer.',
      price: 32.00,
      categoryId: chinese.id,
      images: ['/products/2178554d-62e5-4da6-befa-1ef7268ce8cb.jpg'],
      stock: 18,
      status: 'ACTIVE',
      featured: false,
      variants: {
        colors: ['Green', 'Yellow', 'Pink'],
        sizes: ['One Size'],
      },
    },
    {
      title: '小圆镜 - 传统款',
      titleEn: 'Round Mirror - Traditional',
      slug: 'round-mirror-traditional',
      description: '传统圆形小镜，精致工艺，随身携带。',
      descriptionEn: 'Traditional round mirror with exquisite craftsmanship. Portable.',
      price: 45.00,
      categoryId: chinese.id,
      images: ['/products/ab987880-1bc0-4d1a-b576-a6f4de430518.jpg'],
      stock: 10,
      status: 'ACTIVE',
      featured: true,
      variants: {
        colors: ['Gold', 'Silver', 'Copper'],
        sizes: ['5cm', '7cm'],
      },
    },
    {
      title: '无事牌 - 佛像',
      titleEn: 'Wu Shi Pao - Buddha Amulet',
      slug: 'wushi-pao-buddha',
      description: '精致无事牌，金属边框内镶嵌佛像，寓意平安无事。',
      descriptionEn: 'Exquisite Wu Shi Pao with Buddha amulet inside metal frame. Symbolizes peace and safety.',
      price: 55.00,
      categoryId: chinese.id,
      images: ['/products/47d8f059-0dse-4c88-9eeb-435e066ad9ce.jpg'],
      stock: 8,
      status: 'ACTIVE',
      featured: true,
      variants: {
        colors: ['Gold', 'Silver'],
        styles: ['Buddha', 'Child'],
      },
    },
    {
      title: '红绳金锁',
      titleEn: 'Red String Gold Lock',
      slug: 'red-string-gold-lock',
      description: '传统红绳搭配金锁，寓意锁住幸福，适合婴儿满月或生日礼物。',
      descriptionEn: 'Traditional red string with gold lock. Symbolizes locking happiness. Perfect for baby gifts.',
      price: 55.00,
      categoryId: chinese.id,
      images: ['/products/674a97be-cd48-446e-b3b5-4adb4746e8bd.jpg'],
      stock: 12,
      status: 'ACTIVE',
      featured: true,
      variants: {
        styles: ['Gold Lock', 'Silver Lock'],
        sizes: ['Small', 'Medium'],
      },
    },
    {
      title: '铜环手镯',
      titleEn: 'Copper Ring Bracelet',
      slug: 'copper-bracelet',
      description: '精致铜环手镯，传统工艺制作。',
      descriptionEn: 'Exquisite copper ring bracelet made with traditional craftsmanship.',
      price: 28.00,
      categoryId: chinese.id,
      images: ['/products/9b4e7f41-4ad6-40e5-b2d7-497dda480ec6.jpg'],
      stock: 15,
      status: 'ACTIVE',
      featured: false,
      variants: {
        colors: ['Copper', 'Brass'],
        sizes: ['Small', 'Medium', 'Large'],
      },
    },
    {
      title: '红绳耳环',
      titleEn: 'Red String Earrings',
      slug: 'red-string-earrings',
      description: '红色绳结耳环，简约而优雅。',
      descriptionEn: 'Red string knot earrings. Simple yet elegant.',
      price: 25.00,
      categoryId: chinese.id,
      images: ['/products/c32cf27b-b1e5-43de-b85a-1c7a13305945.jpg'],
      stock: 20,
      status: 'ACTIVE',
      featured: false,
      variants: {
        colors: ['Red', 'Blue', 'Purple'],
        sizes: ['One Size'],
      },
    },
  ]

  for (const product of chineseProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
    console.log(`  ✅ Created: ${product.titleEn}`)
  }

  // Create Handknit products
  console.log('\nCreating Handknit products...')
  const handknitProducts = [
    {
      title: '手工编织熊猫玩偶',
      titleEn: 'Handknit Panda Doll',
      slug: 'handknit-panda',
      description: '可爱的手工编织熊猫玩偶，使用优质毛线精心制作。每一个细节都体现工匠的用心。',
      descriptionEn: 'Cute handknit panda doll, carefully crafted with premium wool. Every detail reflects the artisan\'s dedication.',
      price: 42.00,
      categoryId: handknit.id,
      images: ['/products/c87bc927-beb7-48f1-bf6f-80087967bcde.jpg'],
      stock: 8,
      status: 'ACTIVE',
      featured: true,
      variants: {
        colors: ['Black & White'],
        sizes: ['25cm', '30cm'],
      },
    },
    {
      title: '手工编织包包 - 草编风',
      titleEn: 'Handknit Straw Bag',
      slug: 'handknit-straw-bag',
      description: '手工编织包包，草编风格，环保时尚。',
      descriptionEn: 'Handknit bag in straw style. Eco-friendly and fashionable.',
      price: 48.00,
      categoryId: handknit.id,
      images: ['/products/76e8ea00-efa5-49e8-96e0-fc1609f2e455.jpg'],
      stock: 10,
      status: 'ACTIVE',
      featured: true,
      variants: {
        colors: ['Natural', 'Pink', 'Blue'],
        sizes: ['Medium', 'Large'],
      },
    },
    {
      title: '手工编织兔子玩偶',
      titleEn: 'Handknit Rabbit Doll',
      slug: 'handknit-rabbit',
      description: '可爱的手工编织兔子玩偶，毛茸茸的手感。',
      descriptionEn: 'Cute handknit rabbit doll with fluffy texture.',
      price: 38.00,
      categoryId: handknit.id,
      images: ['/products/1442ea1d-fedd-4fa2-8046-8e9c28016c02.jpg'],
      stock: 12,
      status: 'ACTIVE',
      featured: false,
      variants: {
        colors: ['White', 'Pink', 'Gray'],
        sizes: ['20cm', '25cm'],
      },
    },
    {
      title: '手工编织猫咪玩偶',
      titleEn: 'Handknit Cat Doll',
      slug: 'handknit-cat',
      description: '可爱的手工编织猫咪玩偶，萌趣十足。',
      descriptionEn: 'Cute handknit cat doll, absolutely adorable.',
      price: 40.00,
      categoryId: handknit.id,
      images: ['/products/40ee9736-e778-4f76-9129-1f64ec879a6b.jpg'],
      stock: 10,
      status: 'ACTIVE',
      featured: false,
      variants: {
        colors: ['Orange', 'Gray', 'White'],
        sizes: ['20cm', '25cm'],
      },
    },
  ]

  for (const product of handknitProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    })
    console.log(`  ✅ Created: ${product.titleEn}`)
  }

  console.log('\n✅ Database seeded successfully!')
  console.log(`📊 Summary:`)
  console.log(`   - Categories: 3`)
  console.log(`   - Products: 16`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })