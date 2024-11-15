import React from 'react';
import { Gift, ShoppingBag, Truck, CreditCard, Percent } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: "₹200 OFF on ₹1000+",
    description: "Use code: FRESH200",
    icon: ShoppingBag,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "On orders above ₹1500",
    icon: Truck,
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "10% Cashback",
    description: "Up to ₹300 with online payment",
    icon: CreditCard,
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Buy 2 Get 1 Free",
    description: "On selected items",
    icon: Gift,
    color: "bg-red-500"
  },
  {
    id: 5,
    title: "15% Student Discount",
    description: "With valid student ID",
    icon: Percent,
    color: "bg-orange-500"
  }
];

const OfferCarousel: React.FC = () => {
  return (
    <div className="w-full bg-white py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-6 animate-scroll">
          {[...offers, ...offers].map((offer, index) => (
            <div
              key={`${offer.id}-${index}`}
              className={`flex-none ${offer.color} text-white rounded-lg p-4 w-72 flex items-center space-x-4`}
            >
              <offer.icon className="h-8 w-8" />
              <div>
                <h3 className="font-bold">{offer.title}</h3>
                <p className="text-sm opacity-90">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferCarousel;