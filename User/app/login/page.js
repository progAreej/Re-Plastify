
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Leaf, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isInactive, setIsInactive] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsInactive(false);

    try {
      const res = await axios.post('/api/auth/login', { email, password });
      const data = res.data;
      
      if (data.error) {
        setError(data.error);
      } else if (data.success && data.redirect) {
        console.log("Redirecting to:", data.redirect);
        router.push(data.redirect);
      } else {
        setError('Unexpected error occurred.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.status === 'inactive') {
          setIsInactive(true);
          setError('Your account is currently inactive. Please contact support for assistance.');
        } else {
          setError(error.response.data.error || 'An error occurred. Please try again.');
        }
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-green">
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
            <Leaf className="h-8 w-8 text-green" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us in making a difference, one login at a time
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md -space-y-px">
            <div className="mb-4">
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
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
                required 
                className="appearance-none relative block w-full px-3 py-2 border border-green placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green focus:border-green focus:z-10 sm:text-sm" 
                placeholder="Enter your password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>

          {error && (
            <div className={`flex items-center space-x-2 ${isInactive ? 'text-yellow-600 bg-yellow-50 border-yellow-200' : 'text-red-600 bg-red-50 border-red-200'} border rounded p-3`}>
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div>
            <button 
              type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green hover:bg-blueD focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green transition-all duration-150 ease-in-out transform hover:scale-102"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link className="font-medium text-green hover:text-blueD text-sm" href="/signup">
            Don't have an account? Sign up and join our eco-friendly community
          </Link>
        </div>
        
        <div className="mt-6 border-t border-green-100 pt-6">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Leaf className="h-4 w-4 text-green" />
            <p>Our eco-friendly login saves 0.2g of CO2 compared to traditional servers</p>
          </div>
        </div>
      </div>
    </div>
  );
}