"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Posts from "./posts";
import EventSharing from "./EventSharing";
import AddContent from './add';
import UserPosts from './userposts';
import UserEvent from './userevent';
import CommentU from './usercomment';

const TabButton = ({ active, onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`w-full px-4 py-3 font-medium text-sm text-left rounded-lg transition-colors duration-300 ${
      active
        ? 'bg-green text-white shadow-md'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <Posts searchQuery={searchQuery} />
            </div>
            <div className="lg:w-1/2">
              <EventSharing searchQuery={searchQuery} />
            </div>
          </div>
        );
      case 'posts':
        return <Posts searchQuery={searchQuery} />;
      case 'events':
        return <EventSharing searchQuery={searchQuery} />;
      case 'add':
        return <AddContent />;
      case 'your-posts':
        return <UserPosts />;
      case 'your-events':
        return <UserEvent />;
      case 'your-comments':
        return <CommentU />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-green mb-8"
      >
        Eco Community
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for posts, events, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent transition duration-300 bg-white shadow-sm"
          />
          <button
            onClick={() => {/* Implement search functionality */}}
            className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-green rounded-r-lg hover:bg-green focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 transition duration-300"
          >
            Search
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Vertical Tabs */}
          <div className="md:w-1/12 space-y-2">
            {['home', 'posts', 'events', 'add', 'your-posts', 'your-events', 'your-comments'].map((tab) => (
              <TabButton key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
              </TabButton>
            ))}
          </div>
          {/* Content */}
          <div className="md:w-11/12">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityPage;