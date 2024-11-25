import React, { useState } from 'react'
import { uploadImage } from '@/lib/firebase'

const EditPrizeForm = ({ prize, onSubmit, onClose }) => {
  const [name, setName] = useState(prize.name)
  const [pointsRequired, setPointsRequired] = useState(prize.pointsRequired)
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let imageUrl = prize.imageUrl
    if (image) {
      imageUrl = await uploadImage(image)
    }
    onSubmit({ ...prize, name, pointsRequired: parseInt(pointsRequired), imageUrl })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Prize</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Points Required</label>
            <input
              type="number"
              value={pointsRequired}
              onChange={(e) => setPointsRequired(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Prize
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPrizeForm