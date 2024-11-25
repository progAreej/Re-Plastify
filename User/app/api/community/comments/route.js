// pages/api/community/comments.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import dbConnect from '../../../../lib/mongodb';
import Comment from '../../../../models/Comment';
import Post from '../../../../models/Post';
import User from '../../../../models/User';
import { verifyToken } from '../../../../utils/jwt';

export async function POST(request) {
  await dbConnect();
  const token = cookies().get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { postId, content } = await request.json();

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const comment = new Comment({
      user: user._id,
      post: postId,
      content,
    });

    await comment.save();

    // Add comment reference to the post
    await Post.findByIdAndUpdate(postId, {
      $push: { comments: comment._id },
    });

    return NextResponse.json({ message: 'Comment added successfully', comment });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
