// app/api/community/events/route.js

import dbConnect from '../../../../lib/mongodb'; // Adjust the import based on your directory structure
import Event from '../../../../models/Event'; // Adjust the import based on your directory structure

export async function GET(request) {
  console.log("GET request received for events."); // Log when the request is received

  await dbConnect(); // Ensure you are connected to the database
  console.log("Database connected."); // Log when the database connection is established

  try {
    // Fetch events from the database, populating the user field if needed
    const events = await Event.find().populate('user', 'username'); // Populate user field with username

    console.log(`Fetched ${events.length} events.`); // Log the number of events fetched

    return new Response(JSON.stringify(events), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error fetching events:", error.message); // Log any error message
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
