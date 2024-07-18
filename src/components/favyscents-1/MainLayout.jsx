/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import Pagination from './Pagination';
import CustomerReviews from './CustomerReviews';
import Features from './Features';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Pagination />
        <CustomerReviews />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;