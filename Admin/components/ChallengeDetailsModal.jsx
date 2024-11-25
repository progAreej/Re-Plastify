// components/ChallengeDetailsModal.js
import React from 'react';

export default function ChallengeDetailsModal({ challenge, onClose }) {
  if (!challenge) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold">{challenge.title}</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <img src={challenge.image} alt={challenge.title} className="w-full max-h-96 object-cover rounded-lg mb-4" />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-100 p-3 rounded">
            <span className="font-semibold">Points:</span> {challenge.points}
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <span className="font-semibold">Impact Type:</span> {challenge.impactType.replace('_', ' ')}
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <span className="font-semibold">Status:</span> {challenge.status}
          </div>
          <div className="bg-gray-100 p-3 rounded">
            <span className="font-semibold">Total Impact:</span> {challenge.totalImpact}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{challenge.description}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700">{challenge.instructions}</p>
        </div>
      </div>
    </div>
  );
}