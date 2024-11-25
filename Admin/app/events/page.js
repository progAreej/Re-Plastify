

// 'use client'


// import React, { useEffect, useState } from 'react';
// import { Trash2 } from 'lucide-react';
// import Swal from 'sweetalert2';

// export default function EventsPage() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await fetch('/api/events');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setEvents(data.events);
//     } catch (err) {
//       console.error('Error fetching events:', err);
//       setError('Failed to fetch events. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteEvent = async (eventId) => {
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//       });

//       if (result.isConfirmed) {
//         const response = await fetch(`/api/events/${eventId}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || `Failed to delete event. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setEvents(events.filter(event => event._id !== eventId));
//         Swal.fire(
//           'Deleted!',
//           'Your event has been deleted.',
//           'success'
//         );
//       }
//     } catch (err) {
//       console.error('Error deleting event:', err);
//       Swal.fire(
//         'Error!',
//         err.message,
//         'error'
//       );
//       // If the event was not found (404 error), remove it from the local state
//       if (err.message.includes('Event not found')) {
//         setEvents(events.filter(event => event._id !== eventId));
//       }
//     }
//   };

//   if (loading) return <div className="flex justify-center items-center h-screen">Loading events...</div>;
//   if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

//   return (
//     <div className="p-4 ml-64">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {events.map((event) => (
//           <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
//               <p className="text-sm text-gray-500 mb-2">
//                 {new Date(event.date).toLocaleDateString()} at {event.location}
//               </p>
//               <p className="text-sm mb-2">{event.description}</p>
//               <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                 {event.eventType}
//               </span>
//             </div>
//             <div className="px-4 py-3 bg-gray-50">
//               <button
//                 onClick={() => handleDeleteEvent(event._id)}
//                 className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
//               >
//                 <Trash2 className="w-4 h-4 mr-2" />
//                 Delete Event
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
















// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Trash2 } from 'lucide-react';
// import Swal from 'sweetalert2';

// export default function EventsPage() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [eventTypeFilter, setEventTypeFilter] = useState('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [eventsPerPage] = useState(5);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await fetch('/api/events');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setEvents(data.events);
//     } catch (err) {
//       console.error('Error fetching events:', err);
//       setError('Failed to fetch events. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteEvent = async (eventId) => {
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//       });

//       if (result.isConfirmed) {
//         const response = await fetch(`/api/events/${eventId}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || `Failed to delete event. Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setEvents(events.filter(event => event._id !== eventId));
//         Swal.fire('Deleted!', 'Your event has been deleted.', 'success');
//       }
//     } catch (err) {
//       console.error('Error deleting event:', err);
//       Swal.fire('Error!', err.message, 'error');
//       if (err.message.includes('Event not found')) {
//         setEvents(events.filter(event => event._id !== eventId));
//       }
//     }
//   };

//   const filteredEvents = events.filter(event => {
//     const matchesSearchTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesEventType = eventTypeFilter === 'all' || event.eventType === eventTypeFilter;
//     return matchesSearchTerm && matchesEventType;
//   });

//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

//   const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

//   if (loading) return <div className="flex justify-center items-center h-screen">Loading events...</div>;
//   if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

//   return (
//     <div className="p-4 ml-64">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      
//       <input
//         type="text"
//         placeholder="Search by title"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="border rounded px-2 py-1 mb-4"
//       />
      
