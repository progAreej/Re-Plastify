


// // app/api/completed-challenges/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import CompletedChallenge from '@/models/ChallengeCompleted';
// import Challenge from '@/models/Challenge';

// export async function GET() {
//   try {
//     await dbConnect();
//     const completedChallenges = await CompletedChallenge.find({ status: 'approved' })
//       .populate('userId', 'username')
//       .populate('challengeId', 'points');

//     const userPoints = {};
//     completedChallenges.forEach(challenge => {
//       const username = challenge.userId.username;
//       const points = challenge.challengeId.points;
//       if (!userPoints[username]) {
//         userPoints[username] = 0;
//       }
//       userPoints[username] += points;
//     });

//     const formattedChallenges = Object.entries(userPoints).map(([username, totalPoints]) => ({
//       username,
//       totalPoints,
//     }));

//     return NextResponse.json(formattedChallenges);
//   } catch (error) {
//     return NextResponse.json(
//       { message: 'Error fetching completed challenges', error: error.message },
//       { status: 500 }
//     );
//   }
// }










import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CompletedChallenge from '@/models/ChallengeCompleted';
import User from '@/models/User';

export async function GET() {
  try {
    await dbConnect();

    // Aggregate completed challenges to get total points per user
    const userPoints = await CompletedChallenge.aggregate([
      { $match: { status: 'approved' } },
      {
        $lookup: {
          from: 'challenges',
          localField: 'challengeId',
          foreignField: '_id',
          as: 'challenge'
        }
      },
      { $unwind: '$challenge' },
      {
        $group: {
          _id: '$userId',
          totalPoints: { $sum: '$challenge.points' }
        }
      }
    ]);

    // Get usernames for the user IDs
    const userIds = userPoints.map(up => up._id);
    const users = await User.find({ _id: { $in: userIds } }, 'username');

    // Create a map of user IDs to usernames
    const userMap = users.reduce((acc, user) => {
      acc[user._id.toString()] = user.username;
      return acc;
    }, {});

    // Format the final result
    const formattedChallenges = userPoints.map(up => ({
      username: userMap[up._id.toString()],
      totalPoints: up.totalPoints,
    }));

    return NextResponse.json(formattedChallenges);
  } catch (error) {
    console.error('Error in givePrize API:', error);
    return NextResponse.json(
      { message: 'Error fetching completed challenges', error: error.message },
      { status: 500 }
    );
  }
}