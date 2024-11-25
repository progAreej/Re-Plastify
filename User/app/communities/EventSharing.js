 
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Loading from '@/components/Loading';
const EventCard = ({ event, onJoin }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <h3 className="text-lg font-semibold text-green mb-2">{event.title}</h3>
    <p className="text-sm text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
    <p className="text-sm text-gray-700 mb-2">{event.description}</p>
    <p className="text-sm font-medium text-green">Location: {event.location}</p>
    <p className="text-sm font-medium text-gray-800">Total Joins: {event.participantCount || 0}</p>
    <button
      onClick={() => onJoin(event._id)}
      className="mt-2 bg-blue text-white rounded px-4 py-2 hover:bg-blue"
    >
      Join Event
    </button>
  </div>
);

const EventSharing = ({ searchQuery }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/community/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to fetch events. Please try again later.',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleJoinEvent = async (eventId) => {
    try {
      const response = await fetch(`/api/community/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId }),
      });
      
      const data = await response.json();

      if (!response.ok) {
        if (data.error === 'User already joined the event') {
          Swal.fire({
            icon: 'info',
            title: 'Already Joined',
            text: 'You have already joined this event.',
          });
        } else {
          throw new Error(data.error || 'Failed to join event');
        }
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Joined Successfully',
          text: 'You have successfully joined the event!',
        });

        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === eventId ? { ...event, participantCount: data.participantCount } : event
          )
        );
      }
    } catch (error) {
      console.error('Error joining event:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to join the event. Please try again later.',
      });
    }
  };
  
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <Loading/>
    );
  }


  return (
    <div>
      <div className="overflow-y-auto w-full h-[600px] grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} onJoin={handleJoinEvent} />
          ))
        )}
      </div>
    </div>
  );
};

export default EventSharing;