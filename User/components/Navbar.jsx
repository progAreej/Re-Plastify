

// "use client"
// import React, { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import { ShoppingCart, LogOut, LogIn, Menu, X ,User} from "lucide-react";
// import Cookies from "js-cookie";
// import { useCart } from "../app/contexts/CartContext";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const isAuthPage = pathname === "/login" || pathname === "/signup";
//   const [hasToken, setHasToken] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const { totalItems } = useCart();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const token = Cookies.get("token");
//     setHasToken(!!token);
//     checkLoginStatus();

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pathname]);

//   const checkLoginStatus = async () => {
//     try {
//       const response = await fetch("/api/auth/check", {
//         method: "GET",
//         credentials: "include",
//       });
//       const data = await response.json();
//       setIsLoggedIn(data.isLoggedIn);
//       setHasToken(data.isLoggedIn);
//     } catch (error) {
//       console.error("Error checking login status:", error);
//       setIsLoggedIn(false);
//       setHasToken(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("/api/auth/logout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//       });
//       const data = await response.json();
//       if (data.success) {
//         Cookies.remove("token");
//         setHasToken(false);
//         setIsLoggedIn(false);
//         router.push("/login");
//       } else {
//         console.error("Logout failed");
//       }
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   const handleLogin = () => router.push("/login");

//   if (isAuthPage) return null;

//   const backgroundColor = scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent';
//   const textColor = 'text-green'; // Changed to green

//   const NavLink = ({ href, children }) => (
//     <Link href={href}>
//       <motion.span
//         className={`${textColor} px-3 py-2 rounded-md text-sm font-medium hover:text-blueD`} // Added hover state
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {children}
//       </motion.span>
//     </Link>
//   );

//   return (
//     <nav className={`${backgroundColor} transition-all duration-300 fixed w-full z-10`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <img className="h-12 w-auto mr-2" src="/Logo2.png" alt="Logo" />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">

// <div className="ml-10 flex items-baseline space-x-4 text-green ">
//     <Link href="/" >
//       Home
//     </Link>
//     <Link href="/about" >
//       Our Story
//     </Link>
//     <Link href="/challenges" >
//       Challenges
//     </Link>
//     <Link href="/communities" >
//       Community
//     </Link>
//     <Link href="/AllProducts" >
//       Our Products
//     </Link>
//     <Link href="/contact" >
//       Contact us
//     </Link>
//     {hasToken && (
//       <Link href="/profile" >
//         <User size={24} />
//       </Link>
//     )}
//   </div>
//           </div>

//           <div className="hidden md:flex items-center">
//             <Link href="/cart">
//               <motion.div 
//                 className="relative p-2 rounded-full"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <ShoppingCart className={`h-6 w-6 ${textColor}`} />
//                 {totalItems > 0 && (
//                   <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//                     {totalItems}
//                   </span>
//                 )}
//               </motion.div>
//             </Link>
//             {hasToken ? (
//               <motion.button
//                 onClick={handleLogout}
//                 className={`ml-4 ${textColor} hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <LogOut className="h-5 w-5 mr-2 inline" />
//                 Log out
//               </motion.button>
//             ) : (
//               <motion.button
//                 onClick={handleLogin}
//                 className={`ml-4 ${textColor} hover:bg-green hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <LogIn className="h-5 w-5 mr-2 inline" />
//                 Log in
//               </motion.button>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <motion.button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className={`${textColor} inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             className="md:hidden sticky top-0"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${backgroundColor}`}>
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/about">Our Story</NavLink>
//               <NavLink href="/challenges">Challenges</NavLink>
//               <NavLink href="/communities">Community</NavLink>
//               <NavLink href="/AllProducts">Our Products</NavLink>
//               <NavLink href="/contact">Contact us</NavLink>
//               {hasToken && <NavLink href="/profile">
//     <User size={24} />
//   </NavLink>}
//               <NavLink href="/cart">
//                 Cart ({totalItems})
//               </NavLink>
//               {hasToken ? (
//                 <motion.button
//                   onClick={handleLogout}
//                   className={`w-full text-left ${textColor} hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-base font-medium`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <LogOut className="h-5 w-5 mr-2 inline" />
//                   Log out
//                 </motion.button>
//               ) : (
//                 <motion.button
//                   onClick={handleLogin}
//                   className={`w-full text-left ${textColor} hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-base font-medium`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <LogIn className="h-5 w-5 mr-2 inline" />
//                   Log in
//                 </motion.button>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, LogOut, LogIn, Menu, X, User } from "lucide-react";
import Cookies from "js-cookie";
import { useCart } from "../app/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const [hasToken, setHasToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setHasToken(!!token);
    checkLoginStatus();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const checkLoginStatus = async () => {
    try {
      const response = await fetch("/api/auth/check", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setIsLoggedIn(data.isLoggedIn);
      setHasToken(data.isLoggedIn);
    } catch (error) {
      console.error("Error checking login status:", error);
      setIsLoggedIn(false);
      setHasToken(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        Cookies.remove("token");
        setHasToken(false);
        setIsLoggedIn(false);
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleLogin = () => router.push("/login");

  if (isAuthPage) return null;

  const backgroundColor = scrollY > 50 || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent';
  const textColor = 'text-green'; // Changed to green

  const NavLink = ({ href, children }) => (
    <Link href={href}>
      <motion.span
        className={`${textColor} px-3 py-2 rounded-md text-sm font-medium hover:text-blueD`} // Added hover state
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  );

  return (
    <nav className={`${backgroundColor} transition-all duration-300 fixed w-full z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img className="h-12 w-auto mr-2" src="/Logo2.png" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-green">
              <Link href="/">Home</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/challenges">Challenges</Link>
              <Link href="/communities">Community</Link>
              <Link href="/AllProducts">Our Products</Link>
              <Link href="/contact">Contact us</Link>
              {hasToken && (
                <Link href="/profile">
                  <User size={24} />
                </Link>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/cart">
              <motion.div
                className="relative p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart className={`h-6 w-6 ${textColor}`} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {totalItems}
                  </span>
                )}
              </motion.div>
            </Link>
            {hasToken ? (
              <motion.button
                onClick={handleLogout}
                className={`ml-4 ${textColor} hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut className="h-5 w-5 mr-2 inline" />
                Log out
              </motion.button>
            ) : (
              <motion.button
                onClick={handleLogin}
                className={`ml-4 ${textColor} hover:bg-green hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="h-5 w-5 mr-2 inline" />
                Log in
              </motion.button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden sticky top-0 z-50 bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${backgroundColor}`}>
              <NavLink href="/">Home</NavLink><br />
              <NavLink href="/about">Our Story</NavLink><br />
              <NavLink href="/challenges">Challenges</NavLink><br />
              <NavLink href="/communities">Community</NavLink><br />
              <NavLink href="/AllProducts">Our Products</NavLink><br />
              <NavLink href="/contact">Contact us</NavLink><br />
              {hasToken && <NavLink href="/profile"><User size={24} /></NavLink>}<br />
              <NavLink href="/cart">Cart ({totalItems})</NavLink><br />
              {hasToken ? (
                <motion.button
                  onClick={handleLogout}
                  className={`w-full text-left ${textColor} hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-base font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut className="h-5 w-5 mr-2 inline" />
                  Log out
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleLogin}
                  className={`w-full text-left ${textColor} hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-base font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogIn className="h-5 w-5 mr-2 inline" />
                  Log in
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
