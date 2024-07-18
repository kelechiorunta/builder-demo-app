/**
 * This code was generated by Builder.io.
 */
import React from 'react';

const Pagination = () => {
  return (
    <nav className="mt-16 ml-12 max-w-full w-[451px] max-md:mt-10" aria-label="Pagination">
      <ul className="flex gap-5 max-md:flex-col max-md:gap-0">
        <li className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <button className="justify-center items-start px-7 py-4 w-full text-5xl font-bold text-white whitespace-nowrap border-solid bg-stone-700 border-[3px] border-stone-700 max-md:px-5 max-md:mt-10 max-md:text-4xl" aria-current="page">
            1
          </button>
        </li>
        <li className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <button className="items-start px-5 pt-6 pb-3 w-full text-5xl font-bold text-black whitespace-nowrap border-solid bg-zinc-300 border-[3px] border-stone-700 max-md:pr-5 max-md:mt-10 max-md:text-4xl">
            2
          </button>
        </li>
        <li className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <button className="justify-center px-7 py-4 w-full text-5xl font-bold text-black whitespace-nowrap border-solid bg-zinc-300 border-[3px] border-stone-700 max-md:px-5 max-md:mt-10 max-md:text-4xl">
            3
          </button>
        </li>
        <li className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-5xl font-bold text-black whitespace-nowrap max-md:mt-10 max-md:text-4xl">
            <div className="shrink-0 border-solid bg-zinc-300 border-[3px] border-stone-700 h-[68px]" />
            <div className="z-10 self-center mt-0 border-black border-solid border-[6px] max-md:text-4xl">
              --
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;