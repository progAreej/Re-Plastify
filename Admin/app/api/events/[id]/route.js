// app/api/events/[id]/route.js

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Event from '@/models/Events';

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: 'Event ID is required' },
        { status: 400 }
      );
    }

    const deletedEvent = await Event.findByIdAndDelete(id);
    
    if (!deletedEvent) {
      return NextResponse.json(
        { message: 'Event not found. It may have been already deleted.' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Event deleted successfully', event: deletedEvent },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json(
      { message: 'Failed to delete event', error: error.message },
      { status: 500 }
    );
  }
}