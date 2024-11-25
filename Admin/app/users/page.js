// 'use client';
// import React, { useEffect, useState } from 'react';

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('/api/users');
//       const data = await response.json();
//       setUsers(data.users);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleUserStatus = async (userId, newStatus) => {
//     try {
//       const response = await fetch('/api/users', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userId, isActive: newStatus }),
//       });

//       if (response.ok) {
//         fetchUsers(); // Refresh the user list
//       } else {
//         console.error('Failed to update user status');
//       }
//     } catch (error) {
//       console.error('Error updating user status:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>
//       <div className="grid gap-4">
//         {users.map((user) => (
//           <div key={user._id} className="border p-4 rounded-lg flex justify-between items-center">
//             <div>
//               <h2 className="font-bold">{user.username}</h2>
//               <p className="text-gray-600">{user.email}</p>
//               <p className={`text-sm ${user.isActive ? 'text-blue-600' : 'text-red-600'}`}>
//                 Status: {user.isActive ? 'Active' : 'Inactive'}
//               </p>
//             </div>
//             <button
//               onClick={() => toggleUserStatus(user._id, !user.isActive)}
//               className={`px-4 py-2 rounded ${
//                 user.isActive
//                   ? 'bg-red-500 hover:bg-red-600 text-white'
//                   : 'bg-blue-500 hover:bg-blue-600 text-white'
//               }`}
//             >
//               {user.isActive ? 'Deactivate' : 'Activate'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










// 'use client';
// import React, { useEffect, useState } from 'react';

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch('/api/users');
//       const data = await response.json();
//       setUsers(data.users);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleUserStatus = async (userId, newStatus) => {
//     try {
//       const response = await fetch('/api/users', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userId, isActive: newStatus }),
//       });

//       if (response.ok) {
//         fetchUsers(); // Refresh the user list
//       } else {
//         console.error('Failed to update user status');
//       }
//     } catch (error) {
//       console.error('Error updating user status:', error);
//     }
//   };

//   if (loading) {
//     return <div className="lg:ml-64 p-4">Loading...</div>;
//   }

//   return (
//     <div className="lg:ml-64 p-4 transition-all duration-300">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>
//       <div className="grid gap-4">
//         {users.map((user) => (
//           <div key={user._id} className="border p-4 rounded-lg flex justify-between items-center bg-white shadow-sm">
//             <div>
//               <h2 className="font-bold">{user.username}</h2>
//               <p className="text-gray-600">{user.email}</p>
//               <p className={`text-sm ${user.isActive ? 'text-blue-600' : 'text-red-600'}`}>
//                 Status: {user.isActive ? 'Active' : 'Inactive'}
//               </p>
//             </div>
//             <button
//               onClick={() => toggleUserStatus(user._id, !user.isActive)}
//               className={`px-4 py-2 rounded ${
//                 user.isActive
//                   ? 'bg-red-500 hover:bg-red-600 text-white'
//                   : 'bg-blue-500 hover:bg-blue-600 text-white'
//               }`}
//             >
//               {user.isActive ? 'Deactivate' : 'Activate'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










'use client';
import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleUserStatus = async (userId, newStatus) => {
    try {
      const response = await fetch('/api/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, isActive: newStatus }),
      });

      if (response.ok) {
        fetchUsers();
      } else {
        console.error('Failed to update user status');
      }
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  if (loading) {
    return <div className="lg:ml-64 p-4">Loading...</div>;
  }

  return (
    <div className="lg:ml-64 p-4 transition-all duration-300">
      <h1 className="text-2xl font-bold mb-4 text-blue-600 ">User Management</h1>
      
      {/* Search bar */}
      <div className="mb-4 relative ">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-2 pl-10 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />
        <Search className="absolute left-3 top-2.5 text-blue-500" size={20}  />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-4 px-6">{user.username}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">
                  <span className={`px-2 py-1 rounded-full text-sm ${user.isActive ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => toggleUserStatus(user._id, !user.isActive)}
                    className={`px-4 py-2 rounded ${
                      user.isActive
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {user.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}