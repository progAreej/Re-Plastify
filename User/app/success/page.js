"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Success() {
  const [session, setSession] = useState(null);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch(
        `/api/checkout-session?session_id=${sessionId}`
      );
      const data = await response.json();
      setSession(data);

      // Empty the cart after successful payment
      if (data) {
        localStorage.removeItem("cart"); // This will clear the cart from localStorage
      }
    };

    if (sessionId) {
      fetchSession();
    }
  }, [sessionId]);

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful
        </h1>
        <p className="text-gray-700 mb-4">
          Thank you for your purchase. Your order has been processed
          successfully.
        </p>
        <p className="text-gray-600">
          Order total: ${(session.amount / 100).toFixed(2)}
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue text-white px-6 py-2 rounded hover:bg-green transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}