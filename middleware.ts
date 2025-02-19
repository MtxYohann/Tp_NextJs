import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function middleware() {
    const session = await auth();

    if (!session) {
        return NextResponse.redirect(new URL('/login'));
    } else if (session.user.role !== 'admin') {
        return NextResponse.redirect(new URL('/dashboard'));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/admin/:path*'],
};