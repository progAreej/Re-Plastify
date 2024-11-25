

// import React from 'react';
// import ChallengeList from '../../components/ChallengeList';
// import AddChallengeButton from '../../components/AddChallengeModal';

// export default function ChallengePage() {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Challenges</h1>
//       <AddChallengeButton />
//       <ChallengeList />
//     </div>
//   );
// }










// // app/challenges/page.js
// "use client";
// import React, { useState } from 'react';
// import ChallengeList from '../../components/ChallengeList';
// import AddChallengeButton from '../../components/AddChallengeButton';
// import AddChallengeModal from '../../components/AddChallengeModal';

// export default function ChallengePage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [refreshKey, setRefreshKey] = useState(0);

//   const handleAddChallenge = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleChallengeAdded = () => {
//     setIsModalOpen(false);
//     setRefreshKey(prevKey => prevKey + 1);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Challenges</h1>
//         <AddChallengeButton onAddChallenge={handleAddChallenge} />
//       </div>
//       <ChallengeList key={refreshKey} />
//       {isModalOpen && (
//         <AddChallengeModal onClose={handleCloseModal} onChallengeAdded={handleChallengeAdded} />
//       )}
//     </div>
//   );
// }










"use client";
import React, { useState } from 'react';
import ChallengeList from '../../components/ChallengeList';
import AddChallengeButton from '../../components/AddChallengeButton';
import AddChallengeModal from '../../components/AddChallengeModal';
import { Trophy } from 'lucide-react';

export default function ChallengePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddChallenge = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChallengeAdded = () => {
    setIsModalOpen(false);
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="ml-64 p-6"> {/* Added margin-left to account for sidebar */}
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Trophy className="h-7 w-7 mr-2 text-blue-600" />
            Eco Challenges
          </h1>
          <AddChallengeButton onAddChallenge={handleAddChallenge} />
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <ChallengeList key={refreshKey} />
        </div>

        {isModalOpen && (
          <AddChallengeModal 
            onClose={handleCloseModal} 
            onChallengeAdded={handleChallengeAdded}
          />
        )}
      </div>
    </div>
  );
}