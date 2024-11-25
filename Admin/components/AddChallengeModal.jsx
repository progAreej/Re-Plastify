// // components/AddChallengeModal.js
// "use client";

// import React, { useState } from 'react';
// import { uploadImage } from '../lib/firebase';

// export default function AddChallengeModal({ onClose }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: null,
//     points: 0,
//     instructions: '',
//     impactType: 'Plastic_Recycled',
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const imageUrl = await uploadImage(formData.image);
//     const response = await fetch('/api/challenges', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...formData, image: imageUrl }),
//     });

//     if (response.ok) {
//       onClose();
//       // Optionally, refresh the challenge list
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Add New Challenge</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Challenge Title"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           ></textarea>
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             className="w-full mb-4"
//             required
//           />
//           <input
//             type="number"
//             name="points"
//             placeholder="Points"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           />
//           <textarea
//             name="instructions"
//             placeholder="Instructions"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           ></textarea>
//           <select
//             name="impactType"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           >
//             <option value="Plastic_Recycled">Plastic Recycled</option>
//             <option value="Plastic_Saved">Plastic Saved</option>
//             <option value="Plastic_Repurposed">Plastic Repurposed</option>
//           </select>
//           <div className="flex justify-end">
//             <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
//             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Challenge</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }














// // components/AddChallengeModal.js
// "use client";
// import React, { useState } from 'react';
// import { uploadImage } from '../lib/firebase';

// export default function AddChallengeModal({ onClose, onChallengeAdded }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: null,
//     points: 0,
//     instructions: '',
//     impactType: 'Plastic_Recycled',
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const imageUrl = await uploadImage(formData.image);
//     const response = await fetch('/api/challenges', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...formData, image: imageUrl }),
//     });

//     if (response.ok) {
//       onChallengeAdded();
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Add New Challenge</h2>
//         <form onSubmit={handleSubmit}>
//           {/* ... (form fields remain the same) ... */}
//           <input
//             type="text"
//             name="title"
//             placeholder="Challenge Title"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           ></textarea>
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             className="w-full mb-4"
//             required
//           />
//           <input
//             type="number"
//             name="points"
//             placeholder="Points"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           />
//           <textarea
//             name="instructions"
//             placeholder="Instructions"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           ></textarea>
//           <select
//             name="impactType"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           >
//             <option value="Plastic_Recycled">Plastic Recycled</option>
//             <option value="Plastic_Saved">Plastic Saved</option>
//             <option value="Plastic_Repurposed">Plastic Repurposed</option>
//           </select>
//           <div className="flex justify-end">
//             <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
//             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Challenge</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }









// // components/AddChallengeModal.js
// "use client";
// import React, { useState } from 'react';
// import { uploadImage } from '../lib/firebase';

// export default function AddChallengeModal({ onClose, onChallengeAdded }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: null,
//     points: 0,
//     instructions: '',
//     impactType: 'Plastic_Recycled',
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const imageUrl = await uploadImage(formData.image);
//     const response = await fetch('/api/challenges', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...formData, image: imageUrl }),
//     });

//     if (response.ok) {
//       onChallengeAdded();
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Add New Challenge</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             placeholder="Challenge Title"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           ></textarea>
//           <input
//             type="file"
//             name="image"
//             onChange={handleChange}
//             className="w-full mb-4"
//             required
//           />
//           <input
//             type="number"
//             name="points"
//             placeholder="Points"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           />
//           <textarea
//             name="instructions"
//             placeholder="Instructions"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           ></textarea>
//           <select
//             name="impactType"
//             onChange={handleChange}
//             className="w-full mb-4 p-2 border rounded"
//             required
//           >
//             <option value="Plastic_Recycled">Plastic Recycled</option>
//             <option value="Plastic_Saved">Plastic Saved</option>
//             <option value="Plastic_Repurposed">Plastic Repurposed</option>
//           </select>
//           <div className="flex justify-end">
//             <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
//             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Challenge</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }








"use client";
import React, { useState } from 'react';
import { uploadImage } from '../lib/firebase';

export default function AddChallengeModal({ onClose, onChallengeAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    points: 0,
    totalImpact: 0, // Added totalImpact to initial state
    instructions: '',
    impactType: 'Plastic_Recycled',
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
    const imageUrl = await uploadImage(formData.image);
    const response = await fetch('/api/challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, image: imageUrl }),
    });

    if (response.ok) {
      onChallengeAdded();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Challenge</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Challenge Title"
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          ></textarea>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full mb-4"
            required
          />
          <div className="flex gap-4 mb-4">
            <input
              type="number"
              name="points"
              placeholder="Points"
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
            <input
              type="number"
              name="totalImpact"
              placeholder="Total Impact"
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
          </div>
          <textarea
            name="instructions"
            placeholder="Instructions"
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          ></textarea>
          <select
            name="impactType"
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
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Challenge</button>
          </div>
        </form>
      </div>
    </div>
  );
}