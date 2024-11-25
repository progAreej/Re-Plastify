// app/api/user-prizes/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';
import AwardedPrize from '../../../models/AwardedPrize';
import Prize from '../../../models/Prize';

export async function GET() {
  try {
    await dbConnect();

    // Find all awarded prizes and populate user and prize information
    const awardedPrizes = await AwardedPrize.find()
      .populate('userId', 'username')
      .populate('prizeId', 'name imageUrl');

    // Group prizes by user
    const userPrizes = awardedPrizes.reduce((acc, ap) => {
      const userId = ap.userId._id.toString();
      if (!acc[userId]) {
        acc[userId] = {
          username: ap.userId.username,
          prizes: []
        };
      }
      acc[userId].prizes.push({
        name: ap.prizeId.name,
        imageUrl: ap.prizeId.imageUrl,
        awardedAt: ap.awardedAt
      });
      return acc;
    }, {});

    // Convert to array
    const result = Object.values(userPrizes);

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}