// app/api/community/posts/route.js

import dbConnect from '../../../../lib/mongodb';
import Post from '../../../../models/Post'; // Adjust the import based on your directory structure
import User from '../../../../models/User'; // Adjust the import based on your directory structure

export async function GET(request) {
  console.log("GET request received for posts."); // Log when the request is received

  await dbConnect(); // Ensure you are connected to the database
  console.log("Database connected."); // Log when the database connection is established

  try {
    const posts = await Post.find()
      .populate('user', 'username') // Populate the user field with username
      .populate('likes', 'username'); // Optional: Populate likes with usernames if needed

    console.log(`Fetched ${posts.length} posts.`); // Log the number of posts fetched

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error.message); // Log any error message
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
