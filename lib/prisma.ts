import { PrismaClient } from '@prisma/client'

let prismaInstance: PrismaClient | undefined = undefined

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    if (!prismaInstance) {
      prismaInstance = new PrismaClient()
    }
    return prismaInstance[prop as keyof PrismaClient]
  },
})

// Helper function to test database connection
export async function testConnection() {
  try {
    await prisma.$connect()
    console.log('✅ Database connected successfully')
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}