//       <select
//         value={eventTypeFilter}
//         onChange={(e) => setEventTypeFilter(e.target.value)}
//         className="border rounded px-2 py-1 mb-4"
//       >
//         <option value="all">All Event Types</option>
//         <option value="online">Online</option>
//         <option value="local">Local</option>
//       </select>
      
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {currentEvents.map((event) => (
//           <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
//               <p className="text-sm text-gray-500 mb-2">
//                 {new Date(event.date).toLocaleDateString()} at {event.location}
//               </p>
//               <p className="text-sm mb-2">{event.description}</p>
//               <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                 {event.eventType}
//               </span>
//             </div>
//             <div className="px-4 py-3 bg-gray-50">
//               <button
//                 onClick={() => handleDeleteEvent(event._id)}
//                 className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
//               >
//                 <Trash2 className="w-4 h-4 mr-2" />
//                 Delete Event
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <button
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }











// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Trash2, Search } from 'lucide-react';
// import Swal from 'sweetalert2';

// export default function EventsPage() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [eventTypeFilter, setEventTypeFilter] = useState('all');
//   const [currentPage, setCurrentPage] = useState(1);
//   const eventsPerPage = 5;

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await fetch('/api/events');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setEvents(data.events);
//     } catch (err) {
//       console.error('Error fetching events:', err);
//       setError('Failed to fetch events. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteEvent = async (eventId) => {
//     try {
//       const result = await Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!',
//       });

//       if (result.isConfirmed) {
//         const response = await fetch(`/api/events/${eventId}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || `Failed to delete event. Status: ${response.status}`);
//         }

//         setEvents(events.filter(event => event._id !== eventId));
//         Swal.fire('Deleted!', 'Your event has been deleted.', 'success');
//       }
//     } catch (err) {
//       console.error('Error deleting event:', err);
//       Swal.fire('Error!', err.message, 'error');
//     }
//   };

//   const filteredEvents = events.filter(event => {
//     const matchesSearchTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesEventType = eventTypeFilter === 'all' || event.eventType === eventTypeFilter;
//     return matchesSearchTerm && matchesEventType;
//   });

//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
//   const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

//   if (loading) return <div className="flex justify-center items-center h-screen">Loading events...</div>;
//   if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

//   return (
//     <div className="ml-64 p-6">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Upcoming Events</h1>
//           <div className="relative w-1/3">
//             <input
//               type="text"
//               placeholder="Search by title"
//               className="w-full p-2 pl-10 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
//             {currentEvents.map((event) => (
//               <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
//                   <p className="text-sm text-gray-500 mb-2">
//                     {new Date(event.date).toLocaleDateString()} at {event.location}
//                   </p>
//                   <p className="text-sm mb-2">{event.description}</p>
//                   <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                     {event.eventType}
//                   </span>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50">
//                   <button
//                     onClick={() => handleDeleteEvent(event._id)}
//                     className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
//                   >
//                     <Trash2 className="w-4 h-4 mr-2" />
//                     Delete Event
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination */}
//         <div className="mt-6 flex justify-between items-center">
//           <div className="text-gray-600">
//             Showing {indexOfFirstEvent + 1} to {Math.min(indexOfLastEvent, filteredEvents.length)} of {filteredEvents.length} events
//           </div>
//           <div className="flex gap-2">
//             <button
//               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//               className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//               className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











'use client';

import React, { useEffect, useState } from 'react';
import { Trash2, Search } from 'lucide-react';
import Swal from 'sweetalert2';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEvents(data.events);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Failed to fetch events. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        const response = await fetch(`/api/events/${eventId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Failed to delete event. Status: ${response.status}`);
        }

        setEvents(events.filter(event => event._id !== eventId));
        Swal.fire('Deleted!', 'Your event has been deleted.', 'success');
      }
    } catch (err) {
      console.error('Error deleting event:', err);
      Swal.fire('Error!', err.message, 'error');
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearchTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEventType = eventTypeFilter === 'all' || event.eventType === eventTypeFilter;
    return matchesSearchTerm && matchesEventType;
  });

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading events...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <div className="ml-64 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600 ">Upcoming Events</h1>
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search by title"
              className="w-full p-2 pl-10 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Filter by Event Type:</label>
          <select
            value={eventTypeFilter}
            onChange={(e) => setEventTypeFilter(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="all">All Event Types</option>
            <option value="online">Online</option>
            <option value="local">Local</option>
            {/* يمكنك إضافة أنواع أخرى هنا إذا لزم الأمر */}
          </select>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
            {currentEvents.map((event) => (
              <div key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(event.date).toLocaleDateString()} at {event.location}
                  </p>
                  <p className="text-sm mb-2">{event.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {event.eventType}
                  </span>
                </div>
                <div className="px-4 py-3 bg-gray-50">
                  <button
                    onClick={() => handleDeleteEvent(event._id)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <div className="text-gray-600">
            Showing {indexOfFirstEvent + 1} to {Math.min(indexOfLastEvent, filteredEvents.length)} of {filteredEvents.length} events
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
