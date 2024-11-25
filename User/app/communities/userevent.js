"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/components/Loading';
const UserEvent = () => {
  const [events, setEvents] = useState([]); // Rename posts to events
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user events
  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const response = await axios.post('/api/community/userevent'); // Correct API endpoint
        setEvents(response.data); // Set the events state
      } catch (err) {
        setError('Failed to fetch user events.'); // Update error message
      } finally {
        setLoading(false);
      }
    };

    fetchUserEvents(); // Call the correct function
  }, []);

  // Function to delete an event
  const deleteEvent = async (eventId) => { // Rename function to deleteEvent
    try {
      await axios.delete(`/api/community/userevent/${eventId}`); // Send delete request
      setEvents(events.filter((event) => event._id !== eventId)); // Update state to remove the event
    } catch (err) {
      setError('Failed to delete event.'); // Update error message
    }
  };

  if (loading) {
    return (
      <Loading/>
    );
  }
  if (error) return <p>{error}</p>;

  return (
    <div>
      {events.map((event) => ( // Use events instead of posts
        <div key={event._id} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">{event.title}</h2> {/* Use event title */}
          <p className="text-sm text-gray-600 mb-4">Event Date: {new Date(event.date).toLocaleDateString()}</p> {/* Format the date */}
          <p className="text-sm text-gray-600 mb-4">Posted by: {event.user.username}</p> {/* Adjust as needed */}
          <button
            onClick={() => deleteEvent(event._id)} // Call deleteEvent function
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserEvent;
