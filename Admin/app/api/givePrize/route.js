

// //////////////////////////////////////////////////////////////////100%/////////////////////
// // app/api/completed-challenges/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import CompletedChallenge from '@/models/CompletedChallenge';
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







// app/api/givePrize/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CompletedChallenge from '@/models/CompletedChallenge';
import User from '@/models/User';

export async function GET() {
  try {
    await dbConnect();
    const completedChallenges = await CompletedChallenge.find({ status: 'approved' })
      .populate('userId', 'username')
      .populate('challengeId', 'points');

    const userPoints = {};
    for (let challenge of completedChallenges) {
      const username = challenge.userId.username;
      const points = challenge.challengeId.points;
      if (!userPoints[username]) {
        userPoints[username] = 0;
      }
      userPoints[username] += points;
    }

    const formattedChallenges = Object.entries(userPoints).map(([username, totalPoints]) => ({
      username,
      totalPoints,
    }));

    return NextResponse.json(formattedChallenges);
  } catch (error) {
    console.error('Error fetching completed challenges:', error);
    return NextResponse.json(
      { message: 'Error fetching completed challenges', error: error.message },
      { status: 500 }
    );
  }
}