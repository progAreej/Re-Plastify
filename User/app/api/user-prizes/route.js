import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AwardedPrize from '@/models/AwardedPrize';
import Prize from '@/models/Prize';
import User from '@/models/User';

export async function GET() {
  await dbConnect();

  try {
    const awardedPrizes = await AwardedPrize.find()
      .populate('userId', 'username')
      .populate('prizeId', 'name imageUrl');

    const formattedPrizes = awardedPrizes.map(prize => ({
      id: prize._id,
      prizeName: prize.prizeId.name,
      prizeImage: prize.prizeId.imageUrl,
      username: prize.userId.username,
      awardedAt: prize.awardedAt
    }));

    return NextResponse.json(formattedPrizes);
  } catch (error) {
    console.error('Error fetching awarded prizes:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}