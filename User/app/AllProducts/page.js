

// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useCart } from "../contexts/CartContext";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(6);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("/api/products");
//         console.log("Response from API:", response.data);
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const results = products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(results);
//     setCurrentPage(1);
//   }, [searchTerm, products]);

//   const handleAddToCart = (product) => {
//     addToCart(product);

//     Swal.fire({
//       title: "Added Successfully!",
//       text: `The product ${product.name} has been added to your shopping cart.`,
//       icon: "success",
//       confirmButtonText: "OK",
//       confirmButtonColor: "#10B981",
//       timer: 3000,
//       timerProgressBar: true,
//     });
//   };

//   const handleViewDetails = (product) => {
//     Swal.fire({
//       title: product.name,
//       html: `
//         <img src="${product.image || '/placeholder-image.jpg'}" alt="${product.name}" style="width: 100%; max-height: 200px; object-fit: cover; margin-bottom: 1rem;">
//         <p style="text-align: left; margin-bottom: 0.5rem;"><strong>Description:</strong> ${product.description}</p>
//         <p style="text-align: left; margin-bottom: 0.5rem;"><strong>Price:</strong> $${product.price.toFixed(2)}</p>
//         <p style="text-align: left; margin-bottom: 0.5rem;"><strong>Quantity:</strong> ${product.quantity || 'Not specified'}</p>
//         ${product.category ? `<p style="text-align: left; margin-bottom: 0.5rem;"><strong>Category:</strong> ${product.category}</p>` : ''}
//         ${product.brand ? `<p style="text-align: left; margin-bottom: 0.5rem;"><strong>Brand:</strong> ${product.brand}</p>` : ''}
//       `,
//       confirmButtonText: "Close",
//       confirmButtonColor: "#0080ff",
//       width: '600px',
//     });
//   };

//   // Pagination logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="container mx-auto px-4 py-20">
//       <h1 className="text-4xl font-bold mb-8 text-center text-green">
//         Our Products
//       </h1>
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {currentProducts.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             {product.image ? (
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//             ) : (
//               <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
//                 <span className="text-gray-500">No image available</span>
//               </div>
//             )}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-4 h-20 overflow-hidden">
//               Quantity : {product.quantity}
//               </p>
//               <div className="flex justify-between items-center">
//                 <p className="text-2xl font-bold text-green">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <div className="space-x-2">
//                   <button
//                     onClick={() => handleViewDetails(product)}
//                     className="bg-blue text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                   >
//                     View Details
//                   </button>
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className="bg-green text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 flex justify-center space-x-4">
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="bg-green text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={indexOfLastProduct >= filteredProducts.length}
//           className="bg-green text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "../contexts/CartContext";
import SearchBar from "@/components/SearchBar"; // Import the SearchBar component
import{ArrowRight,ArrowLeft} from 'lucide-react'
export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        console.log("Response from API:", response.data);
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
    setCurrentPage(1);
  }, [searchTerm, products]);

  const handleAddToCart = (product) => {
    addToCart(product);

    Swal.fire({
      title: "Added Successfully!",
      text: `The product ${product.name} has been added to your shopping cart.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#10B981",
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const handleViewDetails = (product) => {
    Swal.fire({
      title: product.name,
      html: `
        <img src="${product.image || '/placeholder-image.jpg'}" alt="${product.name}" style="width: 100%; max-height: 200px; object-fit: cover; margin-bottom: 1rem;">
        <p style="text-align: left; margin-bottom: 0.5rem;"><strong>Description:</strong> ${product.description}</p>
        <p style="text-align: left; margin-bottom: 0.5rem;"><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        <p style="text-align: left; margin-bottom: 0.5rem;"><strong>Quantity:</strong> ${product.quantity || 'Not specified'}</p>
        ${product.category ? `<p style="text-align: left; margin-bottom: 0.5rem;"><strong>Category:</strong> ${product.category}</p>` : ''}
        ${product.brand ? `<p style="text-align: left; margin-bottom: 0.5rem;"><strong>Brand:</strong> ${product.brand}</p>` : ''}
      `,
      confirmButtonText: "Close",
      confirmButtonColor: "#0080ff",
      width: '600px',
    });
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-green">
        Our Products
      </h1>
      {/* Use SearchBar Component */}
      <SearchBar 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 h-20 overflow-hidden">
                Quantity: {product.quantity}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-green">
                  ${product.price.toFixed(2)}
                </p>
                <div className="space-x-2">
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="bg-blue text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-green text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-green text-white py-2 px-4 rounded-md hover:bg-blueD transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
        >
                      <ArrowLeft className="w-5 h-5 mr-2" />

        </button>
        <span className="mx-2 flex items-center text-gray-700 text-lg">
            Page {currentPage}
          </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastProduct >= filteredProducts.length}
          className="bg-green text-white py-2 px-4 rounded-md hover:bg-blueD transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
        >
                      <ArrowRight className="w-5 h-5 mr-2" />

        </button>
      </div>

      
    </div>
  );
}
