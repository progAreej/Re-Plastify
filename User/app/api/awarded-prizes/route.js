// app/api/awarded-prizes/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import AwardedPrize from '../../../models/AwardedPrize';
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

    // Fetch awarded prizes for the user
    const awardedPrizes = await AwardedPrize.find({ userId: decoded.id })
      .sort({ awardedAt: -1 })
      // .limit(3) // Limit to 3 results
      .populate('prizeId', 'name description');

    return NextResponse.json({ awardedPrizes });
  } catch (error) {
    console.error('Error fetching awarded prizes:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}