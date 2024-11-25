
// "use client";
// import React, { useState } from 'react';
// import AddChallengeModal from './AddChallengeModal';

// export default function AddChallengeButton() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
//       >
//         Add Challenge
//       </button>
//       {isModalOpen && <AddChallengeModal onClose={() => setIsModalOpen(false)} />}
//     </>
//   );
// }











// components/AddChallengeButton.js
import React from 'react';

export default function AddChallengeButton({ onAddChallenge }) {
  return (
    <button
      onClick={onAddChallenge}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add Challenge
    </button>
  );
}