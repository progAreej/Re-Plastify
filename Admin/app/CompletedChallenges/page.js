// 'use client'

// import React, { useState, useEffect } from 'react';

// export default function CompletedChallengesPage() {
//   const [challenges, setChallenges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     try {
//       const response = await fetch('/api/completed-challenges');
//       if (!response.ok) {
//         throw new Error('Failed to fetch challenges');
//       }
//       const data = await response.json();
//       setChallenges(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       const response = await fetch(`/api/completed-challenges/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update challenge status');
//       }

//       // Update the local state
//       setChallenges(challenges.map(challenge => 
//         challenge._id === id ? { ...challenge, status: newStatus } : challenge
//       ));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Completed Challenges</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {challenges.map((challenge) => (
//           <div key={challenge._id} className="border rounded-lg p-4 mb-4">
//             <div className="mb-2">
//               <h2 className="text-xl font-semibold">{challenge.challengeName}</h2>
//             </div>
//             <div className="mb-4">
//               <p><strong>Username:</strong> {challenge.username}</p>
//               <p><strong>Status:</strong> {challenge.status}</p>
//               <p><strong>Submitted:</strong> {new Date(challenge.submittedAt).toLocaleDateString()}</p>
//               <video controls src={challenge.solutionVideo} className="w-full mt-2" />
//             </div>
//             {challenge.status === 'completed' && (
//               <div className="mt-2">
//                 <button 
//                   onClick={() => handleStatusChange(challenge._id, 'approved')}
//                   className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   Approve
//                 </button>
//                 <button 
//                   onClick={() => handleStatusChange(challenge._id, 'rejected')}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Reject
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










// 'use client'

// import React, { useState, useEffect } from 'react';

// export default function CompletedChallengesPage() {
//   const [challenges, setChallenges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     try {
//       const response = await fetch('/api/completed-challenges');
//       if (!response.ok) {
//         throw new Error('Failed to fetch challenges');
//       }
//       const data = await response.json();
//       setChallenges(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       const response = await fetch(`/api/completed-challenges/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update challenge status');
//       }

//       // Update the local state
//       setChallenges(challenges.map(challenge => 
//         challenge._id === id ? { ...challenge, status: newStatus } : challenge
//       ));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Completed Challenges</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {challenges.map((challenge) => (
//           <div key={challenge._id} className="border rounded-lg p-4 mb-4">
//             <div className="mb-2">
//               <h2 className="text-xl font-semibold">{challenge.challengeName}</h2>
//             </div>
//             <div className="mb-4">
//               <p><strong>Username:</strong> {challenge.username}</p>
//               <p><strong>Status:</strong> {challenge.status}</p>
//               <p><strong>Submitted:</strong> {new Date(challenge.submittedAt).toLocaleDateString()}</p>
//               <video controls src={challenge.solutionVideo} className="w-full mt-2" />
//             </div>
//             {challenge.status === 'completed' && (
//               <div className="mt-2">
//                 <button 
//                   onClick={() => handleStatusChange(challenge._id, 'approved')}
//                   className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   Approve
//                 </button>
//                 <button 
//                   onClick={() => handleStatusChange(challenge._id, 'rejected')}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Reject
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// 'use client'

// import React, { useState, useEffect } from 'react';

// export default function CompletedChallengesPage() {
//   const [challenges, setChallenges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     try {
//       const response = await fetch('/api/completed-challenges');
//       if (!response.ok) {
//         throw new Error('Failed to fetch challenges');
//       }
//       const data = await response.json();
//       setChallenges(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, currentStatus) => {
//     const newStatus = currentStatus === 'approved' ? 'rejected' : 'approved';
//     try {
//       const response = await fetch(`/api/completed-challenges/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update challenge status');
//       }

//       // Update the local state
//       setChallenges(challenges.map(challenge => 
//         challenge._id === id ? { ...challenge, status: newStatus } : challenge
//       ));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const getStatusButtonStyle = (status) => {
//     switch(status) {
//       case 'approved':
//         return 'bg-blue-500 hover:bg-blue-600';
//       case 'rejected':
//         return 'bg-red-500 hover:bg-red-600';
//       default:
//         return 'bg-blue-500 hover:bg-blue-600';
//     }
//   };

