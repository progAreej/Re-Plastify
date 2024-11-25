// // src/contexts/CartContext.js
// "use client";

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(storedCart);
//   }, []);

//   const addToCart = (product) => {
//     setCart(prevCart => {
//       const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
//       if (existingProductIndex !== -1) {
//         const updatedCart = [...prevCart];
//         updatedCart[existingProductIndex].quantity += 1;
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//         return updatedCart;
//       } else {
//         const updatedCart = [...prevCart, { ...product, quantity: 1 }];
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//         return updatedCart;
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart(prevCart => {
//       const updatedCart = prevCart.filter(item => item._id !== productId);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     setCart(prevCart => {
//       const updatedCart = prevCart.map(item =>
//         item._id === productId ? { ...item, quantity: newQuantity } : item
//       );
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem('cart');
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };














// // src/contexts/CartContext.js
// "use client";

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [itemCount, setItemCount] = useState(0);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(storedCart);
//     updateItemCount(storedCart);
//   }, []);

//   const updateItemCount = (cartItems) => {
//     const count = cartItems.reduce((total, item) => total + item.quantity, 0);
//     setItemCount(count);
//   };

//   const addToCart = (product) => {
//     setCart(prevCart => {
//       const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
//       let updatedCart;
//       if (existingProductIndex !== -1) {
//         updatedCart = [...prevCart];
//         updatedCart[existingProductIndex].quantity += 1;
//       } else {
//         updatedCart = [...prevCart, { ...product, quantity: 1 }];
//       }
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       updateItemCount(updatedCart);
//       return updatedCart;
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart(prevCart => {
//       const updatedCart = prevCart.filter(item => item._id !== productId);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       updateItemCount(updatedCart);
//       return updatedCart;
//     });
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     setCart(prevCart => {
//       const updatedCart = prevCart.map(item =>
//         item._id === productId ? { ...item, quantity: newQuantity } : item
//       );
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       updateItemCount(updatedCart);
//       return updatedCart;
//     });
//   };

//   const clearCart = () => {
//     setCart([]);
//     setItemCount(0);
//     localStorage.removeItem('cart');
//   };

//   return (
//     <CartContext.Provider value={{ cart, itemCount, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };












// // src/contexts/CartContext.js
// "use client";

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [totalItems, setTotalItems] = useState(0);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(storedCart);
//     updateTotalItems(storedCart);
//   }, []);

//   const updateTotalItems = (cartItems) => {
//     const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//     setTotalItems(total);
//   };

//   const addToCart = (product) => {
//     setCart(prevCart => {
//       const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
//       let updatedCart;
//       if (existingProductIndex !== -1) {
//         updatedCart = [...prevCart];
//         updatedCart[existingProductIndex].quantity += 1;
//       } else {
//         updatedCart = [...prevCart, { ...product, quantity: 1 }];
//       }
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       updateTotalItems(updatedCart);
//       return updatedCart;
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart(prevCart => {
//       const updatedCart = prevCart.filter(item => item._id !== productId);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       updateTotalItems(updatedCart);
//       return updatedCart;
//     });
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     setCart(prevCart => {
//       const updatedCart = prevCart.map(item =>
//         item._id === productId ? { ...item, quantity: newQuantity } : item
//       );
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//       updateTotalItems(updatedCart);
//       return updatedCart;
//     });
//   };

//   const clearCart = () => {
//     setCart([]);
//     setTotalItems(0);
//     localStorage.removeItem('cart');
//   };

//   return (
//     <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };










"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    updateTotalItems(storedCart);
  }, []);

  const updateTotalItems = (cartItems) => {
    const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(total);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
      let updatedCart;
      if (existingProductIndex !== -1) {
        updatedCart = prevCart.map((item, index) => 
          index === existingProductIndex 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateTotalItems(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item._id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateTotalItems(updatedCart);
      return updatedCart;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      updateTotalItems(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotalItems(0);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};