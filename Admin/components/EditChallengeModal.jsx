"use client";
import React, { useState } from 'react';
import { uploadImage } from '../lib/firebase';

export default function EditChallengeModal({ challenge, onClose, onChallengeUpdated }) {
  const [formData, setFormData] = useState({
    title: challenge.title,
    description: challenge.description,
    image: null,
    points: challenge.points,
    totalImpact: challenge.totalImpact,
    instructions: challenge.instructions,
    impactType: challenge.impactType,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = challenge.image;
    if (formData.image) {
      imageUrl = await uploadImage(formData.image);
    }
    const response = await fetch(`/api/challenges/${challenge._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, image: imageUrl }),
    });

    if (response.ok) {
      onChallengeUpdated();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Challenge</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          ></textarea>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full mb-4"
          />
          <div className="flex gap-4 mb-4">
            <input
              type="number"
              name="points"
              value={formData.points}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
            <input
              type="number"
              name="totalImpact"
              value={formData.totalImpact}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
          </div>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          ></textarea>
          <select
            name="impactType"
            value={formData.impactType}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          >
            <option value="Plastic_Recycled">Plastic Recycled</option>
            <option value="Plastic_Saved">Plastic Saved</option>
            <option value="Plastic_Repurposed">Plastic Repurposed</option>
          </select>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update Challenge</button>
          </div>
        </form>
      </div>
    </div>
  );
}