/**
 * This code was generated by Builder.io.
 */
import React from 'react';

const FeatureCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-5xl font-bold text-neutral-400 max-md:mt-10 max-md:text-4xl">
        <img loading="lazy" src={icon} alt={`${title} icon`} className="self-center max-w-full aspect-square w-[111px]" />
        <h3 className="mt-10 max-md:text-4xl">{title}</h3>
      </div>
    </div>
  );
};

export default FeatureCard;