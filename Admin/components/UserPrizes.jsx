import React, { useState, useEffect } from 'react';

const UserPrizes = ({ userId }) => {
  const [userPrizes, setUserPrizes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPrizes = async () => {
      try {
        const response = await fetch(`/api/user-prizes?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user prizes');
        }
        const data = await response.json();
        setUserPrizes(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPrizes();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userPrizes) return <div>No prizes found</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Prizes for {userPrizes.username}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userPrizes.prizes.map((prize, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <img src={prize.imageUrl} alt={prize.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{prize.name}</h3>
            <p className="text-sm text-gray-600">
              Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPrizes;