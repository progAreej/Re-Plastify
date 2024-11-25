

'use client'



import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import { ShoppingCart, Search, Menu, X, LogOut, Leaf, LogIn, Home, Package, MessageSquare, Users, Award } from 'lucide-react';
import Cookies from 'js-cookie';
import { Star } from 'lucide-react';
import {  Edit } from 'lucide-react';
import { List,Trophy } from 'lucide-react'; // or import { FileText } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const SidebarLink = ({ href, icon: Icon, children }) => (
  <Link 
    href={href} 
    className="flex items-center space-x-2 text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all duration-200 ease-in-out"
  >
    <Icon className="h-5 w-5" />
    <span>{children}</span>
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const [hasToken, setHasToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    setHasToken(!!token);
    checkLoginStatus();
  }, [pathname]);

  const checkLoginStatus = async () => {
    try {
      const response = await fetch('/api/auth/check', {
        method: 'GET',
        credentials: 'include'
      });
      const data = await response.json();
      setIsLoggedIn(data.isLoggedIn);
      setHasToken(data.isLoggedIn);
    } catch (error) {
      console.error('Error checking login status:', error);
      setIsLoggedIn(false);
      setHasToken(false);
    }
  };

  if (isAuthPage) {
    return null;
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success) {
        Cookies.remove('token');
        setHasToken(false);
        setIsLoggedIn(false);
        router.push('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-blue-600 text-white rounded-md"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <aside className={`bg-gradient-to-r from-blue-600 to-blue-800 w-64 h-full fixed left-0 top-0 z-10 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full p-4">
          <Link href="/" className="text-white text-xl font-bold flex items-center mb-8">
            {/* <Leaf className="h-6 w-6 mr-2" /> */}
            <span className="text-2xl">RePlastify</span>
          </Link>
          <nav className="flex-grow space-y-2">
            <SidebarLink href="/" icon={Home}>Home</SidebarLink>
            <SidebarLink href="/AllProducts" icon={Package}>All Products</SidebarLink>
            <SidebarLink href="/contact" icon={MessageSquare}>Message</SidebarLink>
            <SidebarLink href="/users" icon={Users}>Users</SidebarLink>
            <SidebarLink href="/challenges" icon={Award}>Challenges</SidebarLink>
            <SidebarLink href="/events" icon={Star}>Events</SidebarLink>
            <SidebarLink href="/posts" icon={Edit}>Posts</SidebarLink>
            <SidebarLink href="/orders" icon={List}>Orders</SidebarLink>
            <SidebarLink href="/awards" icon={Trophy}>Awards</SidebarLink>
            <SidebarLink href="/CompletedChallenges" icon={CheckCircle}>Completed Challenges</SidebarLink>
            <SidebarLink href="/ChallengesLeaderboard" icon={CheckCircle}>Challenges Leaderboard</SidebarLink>
            <SidebarLink href="/Award-Winning-Author" icon={Award}>Award-Winning Author</SidebarLink>


          </nav>
          <div className="mt-auto">
            {hasToken ? (
              <button onClick={handleLogout} className="w-full flex items-center space-x-2 text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all duration-200 ease-in-out">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            ) : (
              <button onClick={handleLogin} className="w-full flex items-center space-x-2 text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all duration-200 ease-in-out">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}