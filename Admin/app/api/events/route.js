

// app/api/events/route.js

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Event from '@/models/Events';

export async function GET() {
  try {
    await dbConnect();
    const events = await Event.find({}).populate('user', 'name email');
    
    return NextResponse.json(
      { message: 'Events fetched successfully', events },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { message: 'Failed to fetch events', error: error.message },
      { status: 500 }
    );
  }
}