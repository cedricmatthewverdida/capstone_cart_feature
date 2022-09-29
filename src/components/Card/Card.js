import React from "react";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative block border border-gray-100">
        <button
          type="button"
          className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>

        <img
          alt="Toy"
          src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          className="object-contain w-full h-56 lg:h-72"
        />

        <div className="p-6">
          <strong className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400">
            New
          </strong>

          <h5 className="mt-4 text-lg font-bold">Robot Toy</h5>

          <p className="mt-2 text-sm text-gray-700">$14.99</p>

          <button
            onClick={() => navigate('/checkout')}
            type="button"
            className="block w-full p-4 mt-4 text-sm font-medium bg-yellow-500 rounded-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
