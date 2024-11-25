"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/components/Loading';
const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user posts
  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.post('/api/community/userpost'); // No need to send userId
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch user posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  // Function to delete a post
  const deletePost = async (postId) => {
    try {
      await axios.delete(`/api/community/userpost/${postId}`); // Send delete request
      setPosts(posts.filter((post) => post._id !== postId)); // Update state to remove the post
    } catch (err) {
      setError('Failed to delete post.');
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
      {posts.map((post) => (
        <div key={post._id} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">{post.content}</h2>
          <p className="text-sm text-gray-600 mb-4">Posted by: {post.user.username}</p>
          <button
            onClick={() => deletePost(post._id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
