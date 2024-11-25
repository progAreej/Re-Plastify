
// 'use client';

// import React from 'react';
// import Link from 'next/link';

// export default function ProductsSection() {
//     return (
//         <div className="pl-64"> {/* Add left padding equal to sidebar width */}
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-3xl font-bold mb-6">Our Products</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {Array.from({ length: 6 }).map((_, index) => (
//                             <div key={index} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
//                                 <img
//                                     src={`/api/placeholder/150/150?text=Product+${index + 1}`}
//                                     alt={`Product ${index + 1}`}
//                                     className="w-full h-40 object-cover rounded-md"
//                                 />
//                                 <h3 className="mt-2 text-lg font-semibold">Product {index + 1}</h3>
//                                 <p className="mt-1 text-gray-600">Eco-friendly and sustainable.</p>
//                                 <Link
//                                     href={`/product/${index + 1}`}
//                                     className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
//                                 >
//                                     View Product
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }








///////////////////bbbbbbbbbbbb



// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Plus, X } from 'lucide-react';

// export default function ProductsSection() {
//     const [showForm, setShowForm] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [products, setProducts] = useState(Array.from({ length: 6 }).map((_, index) => ({
//         id: index + 1,
//         name: `Product ${index + 1}`,
//         description: "Eco-friendly and sustainable.",
//         image: `/api/placeholder/150/150?text=Product+${index + 1}`,
//     })));

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         const formData = new FormData(e.target);
//         const productData = {
//             name: formData.get('name'),
//             description: formData.get('description'),
//             price: parseFloat(formData.get('price')),
//             quantity: parseInt(formData.get('quantity')),
//             image: formData.get('image'),
//         };

//         try {
//             const response = await fetch('/api/products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(productData),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to add product');
//             }

//             const newProduct = await response.json();
//             setProducts([...products, newProduct]);
//             setShowForm(false);
//             e.target.reset();
//         } catch (error) {
//             console.error('Error adding product:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="pl-64">
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-3xl font-bold">Our Products</h2>
//                         <button
//                             onClick={() => setShowForm(true)}
//                             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                         >
//                             <Plus className="w-5 h-5 mr-2" /> Add Product
//                         </button>
//                     </div>

//                     {/* Product Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {products.map((product) => (
//                             <div key={product.id} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="w-full h-40 object-cover rounded-md"
//                                 />
//                                 <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//                                 <p className="mt-1 text-gray-600">{product.description}</p>
//                                 <Link
//                                     href={`/product/${product.id}`}
//                                     className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
//                                 >
//                                     View Product
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Add Product Form Modal */}
//                     {showForm && (
//                         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                             <div className="bg-white p-6 rounded-lg w-full max-w-md">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h3 className="text-xl font-bold">Add New Product</h3>
//                                     <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
//                                         <X className="w-6 h-6" />
//                                     </button>
//                                 </div>
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="mb-4">
//                                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
//                                         <input type="text" id="name" name="name" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//                                         <textarea id="description" name="description" rows="3" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         ></textarea>
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
//                                         <input type="number" id="price" name="price" step="0.01" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
//                                         <input type="number" id="quantity" name="quantity" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
//                                         <input type="text" id="image" name="image" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <button type="submit" disabled={isLoading}
//                                         className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
//                                     >
//                                         {isLoading ? 'Adding...' : 'Add Product'}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </div>
//     );
// }









// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Plus, X, Loader2 } from 'lucide-react';

// export default function ProductsSection() {
//     const [showForm, setShowForm] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const [products, setProducts] = useState(Array.from({ length: 6 }).map((_, index) => ({
//         id: index + 1,
//         name: `Product ${index + 1}`,
//         description: "Eco-friendly and sustainable.",
//         image: `/api/placeholder/150/150?text=Product+${index + 1}`,
//     })));

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         const formData = new FormData(e.target);

//         try {
//             const response = await fetch('/api/products', {
//                 method: 'POST',
//                 body: formData, // Send the FormData directly
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to add product');
//             }

//             const newProduct = await response.json();
//             setProducts([...products, newProduct]);
//             setShowForm(false);
//             e.target.reset();
//         } catch (error) {
//             console.error('Error adding product:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="pl-64">
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-3xl font-bold">Our Products</h2>
//                         <button
//                             onClick={() => setShowForm(true)}
//                             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                         >
//                             <Plus className="w-5 h-5 mr-2" /> Add Product
//                         </button>
//                     </div>

