/**
 * This code was generated by Builder.io.
 */
import React from 'react';

function TripDetails() {
  return (
    <section className="w-full max-w-[390px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81350a299c2571f88aedbdac4a8c97532999589db768600fea1b49bbccc33dad?apiKey=661e1fa212c74d1c94d19e320025bbf6&" alt="Trip map" className="z-10 w-full aspect-[3.03] max-w-[390px] rounded-[51px]" />
      <div className="flex gap-2.5 w-full text-xl whitespace-nowrap max-w-[386px] text-black text-opacity-30 mt-2.5">
        <button className="justify-center items-start px-10 py-7 bg-zinc-300 bg-opacity-40 rounded-[51px]">
          From:
        </button>
        <button className="justify-center items-start px-10 py-7 bg-zinc-300 bg-opacity-40 rounded-[51px]">
          To:
        </button>
      </div>
      <div className="flex gap-2.5 mt-9 w-full text-2xl max-w-[380px] text-black text-opacity-30">
        <button className="flex flex-1 gap-4 px-6 py-7 bg-zinc-300 bg-opacity-40 rounded-[51px]">
          <span className="flex-auto">Dec 16-17</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a08b65c98d34593681a13dda9e5767b6f70954bf3d289fdbda516291c946250?apiKey=661e1fa212c74d1c94d19e320025bbf6&" alt="" className="shrink-0 self-start mt-2 aspect-[1.69] fill-black w-[17px]" />
        </button>
        <button className="flex flex-1 gap-5 justify-between items-start py-6 pr-3.5 pl-14 bg-zinc-300 bg-opacity-40 rounded-[51px]">
          <span>1 day</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a08b65c98d34593681a13dda9e5767b6f70954bf3d289fdbda516291c946250?apiKey=661e1fa212c74d1c94d19e320025bbf6&" alt="" className="shrink-0 mt-2 aspect-[1.69] fill-black w-[17px]" />
        </button>
      </div>
    </section>
  );
}

export default TripDetails;