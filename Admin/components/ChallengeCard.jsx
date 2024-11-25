// // components/ChallengeCard.js
// import React from 'react';
// import Link from 'next/link';
// export default function ChallengeCard({ challenge }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <img src={challenge.image} alt={challenge.title} className="w-full h-48 object-cover rounded-md mb-4" />
//       <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
//       <p className="text-gray-600 mb-4">{challenge.description.substring(0, 100)}...</p>
//       <Link href={`/challenges/${challenge._id}`}>
//       <Link href={`/challenges/${challenge._id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//         View Details
//       </Link>
//       </Link>
//     </div>
//   );
// }








//////////////////////work ///////////////

// import React from 'react';

// export default function ChallengeCard({ challenge, onViewDetails }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <img src={challenge.image} alt={challenge.title} className="w-full h-48 object-cover rounded-md mb-4" />
//       <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
//       <p className="text-gray-600 mb-4">{challenge.description.substring(0, 100)}...</p>
//       <button
//         onClick={() => onViewDetails(challenge)}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         View Details
//       </button>
//     </div>
//   );
// }

















// import React from 'react';

// export default function ChallengeCard({ challenge, onViewDetails, onEdit, onApprovalToggle }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <img src={challenge.image} alt={challenge.title} className="w-full h-48 object-cover rounded-md mb-4" />
//       <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
//       <p className="text-gray-600 mb-4">{challenge.description.substring(0, 100)}...</p>
//       <div className="flex justify-between">
//         <button
//           onClick={() => onViewDetails(challenge)}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           View Details
//         </button>
//         <button
//           onClick={() => onEdit(challenge)}
//           className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//         >
//           Edit
//         </button>
//         <button
//           onClick={() => onApprovalToggle(challenge)}
//           className={`${
//             challenge.isApproved ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
//           } text-white px-4 py-2 rounded`}
//         >
//           {challenge.isApproved ? 'Disapprove' : 'Approve'}
//         </button>
//       </div>
//     </div>
//   );
// }







// import React from 'react';
// import { Eye, Edit, Check, X } from 'lucide-react';

// export default function ChallengeCard({ challenge, onViewDetails, onEdit, onApprovalToggle }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <img src={challenge.image} alt={challenge.title} className="w-full h-48 object-cover rounded-md mb-4" />
//       <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
//       <p className="text-gray-600 mb-4">{challenge.description.substring(0, 100)}...</p>
//       <div className="flex justify-between">
//         <button
//           onClick={() => onViewDetails(challenge)}
//           className="bg-blue-500 text-white px-3 py-5 text-sm rounded hover:bg-blue-600"
//         >
          
//           <Eye size={16} />

//         </button>
//         <button
//           onClick={() => onEdit(challenge)}
//           className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600"
//         >
//                     <Edit size={16} />

          
//         </button>
//         <button
//           onClick={() => onApprovalToggle(challenge)}
//           className={`${
//             challenge.isApproved ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
//           } text-white px-3 py-1 text-sm rounded`}
//         >
//           {challenge.isApproved ? 'Disapprove' : 'Approve'}
//         </button>
//       </div>
//     </div>
//   );
// }







import React from 'react';
import { Eye, Edit, Check, X } from 'lucide-react';

export default function ChallengeCard({ challenge, onViewDetails, onEdit, onApprovalToggle }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={challenge.image} alt={challenge.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
      <p className="text-gray-600 mb-4">{challenge.description.substring(0, 100)}...</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onViewDetails(challenge)}
          className="flex items-center justify-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          aria-label="View details"
        >
          <Eye size={20} />
        </button>
        <button
          onClick={() => onEdit(challenge)}
          className="flex items-center justify-center bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
          aria-label="Edit challenge"
        >
          <Edit size={20} />
        </button>
        <button
          onClick={() => onApprovalToggle(challenge)}
          className={`${
            challenge.isApproved ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
          } text-white px-3 py-1 text-sm rounded`}
        >
          {challenge.isApproved ? 'Disapprove' : 'Approve'}
        </button>
      </div>
    </div>
  );
}