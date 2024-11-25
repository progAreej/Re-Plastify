

// 'use client'

// import React, { useState, useEffect } from 'react';

// export default function ChallengesLeaderboard() {
//   const [completedChallenges, setCompletedChallenges] = useState([]);
//   const [prizes, setPrizes] = useState([]);
//   const [selectedPrize, setSelectedPrize] = useState('');
//   const [selectedUser, setSelectedUser] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const [challengesData, prizesData] = await Promise.all([
//           fetchResource('/api/givePrize'),
//           fetchResource('/api/prizes')
//         ]);
//         setCompletedChallenges(challengesData);
//         setPrizes(prizesData);
//       } catch (error) {
//         setError('حدث خطأ أثناء جلب البيانات. يرجى المحاولة مرة أخرى.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchResource = async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`Failed to fetch from ${url}`);
//     const data = await response.json();
//     return Array.isArray(data) ? data : [];
//   };

//   const handlePrizeSelection = async () => {
//     if (!selectedPrize || !selectedUser) {
//       alert('الرجاء اختيار كل من الجائزة والمستخدم.');
//       return;
//     }

//     try {
//       const response = await fetch('/api/award-prize', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userId: selectedUser, prizeId: selectedPrize })
//       });

//       if (response.ok) {
//         alert('تم منح الجائزة بنجاح!');
//         // Refresh completed challenges to reflect any point changes
//         const newChallenges = await fetchResource('/api/givePrize');
//         setCompletedChallenges(newChallenges);
//         // Reset selections
//         setSelectedUser('');
//         setSelectedPrize('');
//       } else {
//         const errorData = await response.json();
//         alert(`فشل في منح الجائزة. ${errorData.error || 'الرجاء المحاولة مرة أخرى.'}`);
//       }
//     } catch (error) {
//       console.error('خطأ في منح الجائزة:', error);
//       alert('حدث خطأ. الرجاء المحاولة مرة أخرى.');
//     }
//   };

//   if (isLoading) return <div className="lg:ml-64 p-8">جاري التحميل...</div>;
//   if (error) return <div className="lg:ml-64 p-8 text-red-600">{error}</div>;

//   return (
//     <div className="lg:ml-64 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-blue-700">لوحة المتصدرين للتحديات</h1>
      
//       {/* Completed Challenges Table */}
//       <ChallengesTable challenges={completedChallenges} />

//       {/* Award Prize Section */}
//       <AwardPrizeSection 
//         users={completedChallenges.map(c => c.username)}
//         prizes={prizes}
//         selectedUser={selectedUser}
//         setSelectedUser={setSelectedUser}
//         selectedPrize={selectedPrize}
//         setSelectedPrize={setSelectedPrize}
//         handlePrizeSelection={handlePrizeSelection}
//       />
//     </div>
//   );
// }

// const ChallengesTable = ({ challenges }) => (
//   <div className="overflow-x-auto mb-8">
//     {challenges.length > 0 ? (
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-blue-600 text-white">
//           <tr>
//             <th className="py-3 px-4 text-right">اسم المستخدم</th>
//             <th className="py-3 px-4 text-right">مجموع النقاط</th>
//           </tr>
//         </thead>
//         <tbody>
//           {challenges.map((challenge) => (
//             <tr key={challenge.username} className="border-b border-gray-200 hover:bg-gray-100">
//               <td className="py-3 px-4">{challenge.username}</td>
//               <td className="py-3 px-4">{challenge.totalPoints}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     ) : (
//       <p>لا توجد تحديات مكتملة حالياً.</p>
//     )}
//   </div>
// );

// const AwardPrizeSection = ({ users, prizes, selectedUser, setSelectedUser, selectedPrize, setSelectedPrize, handlePrizeSelection }) => (
//   <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//     <h2 className="text-2xl font-bold mb-4 text-blue-700">منح جائزة</h2>
//     <div className="flex flex-wrap -mx-2 mb-4">
//       <div className="w-full md:w-1/2 px-2 mb-4">
//         <select
//           value={selectedUser}
//           onChange={(e) => setSelectedUser(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//         >
//           <option value="">اختر المستخدم</option>
//           {users.map((username) => (
//             <option key={username} value={username}>{username}</option>
//           ))}
//         </select>
//       </div>
//       <div className="w-full md:w-1/2 px-2 mb-4">
//         <select
//           value={selectedPrize}
//           onChange={(e) => setSelectedPrize(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//         >
//           <option value="">اختر الجائزة</option>
//           {prizes.map((prize) => (
//             <option key={prize._id} value={prize._id}>{prize.name} </option>
//           ))}
//         </select>
//       </div>
//     </div>
//     <button
//       onClick={handlePrizeSelection}
//       className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//     >
//       منح الجائزة
//     </button>
//   </div>
// );


















