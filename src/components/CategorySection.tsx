import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface CategorySectionProps {
  title: string;
  products: Product[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, products }) => {
  return (
    <section className="py-12" id={title.toLowerCase()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;