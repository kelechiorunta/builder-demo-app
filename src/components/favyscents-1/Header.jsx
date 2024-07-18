/**
 * This code was generated by Builder.io.
 */
import React from 'react';

const Header = () => {
  return (
    <header className="flex gap-5 items-center self-center w-full text-2xl font-bold max-w-[1203px] text-stone-700 max-md:flex-wrap max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/390eef8db7224025ffa83dcc6a72604b1a0a96169b07a4c323d22352a7d2c0fa?apiKey=661e1fa212c74d1c94d19e320025bbf6&" alt="" className="shrink-0 self-stretch aspect-[1.08] w-[99px]" />
      <nav>
        <ul className="flex gap-5">
          <li className="self-stretch my-auto">Home</li>
          <li className="self-stretch my-auto">Cart</li>
          <li className="self-stretch my-auto">Products</li>
          <li className="flex-auto self-stretch my-auto">Checkout</li>
          <li className="flex-auto self-stretch my-auto">My Account</li>
        </ul>
      </nav>
      <button className="justify-center self-start px-6 py-4 mt-3 font-semibold text-black rounded-xl border-teal-900 border-solid bg-zinc-300 border-[3px] max-md:px-5">
        Contact Us
      </button>
    </header>
  );
};

export default Header;