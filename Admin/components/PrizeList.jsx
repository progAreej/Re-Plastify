// import React from 'react'

// const PrizeList = ({ prizes, onEdit, onDelete }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {prizes.map((prize) => (
//         <div key={prize._id} className="bg-white shadow-md rounded-lg p-4">
//           <img src={prize.imageUrl} alt={prize.name} className="w-full h-48 object-cover mb-4 rounded" />
//           <h2 className="text-xl font-semibold mb-2">{prize.name}</h2>
//           <p className="text-gray-600 mb-2">Points required: {prize.pointsRequired}</p>
//           <div className="flex justify-end">
//             <button
//               onClick={() => onEdit(prize)}
//               className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => onDelete(prize._id)}
//               className="bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default PrizeList











import React from 'react'

const PrizeList = ({ prizes, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {prizes.map((prize) => (
        <div key={prize._id} className="bg-white shadow-md rounded-lg p-4 border border-blue-200">
          <img src={prize.imageUrl} alt={prize.name} className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-xl font-semibold mb-2 text-blue-700">{prize.name}</h2>
          <p className="text-gray-600 mb-4">Points required: {prize.pointsRequired}</p>
          <div className="flex justify-end">
            <button
              onClick={() => onEdit(prize)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(prize._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PrizeList