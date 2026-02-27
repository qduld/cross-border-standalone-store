import { NextResponse } from 'next/server'
import { testConnection } from '@/lib/prisma'

export async function GET() {
  const connected = await testConnection()
  
  if (connected) {
    return NextResponse.json({ 
      success: true, 
      message: 'Database connected successfully' 
    })
  } else {
    return NextResponse.json({ 
      success: false, 
      message: 'Database connection failed' 
    }, { status: 500 })
  }
}