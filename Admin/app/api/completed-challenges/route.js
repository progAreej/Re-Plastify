import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CompletedChallenge from '@/models/CompletedChallenge';

export async function GET() {
  try {
    await dbConnect();

    const completedChallenges = await CompletedChallenge.find()
      .populate('userId', 'username')
      .populate('challengeId', 'title');

    const formattedChallenges = completedChallenges.map(challenge => ({
      _id: challenge._id,
      username: challenge.userId.username,
      challengeName: challenge.challengeId.title,
      status: challenge.status,
      solutionVideo: challenge.solutionVideo,
      submittedAt: challenge.submittedAt
    }));

    return NextResponse.json(formattedChallenges);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching completed challenges', error: error.message },
      { status: 500 }
    );
  }
}












