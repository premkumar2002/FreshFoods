import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import OfferCarousel from './components/OfferCarousel';
import CategorySection from './components/CategorySection';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { products, getProductsByCategory } from './data/products';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Toaster position="top-right" />
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <div id="offers">
                  <OfferCarousel />
                </div>
                <CategorySection
                  title="Fresh Produce"
                  products={getProductsByCategory('Fresh Produce')}
                />
                <CategorySection
                  title="Dairy"
                  products={getProductsByCategory('Dairy')}
                />
                <CategorySection
                  title="Groceries"
                  products={getProductsByCategory('Groceries')}
                />
                <CategorySection
                  title="Beverages"
                  products={getProductsByCategory('Beverages')}
                />
                <CategorySection
                  title="Snacks"
                  products={getProductsByCategory('Snacks')}
                />
                <CategorySection
                  title="Household"
                  products={getProductsByCategory('Household')}
                />
              </main>
            } />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;