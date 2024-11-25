// pages/api/community/userpost/[postId].js
import dbConnect from '../../../../../lib/mongodb';
import Post from '../../../../../models/Post';
import { verifyToken } from '../../../../../utils/jwt';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function DELETE(request, { params }) {
  const { postId } = params;
  await dbConnect();

  const token = cookies().get('token')?.value; // Get token from cookies

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const userId = decoded.id; // Extract user ID from the token

    // Find and delete the post by ID and ensure the user owns the post
    const post = await Post.findOneAndDelete({ _id: postId, user: userId });

    if (!post) {
      return NextResponse.json({ error: 'Post not found or not authorized' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
