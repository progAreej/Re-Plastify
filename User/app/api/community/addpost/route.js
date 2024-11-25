import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import dbConnect from '../../../../lib/mongodb';
import Post from '../../../../models/Post';
import User from '../../../../models/User';
import { verifyToken } from '../../../../utils/jwt';

export async function POST(request) {
  await dbConnect();
  const token = cookies().get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { content } = await request.json();

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const post = new Post({
      user: user._id,
      content,
    });

    await post.save();

    return NextResponse.json({ message: 'Post created successfully', post });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred', details: error.message }, { status: 500 });
  }
}
