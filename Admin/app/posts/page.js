
'use client';

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        const response = await fetch(`/api/posts?id=${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete post');
        await fetchPosts();
        Swal.fire(
          'Deleted!',
          'Your post has been deleted.',
          'success'
        );
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      Swal.fire(
        'Error',
        'Failed to delete the post.',
        'error'
      );
    }
  };

  // Search functionality
  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="lg:ml-64 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Posts</h1>
      
      {/* Search input - Updated design */}
      <div className="mb-6 ">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full p-3 border  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      

      <ul className="space-y-4">
        {currentPosts.map((post) => (
          <li key={post._id} className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-800">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              By {post.user.username} on {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <button
              onClick={() => deletePost(post._id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination - Updated design */}
      <div className="mt-6 flex justify-center">
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
              currentPage === i + 1 
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}