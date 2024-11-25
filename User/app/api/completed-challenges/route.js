// app/api/completed-challenges/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import CompletedChallenge from '../../../models/ChallengeCompleted';
import { verifyToken } from '../../../utils/jwt';

export async function GET(request) {
  try {
    await dbConnect();

    // Get the token from the cookies
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Verify the token
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // Fetch completed and approved challenges for the user
    const completedChallenges = await CompletedChallenge.find({ 
      userId: decoded.id,
      status: 'approved'
    }).populate('challengeId', 'title points image');

    return NextResponse.json({ completedChallenges });
  } catch (error) {
    console.error('Error fetching completed challenges:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}