

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
    try {
        const cookieStore = cookies();
        cookieStore.delete('token');
        
        return NextResponse.json({ 
            success: true,
            message: 'Logged out successfully' 
        });
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ 
            success: false,
            error: 'Logout failed' 
        }, { 
            status: 500 
        });
    }
}