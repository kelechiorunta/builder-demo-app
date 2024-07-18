/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Header from './Header';
import SearchOptions from './SearchOptions';
import TripDetails from './TripDetails';
import Footer from './Footer';

function FlightBookingApp() {
  return (
    <div className="flex flex-col items-center mx-auto w-full max-w-[480px]">
      <Header />
      <main>
        <SearchOptions />
        <TripDetails />
        <button className="justify-center items-center px-16 py-5 mt-12 max-w-full text-3xl font-bold text-white whitespace-nowrap bg-sky-600 rounded-xl w-[248px]">
          GO!
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default FlightBookingApp;