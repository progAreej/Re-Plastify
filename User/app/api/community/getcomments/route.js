import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import Post from '../../../../models/Post'; // Import Post model
import Comment from '../../../../models/Comment'; // Import Comment model with a different name

export async function POST(request) {
  await dbConnect();

  const { postId } = await request.json(); // Expecting postId in the request body

  if (!postId) {
    return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
  }

  try {
    // Find the post and populate comments with user data (only username)
    const post = await Post.findById(postId).populate({
      path: 'comments',
      populate: { path: 'user', select: 'username' }
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Filter out any comments where the user is null (missing user)
    const validComments = post.comments.filter(comment => comment.user && comment.user.username);

    return NextResponse.json({ comments: validComments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'An error occurred while fetching comments' }, { status: 500 });
  }
}
