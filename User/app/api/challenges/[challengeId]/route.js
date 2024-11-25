import Challenge from '../../../../models/Challenge'; // Import the challenge model
import { NextResponse } from 'next/server'; // For Next.js response handling
import dbConnect from '../../../../lib/mongodb'; // Ensure dbConnect is correctly set up to connect to MongoDB

// Async function to handle the GET request
export async function GET(req, { params }) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract the `id` from params (App Router uses `params`, not `req.query`)
    const {challengeId} = params;
    console.log(challengeId)

    // Find the challenge by ID in the database
    const challenge = await Challenge.findOne({ _id: challengeId });

    // If challenge not found, return a 404 response
    if (!challenge) {
      return NextResponse.json({ message: 'Challenge not found' }, { status: 404 });
    }

    // Return the challenge data with a 200 status
    return NextResponse.json(challenge, { status: 200 });
  } catch (error) {
    // Handle any server errors with a 500 status
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
