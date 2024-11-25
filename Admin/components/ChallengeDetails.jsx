// components/ChallengeDetails.js

"use client";
import React, { useEffect, useState } from 'react';

export default function ChallengeDetails({ id }) {
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    fetchChallenge();
  }, [id]);

  const fetchChallenge = async () => {
    const response = await fetch(`/api/challenges/${id}`);
    const data = await response.json();
    setChallenge(data);
  };

  if (!challenge) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
      <img src={challenge.image} alt={challenge.title} className="w-full max-w-2xl mb-4 rounded-lg" />
      <p className="text-xl mb-4">{challenge.description}</p>
      <p className="mb-2"><strong>Points:</strong> {challenge.points}</p>
      <p className="mb-2"><strong>Impact Type:</strong> {challenge.impactType}</p>
      <p className="mb-2"><strong>Status:</strong> {challenge.status}</p>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
      <p>{challenge.instructions}</p>
    </div>
  );
}