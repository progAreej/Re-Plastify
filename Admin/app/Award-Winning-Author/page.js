

'use client'

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const AwardWinningAuthors = () => {
  const [awardedUsers, setAwardedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchAwardedUsers = async () => {
      try {
        const response = await fetch('/api/user-prizes');
        if (!response.ok) {
          throw new Error('Failed to fetch awarded users');
        }
        const data = await response.json();
        if (data.success) {
          setAwardedUsers(data.data);
        } else {
          throw new Error(data.error || 'An error occurred while fetching data');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAwardedUsers();
  }, []);

  const filteredUsers = awardedUsers.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.prizes.some(prize => prize.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredUsers.length / itemsPerPage)));
  };

  if (loading) return <div className="flex justify-center items-center h-screen ml-64">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
  </div>;
  
  if (error) return <div className="ml-64 p-4 text-red-500 bg-red-100 rounded-lg shadow">Error: {error}</div>;
  
  if (awardedUsers.length === 0) return <div className="ml-64 p-4 text-gray-500 bg-gray-100 rounded-lg shadow">No awarded users found</div>;

  return (
    <div className="ml-64 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Award-Winning Authors</h1>
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search by author or prize name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      </div>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prize</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Awarded On</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((user, index) =>
              user.prizes.map((prize, prizeIndex) => (
                <tr key={`${index}-${prizeIndex}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{prize.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(prize.awardedAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-700">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredUsers.length)} of {filteredUsers.length} users
        </div>
        <div className="flex space-x-2">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded-md transition-colors duration-200 ease-in-out text-sm ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span className="flex items-center">
              <span className="mr-1">&lt;</span>
              Previous
            </span>
          </button>
          <button
            onClick={goToNextPage}
            disabled={currentPage === Math.ceil(filteredUsers.length / itemsPerPage)}
            className={`px-3 py-1 border rounded-md transition-colors duration-200 ease-in-out text-sm ${
              currentPage === Math.ceil(filteredUsers.length / itemsPerPage)
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span className="flex items-center">
              Next
              <span className="ml-1">&gt;</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AwardWinningAuthorPage() {
  return <AwardWinningAuthors />;
}