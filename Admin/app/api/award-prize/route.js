// // app/api/award-prize/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import User from '@/models/User';
// import Prize from '@/models/Prize';

// export async function POST(request) {
//   await dbConnect();

//   try {
//     const { userId, prizeId } = await request.json();

//     const user = await User.findOne({ username: userId });
//     const prize = await Prize.findById(prizeId);

//     if (!user || !prize) {
//       return NextResponse.json({ error: 'User or Prize not found' }, { status: 404 });
//     }

//     // هنا يمكنك إضافة المنطق لمنح الجائزة للمستخدم
//     // على سبيل المثال، يمكنك إنشاء سجل جديد في جدول 'AwardedPrizes' أو تحديث سجل المستخدم

//     // هذا مثال بسيط، قد تحتاج إلى تعديله وفقًا لنموذج البيانات الخاص بك
//     user.awardedPrizes = user.awardedPrizes || [];
//     user.awardedPrizes.push(prizeId);
//     await user.save();

//     return NextResponse.json({ message: 'Prize awarded successfully' });
//   } catch (error) {
//     return NextResponse.json({ error: 'Error awarding prize' }, { status: 500 });
//   }
// }









// // app/api/award-prize/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import User from '@/models/User';
// import Prize from '@/models/Prize';
// import AwardedPrize from '@/models/AwardedPrize';

// export async function POST(request) {
//   await dbConnect();

//   try {
//     const { userId, prizeId } = await request.json();

//     const user = await User.findOne({ username: userId });
//     const prize = await Prize.findById(prizeId);

//     if (!user || !prize) {
//       return NextResponse.json({ error: 'User or Prize not found' }, { status: 404 });
//     }

//     // Check if user has enough points for the prize
//     const userCompletedChallenges = await CompletedChallenge.find({ userId: user._id, status: 'approved' })
//       .populate('challengeId', 'points');
    
//     const totalPoints = userCompletedChallenges.reduce((sum, challenge) => sum + challenge.challengeId.points, 0);

//     if (totalPoints < prize.pointsRequired) {
//       return NextResponse.json({ error: 'Not enough points for this prize' }, { status: 400 });
//     }

//     // Create a new AwardedPrize record
//     const awardedPrize = new AwardedPrize({
//       userId: user._id,
//       prizeId: prize._id
//     });

//     await awardedPrize.save();

//     return NextResponse.json({ message: 'Prize awarded successfully', awardedPrize });
//   } catch (error) {
//     console.error('Error awarding prize:', error);
//     return NextResponse.json({ error: 'Error awarding prize' }, { status: 500 });
//   }
// }




// export async function GET() {
//     await dbConnect();
  
//     try {
//       const awardedPrizes = await AwardedPrize.find()
//         .populate('userId', 'username')
//         .populate('prizeId', 'name');
  
//       return NextResponse.json(awardedPrizes);
//     } catch (error) {
//       console.error('Error fetching awarded prizes:', error);
//       return NextResponse.json({ error: 'Error fetching awarded prizes' }, { status: 500 });
//     }
//   }







// // app/api/award-prize/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import User from '@/models/User';
// import Prize from '@/models/Prize';
// import AwardedPrize from '@/models/AwardedPrize';
// import CompletedChallenge from '@/models/CompletedChallenge';
// import mongoose from 'mongoose';

// export async function POST(request) {
//   await dbConnect();

//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const { userId, prizeId } = await request.json();

//     if (!userId || !prizeId) {
//       return NextResponse.json({ error: 'User ID and Prize ID are required' }, { status: 400 });
//     }

//     const user = await User.findOne({ username: userId }).session(session);
//     const prize = await Prize.findById(prizeId).session(session);

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }

//     if (!prize) {
//       return NextResponse.json({ error: 'Prize not found' }, { status: 404 });
//     }

//     const userCompletedChallenges = await CompletedChallenge.find({ userId: user._id, status: 'approved' })
//       .populate('challengeId', 'points')
//       .session(session);
    
//     const totalPoints = userCompletedChallenges.reduce((sum, challenge) => sum + challenge.challengeId.points, 0);

//     if (totalPoints < prize.pointsRequired) {
//       return NextResponse.json({ error: 'Not enough points for this prize' }, { status: 400 });
//     }

//     const awardedPrize = new AwardedPrize({
//       userId: user._id,
//       prizeId: prize._id
//     });

//     await awardedPrize.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return NextResponse.json({ message: 'Prize awarded successfully', awardedPrize }, { status: 201 });
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();

//     console.error('Error awarding prize:', error);
//     return NextResponse.json({ error: 'Error awarding prize' }, { status: 500 });
//   }
// }

// export async function GET() {
//   await dbConnect();

//   try {
//     const awardedPrizes = await AwardedPrize.find()
//       .populate('userId', 'username')
//       .populate('prizeId', 'name');

//     return NextResponse.json(awardedPrizes);
//   } catch (error) {
//     console.error('Error fetching awarded prizes:', error);
//     return NextResponse.json({ error: 'Error fetching awarded prizes' }, { status: 500 });
//   }
// }







///////////////////////////////////////////////////100%////////////////////////////


// // app/api/award-prize/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import User from '@/models/User';
// import Prize from '@/models/Prize';
// import AwardedPrize from '@/models/AwardedPrize';
// import CompletedChallenge from '@/models/CompletedChallenge';
// import mongoose from 'mongoose';

// export async function POST(request) {
//   await dbConnect();
//   const session = await mongoose.startSession();
//   session.startTransaction();
//   try {
//     const { userId, prizeId } = await request.json();
//     if (!userId || !prizeId) {
//       return NextResponse.json({ error: 'User ID and Prize ID are required' }, { status: 400 });
//     }

//     const user = await User.findOne({ username: userId }).session(session);
//     const prize = await Prize.findById(prizeId).session(session);

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 });
//     }
//     if (!prize) {
//       return NextResponse.json({ error: 'Prize not found' }, { status: 404 });
//     }

//     const userCompletedChallenges = await CompletedChallenge.find({ userId: user._id, status: 'approved' })
//       .populate('challengeId', 'points')
//       .session(session);
   
//     const totalPoints = userCompletedChallenges.reduce((sum, challenge) => sum + challenge.challengeId.points, 0);

//     if (totalPoints < prize.pointsRequired) {
//       return NextResponse.json({ error: 'Not enough points for this prize' }, { status: 400 });
//     }

//     const awardedPrize = new AwardedPrize({
//       userId: user._id,
//       prizeId: prize._id
//     });
//     await awardedPrize.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return NextResponse.json({ message: 'Prize awarded successfully', awardedPrize }, { status: 201 });
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     console.error('Error awarding prize:', error);
//     return NextResponse.json({ error: 'Error awarding prize' }, { status: 500 });
//   }
// }

// export async function GET() {
//   await dbConnect();
//   try {
//     const awardedPrizes = await AwardedPrize.find()
//       .populate('userId', 'username')
//       .populate('prizeId', 'name');
//     return NextResponse.json(awardedPrizes);
//   } catch (error) {
//     console.error('Error fetching awarded prizes:', error);
//     return NextResponse.json({ error: 'Error fetching awarded prizes' }, { status: 500 });
//   }
// }








///////////////





// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import User from '@/models/User';
// import Prize from '@/models/Prize';
// import AwardedPrize from '@/models/AwardedPrize';

// export async function POST(request) {
//   await dbConnect();
  
//   const { userId, prizeId, pointsDeducted } = await request.json();

//   try {
//     const user = await User.findOne({ username: userId });
//     const prize = await Prize.findById(prizeId);

//     if (!user || !prize) {
//       return NextResponse.json({ error: 'User or Prize not found' }, { status: 404 });
//     }

//     if (user.totalPoints < pointsDeducted) {
//       return NextResponse.json({ error: 'User does not have enough points' }, { status: 400 });
//     }

//     // Deduct points from user
//     user.totalPoints -= pointsDeducted;
//     await user.save();

//     // Create a record of the awarded prize
//     await AwardedPrize.create({
//       userId: user._id,
//       prizeId: prize._id,
//       pointsDeducted
//     });

//     return NextResponse.json({ message: 'Prize awarded successfully' });
//   } catch (error) {
//     console.error('Error awarding prize:', error);
//     return NextResponse.json({ error: 'Failed to award prize' }, { status: 500 });
//   }
// }









// app/api/award-prize/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import CompletedChallenge from '@/models/CompletedChallenge';
import Prize from '@/models/Prize';
import AwardedPrize from '@/models/AwardedPrize';

export async function POST(request) {
  await dbConnect();
  
  const { username, prizeId, pointsDeducted } = await request.json();

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const prize = await Prize.findById(prizeId);
    if (!prize) {
      return NextResponse.json({ error: 'Prize not found' }, { status: 404 });
    }

    // Find all completed challenges for the user
    const completedChallenges = await CompletedChallenge.find({ 
      userId: user._id, 
      status: 'approved' 
    }).populate('challengeId');

    // Calculate total points
    let totalPoints = completedChallenges.reduce((sum, challenge) => sum + challenge.challengeId.points, 0);

    if (totalPoints < pointsDeducted) {
      return NextResponse.json({ error: 'User does not have enough points' }, { status: 400 });
    }

    // Deduct points from completed challenges
    let remainingPointsToDeduct = pointsDeducted;
    for (let challenge of completedChallenges) {
      if (remainingPointsToDeduct <= 0) break;

      const pointsToDeduct = Math.min(challenge.challengeId.points, remainingPointsToDeduct);
      challenge.challengeId.points -= pointsToDeduct;
      await challenge.challengeId.save();
      remainingPointsToDeduct -= pointsToDeduct;
    }

    // Create a record of the awarded prize
    await AwardedPrize.create({
      userId: user._id,
      prizeId: prizeId,
      pointsDeducted: pointsDeducted
    });

    return NextResponse.json({ message: 'Prize awarded successfully' });
  } catch (error) {
    console.error('Error awarding prize:', error);
    return NextResponse.json({ error: 'Failed to award prize' }, { status: 500 });
  }
}