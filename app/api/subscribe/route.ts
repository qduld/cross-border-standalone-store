import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: '请输入有效的邮箱地址' },
        { status: 400 }
      );
    }

    // 检查邮箱是否已订阅
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      if (existingSubscriber.active) {
        return NextResponse.json(
          { success: false, error: '该邮箱已订阅' },
          { status: 400 }
        );
      } else {
        // 重新激活订阅
        await prisma.subscriber.update({
          where: { email },
          data: { active: true },
        });
        return NextResponse.json({
          success: true,
          message: '订阅成功！感谢您的关注',
        });
      }
    }

    // 创建新订阅
    await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json({
      success: true,
      message: '订阅成功！感谢您的关注',
    });
  } catch (error) {
    console.error('订阅失败:', error);

    // 处理唯一约束错误
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { success: false, error: '该邮箱已订阅' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: '订阅失败，请稍后重试' },
      { status: 500 }
    );
  }
}

// GET 获取所有订阅者（仅管理员）
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const active = searchParams.get('active');

    const subscribers = await prisma.subscriber.findMany({
      where: active ? { active: active === 'true' } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      success: true,
      subscribers,
    });
  } catch (error) {
    console.error('获取订阅者失败:', error);
    return NextResponse.json(
      { success: false, error: '获取订阅者失败' },
      { status: 500 }
    );
  }
}

// DELETE 删除订阅者（取消订阅）
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: '请提供邮箱地址' },
        { status: 400 }
      );
    }

    await prisma.subscriber.delete({
      where: { email },
    });

    return NextResponse.json({
      success: true,
      message: '已取消订阅',
    });
  } catch (error) {
    console.error('取消订阅失败:', error);
    return NextResponse.json(
      { success: false, error: '取消订阅失败' },
      { status: 500 }
    );
  }
}