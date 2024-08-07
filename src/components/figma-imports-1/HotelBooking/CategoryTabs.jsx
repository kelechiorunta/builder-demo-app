/**
 * This code was generated by Builder.io.
 */
import Link from 'next/link';
import React from 'react';

function CategoryTabs() {
  return (
    <nav className="flex gap-4 items-start mt-6">
      <div className="flex flex-auto gap-4 text-xl text-white whitespace-nowrap">
        <Link href={'/interactive-figma-imports-1'} className="justify-center items-start px-5 py-5 text-blue-700 rounded-3xl border border-white border-solid bg-zinc-200 bg-opacity-30">
          Hotel
        </Link>
        <Link href={'/figma-imports-2'} className="justify-center items-start px-5 py-4 bg-sky-600 rounded-3xl">
          Flights
        </Link>
        <Link href={'/'} className="justify-center items-start px-7 py-5 bg-sky-600 rounded-3xl">
          Tours
        </Link>
      </div>
      <div className="flex gap-1.5 mt-2 -ml-8">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/73fde7927272041deb614ed2cc9f89f2a9d12df014e27d72d79f489db197ae29?apiKey=661e1fa212c74d1c94d19e320025bbf6&" alt="" className="shrink-0 self-start mt-2 border border-solid aspect-[0.12] border-black border-opacity-50 stroke-[1px] stroke-black stroke-opacity-50 w-[5px]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0342122aa63d57b6952553384e5640d566681658c78e6169aa33371ec01c7528?apiKey=661e1fa212c74d1c94d19e320025bbf6&" alt="" className="shrink-0 aspect-[0.6] w-[30px]" />
      </div>
    </nav>
  );
}

export default CategoryTabs;