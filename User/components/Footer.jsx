


// 'use client';

// import React from 'react';
// import { usePathname } from 'next/navigation';

// export default function Footer() {
//     const pathname = usePathname();
//     const isAuthPage = pathname === '/login' || pathname === '/signup';

//     if (isAuthPage) {
//         return null; 
//     }

//     return (
//         <footer className="bg-blueD text-white py-10">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="flex flex-col md:flex-row justify-between">
//                     {/* Links Section */}
//                     <div className="mb-6 md:mb-0">
//                         <h5 className="text-lg font-bold mb-2">Quick Links</h5>
//                         <ul className="space-y-2">
//                             <li>
//                                 <a href="/" className="hover:text-green-400">Home</a>
//                             </li>
//                             <li>
//                                 <a href="/about" className="hover:text-green-400">About Us</a>
//                             </li>
//                             <li>
//                                 <a href="/AllProducts" className="hover:text-green-400">Products</a>
//                             </li>
//                             <li>
//                                 <a href="/contact" className="hover:text-green-400">Contact</a>
//                             </li>
//                         </ul>
//                     </div>

              
//                 </div>

//                 {/* Description Section */}
//                 <div className="mt-10 border-t border-gray-600 pt-6 text-center">
//                     <p className="text-sm">
//                         © {new Date().getFullYear()} EcoShop. All rights reserved. We are dedicated to promoting sustainable living and reducing our carbon footprint.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }


'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const SocialIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green transition-colors duration-300">
    <Icon size={24} />
  </a>
);

export default function Footer() {
    const pathname = usePathname();
    const isAuthPage = pathname === '/login' || pathname === '/signup';

    if (isAuthPage) {
        return null; 
    }

    return (
        <footer className="bg-blueD text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h5 className="text-xl font-bold mb-4">About RePlastify</h5>
                        <p className="text-gray-300 mb-4">
                        RePlastify is dedicated to promoting sustainable living through our eco-friendly products and initiatives. Join us in our mission to create a greener future.                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon Icon={Facebook} href="https://facebook.com/ecoshop" />
                            <SocialIcon Icon={Twitter} href="https://twitter.com/ecoshop" />
                            <SocialIcon Icon={Instagram} href="https://instagram.com/ecoshop" />
                            <SocialIcon Icon={Linkedin} href="https://linkedin.com/company/ecoshop" />
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h5 className="text-xl font-bold mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            {['Home', 'About Us', 'Products', 'Contact', 'Blog', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-green transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div>
                        <h5 className="text-xl font-bold mb-4">Categories</h5>
                        <ul className="space-y-2">
                            {['Recycled Products', 'Eco-Friendly Home', 'Sustainable Fashion', 'Zero Waste', 'Energy Efficient'].map((item) => (
                                <li key={item}>
                                    <Link href={`/category/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-green transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h5 className="text-xl font-bold mb-4">Contact Us</h5>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2" />
                                <a href="mailto:info@ecoshop.com" className="hover:text-green transition-colors duration-300">info@RePlastify.com</a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2" />
                                <a href="tel:+962 782907153" className="hover:text-green transition-colors duration-300">+1 (123) 456-7890</a>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={18} className="mr-2" />
                                <span>123 Alkarama Street, Zarqa City</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                {/* <div className="mt-12 border-t border-gray-700 pt-8">
                    <h5 className="text-xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h5>
                    <form className="flex flex-col sm:flex-row justify-center items-center">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="bg-gray-700 text-white px-4 py-2 rounded-l-md w-full sm:w-auto mb-2 sm:mb-0"
                        />
                        <button 
                            type="submit" 
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div> */}

                {/* Copyright Section */}
                <div className="mt-12 border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm text-gray-300">
                        © {new Date().getFullYear()} RePlastify. All rights reserved. 
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Dedicated to promoting sustainable living and reducing our carbon footprint.
                    </p>
                </div>
            </div>
        </footer>
    );
}