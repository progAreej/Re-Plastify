// // src/app/api/challenges/route.js

// import dbConnect from '../../../lib/mongodb'; // Adjust the path if necessary
// import Challenge from '../../../models/Challenge'; // Adjust the path according to your project structure

// export async function GET(req) {
//   await dbConnect(); // Connect to the database

//   try {
//     const challenges = await Challenge.find(); // Fetch all challenges
//     return new Response(JSON.stringify(challenges), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Failed to retrieve challenges', error: error.message }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }


// // src/app/api/challenges/route.js

// import dbConnect from '../../../lib/mongodb'; // Adjust the path if necessary
// import Challenge from '../../../models/Challenge'; // Adjust the path according to your project structure

// export async function GET(req) {
//   await dbConnect(); // Connect to the database

//   try {
//     const challenges = await Challenge.find({ isApproved: true }); // Fetch all approved challenges
//     return new Response(JSON.stringify(challenges), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Failed to retrieve challenges', error: error.message }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }






import dbConnect from '../../../lib/mongodb';
import Challenge from '../../../models/Challenge';
import CompletedChallenge from '../../../models/ChallengeCompleted';
import { cookies } from 'next/headers';
import { verifyToken } from '../../../utils/jwt';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Attempt to connect to the database
    await dbConnect();
    console.log('Database connected successfully.');

    // Get the user ID from the token
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      console.warn('Token not found in cookies.');
      return NextResponse.json({ isLoggedIn: false });
    }
    
    // Verify the token
    let userId;
    try {
      const decoded = verifyToken(token);
      userId = decoded.id;
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return NextResponse.json({ isLoggedIn: false });
    }

    console.log('User ID:', userId);

    // Fetch all approved challenges
    const challenges = await Challenge.find({ isApproved: true });
    console.log('Fetched challenges:', challenges.length);

    // Fetch completed challenges for the current user
    const completedChallenges = await CompletedChallenge.find({ userId });

    console.log('Fetched completed challenges:', completedChallenges.length);
    console.log('Fetched completed challenges:', completedChallenges);

    // Map the completed challenges to check their status by challenge ID
    const completedStatusMap = completedChallenges.reduce((map, completedChallenge) => {
      map[completedChallenge.challengeId.toString()] = completedChallenge.status;
      return map;
    }, {});

    // Attach a disabled flag to each challenge based on the user's completed status
    const challengesWithDisabledFlag = challenges.map(challenge => ({
      ...challenge.toObject(),
      isDisabled: ['completed', 'approved'].includes(completedStatusMap[challenge._id.toString()])
    }));

    // Return the list of challenges with the disabled flag
    return NextResponse.json(challengesWithDisabledFlag);
  } catch (error) {
    console.error('Failed to fetch challenges:', error.message); // Log the error message
    console.error('Stack Trace:', error.stack); // Log the stack trace for more information
    return NextResponse.json({ message: 'Failed to fetch challenges', error: error.message }, { status: 500 });
  }
}




