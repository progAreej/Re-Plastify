import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CompletedChallenge from '@/models/CompletedChallenge';

export async function PATCH(request, { params }) {
  const { id } = params;
  const { status } = await request.json();

  await dbConnect();

  try {
    const updatedChallenge = await CompletedChallenge.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedChallenge) {
      return NextResponse.json({ message: 'Challenge not found' }, { status: 404 });
    }

    return NextResponse.json(updatedChallenge);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating challenge', error: error.message },
      { status: 500 }
    );
  }
}