 
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Loading from '@/components/Loading';
const Post = ({ post, searchQuery }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [showComments, setShowComments] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const checkLikeStatus = async () => {
      try {
        const response = await axios.post('/api/community/checkLike', { postId: post._id });
        setIsLiked(response.data.isLiked);
      } catch (err) {
        console.error("Error checking like status:", err);
      }
    };
    checkLikeStatus();
  }, [post._id]);

  const handleLike = async () => {
    try {
      setIsLiked((prev) => !prev);
      setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
      await axios.post(`/api/community/like`, { postId: post._id, liked: !isLiked });
    } catch (err) {
      console.error("Error updating like:", err);
      setError("Failed to update like status.");
    }
  };

  const fetchComments = async () => {
    setLoadingComments(true);
    try {
      const response = await axios.post('/api/community/getcomments', { postId: post._id });
      setComments(response.data.comments);
    } catch (err) {
      console.error("Error fetching comments:", err);
      setError("Failed to fetch comments.");
    } finally {
      setLoadingComments(false);
    }
  };

  const toggleComments = () => {
    if (!showComments) {
      fetchComments();
    }
    setShowComments((prev) => !prev);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/community/comments', { postId: post._id, content: newComment });
      setComments((prev) => [...prev, response.data.comment]);
      setNewComment('');
    } catch (err) {
      console.error("Error adding comment:", err);
      setError("Failed to add comment. Make sure to login!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300"
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-800">{post.content}</h2>
      <p className="text-sm text-gray-600 mb-4">Posted by: {post.user.username}</p>
      
      <div className="flex items-center space-x-4 mb-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLike}
          className={`flex items-center space-x-1 ${isLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-600 transition duration-300`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          <span>{likesCount} Likes</span>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleComments}
          className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
          </svg>
          <span>{post.comments ? post.comments.length : 0} Comments</span>
        </motion.button>
      </div>

      {showComments && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 space-y-2"
        >
          {loadingComments ? (
          
                <Loading/>
              
          
          ) : comments.length > 0 ? (
            comments.map((comment, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-2 rounded"
              >
                <p className="text-sm text-gray-800">{comment.content}</p>
                <p className="text-xs text-gray-500">By: {comment.user.username}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No comments yet.</p>
          )}
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="mt-2 bg-green text-white rounded px-4 py-2 hover:bg-blue transition duration-300"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
};

const Posts = ({ searchQuery }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/community/posts');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <Loading/>
    );
  }

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div>
      {filteredPosts.map((post) => (
        <Post key={post._id} post={post} searchQuery={searchQuery} />
      ))}
    </div>
  );
};

export default Posts;