////////////////////////////////////////////////////////////////////////100%//////////////


// 'use client'

// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';

// export default function ChallengesLeaderboard() {
//   const [completedChallenges, setCompletedChallenges] = useState([]);
//   const [prizes, setPrizes] = useState([]);
//   const [selectedPrize, setSelectedPrize] = useState('');
//   const [selectedUser, setSelectedUser] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const [challengesData, prizesData] = await Promise.all([
//           fetchResource('/api/givePrize'),
//           fetchResource('/api/prizes')
//         ]);
//         setCompletedChallenges(challengesData);
//         setPrizes(prizesData);
//       } catch (error) {
//         setError('An error occurred while fetching data. Please try again.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchResource = async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`Failed to fetch from ${url}`);
//     const data = await response.json();
//     return Array.isArray(data) ? data : [];
//   };

//   const handlePrizeSelection = async () => {
//     if (!selectedPrize || !selectedUser) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Please select both a prize and a user.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//       return;
//     }

//     try {
//       const response = await fetch('/api/award-prize', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ userId: selectedUser, prizeId: selectedPrize })
//       });

//       if (response.ok) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'The prize has been awarded successfully!',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         });
//         // Refresh completed challenges to reflect any point changes
//         const newChallenges = await fetchResource('/api/givePrize');
//         setCompletedChallenges(newChallenges);
//         // Reset selections
//         setSelectedUser('');
//         setSelectedPrize('');
//       } else {
//         const errorData = await response.json();
//         Swal.fire({
//           title: 'Not Allowed!',
//           text: `Failed to award prize. ${errorData.error || 'Please try again.'}`,
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//       }
//     } catch (error) {
//       console.error('Error awarding prize:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'An error occurred. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   if (isLoading) return <div className="lg:ml-64 p-8">Loading...</div>;
//   if (error) return <div className="lg:ml-64 p-8 text-red-600">{error}</div>;

//   return (
//     <div className="lg:ml-64 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-blue-700">Challenges Leaderboard</h1>
      
//       {/* Completed Challenges Table */}
//       <ChallengesTable challenges={completedChallenges} />

//       {/* Award Prize Section */}
//       <AwardPrizeSection 
//         users={completedChallenges.map(c => c.username)}
//         prizes={prizes}
//         selectedUser={selectedUser}
//         setSelectedUser={setSelectedUser}
//         selectedPrize={selectedPrize}
//         setSelectedPrize={setSelectedPrize}
//         handlePrizeSelection={handlePrizeSelection}
//       />
//     </div>
//   );
// }

// const ChallengesTable = ({ challenges }) => (
//   <div className="overflow-x-auto mb-8">
//     {challenges.length > 0 ? (
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-blue-600 text-white">
//           <tr>
//             <th className="py-3 px-4 text-left">Username</th>
//             <th className="py-3 px-4 text-left">Total Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {challenges.map((challenge) => (
//             <tr key={challenge.username} className="border-b border-gray-200 hover:bg-gray-100">
//               <td className="py-3 px-4">{challenge.username}</td>
//               <td className="py-3 px-4">{challenge.totalPoints}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     ) : (
//       <p>No completed challenges at the moment.</p>
//     )}
//   </div>
// );

// const AwardPrizeSection = ({ users, prizes, selectedUser, setSelectedUser, selectedPrize, setSelectedPrize, handlePrizeSelection }) => (
//   <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//     <h2 className="text-2xl font-bold mb-4 text-blue-700">Award Prize</h2>
//     <div className="flex flex-wrap -mx-2 mb-4">
//       <div className="w-full md:w-1/2 px-2 mb-4">
//         <select
//           value={selectedUser}
//           onChange={(e) => setSelectedUser(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//         >
//           <option value="">Select User</option>
//           {users.map((username) => (
//             <option key={username} value={username}>{username}</option>
//           ))}
//         </select>
//       </div>
//       <div className="w-full md:w-1/2 px-2 mb-4">
//         <select
//           value={selectedPrize}
//           onChange={(e) => setSelectedPrize(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//         >
//           <option value="">Select Prize</option>
//           {prizes.map((prize) => (
//             <option key={prize._id} value={prize._id}>{prize.name} ({prize.pointsRequired} Points)</option>
//           ))}
//         </select>
//       </div>
//     </div>
//     <button
//       onClick={handlePrizeSelection}
//       className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//     >
//       Award Prize
//     </button>
//   </div>
// );


