import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Fresh Groceries,
              <br />
              <span className="text-emerald-600">Delivered Daily</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop from our wide selection of fresh produce, groceries, and daily essentials. 
              Get them delivered right to your doorstep.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => navigate('/products')}
                className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors flex items-center"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('offers')?.scrollIntoView()}
                className="border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
              >
                View Offers
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
              alt="Fresh vegetables and fruits"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="bg-emerald-100 p-2 rounded-full">
                  <span className="text-emerald-600 font-bold">30%</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Special Offer</p>
                  <p className="text-sm text-gray-600">On your first order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;