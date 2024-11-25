
'use client'

// import React, { useState, useEffect } from 'react';
// import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

// export default function OrdersComponent() {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const ordersPerPage = 5;

//     const fetchOrders = async () => {
//         try {
//             const response = await fetch('/api/orders');
//             if (!response.ok) throw new Error('Failed to fetch orders');
//             const data = await response.json();
//             setOrders(data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const updateOrderStatus = async (orderId, newStatus) => {
//         try {
//             const response = await fetch('/api/orders', {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ orderId, status: newStatus }),
//             });
            
//             if (!response.ok) throw new Error('Failed to update order');
            
//             const updatedOrder = await response.json();
//             setOrders(orders.map(order => 
//                 order._id === updatedOrder._id ? updatedOrder : order
//             ));
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     const filteredOrders = orders.filter(order =>
//         order.user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.products.some(product => 
//             product.product.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//     );

//     const indexOfLastOrder = currentPage * ordersPerPage;
//     const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//     const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

//     const paginate = (direction) => {
//         if (direction === 'next' && indexOfLastOrder < filteredOrders.length) {
//             setCurrentPage(currentPage + 1);
//         } else if (direction === 'prev' && currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     if (loading) return <div className="flex justify-center items-center h-screen">Loading orders...</div>;
//     if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

//     return (
//         <div className="flex-1 p-4 md:p-10 bg-gray-100 min-h-screen ml-64">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//                 <h2 className="text-3xl font-bold mb-6 text-blue-700">Orders</h2>
//                 <div className="mb-4 relative">
//                     <input
//                         type="text"
//                         placeholder="Search orders..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-full p-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <Search className="absolute right-3 top-2.5 text-gray-400" />
//                 </div>
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full table-auto">
//                         <thead className="bg-blue-100">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Email</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">User Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Products</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Total Amount</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Status</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Created At</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {currentOrders.map((order) => (
//                                 <tr key={order._id} className="hover:bg-gray-50">
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.user.email}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.user.username}</td>
//                                     <td className="px-6 py-4 text-sm text-gray-500">
//                                         {order.products.map((item, index) => (
//                                             <div key={index} className="mb-1">
//                                                 {item.product.name} x {item.quantity}
//                                             </div>
//                                         ))}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.totalAmount.toFixed(2)}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <select 
//                                             value={order.status}
//                                             onChange={(e) => updateOrderStatus(order._id, e.target.value)}
//                                             className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                                         >
//                                             <option value="pending">Pending</option>
//                                             <option value="processing">Processing</option>
//                                             <option value="shipped">Shipped</option>
//                                             <option value="delivered">Delivered</option>
//                                         </select>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         {new Date(order.createdAt).toLocaleDateString()}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="mt-4 flex justify-between items-center">
//                     <button
//                         onClick={() => paginate('prev')}
//                         disabled={currentPage === 1}
//                         className={`flex items-center px-4 py-2 border rounded ${
//                             currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-500 hover:bg-blue-100'
//                         }`}
//                     >
//                         <ChevronLeft className="mr-2" size={20} />
//                         Previous
//                     </button>
//                     <span className="text-sm text-gray-700">
//                         Page {currentPage} of {Math.ceil(filteredOrders.length / ordersPerPage)}
//                     </span>
//                     <button
//                         onClick={() => paginate('next')}
//                         disabled={indexOfLastOrder >= filteredOrders.length}
//                         className={`flex items-center px-4 py-2 border rounded ${
//                             indexOfLastOrder >= filteredOrders.length ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-500 hover:bg-blue-100'
//                         }`}
//                     >
//                         Next
//                         <ChevronRight className="ml-2" size={20} />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }











import React, { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export default function OrdersComponent() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 5;

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            if (!response.ok) throw new Error('Failed to fetch orders');
            const data = await response.json();
            setOrders(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            const response = await fetch('/api/orders', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderId, status: newStatus }),
            });
            
            if (!response.ok) throw new Error('Failed to update order');
            
            const updatedOrder = await response.json();
            setOrders(orders.map(order => 
                order._id === updatedOrder._id ? updatedOrder : order
            ));
        } catch (err) {
            setError(err.message);
        }
    };

    const filteredOrders = orders.filter(order =>
        (order.user?.username?.toLowerCase().includes(searchTerm.toLowerCase()) || '') ||
        order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.products.some(product => 
            product.product?.name?.toLowerCase().includes(searchTerm.toLowerCase()) || ''
        )
    );

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (direction) => {
        if (direction === 'next' && indexOfLastOrder < filteredOrders.length) {
            setCurrentPage(currentPage + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) return <div className="flex justify-center items-center h-screen">Loading orders...</div>;
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

    return (
        <div className="flex-1 p-4 md:p-10 bg-gray-100 min-h-screen ml-64">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold mb-6 text-blue-700">Orders</h2>
                <div className="mb-4 relative">
                    <input
                        type="text"
                        placeholder="Search orders..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-400" />
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">User Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Products</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Total Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Created At</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentOrders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.user?.email || 'N/A'}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.user?.username || 'N/A'}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {order.products.map((item, index) => (
                                            <div key={index} className="mb-1">
                                                {item.product?.name || 'Unknown Product'} x {item.quantity}
                                            </div>
                                        ))}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.totalAmount.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <select 
                                            value={order.status}
                                            onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="processing">Processing</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={() => paginate('prev')}
                        disabled={currentPage === 1}
                        className={`flex items-center px-4 py-2 border rounded ${
                            currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-500 hover:bg-blue-100'
                        }`}
                    >
                        <ChevronLeft className="mr-2" size={20} />
                        Previous
                    </button>
                    <span className="text-sm text-gray-700">
                        Page {currentPage} of {Math.ceil(filteredOrders.length / ordersPerPage)}
                    </span>
                    <button
                        onClick={() => paginate('next')}
                        disabled={indexOfLastOrder >= filteredOrders.length}
                        className={`flex items-center px-4 py-2 border rounded ${
                            indexOfLastOrder >= filteredOrders.length ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-blue-500 hover:bg-blue-100'
                        }`}
                    >
                        Next
                        <ChevronRight className="ml-2" size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}