//   const getStatusButtonText = (status) => {
//     switch(status) {
//       case 'approved':
//         return 'Approved';
//       case 'rejected':
//         return 'Rejected';
//       default:
//         return 'Pending';
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Completed Challenges</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {challenges.map((challenge) => (
//           <div key={challenge._id} className="border rounded-lg p-4 mb-4">
//             <div className="mb-2">
//               <h2 className="text-xl font-semibold">{challenge.challengeName}</h2>
//             </div>
//             <div className="mb-4">
//               <p><strong>Username:</strong> {challenge.username}</p>
//               <p><strong>Status:</strong> {challenge.status}</p>
//               <p><strong>Submitted:</strong> {new Date(challenge.submittedAt).toLocaleDateString()}</p>
//               <video controls src={challenge.solutionVideo} className="w-full mt-2" />
//             </div>
//             <div className="mt-2">
//               <button 
//                 onClick={() => handleStatusChange(challenge._id, challenge.status)}
//                 className={`text-white px-4 py-2 rounded w-full ${getStatusButtonStyle(challenge.status)}`}
//               >
//                 {getStatusButtonText(challenge.status)}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









// 'use client'

// import React, { useState, useEffect } from 'react';

// export default function CompletedChallengesPage() {
//   const [challenges, setChallenges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     try {
//       const response = await fetch('/api/completed-challenges');
//       if (!response.ok) {
//         throw new Error('Failed to fetch challenges');
//       }
//       const data = await response.json();
//       setChallenges(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, currentStatus) => {
//     const newStatus = currentStatus === 'approved' ? 'rejected' : 'approved';
//     try {
//       const response = await fetch(`/api/completed-challenges/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update challenge status');
//       }

//       // Update the local state
//       setChallenges(challenges.map(challenge => 
//         challenge._id === id ? { ...challenge, status: newStatus } : challenge
//       ));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const getStatusButtonStyle = (status) => {
//     switch(status) {
//       case 'approved':
//         return 'bg-blue-500 hover:bg-blue-600';
//       case 'rejected':
//         return 'bg-red-500 hover:bg-red-600';
//       default:
//         return 'bg-blue-500 hover:bg-blue-600';
//     }
//   };

//   const getStatusButtonText = (status) => {
//     switch(status) {
//       case 'approved':
//         return 'Approved (Click to Reject)';
//       case 'rejected':
//         return 'Rejected (Click to Approve)';
//       default:
//         return 'Approve/Reject';
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Completed Challenges</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {challenges.map((challenge) => (
//           <div key={challenge._id} className="border rounded-lg p-4 mb-4">
//             <div className="mb-2">
//               <h2 className="text-xl font-semibold">{challenge.challengeName}</h2>
//             </div>
//             <div className="mb-4">
//               <p><strong>Username:</strong> {challenge.username}</p>
//               <p><strong>Status:</strong> {challenge.status}</p>
//               <p><strong>Submitted:</strong> {new Date(challenge.submittedAt).toLocaleDateString()}</p>
//               <video controls src={challenge.solutionVideo} className="w-full mt-2" />
//             </div>
//             {(challenge.status === 'completed' || challenge.status === 'approved' || challenge.status === 'rejected') && (
//               <div className="mt-2">
//                 <button 
//                   onClick={() => handleStatusChange(challenge._id, challenge.status)}
//                   className={`text-white px-4 py-2 rounded w-full ${getStatusButtonStyle(challenge.status)}`}
//                 >
//                   {getStatusButtonText(challenge.status)}
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// 'use client'


// import React, { useState, useEffect } from 'react';

// export default function CompletedChallengesPage() {
//   const [challenges, setChallenges] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const challengesPerPage = 5;

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     try {
//       const response = await fetch('/api/completed-challenges');
//       if (!response.ok) {
//         throw new Error('Failed to fetch challenges');
//       }
//       const data = await response.json();
//       setChallenges(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, currentStatus) => {
//     const newStatus = currentStatus === 'approved' ? 'rejected' : 'approved';
//     try {
//       const response = await fetch(`/api/completed-challenges/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update challenge status');
//       }

//       setChallenges(challenges.map(challenge =>
//         challenge._id === id ? { ...challenge, status: newStatus } : challenge
//       ));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const getStatusButtonStyle = (status) => {
//     switch(status) {
//       case 'approved':
//         return 'bg-blue-500 hover:bg-blue-600';
//       case 'rejected':
//         return 'bg-red-500 hover:bg-red-600';
//       default:
//         return 'bg-blue-500 hover:bg-blue-600';
//     }
//   };

//   const getStatusButtonText = (status) => {
//     switch(status) {
//       case 'approved':
//         return 'Approved (Click to Reject)';
//       case 'rejected':
//         return 'Rejected (Click to Approve)';
//       default:
//         return 'Approve/Reject';
//     }
//   };

//   const filteredChallenges = challenges.filter(challenge =>
//     challenge.challengeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     challenge.username.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastChallenge = currentPage * challengesPerPage;
//   const indexOfFirstChallenge = indexOfLastChallenge - challengesPerPage;
//   const currentChallenges = filteredChallenges.slice(indexOfFirstChallenge, indexOfLastChallenge);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

//   return (
//     <div className="p-4 ml-64"> {/* Add left margin to accommodate sidebar */}
//       <h1 className="text-2xl font-bold mb-4">Completed Challenges</h1>
      
//       <input
//         type="text"
//         placeholder="Search challenges..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full p-2 mb-4 border rounded"
//       />

//       <div className="grid gap-4">
//         {currentChallenges.map((challenge) => (
//           <div key={challenge._id} className="border p-4 rounded">
//             <h2 className="text-xl font-semibold">{challenge.challengeName}</h2>
//             <p><strong>Username:</strong> {challenge.username}</p>
//             <p><strong>Status:</strong> {challenge.status}</p>
//             <p><strong>Submitted:</strong> {new Date(challenge.submittedAt).toLocaleDateString()}</p>
            
//             {(challenge.status === 'completed' || challenge.status === 'approved' || challenge.status === 'rejected') && (
//               <button
//                 onClick={() => handleStatusChange(challenge._id, challenge.status)}
//                 className={`mt-2 p-2 text-white rounded ${getStatusButtonStyle(challenge.status)}`}
//               >
//                 {getStatusButtonText(challenge.status)}
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 flex justify-center">
//         <button 
//           onClick={() => paginate(currentPage - 1)} 
//           disabled={currentPage === 1}
//           className="mx-1 px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         {[...Array(Math.ceil(filteredChallenges.length / challengesPerPage))].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button 
//           onClick={() => paginate(currentPage + 1)} 
//           disabled={currentPage === Math.ceil(filteredChallenges.length / challengesPerPage)}
//           className="mx-1 px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }















'use client'

import React, { useState, useEffect } from 'react';

export default function CompletedChallengesPage() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const challengesPerPage = 6; // Changed to 6 for a 2x3 grid

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const response = await fetch('/api/completed-challenges');
      if (!response.ok) {
        throw new Error('Failed to fetch challenges');
      }
      const data = await response.json();
      setChallenges(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, currentStatus) => {
    const newStatus = currentStatus === 'approved' ? 'rejected' : 'approved';
    try {
      const response = await fetch(`/api/completed-challenges/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update challenge status');
      }

      setChallenges(challenges.map(challenge =>
        challenge._id === id ? { ...challenge, status: newStatus } : challenge
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  const getStatusButtonStyle = (status) => {
    switch(status) {
      case 'approved':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'rejected':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  const getStatusButtonText = (status) => {
    switch(status) {
      case 'approved':
        return 'Approved (Click to Reject)';
      case 'rejected':
        return 'Rejected (Click to Approve)';
      default:
        return 'Approve/Reject';
    }
  };

  const filteredChallenges = challenges.filter(challenge =>
    challenge.challengeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    challenge.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastChallenge = currentPage * challengesPerPage;
  const indexOfFirstChallenge = indexOfLastChallenge - challengesPerPage;
  const currentChallenges = filteredChallenges.slice(indexOfFirstChallenge, indexOfLastChallenge);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4 ml-64"> {/* Add left margin to accommodate sidebar */}
      <h1 className="text-2xl font-bold mb-4">Completed Challenges</h1>
      
      <input
        type="text"
        placeholder="Search challenges..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentChallenges.map((challenge) => (
          <div key={challenge._id} className="border p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{challenge.challengeName}</h2>
            <video 
              className="w-full h-48 object-cover mb-2" 
              controls
              poster={challenge.thumbnailUrl} // Add this if you have thumbnail URLs
            >
              <source src={challenge.solutionVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p><strong>Username:</strong> {challenge.username}</p>
            <p><strong>Status:</strong> {challenge.status}</p>
            <p><strong>Submitted:</strong> {new Date(challenge.submittedAt).toLocaleDateString()}</p>
            
            {(challenge.status === 'completed' || challenge.status === 'approved' || challenge.status === 'rejected') && (
              <button
                onClick={() => handleStatusChange(challenge._id, challenge.status)}
                className={`mt-2 p-2 text-white rounded w-full ${getStatusButtonStyle(challenge.status)}`}
              >
                {getStatusButtonText(challenge.status)}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(Math.ceil(filteredChallenges.length / challengesPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === Math.ceil(filteredChallenges.length / challengesPerPage)}
          className="mx-1 px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}