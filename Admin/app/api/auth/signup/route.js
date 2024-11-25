import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import Admin from '../../../../models/Admin';
import { createToken } from '../../../../utils/jwt';
import { cookies } from 'next/headers';

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    const { Adminname, email, password } = body;
    const Admin = await Admin.create({ Adminname, email, password });
    const token = createToken(Admin._id);
    cookies().set('token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });
    return NextResponse.json({ success: true, Admin: { id: Admin._id, Adminname: Admin.Adminname, email: Admin.email } });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}