import { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const AddContent = () => {
  const [postContent, setPostContent] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventType, setEventType] = useState('local'); // Default event type
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control post modal visibility
  const [isEventModalOpen, setIsEventModalOpen] = useState(false); // State to control event modal visibility

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch('/api/community/addpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: postContent }),
      });

      const data = await res.json();

      if (res.ok) {
        // Show success alert for post
        Swal.fire({
          icon: 'success',
          title: 'Post Created!',
          text: data.message,
          confirmButtonText: 'OK',
        });
        setPostContent(''); // Clear the input field
        setIsModalOpen(false); // Close the modal
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred while creating the post');
    }
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch('/api/community/addevent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title: eventTitle, 
          date: eventDate, 
          description: eventDescription, 
          location: eventLocation, 
          eventType 
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Show success alert for event
        Swal.fire({
          icon: 'success',
          title: 'Event Created!',
          text: data.message,
          confirmButtonText: 'OK',
        });
        // Clear event input fields
        setEventTitle('');
        setEventDate('');
        setEventDescription('');
        setEventLocation('');
        setEventType('local');
        setIsEventModalOpen(false); // Close the event modal
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred while creating the event');
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold text-green mb-4">Add New Content</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Add New Post</h3>
          <button
            onClick={() => setIsModalOpen(true)} // Open the modal on button click
            className="mt-2 bg-green text-white px-4 py-2 rounded hover:bg-blue"
          >
            Create Post
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Add New Event</h3>
          <button
            onClick={() => setIsEventModalOpen(true)} // Open the event modal on button click
            className="mt-2 bg-green text-white px-4 py-2 rounded hover:bg-blue"
          >
            Create Event
          </button>
        </div>
      </div>

      {/* Modal for Adding Post */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-2">Add New Post</h3>
            <form onSubmit={handlePostSubmit}>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Write your post here..."
                required
              />
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)} // Close the modal
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green text-white px-4 py-2 rounded hover:bg-blue"
                >
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Adding Event */}
      {isEventModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-2">Add New Event</h3>
            <form onSubmit={handleEventSubmit}>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="Event Title"
                required
              />
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded mb-2"
                rows="4"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Event Description"
                required
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                placeholder="Event Location"
                required
              />
              <select
                className="w-full p-2 border border-gray-300 rounded mb-2"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                required
              >
                <option value="local">Local</option>
                <option value="online">Online</option>
              </select>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setIsEventModalOpen(false)} // Close the event modal
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green text-white px-4 py-2 rounded hover:bg-blue"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddContent;