//                     {/* Product Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {products.map((product) => (
//                             <div key={product.id} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="w-full h-40 object-cover rounded-md"
//                                 />
//                                 <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//                                 <p className="mt-1 text-gray-600">{product.description}</p>
//                                 <Link
//                                     href={`/product/${product.id}`}
//                                     className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
//                                 >
//                                     View Product
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Add Product Form Modal */}
//                     {showForm && (
//                         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                             <div className="bg-white p-6 rounded-lg w-full max-w-md">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h3 className="text-xl font-bold">Add New Product</h3>
//                                     <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
//                                         <X className="w-6 h-6" />
//                                     </button>
//                                 </div>
//                                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                                     <div className="mb-4">
//                                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
//                                         <input type="text" id="name" name="name" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//                                         <textarea id="description" name="description" rows="3" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         ></textarea>
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
//                                         <input type="number" id="price" name="price" step="0.01" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
//                                         <input type="number" id="quantity" name="quantity" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
//                                         <input type="file" id="image" name="image" accept="image/*" required
//                                             className="mt-1 block w-full text-sm text-gray-500
//                                                 file:mr-4 file:py-2 file:px-4
//                                                 file:rounded-md file:border-0
//                                                 file:text-sm file:font-semibold
//                                                 file:bg-blue-50 file:text-blue-700
//                                                 hover:file:bg-blue-100"
//                                         />
//                                     </div>
//                                     <button type="submit" disabled={isLoading}
//                                         className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center justify-center"
//                                     >
//                                         {isLoading ? (
//                                             <>
//                                                 <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                                                 Adding...
//                                             </>
//                                         ) : 'Add Product'}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </div>
//     );
// }





// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Plus, X, Loader2 } from 'lucide-react';

// export default function ProductsSection() {
//     const [showForm, setShowForm] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchProducts();
//     }, []);

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

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const formData = new FormData(e.target);

//         try {
//             const response = await fetch('/api/products', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to add product');
//             }

//             const newProduct = await response.json();
//             setProducts([...products, newProduct]);
//             setShowForm(false);
//             e.target.reset();
//         } catch (error) {
//             console.error('Error adding product:', error);
//             setError('Failed to add product. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="text-center text-red-600 mt-10">
//                 <p>{error}</p>
//                 <button onClick={fetchProducts} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
//                     Retry
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="pl-64">
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-3xl font-bold">Our Products</h2>
//                         <button
//                             onClick={() => setShowForm(true)}
//                             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                         >
//                             <Plus className="w-5 h-5 mr-2" /> Add Product
//                         </button>
//                     </div>

//                     {/* Product Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {products.map((product) => (
//                             <div key={product._id} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="w-full h-40 object-cover rounded-md"
//                                 />
//                                 <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//                                 <p className="mt-1 text-gray-600">{product.description}</p>
//                                 <p className="mt-1 font-bold">${product.price.toFixed(2)}</p>
//                                 <p className="mt-1 text-sm text-gray-500">In stock: {product.quantity}</p>
//                                 <Link
//                                     href={`/product/${product._id}`}
//                                     className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
//                                 >
//                                     View Product
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Add Product Form Modal */}
//                     {showForm && (
//                         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                             <div className="bg-white p-6 rounded-lg w-full max-w-md">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h3 className="text-xl font-bold">Add New Product</h3>
//                                     <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
//                                         <X className="w-6 h-6" />
//                                     </button>
//                                 </div>
//                                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                                     <div className="mb-4">
//                                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
//                                         <input type="text" id="name" name="name" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//                                         <textarea id="description" name="description" rows="3" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         ></textarea>
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
//                                         <input type="number" id="price" name="price" step="0.01" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
//                                         <input type="number" id="quantity" name="quantity" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
//                                         <input type="file" id="image" name="image" accept="image/*" required
//                                             className="mt-1 block w-full text-sm text-gray-500
//                                                 file:mr-4 file:py-2 file:px-4
//                                                 file:rounded-md file:border-0
//                                                 file:text-sm file:font-semibold
//                                                 file:bg-blue-50 file:text-blue-700
//                                                 hover:file:bg-blue-100"
//                                         />
//                                     </div>
//                                     <button type="submit" disabled={isSubmitting}
//                                         className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center justify-center"
//                                     >
//                                         {isSubmitting ? (
//                                             <>
//                                                 <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                                                 Adding...
//                                             </>
//                                         ) : 'Add Product'}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </div>
//     );
// }












// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Plus, X, Loader2 } from 'lucide-react';

// export default function ProductsSection() {
//     const [showForm, setShowForm] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     useEffect(() => {
//         fetchProducts();
//     }, []);

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

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const formData = new FormData(e.target);

//         try {
//             const response = await fetch('/api/products', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to add product');
//             }

//             const newProduct = await response.json();
//             setProducts([...products, newProduct]);
//             setShowForm(false);
//             e.target.reset();
//         } catch (error) {
//             console.error('Error adding product:', error);
//             setError('Failed to add product. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="text-center text-red-600 mt-10">
//                 <p>{error}</p>
//                 <button onClick={fetchProducts} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
//                     Retry
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="pl-64">
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-3xl font-bold">Our Products</h2>
//                         <button
//                             onClick={() => setShowForm(true)}
//                             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                         >
//                             <Plus className="w-5 h-5 mr-2" /> Add Product
//                         </button>
//                     </div>

//                     {/* Product Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {products.map((product) => (
//                             <div key={product._id} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="w-full h-40 object-cover rounded-md"
//                                 />
//                                 <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//                                 <p className="mt-1 font-bold">${product.price.toFixed(2)}</p>
//                                 <p className="mt-1 text-sm text-gray-500">In stock: {product.quantity}</p>
//                                 <button
//                                     onClick={() => setSelectedProduct(product)}
//                                     className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
//                                 >
//                                     View Product
//                                 </button>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Add Product Form Modal */}
//                     {showForm && (
//                         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                             <div className="bg-white p-6 rounded-lg w-full max-w-md">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h3 className="text-xl font-bold">Add New Product</h3>
//                                     <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
//                                         <X className="w-6 h-6" />
//                                     </button>
//                                 </div>
//                                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                                     {/* Form fields remain the same */}

//                                     <div className="mb-4">
//                                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
//                                          <input type="text" id="name" name="name" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//                                         <textarea id="description" name="description" rows="3" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         ></textarea>
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
//                                         <input type="number" id="price" name="price" step="0.01" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
//                                         <input type="number" id="quantity" name="quantity" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
//                                         <input type="file" id="image" name="image" accept="image/*" required
//                                             className="mt-1 block w-full text-sm text-gray-500
//                                                 file:mr-4 file:py-2 file:px-4
//                                                 file:rounded-md file:border-0
//                                                 file:text-sm file:font-semibold
//                                                 file:bg-blue-50 file:text-blue-700
//                                                 hover:file:bg-blue-100"
//                                         />
//                                     </div>
//                                     <button type="submit" disabled={isSubmitting}
//                                         className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center justify-center"
//                                     >
//                                         {isSubmitting ? (
//                                             <>
//                                                 <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                                                 Adding...
//                                             </>
//                                         ) : 'Add Product'}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     )}

//                     {/* Product Details Popup */}
//                     {/* {selectedProduct && (
//                         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                             <div className="bg-white p-6 rounded-lg w-full max-w-md">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
//                                     <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-gray-700">
//                                         <X className="w-6 h-6" />
//                                     </button>
//                                 </div>
//                                 <img
//                                     src={selectedProduct.image}
//                                     alt={selectedProduct.name}
//                                     className="w-full h-48 object-cover rounded-md mb-4"
//                                 />
//                                 <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
//                                 <p className="font-bold text-lg mb-2">${selectedProduct.price.toFixed(2)}</p>
//                                 <p className="text-sm text-gray-500">In stock: {selectedProduct.quantity}</p>
//                             </div>
//                         </div>
//                     )} */}



//                     {/* Product Details Popup */}
// {selectedProduct && (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-6 rounded-lg w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
//                 <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-gray-700">
//                     <X className="w-6 h-6" />
//                 </button>
//             </div>
//             <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <div className="h-24 overflow-y-auto mb-2"> {/* ضبط الارتفاع وإضافة تمرير */}
//                 <p className="text-gray-600">{selectedProduct.description}</p>
//             </div>
//             <p className="font-bold text-lg mb-2">${selectedProduct.price.toFixed(2)}</p>
//             <p className="text-sm text-gray-500">In stock: {selectedProduct.quantity}</p>
//         </div>
//     </div>
// )}

//                 </div>
//             </section>
//         </div>
//     );
// }














// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Plus, X, Loader2, Search } from 'lucide-react';

// export default function ProductsSection() {
//     const [showForm, setShowForm] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);
//     const [selectedProduct, setSelectedProduct] = useState(null);
    
//     // New states for search and pagination
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const productsPerPage = 6;

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     useEffect(() => {
//         // Filter products based on search term
//         const filtered = products.filter(product =>
//             product.name.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredProducts(filtered);
//         setCurrentPage(1); // Reset to first page when search changes
//     }, [searchTerm, products]);

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

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const formData = new FormData(e.target);

//         try {
//             const response = await fetch('/api/products', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to add product');
//             }

//             const newProduct = await response.json();
//             setProducts([...products, newProduct]);
//             setShowForm(false);
//             e.target.reset();
//         } catch (error) {
//             console.error('Error adding product:', error);
//             setError('Failed to add product. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // Pagination logic
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//     const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="text-center text-red-600 mt-10">
//                 <p>{error}</p>
//                 <button onClick={fetchProducts} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
//                     Retry
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="pl-64">
//             <section className="py-20">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center mb-6">
//                         <h2 className="text-3xl font-bold text-blue-600 ">Our Products</h2>
//                         <button
//                             onClick={() => setShowForm(true)}
//                             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                         >
//                             <Plus className="w-5 h-5 mr-2" /> Add Product
//                         </button>
//                     </div>

//                     {/* Search Bar */}
//                     <div className="mb-6 relative">
//                         <input
//                             type="text"
//                             placeholder="Search products..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="w-full px-4 py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
//                         />
//                         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
//                     </div>

//                     {/* Product Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {currentProducts.map((product) => (
//                             <div key={product._id} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="w-full h-40 object-cover rounded-md"
//                                 />
//                                 <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
//                                 <p className="mt-1 font-bold">${product.price.toFixed(2)}</p>
//                                 <p className="mt-1 text-sm text-gray-500">In stock: {product.quantity}</p>
//                                 <button
//                                     onClick={() => setSelectedProduct(product)}
//                                     className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
//                                 >
//                                     View Product
//                                 </button>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Pagination */}
//                     {totalPages > 1 && (
//                         <div className="flex justify-center mt-8">
//                             {[...Array(totalPages)].map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => paginate(index + 1)}
//                                     className={`mx-1 px-4 py-2 rounded-md ${
//                                         currentPage === index + 1
//                                             ? 'bg-blue-600 text-white'
//                                             : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                     }`}
//                                 >
//                                     {index + 1}
//                                 </button>
//                             ))}
//                         </div>
//                     )}

//                     {/* Add Product Form Modal */}
//                     {showForm && (
//                         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                             <div className="bg-white p-6 rounded-lg w-full max-w-md">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h3 className="text-xl font-bold">Add New Product</h3>
//                                     <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
//                                         <X className="w-6 h-6" />
//                                     </button>
//                                 </div>
//                                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                                     <div className="mb-4">
//                                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
//                                          <input type="text" id="name" name="name" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//                                         <textarea id="description" name="description" rows="3" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         ></textarea>
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
//                                         <input type="number" id="price" name="price" step="0.01" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
//                                         <input type="number" id="quantity" name="quantity" required
//                                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
//                                         <input type="file" id="image" name="image" accept="image/*" required
//                                             className="mt-1 block w-full text-sm text-gray-500
//                                                 file:mr-4 file:py-2 file:px-4
//                                                 file:rounded-md file:border-0
//                                                 file:text-sm file:font-semibold
//                                                 file:bg-blue-50 file:text-blue-700
//                                                 hover:file:bg-blue-100"
//                                         />
//                                     </div>
//                                     <button type="submit" disabled={isSubmitting}
//                                         className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center justify-center"
//                                     >
//                                         {isSubmitting ? (
//                                             <>
//                                                 <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                                                 Adding...
//                                             </>
//                                         ) : 'Add Product'}
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     )}

//                     {/* Product Details Popup */}
//                     {selectedProduct && (
//                         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                             <div className="bg-white p-6 rounded-lg w-full max-w-md">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
//                                     <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-gray-700">
//                                         <X className="w-6 h-6" />
//                                     </button>
//                                 </div>
//                                 <img
//                                     src={selectedProduct.image}
//                                     alt={selectedProduct.name}
//                                     className="w-full h-48 object-cover rounded-md mb-4"
//                                 />
//                                 <div className="h-24 overflow-y-auto mb-2">
//                                     <p className="text-gray-600">{selectedProduct.description}</p>
//                                 </div>
//                                 <p className="font-bold text-lg mb-2">${selectedProduct.price.toFixed(2)}</p>
//                                 <p className="text-sm text-gray-500">In stock: {selectedProduct.quantity}</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </div>
//     );
// }












