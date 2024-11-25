import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'abedalmajedalajarmah@gmail.com',
    pass: 'ndgx zdev lywb gohb'
  },
});

async function sendEmail(email, isActive) {
  const subject = isActive ? 'Account Activated' : 'Account Deactivated';
  const text = isActive 
    ? 'Your account has been activated. You can now use all features of our platform.'
    : 'Your account has been deactivated. Please contact support if you have any questions.';

  const mailOptions = {
    from: 'abedalmajedalajarmah@gmail.com',
    to: email,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({}).select('-password');
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const { userId, isActive } = await request.json();
    await dbConnect();
    
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    user.isActive = isActive;
    await user.save();
    
    // Send email notification
    await sendEmail(user.email, isActive);

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}