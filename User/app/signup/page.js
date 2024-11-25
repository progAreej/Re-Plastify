




'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import { Sprout, AlertCircle } from 'lucide-react';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('/api/auth/signup', { username, email, password });
      const data = res.data;

      if (data.error) {
        setError(data.error);
      } else {
        router.push('/login');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-green-100">
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <Sprout className="h-8 w-8 text-green" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Join Our Eco Community</h2>
          <p className="mt-2 text-sm text-gray-600">
            Create an account and be part of the green revolution
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input 
                id="username" 
                name="username" 
                type="text" 
                required 
                className="appearance-none relative block w-full px-3 py-2 border border-green placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green focus:border-green focus:z-10 sm:text-sm bg-green-50" 
                placeholder="Choose a username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="appearance-none relative block w-full px-3 py-2 border border-green placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green focus:border-green focus:z-10 sm:text-sm " 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="new-password" 
                required 
                className="appearance-none relative block w-full px-3 py-2 border border-green placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green focus:border-green focus:z-10 sm:text-sm bg-green-50" 
                placeholder="Create a password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 border border-red-200 rounded p-3">
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div>
            <button 
              type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green hover:bg-blueD focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-150 ease-in-out transform hover:scale-102"
            >
              Create Account
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link className="font-medium text-green hover:text-blue text-sm" href="/login">
            Already have an account? Log in
          </Link>
        </div>
        
        <div className="mt-6 border-t border-green-100 pt-6">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Sprout className="h-4 w-4 text-green" />
            <p>By joining, you're helping us Recycle Plastics for a greener future</p>
          </div>
        </div>
      </div>
    </div>
  );
}