///




// 'use client'

// import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';

// export default function ChallengesLeaderboard() {
//   const [completedChallenges, setCompletedChallenges] = useState([]);
//   const [prizes, setPrizes] = useState([]);
//   const [selectedPrize, setSelectedPrize] = useState('');
//   const [selectedUser, setSelectedUser] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         const [challengesData, prizesData] = await Promise.all([
//           fetchResource('/api/givePrize'),
//           fetchResource('/api/prizes')
//         ]);
//         setCompletedChallenges(challengesData);
//         setPrizes(prizesData);
//       } catch (error) {
//         setError('An error occurred while fetching data. Please try again.');
//         console.error('Error fetching data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchResource = async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`Failed to fetch from ${url}`);
//     const data = await response.json();
//     return Array.isArray(data) ? data : [];
//   };

//   const handlePrizeSelection = async () => {
//     if (!selectedPrize || !selectedUser) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Please select both a prize and a user.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//       return;
//     }

//     try {
//       const selectedPrizeObj = prizes.find(prize => prize._id === selectedPrize);
//       const selectedUserObj = completedChallenges.find(challenge => challenge.username === selectedUser);

//       if (selectedUserObj.totalPoints < selectedPrizeObj.pointsRequired) {
//         Swal.fire({
//           title: 'Not Enough Points!',
//           text: `The user doesn't have enough points for this prize.`,
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//         return;
//       }

//       const response = await fetch('/api/award-prize', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//           userId: selectedUser, 
//           prizeId: selectedPrize,
//           pointsDeducted: selectedPrizeObj.pointsRequired
//         })
//       });

//       if (response.ok) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'The prize has been awarded successfully!',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         });
//         // Update the local state to reflect the point deduction
//         setCompletedChallenges(prevChallenges => 
//           prevChallenges.map(challenge => 
//             challenge.username === selectedUser
//               ? { ...challenge, totalPoints: challenge.totalPoints - selectedPrizeObj.pointsRequired }
//               : challenge
//           )
//         );
//         // Reset selections
//         setSelectedUser('');
//         setSelectedPrize('');
//       } else {
//         const errorData = await response.json();
//         Swal.fire({
//           title: 'Not Allowed!',
//           text: `Failed to award prize. ${errorData.error || 'Please try again.'}`,
//           icon: 'error',
//           confirmButtonText: 'OK'
//         });
//       }
//     } catch (error) {
//       console.error('Error awarding prize:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'An error occurred. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   if (isLoading) return <div className="lg:ml-64 p-8">Loading...</div>;
//   if (error) return <div className="lg:ml-64 p-8 text-red-600">{error}</div>;

//   return (
//     <div className="lg:ml-64 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-blue-700">Challenges Leaderboard</h1>
      
//       {/* Completed Challenges Table */}
//       <ChallengesTable challenges={completedChallenges} />

//       {/* Award Prize Section */}
//       <AwardPrizeSection 
//         users={completedChallenges.map(c => c.username)}
//         prizes={prizes}
//         selectedUser={selectedUser}
//         setSelectedUser={setSelectedUser}
//         selectedPrize={selectedPrize}
//         setSelectedPrize={setSelectedPrize}
//         handlePrizeSelection={handlePrizeSelection}
//       />
//     </div>
//   );
// }

// const ChallengesTable = ({ challenges }) => (
//   <div className="overflow-x-auto mb-8">
//     {challenges.length > 0 ? (
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-blue-600 text-white">
//           <tr>
//             <th className="py-3 px-4 text-left">Username</th>
//             <th className="py-3 px-4 text-left">Total Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {challenges.map((challenge) => (
//             <tr key={challenge.username} className="border-b border-gray-200 hover:bg-gray-100">
//               <td className="py-3 px-4">{challenge.username}</td>
//               <td className="py-3 px-4">{challenge.totalPoints}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     ) : (
//       <p>No completed challenges at the moment.</p>
//     )}
//   </div>
// );

