// pages/api/community/usercomment.js
import dbConnect from '../../../../lib/mongodb';
import Comment from '../../../../models/Comment';
import { verifyToken } from '../../../../utils/jwt';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  await dbConnect();

  const token = cookies().get('token')?.value; // Get token from cookies

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const decoded = verifyToken(token); // Decode the JWT token
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const userId = decoded.id; // Extract user ID from the token

    // Fetch comments only for the specific user
    const comments = await Comment.find({ user: userId }).populate('user', 'username').lean();

    if (!comments.length) {
      return NextResponse.json({ error: 'No comments found' }, { status: 404 });
    }

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}



