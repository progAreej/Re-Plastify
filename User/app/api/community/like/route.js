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

  const { postId, liked } = await request.json();

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Handle liking and unliking
    if (liked) {
      // If liked, add user to likes array
      if (!post.likes.includes(user._id)) {
        post.likes.push(user._id);
      }
    } else {
      // If unliked, remove user from likes array
      post.likes = post.likes.filter((like) => !like.equals(user._id));
    }

    await post.save();

    // Check if the current user has liked the post
    const isLiked = post.likes.some((like) => like.equals(user._id));

    return NextResponse.json({ 
      message: 'Like status updated successfully', 
      likes: post.likes.length,
      isLiked: isLiked
    });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred', details: error.message }, { status: 500 });
  }
}