// const AwardPrizeSection = ({ users, prizes, selectedUser, setSelectedUser, selectedPrize, setSelectedPrize, handlePrizeSelection }) => (
//   <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//     <h2 className="text-2xl font-bold mb-4 text-blue-700">Award Prize</h2>
//     <div className="flex flex-wrap -mx-2 mb-4">
//       <div className="w-full md:w-1/2 px-2 mb-4">
//         <select
//           value={selectedUser}
//           onChange={(e) => setSelectedUser(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//         >
//           <option value="">Select User</option>
//           {users.map((username) => (
//             <option key={username} value={username}>{username}</option>
//           ))}
//         </select>
//       </div>
//       <div className="w-full md:w-1/2 px-2 mb-4">
//         <select
//           value={selectedPrize}
//           onChange={(e) => setSelectedPrize(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//         >
//           <option value="">Select Prize</option>
//           {prizes.map((prize) => (
//             <option key={prize._id} value={prize._id}>{prize.name} ({prize.pointsRequired} Points)</option>
//           ))}
//         </select>
//       </div>
//     </div>
//     <button
//       onClick={handlePrizeSelection}
//       className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
//     >
//       Award Prize
//     </button>
//   </div>
// );











'use client'

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function ChallengesLeaderboard() {
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [selectedPrize, setSelectedPrize] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [challengesData, prizesData] = await Promise.all([
        fetchResource('/api/givePrize'),
        fetchResource('/api/prizes')
      ]);
      setCompletedChallenges(challengesData);
      setPrizes(prizesData);
    } catch (error) {
      setError('An error occurred while fetching data. Please try again.');
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchResource = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch from ${url}`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  };

  const handlePrizeSelection = async () => {
    if (!selectedPrize || !selectedUser) {
      Swal.fire({
        title: 'Error!',
        text: 'Please select both a prize and a user.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      const selectedPrizeObj = prizes.find(prize => prize._id === selectedPrize);
      const selectedUserObj = completedChallenges.find(challenge => challenge.username === selectedUser);

      if (selectedUserObj.totalPoints < selectedPrizeObj.pointsRequired) {
        Swal.fire({
          title: 'Not Enough Points!',
          text: `The user doesn't have enough points for this prize.`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return;
      }

      const response = await fetch('/api/award-prize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username: selectedUser, 
          prizeId: selectedPrize,
          pointsDeducted: selectedPrizeObj.pointsRequired
        })
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'The prize has been awarded successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // Refresh the data to get the updated points
        await fetchData();
        // Reset selections
        setSelectedUser('');
        setSelectedPrize('');
      } else {
        const errorData = await response.json();
        Swal.fire({
          title: 'Not Allowed!',
          text: `Failed to award prize. ${errorData.error || 'Please try again.'}`,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error('Error awarding prize:', error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  if (isLoading) return <div className="lg:ml-64 p-8">Loading...</div>;
  if (error) return <div className="lg:ml-64 p-8 text-red-600">{error}</div>;

  return (
    <div className="lg:ml-64 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Challenges Leaderboard</h1>
      
      {/* Completed Challenges Table */}
      <ChallengesTable challenges={completedChallenges} />

      {/* Award Prize Section */}
      <AwardPrizeSection 
        users={completedChallenges.map(c => c.username)}
        prizes={prizes}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        selectedPrize={selectedPrize}
        setSelectedPrize={setSelectedPrize}
        handlePrizeSelection={handlePrizeSelection}
      />
    </div>
  );
}

const ChallengesTable = ({ challenges }) => (
  <div className="overflow-x-auto mb-8">
    {challenges.length > 0 ? (
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">Username</th>
            <th className="py-3 px-4 text-left">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {challenges.map((challenge) => (
            <tr key={challenge.username} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-4">{challenge.username}</td>
              <td className="py-3 px-4">{challenge.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No completed challenges at the moment.</p>
    )}
  </div>
);

const AwardPrizeSection = ({ users, prizes, selectedUser, setSelectedUser, selectedPrize, setSelectedPrize, handlePrizeSelection }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-8">
    <h2 className="text-2xl font-bold mb-4 text-blue-700">Award Prize</h2>
    <div className="flex flex-wrap -mx-2 mb-4">
      <div className="w-full md:w-1/2 px-2 mb-4">
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Select User</option>
          {users.map((username) => (
            <option key={username} value={username}>{username}</option>
          ))}
        </select>
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4">
        <select
          value={selectedPrize}
          onChange={(e) => setSelectedPrize(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Prize</option>
          {prizes.map((prize) => (
            <option key={prize._id} value={prize._id}>{prize.name} ({prize.pointsRequired} Points)</option>
          ))}
        </select>
      </div>
    </div>
    <button
      onClick={handlePrizeSelection}
      className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
    >
      Award Prize
    </button>
  </div>
);