'use client';

import React, { useState, useEffect } from 'react';
import { Plus, X, Loader2, Search, Edit, Trash } from 'lucide-react';
import Swal from 'sweetalert2';

export default function ProductsSection() {
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const productsPerPage = 6;

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [searchTerm, products]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const newProduct = await response.json();
            setProducts([...products, newProduct]);
            setShowForm(false);
            e.target.reset();
        } catch (error) {
            console.error('Error adding product:', error);
            setError('Failed to add product. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        try {
            const response = await fetch(`/api/products/${editingProduct._id}`, {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            const updatedProduct = await response.json();
            setProducts(products.map(p => p._id === updatedProduct._id ? updatedProduct : p));
            setEditingProduct(null);
        } catch (error) {
            console.error('Error updating product:', error);
            setError('Failed to update product. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (productId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`/api/products/${productId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Failed to delete product');
                }

                setProducts(products.filter(p => p._id !== productId));
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                );
            } catch (error) {
                console.error('Error deleting product:', error);
                Swal.fire(
                    'Error!',
                    'Failed to delete product. Please try again.',
                    'error'
                );
            }
        }
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 mt-10">
                <p>{error}</p>
                <button onClick={fetchProducts} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="pl-64">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-bold text-blue-600">Our Products</h2>
                        <button
                            onClick={() => setShowForm(true)}
                            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            <Plus className="w-5 h-5 mr-2" /> Add Product
                        </button>
                    </div>

                    <div className="mb-6 relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentProducts.map((product) => (
                            <div key={product._id} className="bg-white rounded-lg shadow-md p-4 transition transform hover:scale-105">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
                                <p className="mt-1 font-bold">${product.price.toFixed(2)}</p>
                                <p className="mt-1 text-sm text-gray-500">In stock: {product.quantity}</p>
                                <div className="mt-4 flex justify-between">
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleEdit(product)}
                                        className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-md"
                                    >
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="inline-block bg-red-500 text-white px-4 py-2 rounded-md"
                                    >
                                        <Trash className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={`mx-1 px-4 py-2 rounded-md ${
                                        currentPage === index + 1
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}

                    {showForm && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">Add New Product</h3>
                                    <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                                        <input type="text" id="name" name="name" required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea id="description" name="description" rows="3" required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                                        <input type="number" id="price" name="price" step="0.01" required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                                        <input type="number" id="quantity" name="quantity" required
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
                                        <input type="file" id="image" name="image" accept="image/*" required
                                            className="mt-1 block w-full text-sm text-gray-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-md file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-blue-50 file:text-blue-700
                                                hover:file:bg-blue-100"
                                        />
                                    </div>
                                    <button type="submit" disabled={isSubmitting}
                                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Adding...
                                            </>
                                        ) : 'Add Product'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {editingProduct && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">Edit Product</h3>
                                    <button onClick={() => setEditingProduct(null)} className="text-gray-500 hover:text-gray-700">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <form onSubmit={handleEditSubmit} encType="multipart/form-data">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                                        <input type="text" id="name" name="name" required
                                            defaultValue={editingProduct.name}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                                        <input type="number" id="price" name="price" step="0.01" required
                                            defaultValue={editingProduct.price}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                                        <input type="number" id="quantity" name="quantity" required
                                            defaultValue={editingProduct.quantity}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
                                        <input type="file" id="image" name="image" accept="image/*"
                                            className="mt-1 block w-full text-sm text-gray-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-md file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-blue-50 file:text-blue-700
                                                hover:file:bg-blue-100"
                                        />
                                    </div>
                                    <button type="submit" disabled={isSubmitting}
                                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Updating...
                                            </>
                                        ) : 'Update Product'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {selectedProduct && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
                                    <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-gray-700">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <div className="h-24 overflow-y-auto mb-2">
                                    <p className="text-gray-600">{selectedProduct.description}</p>
                                </div>
                                <p className="font-bold text-lg mb-2">${selectedProduct.price.toFixed(2)}</p>
                                <p className="text-sm text-gray-500">In stock: {selectedProduct.quantity}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}