


 'use client';


import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const [awardedPrizes, setAwardedPrizes] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [activeSection, setActiveSection] = useState('profile');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [userRes, ordersRes, prizesRes, challengesRes] = await Promise.all([
          fetch('/api/user'),
          fetch('/api/orders'),
          fetch('/api/awarded-prizes'),
          fetch('/api/completed-challenges')
        ]);
        
        const userData = await userRes.json();
        const ordersData = await ordersRes.json();
        const prizesData = await prizesRes.json();
        const challengesData = await challengesRes.json();

        if (userData.user) {
          setUser(userData.user);
          setFirstName(userData.user.username);
          setEmail(userData.user.email);
        } else {
          Swal.fire('Error!', userData.error, 'error');
        }

        if (ordersData.orders) {
          setOrders(ordersData.orders);
        } else {
          Swal.fire('Error!', ordersData.error, 'error');
        }

        if (prizesData.awardedPrizes) {
          setAwardedPrizes(prizesData.awardedPrizes);
        } else {
          Swal.fire('Error!', prizesData.error, 'error');
        }

        if (challengesData.completedChallenges) {
          setCompletedChallenges(challengesData.completedChallenges);
        } else {
          Swal.fire('Error!', challengesData.error, 'error');
        }
      } catch (error) {
        Swal.fire('Error!', 'Failed to fetch user data', 'error');
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/user/update', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, email, password }),
    });

    const data = await res.json();
    if (data.message) {
      Swal.fire('Success!', data.message, 'success');
    } else {
      Swal.fire('Error!', data.error, 'error');
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (activeSection === 'challenges' ? completedChallenges :
                        activeSection === 'prizes' ? awardedPrizes :
                        activeSection === 'orders' ? orders : []).slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    const totalItems = activeSection === 'challenges' ? completedChallenges.length :
                       activeSection === 'prizes' ? awardedPrizes.length :
                       activeSection === 'orders' ? orders.length : 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div className="flex justify-center mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-green text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-green text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <form 
            onSubmit={handleUpdate} 
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <label className="block mb-4">
              <span className="text-gray-700">First Name</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Password (leave blank to keep current)</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green"
              />
            </label>
            <button type="submit" className="mt-4 w-full p-2 bg-green text-white rounded hover:bg-blue">
              Update
            </button>
          </form>
        );
      case 'challenges':
        return (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Your Completed Challenges</h2>
            {currentItems.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentItems.map((challenge) => (
                  <li key={challenge._id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img src={challenge.challengeId.image} alt={challenge.challengeId.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{challenge.challengeId.title}</h3>
                      <p className="text-green font-bold">Points: {challenge.challengeId.points}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No completed challenges yet.</p>
            )}
            {renderPagination()}
          </div>
        );
      case 'prizes':
        return (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Your Awarded Prizes</h2>
            {currentItems.length > 0 ? (
              <ul>
                {currentItems.map((prize) => (
                  <li key={prize._id} className="mb-4 p-4 border border-gray-200 rounded">
                    
                    <p className="font-semibold">{prize.prizeId.name}</p>
                    <p className="text-sm text-gray-600">{prize.prizeId.description}</p>
                    <p className="text-sm text-gray-500">Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No prizes awarded yet.</p>
            )}
            {renderPagination()}
          </div>
        );
      case 'orders':
        return (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h2 className="text-xl font-bold mb-4">Your Orders</h2>
            {currentItems.length > 0 ? (
              <ul>
                {currentItems.map((order) => (
                  <li key={order._id} className="mb-8 p-4 border border-gray-200 rounded">
                    <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                    <h3 className="font-bold mt-4 mb-2">Products:</h3>
                    <ul className="pl-4">
                      {order.products.map((item) => (
                        <li key={item._id} className="mb-4 border-b pb-2">
                          <div className="flex items-start">
                            <div>
                              <p className="font-semibold">{item.product.name}</p>
                              <p>Price: ${item.product.price.toFixed(2)}</p>
                              <p>Quantity: {item.quantity}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders found.</p>
            )}
            {renderPagination()}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>
      {user && (
        <div className="w-full max-w-4xl">
          <div className="mb-6 flex justify-center space-x-4">
            <button
              onClick={() => setActiveSection('profile')}
              className={`px-4 py-2 rounded ${activeSection === 'profile' ? 'bg-green text-white' : 'bg-gray-200'}`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveSection('challenges')}
              className={`px-4 py-2 rounded ${activeSection === 'challenges' ? 'bg-green text-white' : 'bg-gray-200'}`}
            >
              Challenges
            </button>
            <button
              onClick={() => setActiveSection('prizes')}
              className={`px-4 py-2 rounded ${activeSection === 'prizes' ? 'bg-green text-white' : 'bg-gray-200'}`}
            >
              Prizes
            </button>
            <button
              onClick={() => setActiveSection('orders')}
              className={`px-4 py-2 rounded ${activeSection === 'orders' ? 'bg-green text-white' : 'bg-gray-200'}`}
            >
              Orders
            </button>
          </div>
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default UserProfile;