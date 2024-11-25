// pages/api/community/usercomment/[commentId].js
import dbConnect from '../../../../../lib/mongodb';
import Comment from '../../../../../models/Comment';
import { verifyToken } from '../../../../../utils/jwt';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function DELETE(request, { params }) {
  const { commentId } = params;
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

    // Find and delete the comment by ID and ensure the user owns the comment
    const comment = await Comment.findOneAndDelete({ _id: commentId, user: userId });

    if (!comment) {
      return NextResponse.json({ error: 'Comment not found or not authorized' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Comment deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
