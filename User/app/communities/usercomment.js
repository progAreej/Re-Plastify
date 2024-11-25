"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/components/Loading';
const CommentU = () => {
  const [comments, setComments] = useState([]); // Rename posts to comments
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user comments
  useEffect(() => {
    const fetchUserComments = async () => {
      try {
        const response = await axios.post('/api/community/usercomment'); // Correct API endpoint for comments
        setComments(response.data); // Set the comments state
      } catch (err) {
        setError('Failed to fetch user comments.'); // Update error message
      } finally {
        setLoading(false);
      }
    };

    fetchUserComments(); // Call the correct function
  }, []);

  // Function to delete a comment
  const deleteComment = async (commentId) => { // Rename function to deleteComment
    try {
      await axios.delete(`/api/community/usercomment/${commentId}`); // Send delete request to the correct endpoint
      setComments(comments.filter((comment) => comment._id !== commentId)); // Update state to remove the comment
    } catch (err) {
      setError('Failed to delete comment.'); // Update error message
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
      {comments.map((comment) => ( // Use comments instead of posts
        <div key={comment._id} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">{comment.content}</h2> {/* Use comment content */}
          <p className="text-sm text-gray-600 mb-4">Posted by: {comment.user.username}</p> {/* Adjust as needed */}
          <button
            onClick={() => deleteComment(comment._id)} // Call deleteComment function
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentU;
