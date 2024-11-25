
// // 'use client'

// // import React from 'react'
// // import { motion } from 'framer-motion'
// // import { Award, ArrowRight } from 'lucide-react'

// // const PrizeCard = ({ prize }) => (
// //   <motion.div 
// //     className="bg-gray-200 shadow-lg rounded-md overflow-hidden"
// //     whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
// //     initial={{ opacity: 0, y: 20 }}
// //     animate={{ opacity: 1, y: 0 }}
// //     transition={{ duration: 0.3 }}
// //   >
// //     <div className="relative">
// //       <img src={prize.imageUrl} alt={prize.name} className="w-full h-48 object-cover" />
// //       <div className="absolute top-0 right-0 bg-blue text-white px-2 py-1 m-2 rounded-full text-sm font-semibold">
// //         {prize.pointsRequired} pts
// //       </div>
// //     </div>
// //     <div className="p-4">
// //     <div className="flex items-center text-gray-800">
// //     <Award className="w-5 h-5 mr-1 text-yellow-500" /> <span>

// // {prize.name}
// // </span>
// //         </div>
      
// //       <p className="text-gray-600 text-sm mb-4">{prize.description}</p>
// //       <div className="flex justify-between items-center">
// //         <div className="flex items-center text-yellow-500">          
// //         </div>
      
// //       </div>
// //     </div>
// //   </motion.div>
// // )

// // const PrizeList = ({ prizes = [] }) => {
// //   if (!prizes || prizes.length === 0) {
// //     return (
// //       <motion.div 
// //         className="text-center text-gray-500 p-8 bg-white rounded-lg"
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <Award className="w-16 h-16 mx-auto mb-4 text-yellow" />
// //         <p className="text-xl">No prizes available at the moment.</p>
// //         <p className="mt-2">Check back soon for exciting rewards!</p>
// //       </motion.div>
// //     )
// //   }

// //   return (
// //     <div className="bg-white">
// //       <div className="container mx-auto px-4">
// //         <motion.h2 
// //           className="text-3xl font-bold text-center mb-16 text-green"
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           Exciting Prizes to Redeem
// //         </motion.h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {prizes.map((prize, index) => (
// //             <motion.div
// //               key={prize._id}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //             >
// //               <PrizeCard prize={prize} />
// //             </motion.div>
// //           ))}
// //         </div>
// //         <motion.div 
// //           className="text-center mt-12"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.2 }}
// //         >
// //           <a 
// //             href="/Award-Winning-Author" 
// //             className="inline-block bg-blue hover:bg-blueD text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
// //           >
// //             Show Winners
// //           </a>
// //         </motion.div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default PrizeList



'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, ArrowRight } from 'lucide-react'

const PrizeCard = ({ prize }) => (
  <motion.div 
    className="bg-gray-200 shadow-lg rounded-md overflow-hidden"
    whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      <img src={prize.imageUrl} alt={prize.name} className="w-full h-48 object-cover" />
      <div className="absolute top-0 right-0 bg-blue text-white px-2 py-1 m-2 rounded-full text-sm font-semibold">
        {prize.pointsRequired} pts
      </div>
    </div>
    <div className="p-4">
    <div className="flex items-center text-gray-800">
    <Award className="w-5 h-5 mr-1 text-yellow-500" /> <span>

{prize.name}
</span>
        </div>
      
      <p className="text-gray-600 text-sm mb-4">{prize.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-yellow-500">          
        </div>
      
      </div>
    </div>
  </motion.div>
)

const PrizeList = ({ prizes = [] }) => {
  if (!prizes || prizes.length === 0) {
    return (
      <motion.div 
        className="text-center text-gray-500 p-8 bg-white rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Award className="w-16 h-16 mx-auto mb-4 text-yellow" />
        <p className="text-xl">No prizes available at the moment.</p>
        <p className="mt-2">Check back soon for exciting rewards!</p>
      </motion.div>
    )
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 text-green"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Exciting Prizes to Redeem
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PrizeCard prize={prize} />
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="/Award-Winning-Author" 
            className="inline-block bg-blue hover:bg-blueD text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Show Winners
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default PrizeList


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, ArrowRight, Recycle } from 'lucide-react';

// // const HeroSection = () => (
// //   <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-4 sm:px-6 lg:px-8">
// //     <div className="max-w-3xl mx-auto text-center">
// //       <motion.h1 
// //         className="text-4xl sm:text-5xl font-bold mb-4"
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         Recycle Plastic, Earn Rewards
// //       </motion.h1>
// //       <motion.p 
// //         className="text-xl mb-8"
// //         initial={{ opacity: 0, y: -20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5, delay: 0.2 }}
// //       >
// //         Join our eco-friendly initiative and turn your recycling efforts into exciting prizes!
// //       </motion.p>
// //       <motion.button 
// //         className="bg-white text-green-500 font-bold py-2 px-6 rounded-full hover:bg-green-100 transition duration-300"
// //         whileHover={{ scale: 1.05 }}
// //         whileTap={{ scale: 0.95 }}
// //       >
// //         Start Recycling Now
// //       </motion.button>
// //     </div>
// //   </div>
// // );

// const PrizeCard = ({ prize }) => (
//   <motion.div 
//     className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
//     whileHover={{ scale: 1.03 }}
//   >
//     <div className="bg-green-100 p-4 flex items-center justify-between">
//       <span className="text-green-600 font-semibold">{prize.pointsRequired} pts</span>
//       <Recycle className="text-green-500" />
//     </div>
//     <div className="p-6">
//       <h3 className="text-xl font-semibold mb-2">{prize.name}</h3>
//       <p className="text-gray-600 mb-4">{prize.description}</p>
//       <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 flex items-center">
//         Redeem <ArrowRight className="ml-2" size={16} />
//       </button>
//     </div>
//   </motion.div>
// );

// const PrizeList = ({ prizes = [] }) => {
//   if (!prizes || prizes.length === 0) {
//     return (
//       <div className="text-center py-12 px-4">
//         <Award className="mx-auto h-12 w-12 text-gray-400" />
//         <h3 className="mt-2 text-sm font-medium text-gray-900">No prizes available</h3>
//         <p className="mt-1 text-sm text-gray-500">Check back soon for exciting rewards!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* <HeroSection /> */}
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Exciting Eco-Rewards</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {prizes.map((prize, index) => (
//             <PrizeCard key={index} prize={prize} />
//           ))}
//         </div>
//         <div className="mt-12 text-center">
//           <motion.button 
//             className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 flex items-center mx-auto"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Show Winners <Award className="ml-2" size={20} />
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrizeList;