/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f565a588c94b46796b2fc4a5719ceb7e6d0f0db1936f42c962b7ffde8d179dfa?apiKey=661e1fa212c74d1c94d19e320025bbf6&", title: "Easy Shopping" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/78ba1b0a8c0398ea78b19773bcb403ec8063e5f3b774ad4a71806ca3c89b16be?apiKey=661e1fa212c74d1c94d19e320025bbf6&", title: "Swift Delivery" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/281cdf43261181f29a0580d827c19dfdc4750437098b2eab7b1f04e28b094e91?apiKey=661e1fa212c74d1c94d19e320025bbf6&", title: "Payment" }
  ];

  return (
    <section className="self-center mt-32 w-full max-w-[1095px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;