
// // pages/api/challenges/completed.js
// import CompletedChallenge from '../../../../models/ChallengeCompleted'; // Adjust the path accordingly
// import Challenge from '../../../../models/Challenge'; // Import the Challenge model
// import dbConnect from '../../../../lib/mongodb'; // Ensure dbConnect is correctly set up to connect to MongoDB
// import { NextResponse } from 'next/server';
// export async function POST(req) {
//     try {
//       await dbConnect();
  
//       const body = await req.json();
//       console.log('Request Body:', body); // Log the request body
  
//       const challenge = await Challenge.findById(body.challengeId);
//       if (!challenge) {
//         return NextResponse.json({ message: 'Challenge not found.' }, { status: 404 });
//       }
  
//       const completedChallenge = new CompletedChallenge({
//         userId: body.userId,
//         challengeId: body.challengeId,
//         status: 'completed', 
//         solutionVideo: body.solutionVideo,
//       });
  
//       await completedChallenge.save();
  
//       return NextResponse.json({ message: 'Challenge submitted successfully!' }, { status: 201 });
//     } catch (error) {
//       console.error('Error saving completed challenge:', error);
//       return NextResponse.json({ message: 'Error saving completed challenge.', error }, { status: 500 }); // Return error for debugging
//     }
//   }
  

import CompletedChallenge from '../../../../models/ChallengeCompleted'; // Adjust the path accordingly
import Challenge from '../../../../models/Challenge'; // Import the Challenge model
import dbConnect from '../../../../lib/mongodb'; // Ensure dbConnect is correctly set up to connect to MongoDB
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();
        console.log('Request Body:', body); // Log the request body

        const challenge = await Challenge.findById(body.challengeId);
        if (!challenge) {
            return NextResponse.json({ message: 'Challenge not found.' }, { status: 404 });
        }

        const completedChallenge = new CompletedChallenge({
            userId: body.userId,
            challengeId: body.challengeId,
            status: 'completed',
            solutionVideo: body.solutionVideo,
        });

        await completedChallenge.save();

        return NextResponse.json({ message: 'Challenge submitted successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Error saving completed challenge:', error);
        return NextResponse.json({ message: 'Error saving completed challenge.', error }, { status: 500 });
    }
}
