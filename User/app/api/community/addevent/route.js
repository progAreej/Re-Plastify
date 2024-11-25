import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import dbConnect from '../../../../lib/mongodb';
import Event from '../../../../models/Event';
import User from '../../../../models/User';
import { verifyToken } from '../../../../utils/jwt';

export async function POST(request) {
  await dbConnect();
  const token = cookies().get('token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { title, date, description, location, eventType } = await request.json();

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const newEvent = new Event({
      user: user._id,  // Use 'user' here to match the model
      title,
      date,
      description,
      location,
      eventType,
    });

    await newEvent.save();
    return NextResponse.json({ message: 'Event created successfully!' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
