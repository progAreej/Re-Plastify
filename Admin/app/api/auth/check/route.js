// app/api/auth/check/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '../../../../utils/jwt';

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
        return NextResponse.json({ isLoggedIn: false });
    }

    try {
        const decoded = verifyToken(token);
        return NextResponse.json({ 
            isLoggedIn: true, 
            userId: decoded.id 
        });
    } catch (error) {
        console.error('Token verification failed:', error);
        return NextResponse.json({ isLoggedIn: false });
    }
}