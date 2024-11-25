
// 'use client';

// import React from 'react';
// import { Users, ShoppingBag, MessageSquare, TrendingUp } from 'lucide-react';
// import { useState, useEffect } from 'react';

// export default function HomePage() {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [contacts, setContacts] = useState([]);
//     const [error, setError] = useState(null);
//     const [challenges, setChallenges] = useState([]);
//     const [events, setEvents] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [users, setUsers] = useState([]);
//     const [orders, setOrders] = useState([]);
//     const [totalSales, setTotalSales] = useState(0);
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const response = await fetch('/api/orders');
//             if (!response.ok) throw new Error('Failed to fetch orders');
//             const data = await response.json();
//             setOrders(data);
//             calculateTotalSales(data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const calculateTotalSales = (ordersData) => {
//         const total = ordersData.reduce((sum, order) => sum + order.totalAmount, 0);
//         setTotalSales(total);
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await fetch('/api/users');
//             const data = await response.json();
//             setUsers(data.users.filter(user => user.isActive === true));
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = async () => {
//         try {
//             const response = await fetch('/api/posts');
//             if (!response.ok) throw new Error('Failed to fetch posts');
//             const data = await response.json();
//             setPosts(data);
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };

//     useEffect(() => {
//         fetchEvents();
//     }, []);

//     useEffect(() => {
//         fetchChallenges();
//     }, []);

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     const fetchEvents = async () => {
//         try {
//             const response = await fetch('/api/events');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             setEvents(data.events);
//         } catch (err) {
//             console.error('Error fetching events:', err);
//             setError('Failed to fetch events. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const fetchChallenges = async () => {
//         const response = await fetch('/api/challenges');
//         const data = await response.json();
//         setChallenges(data);
//     };

//     const fetchContacts = async () => {
//         try {
//             const res = await fetch('/api/contact');
//             if (!res.ok) {
//                 throw new Error('Failed to fetch contacts');
//             }
//             const data = await res.json();
//             setContacts(data);
//         } catch (error) {
//             console.error('Error fetching contacts:', error);
//         }
//     };

//     const fetchProducts = async () => {
//         try {
//             const response = await fetch('/api/products');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch products');
//             }
//             const data = await response.json();
//             setProducts(data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//             setError('Failed to load products. Please try again later.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="pl-64"> {/* Adjust for sidebar */}
//             <div className="p-8">
//                 <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {/* Active Users Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Active Users</h2>
//                             <Users className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="text-2xl text-green-600 font-bold">{users.length}</div>
//                     </div>

//                     {/* Total Products Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Products</h2>
//                             <ShoppingBag className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="text-2xl text-green-600 font-bold">{products.length}</div>
//                     </div>

//                     {/* Messages Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Messages</h2>
//                             <MessageSquare className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="text-2xl text-green-600 font-bold">{contacts.length}</div>
//                     </div>

//                     {/* Sales Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Sales</h2>
//                             <TrendingUp className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="text-2xl text-green-600 font-bold">${totalSales.toFixed(2)}</div>
//                     </div>

//                     {/* Challenges Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Challenges</h2>
//                             <TrendingUp className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="text-2xl text-green-600 font-bold">{challenges.length}</div>
//                     </div>

//                     {/* Events Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Events</h2>
//                             <TrendingUp className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="text-2xl text-green-600 font-bold">{events.length}</div>
//                     </div>

//                     {/* Orders Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Orders</h2>
//                             <TrendingUp className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="text-2xl text-green-600  font-bold">{orders.length}</div>
//                     </div>

//                     {/* Posts Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Posts</h2>
//                             <TrendingUp className="w-4 h-4 text-gray-500" />
//                         </div>
//                         <div className="text-2xl text-green-600  font-bold">{posts.length}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }














// 'use client';

// import React from 'react';
// import { Users, ShoppingBag, MessageSquare, DollarSign, Trophy, Calendar, ShoppingCart, FileText } from 'lucide-react';
// import { useState, useEffect } from 'react';

// export default function HomePage() {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [contacts, setContacts] = useState([]);
//     const [error, setError] = useState(null);
//     const [challenges, setChallenges] = useState([]);
//     const [events, setEvents] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [users, setUsers] = useState([]);
//     const [orders, setOrders] = useState([]);
//     const [totalSales, setTotalSales] = useState(0);
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const response = await fetch('/api/orders');
//             if (!response.ok) throw new Error('Failed to fetch orders');
//             const data = await response.json();
//             setOrders(data);
//             calculateTotalSales(data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const calculateTotalSales = (ordersData) => {
//         const total = ordersData.reduce((sum, order) => sum + order.totalAmount, 0);
//         setTotalSales(total);
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await fetch('/api/users');
//             const data = await response.json();
//             setUsers(data.users.filter(user => user.isActive === true));
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchPosts();
//     }, []);

//     const fetchPosts = async () => {
//         try {
//             const response = await fetch('/api/posts');
//             if (!response.ok) throw new Error('Failed to fetch posts');
//             const data = await response.json();
//             setPosts(data);
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };

//     useEffect(() => {
//         fetchEvents();
//     }, []);

