import { Product } from '../types';

export const products: Product[] = [
  // Fresh Produce
  {
    id: 1,
    name: "Organic Bananas",
    price: 40,
    originalPrice: 50,
    description: "Fresh organic bananas, perfect for smoothies and snacks",
    category: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 128,
    inStock: true
  },
  {
    id: 2,
    name: "Red Apples",
    price: 120,
    description: "Crisp and sweet red apples",
    category: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80",
    rating: 4.3,
    reviews: 95,
    inStock: true
  },
  {
    id: 3,
    name: "Fresh Tomatoes",
    price: 30,
    description: "Ripe, juicy tomatoes",
    category: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1546470427-f5b9c4c4c575?auto=format&fit=crop&q=80",
    rating: 4.2,
    reviews: 78,
    inStock: true
  },
  {
    id: 4,
    name: "Organic Spinach",
    price: 45,
    description: "Fresh organic spinach leaves",
    category: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 112,
    inStock: true
  },
  {
    id: 5,
    name: "Carrots",
    price: 35,
    description: "Fresh, crunchy carrots",
    category: "Fresh Produce",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80",
    rating: 4.4,
    reviews: 89,
    inStock: true
  },

  // Dairy Products
  {
    id: 6,
    name: "Farm Fresh Eggs",
    price: 85,
    originalPrice: 100,
    description: "Free-range eggs from local farms",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 256,
    inStock: true
  },
  {
    id: 7,
    name: "Organic Milk",
    price: 65,
    description: "Fresh organic whole milk",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 167,
    inStock: true
  },
  {
    id: 8,
    name: "Greek Yogurt",
    price: 55,
    description: "Creamy Greek yogurt",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 143,
    inStock: true
  },
  {
    id: 9,
    name: "Cheese Block",
    price: 120,
    description: "Premium cheddar cheese",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 198,
    inStock: true
  },
  {
    id: 10,
    name: "Butter",
    price: 45,
    description: "Pure dairy butter",
    category: "Dairy",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80",
    rating: 4.4,
    reviews: 156,
    inStock: true
  },

  // Groceries
  {
    id: 11,
    name: "Whole Grain Bread",
    price: 45,
    description: "Freshly baked whole grain bread",
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
    rating: 4.3,
    reviews: 89,
    inStock: true
  },
  {
    id: 12,
    name: "Basmati Rice",
    price: 150,
    description: "Premium basmati rice",
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 234,
    inStock: true
  },
  {
    id: 13,
    name: "Pasta",
    price: 65,
    description: "Italian durum wheat pasta",
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&q=80",
    rating: 4.4,
    reviews: 167,
    inStock: true
  },
  {
    id: 14,
    name: "Olive Oil",
    price: 250,
    description: "Extra virgin olive oil",
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 198,
    inStock: true
  },
  {
    id: 15,
    name: "Mixed Spices",
    price: 180,
    description: "Assorted cooking spices",
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 145,
    inStock: true
  },

  // Beverages
  {
    id: 16,
    name: "Green Tea",
    price: 120,
    description: "Organic green tea bags",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 178,
    inStock: true
  },
  {
    id: 17,
    name: "Orange Juice",
    price: 85,
    description: "Fresh squeezed orange juice",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80",
    rating: 4.4,
    reviews: 156,
    inStock: true
  },
  {
    id: 18,
    name: "Coffee Beans",
    price: 350,
    description: "Premium Arabica coffee beans",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 289,
    inStock: true
  },
  {
    id: 19,
    name: "Coconut Water",
    price: 75,
    description: "Natural coconut water",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80",
    rating: 4.3,
    reviews: 134,
    inStock: true
  },
  {
    id: 20,
    name: "Sparkling Water",
    price: 45,
    description: "Carbonated mineral water",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1603394630850-69b3ca8121ca?auto=format&fit=crop&q=80",
    rating: 4.2,
    reviews: 98,
    inStock: true
  },

  // Snacks
  {
    id: 21,
    name: "Mixed Nuts",
    price: 280,
    description: "Assorted premium nuts",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 245,
    inStock: true
  },
  {
    id: 22,
    name: "Dark Chocolate",
    price: 150,
    description: "70% cocoa dark chocolate",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  {
    id: 23,
    name: "Potato Chips",
    price: 45,
    description: "Crispy salted potato chips",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80",
    rating: 4.3,
    reviews: 156,
    inStock: true
  },
  {
    id: 24,
    name: "Trail Mix",
    price: 195,
    description: "Healthy trail mix with dried fruits",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 167,
    inStock: true
  },
  {
    id: 25,
    name: "Popcorn",
    price: 65,
    description: "Gourmet popcorn kernels",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80",
    rating: 4.4,
    reviews: 143,
    inStock: true
  },

  // Household
  {
    id: 26,
    name: "Dish Soap",
    price: 85,
    description: "Natural dish washing liquid",
    category: "Household",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 178,
    inStock: true
  },
  {
    id: 27,
    name: "Paper Towels",
    price: 120,
    description: "Recycled paper towel rolls",
    category: "Household",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    rating: 4.3,
    reviews: 156,
    inStock: true
  },
  {
    id: 28,
    name: "Laundry Detergent",
    price: 245,
    description: "Eco-friendly laundry detergent",
    category: "Household",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 198,
    inStock: true
  },
  {
    id: 29,
    name: "Air Freshener",
    price: 95,
    description: "Natural room freshener",
    category: "Household",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80",
    rating: 4.2,
    reviews: 134,
    inStock: true
  },
  {
    id: 30,
    name: "Trash Bags",
    price: 155,
    description: "Biodegradable trash bags",
    category: "Household",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80",
    rating: 4.4,
    reviews: 167,
    inStock: true
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};
