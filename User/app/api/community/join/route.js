import dbConnect from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';
import { verifyToken } from '../../../../utils/jwt';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  await dbConnect();
  const token = cookies().get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const body = await request.json();
    console.log("Received request body:", body);
    
    const { eventId } = body;
    console.log("Extracted eventId:", eventId);

    if (!eventId) {
      return NextResponse.json({ error: 'Event ID is missing from the request' }, { status: 400 });
    }

    const decoded = verifyToken(token);
    console.log("Decoded token:", decoded);

    const user = await User.findById(decoded.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    console.log("Found user:", user._id);

    const event = await Event.findById(eventId);
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    console.log("Found event:", event._id);

    // Check if the user already joined the event
    if (event.participants.includes(user._id)) {
      return NextResponse.json({ error: 'User already joined the event' }, { status: 400 });
    }

    // Add user to participants
    event.participants.push(user._id);
    event.participantCount += 1; // Increment the participant count
    await event.save(); // Save the updated event document

    console.log("Updated event:", event);

    return NextResponse.json({ 
      message: 'Successfully joined the event', 
      participantCount: event.participantCount 
    });
  } catch (error) {
    console.error('Error in join event API:', error);
    return NextResponse.json({ error: 'An error occurred', details: error.message }, { status: 500 });
  }
}