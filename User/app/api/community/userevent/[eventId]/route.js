// pages/api/community/userevent/[eventId].js
import dbConnect from '../../../../../lib/mongodb';
import Event from '../../../../../models/Event';
import { verifyToken } from '../../../../../utils/jwt';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function DELETE(request, { params }) {
  const { eventId } = params;
  await dbConnect();

  const token = cookies().get('token')?.value; // Get token from cookies

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const userId = decoded.id; // Extract user ID from the token

    // Find and delete the event by ID and ensure the user owns the event
    const event = await Event.findOneAndDelete({ _id: eventId, user: userId });

    if (!event) {
      return NextResponse.json({ error: 'Event not found or not authorized' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Event deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