//     useEffect(() => {
//         fetchChallenges();
//     }, []);

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     const fetchEvents = async () => {
//         try {
//             const response = await fetch('/api/events');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             setEvents(data.events);
//         } catch (err) {
//             console.error('Error fetching events:', err);
//             setError('Failed to fetch events. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const fetchChallenges = async () => {
//         const response = await fetch('/api/challenges');
//         const data = await response.json();
//         setChallenges(data);
//     };

//     const fetchContacts = async () => {
//         try {
//             const res = await fetch('/api/contact');
//             if (!res.ok) {
//                 throw new Error('Failed to fetch contacts');
//             }
//             const data = await res.json();
//             setContacts(data);
//         } catch (error) {
//             console.error('Error fetching contacts:', error);
//         }
//     };

//     const fetchProducts = async () => {
//         try {
//             const response = await fetch('/api/products');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch products');
//             }
//             const data = await response.json();
//             setProducts(data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//             setError('Failed to load products. Please try again later.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="pl-64"> {/* Adjust for sidebar */}
//             <div className="p-8">
//                 <h1 className="text-3xl font-bold mb-8 text-blue-600 ">Dashboard</h1>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {/* Active Users Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Active Users</h2>
//                             <Users className="w-4 h-4 text-blue-500" />
//                         </div>
//                         <div className="text-2xl text-blue-600 font-bold">{users.length}</div>
//                     </div>

//                     {/* Total Products Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Products</h2>
//                             <ShoppingBag className="w-4 h-4 text-blue-500" />
//                         </div>
//                         <div className="text-2xl text-blue-600 font-bold">{products.length}</div>
//                     </div>

//                     {/* Messages Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Messages</h2>
//                             <MessageSquare className="w-4 h-4 text-blue-500" />
//                         </div>
//                         <div className="text-2xl text-blue-600 font-bold">{contacts.length}</div>
//                     </div>

//                     {/* Sales Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Sales</h2>
//                             <DollarSign className="w-4 h-4 text-blue-500" />
//                         </div>
//                         <div className="text-2xl text-blue-600 font-bold">${totalSales.toFixed(2)}</div>
//                     </div>

//                     {/* Challenges Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Challenges</h2>
//                             <Trophy className="w-4 h-4 text-blue-500" />
//                         </div>
//                         <div className="text-2xl text-blue-600 font-bold">{challenges.length}</div>
//                     </div>

//                     {/* Events Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Events</h2>
//                             <Calendar className="w-4 h-4 text-blue-500" />
//                         </div>
//                         <div className="text-2xl text-blue-600 font-bold">{events.length}</div>
//                     </div>

//                     {/* Orders Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Orders</h2>
//                             <ShoppingCart className="w-4 h-4 text-blue-500" />
//                         </div>
//                         <div className="text-2xl text-blue-600  font-bold">{orders.length}</div>
//                     </div>

//                     {/* Posts Card */}
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-sm font-medium text-gray-600">Total Posts</h2>
//                             <FileText className="w-4 h-4 text-blue-500" />
//                         </div>
//                         <div className="text-2xl text-blue-600  font-bold">{posts.length}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }











'use client';

import React from 'react';
import { Users, ShoppingBag, MessageSquare, DollarSign, Trophy, Calendar, ShoppingCart, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);
    const [challenges, setChallenges] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [totalSales, setTotalSales] = useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            if (!response.ok) throw new Error('Failed to fetch orders');
            const data = await response.json();
            setOrders(data);
            calculateTotalSales(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const calculateTotalSales = (ordersData) => {
        const total = ordersData.reduce((sum, order) => sum + order.totalAmount, 0);
        setTotalSales(total);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data.users.filter(user => user.isActive === true));
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/posts');
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    useEffect(() => {
        fetchChallenges();
    }, []);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch('/api/events');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setEvents(data.events);
        } catch (err) {
            console.error('Error fetching events:', err);
            setError('Failed to fetch events. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const fetchChallenges = async () => {
        const response = await fetch('/api/challenges');
        const data = await response.json();
        setChallenges(data);
    };

    const fetchContacts = async () => {
        try {
            const res = await fetch('/api/contact');
            if (!res.ok) {
                throw new Error('Failed to fetch contacts');
            }
            const data = await res.json();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError('Failed to load products. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pl-64"> {/* Adjust for sidebar */}
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-8 text-blue-600">Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Active Users Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-medium text-gray-600">Active Users</h2>
                            <Users className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl text-blue-600 font-bold">{users.length}</div>
                    </div>

                    {/* Total Products Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-medium text-gray-600">Total Products</h2>
                            <ShoppingBag className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl text-blue-600 font-bold">{products.length}</div>
                    </div>

                    {/* Messages Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-medium text-gray-600">Messages</h2>
                            <MessageSquare className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl text-blue-600 font-bold">{contacts.length}</div>
                    </div>

                    {/* Sales Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-medium text-gray-600">Total Sales</h2>
                            <DollarSign className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl text-blue-600 font-bold">${totalSales.toFixed(2)}</div>
                    </div>

                    {/* Challenges Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-medium text-gray-600">Total Challenges</h2>
                            <Trophy className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl text-blue-600 font-bold">{challenges.length}</div>
                    </div>

                    {/* Events Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-medium text-gray-600">Total Events</h2>
                            <Calendar className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl text-blue-600 font-bold">{events.length}</div>
                    </div>

                    {/* Orders Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-medium text-gray-600">Total Orders</h2>
                            <ShoppingCart className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl text-blue-600 font-bold">{orders.length}</div>
                    </div>

                    {/* Posts Card */}
                    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-medium text-gray-600">Total Posts</h2>
                            <FileText className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl text-blue-600 font-bold">{posts.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}