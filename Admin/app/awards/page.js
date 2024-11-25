// 'use client'
// import React, { useState, useEffect } from 'react'
// import PrizeList from '@/components/PrizeList'
// import AddPrizeForm from '@/components/AddPrizeForm'
// import EditPrizeForm from '@/components/EditPrizeForm'

// export default function AwardsPage() {
//   const [prizes, setPrizes] = useState([])
//   const [isAddFormOpen, setIsAddFormOpen] = useState(false)
//   const [isEditFormOpen, setIsEditFormOpen] = useState(false)
//   const [editingPrize, setEditingPrize] = useState(null)

//   useEffect(() => {
//     fetchPrizes()
//   }, [])

//   const fetchPrizes = async () => {
//     const response = await fetch('/api/prizes')
//     const data = await response.json()
//     setPrizes(data)
//   }

//   const handleAddPrize = async (prizeData) => {
//     await fetch('/api/prizes', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(prizeData),
//     })
//     fetchPrizes()
//     setIsAddFormOpen(false)
//   }

//   const handleEditPrize = async (prizeData) => {
//     await fetch(`/api/prizes/${prizeData._id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(prizeData),
//     })
//     fetchPrizes()
//     setIsEditFormOpen(false)
//   }

//   const handleDeletePrize = async (prizeId) => {
//     await fetch(`/api/prizes/${prizeId}`, { method: 'DELETE' })
//     fetchPrizes()
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Awards Page</h1>
//       <button
//         onClick={() => setIsAddFormOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//       >
//         Add New Prize
//       </button>
//       <PrizeList
//         prizes={prizes}
//         onEdit={(prize) => {
//           setEditingPrize(prize)
//           setIsEditFormOpen(true)
//         }}
//         onDelete={handleDeletePrize}
//       />
//       {isAddFormOpen && (
//         <AddPrizeForm
//           onSubmit={handleAddPrize}
//           onClose={() => setIsAddFormOpen(false)}
//         />
//       )}
//       {isEditFormOpen && (
//         <EditPrizeForm
//           prize={editingPrize}
//           onSubmit={handleEditPrize}
//           onClose={() => setIsEditFormOpen(false)}
//         />
//       )}
//     </div>
//   )
// }















'use client'
import React, { useState, useEffect } from 'react'
import PrizeList from '@/components/PrizeList'
import AddPrizeForm from '@/components/AddPrizeForm'
import EditPrizeForm from '@/components/EditPrizeForm'

export default function AwardsPage() {
  const [prizes, setPrizes] = useState([])
  const [isAddFormOpen, setIsAddFormOpen] = useState(false)
  const [isEditFormOpen, setIsEditFormOpen] = useState(false)
  const [editingPrize, setEditingPrize] = useState(null)

  useEffect(() => {
    fetchPrizes()
  }, [])

  const fetchPrizes = async () => {
    const response = await fetch('/api/prizes')
    const data = await response.json()
    setPrizes(data)
  }

  const handleAddPrize = async (prizeData) => {
    await fetch('/api/prizes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prizeData),
    })
    fetchPrizes()
    setIsAddFormOpen(false)
  }

  const handleEditPrize = async (prizeData) => {
    await fetch(`/api/prizes/${prizeData._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prizeData),
    })
    fetchPrizes()
    setIsEditFormOpen(false)
  }

  const handleDeletePrize = async (prizeId) => {
    await fetch(`/api/prizes/${prizeId}`, { method: 'DELETE' })
    fetchPrizes()
  }

  return (
    <div className="ml-64 p-4"> {/* Added ml-64 for sidebar width */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-blue-600 ">Awards Page</h1>
        <button
          onClick={() => setIsAddFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4 transition duration-300"
        >
          Add New Prize
        </button>
        <PrizeList
          prizes={prizes}
          onEdit={(prize) => {
            setEditingPrize(prize)
            setIsEditFormOpen(true)
          }}
          onDelete={handleDeletePrize}
        />
        {isAddFormOpen && (
          <AddPrizeForm
            onSubmit={handleAddPrize}
            onClose={() => setIsAddFormOpen(false)}
          />
        )}
        {isEditFormOpen && (
          <EditPrizeForm
            prize={editingPrize}
            onSubmit={handleEditPrize}
            onClose={() => setIsEditFormOpen(false)}
          />
        )}
      </div>
    </div>
  )
}