

"use client";

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutModal from "../../components/CheckoutModal";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else {
      removeFromCart(productId);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center py-6 bg-green text-white">
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-center mt-8 mb-8 text-gray-500 text-xl">
            Your cart is empty.
          </p>
        ) : (
          <div className="p-8">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center mb-4 pb-4 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                    className="p-1 bg-gray-200 rounded"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                    className="p-1 bg-gray-200 rounded"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="ml-4 text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <div className="mt-8 flex justify-between items-center border-t pt-6">
              <p className="text-2xl font-bold text-gray-800">
                Total:{" "}
                <span className="text-green">
                  ${calculateTotal().toFixed(2)}
                </span>
              </p>
              <button
                onClick={handleCheckout}
                className="bg-blue text-white px-8 py-3 rounded-lg hover:bg-green transition-colors text-lg font-semibold"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        cartItems={cart}
        total={calculateTotal()}
      />
    </div>
  );
}