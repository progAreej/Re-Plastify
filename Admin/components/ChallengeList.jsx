
// "use client";

// // components/ChallengeList.js
// import React, { useEffect, useState } from 'react';
// import ChallengeCard from './ChallengeCard';

// export default function ChallengeList() {
//   const [challenges, setChallenges] = useState([]);

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     const response = await fetch('/api/challenges');
//     const data = await response.json();
//     setChallenges(data);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {challenges.map((challenge) => (
//         <ChallengeCard key={challenge._id} challenge={challenge} />
//       ))}
//     </div>
//   );
// }









// // components/ChallengeList.js
// "use client";
// import React, { useEffect, useState } from 'react';
// import ChallengeCard from './ChallengeCard';

// export default function ChallengeList() {
//   const [challenges, setChallenges] = useState([]);

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     const response = await fetch('/api/challenges');
//     const data = await response.json();
//     setChallenges(data);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {challenges.map((challenge) => (
//         <ChallengeCard key={challenge._id} challenge={challenge} />
//       ))}
//     </div>
//   );
// }






///////////////////////work//////////////////


// "use client";
// import React, { useEffect, useState } from 'react';
// import ChallengeCard from './ChallengeCard';
// import ChallengeDetailsModal from './ChallengeDetailsModal';

// export default function ChallengeList() {
//   const [challenges, setChallenges] = useState([]);
//   const [selectedChallenge, setSelectedChallenge] = useState(null);

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     const response = await fetch('/api/challenges');
//     const data = await response.json();
//     setChallenges(data);
//   };

//   const handleViewDetails = (challenge) => {
//     setSelectedChallenge(challenge);
//   };

//   const handleCloseModal = () => {
//     setSelectedChallenge(null);
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {challenges.map((challenge) => (
//           <ChallengeCard
//             key={challenge._id}
//             challenge={challenge}
//             onViewDetails={handleViewDetails}
//           />
//         ))}
//       </div>
//       {selectedChallenge && (
//         <ChallengeDetailsModal
//           challenge={selectedChallenge}
//           onClose={handleCloseModal}
//         />
//       )}
//     </>
//   );
// }








// "use client";
// import React, { useEffect, useState } from 'react';
// import ChallengeCard from './ChallengeCard';
// import ChallengeDetailsModal from './ChallengeDetailsModal';
// import EditChallengeModal from './EditChallengeModal';

// export default function ChallengeList() {
//   const [challenges, setChallenges] = useState([]);
//   const [selectedChallenge, setSelectedChallenge] = useState(null);
//   const [editingChallenge, setEditingChallenge] = useState(null);

//   useEffect(() => {
//     fetchChallenges();
//   }, []);

//   const fetchChallenges = async () => {
//     const response = await fetch('/api/challenges');
//     const data = await response.json();
//     setChallenges(data);
//   };

//   const handleViewDetails = (challenge) => {
//     setSelectedChallenge(challenge);
//   };

//   const handleCloseModal = () => {
//     setSelectedChallenge(null);
//   };

//   const handleEdit = (challenge) => {
//     setEditingChallenge(challenge);
//   };

//   const handleCloseEditModal = () => {
//     setEditingChallenge(null);
//   };

//   const handleChallengeUpdated = () => {
//     setEditingChallenge(null);
//     fetchChallenges();
//   };

//   const handleApprovalToggle = async (challenge) => {
//     const response = await fetch(`/api/challenges/${challenge._id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ isApproved: !challenge.isApproved }),
//     });

//     if (response.ok) {
//       fetchChallenges();
//     }
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {challenges.map((challenge) => (
//           <ChallengeCard
//             key={challenge._id}
//             challenge={challenge}
//             onViewDetails={handleViewDetails}
//             onEdit={handleEdit}
//             onApprovalToggle={handleApprovalToggle}
//           />
//         ))}
//       </div>
//       {selectedChallenge && (
//         <ChallengeDetailsModal
//           challenge={selectedChallenge}
//           onClose={handleCloseModal}
//         />
//       )}
//       {editingChallenge && (
//         <EditChallengeModal
//           challenge={editingChallenge}
//           onClose={handleCloseEditModal}
//           onChallengeUpdated={handleChallengeUpdated}
//         />
//       )}
//     </>
//   );
// }









"use client";
import React, { useEffect, useState } from 'react';
import ChallengeCard from './ChallengeCard';
import ChallengeDetailsModal from './ChallengeDetailsModal';
import EditChallengeModal from './EditChallengeModal';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ChallengeList() {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [editingChallenge, setEditingChallenge] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    const response = await fetch('/api/challenges');
    const data = await response.json();
    setChallenges(data);
  };

  const handleViewDetails = (challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleCloseModal = () => {
    setSelectedChallenge(null);
  };

  const handleEdit = (challenge) => {
    setEditingChallenge(challenge);
  };

  const handleCloseEditModal = () => {
    setEditingChallenge(null);
  };

  const handleChallengeUpdated = () => {
    setEditingChallenge(null);
    fetchChallenges();
  };

  const handleApprovalToggle = async (challenge) => {
    const response = await fetch(`/api/challenges/${challenge._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isApproved: !challenge.isApproved }),
    });
    if (response.ok) {
      fetchChallenges();
    }
  };

  const filteredChallenges = challenges.filter(challenge =>
    challenge.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredChallenges.length / itemsPerPage);
  const currentChallenges = filteredChallenges.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search challenges..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge._id}
            challenge={challenge}
            onViewDetails={handleViewDetails}
            onEdit={handleEdit}
            onApprovalToggle={handleApprovalToggle}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="mr-2" /> Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {pageCount}
        </span>
        <button
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
          disabled={currentPage === pageCount}
        >
          Next <ChevronRight className="ml-2" />
        </button>
      </div>

      {selectedChallenge && (
        <ChallengeDetailsModal
          challenge={selectedChallenge}
          onClose={handleCloseModal}
        />
      )}
      {editingChallenge && (
        <EditChallengeModal
          challenge={editingChallenge}
          onClose={handleCloseEditModal}
          onChallengeUpdated={handleChallengeUpdated}
        />
      )}
    </div>
  );
}