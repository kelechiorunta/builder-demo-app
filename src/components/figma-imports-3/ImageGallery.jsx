/**
 * This code was generated by Builder.io.
 */
import React from 'react';

function ImageGallery() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e160ba3354d3e67d65180044703aadc0407520e2b6a060979d2f6fb69e96fda9?apiKey=661e1fa212c74d1c94d19e320025bbf6&", alt: "" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/257ae2ee7a68fa35f706e997017703e7660d43e87006eff58451e47989a8b1b2?apiKey=661e1fa212c74d1c94d19e320025bbf6&", alt: "" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/18a6493cd6d4ac9bff7a14ad1a7b4b0c6cfb151da3c2a3bb8e646e4a5e9c70c8?apiKey=661e1fa212c74d1c94d19e320025bbf6&", alt: "" }
  ];

  return (
    <div className="flex gap-5 justify-between mt-5">
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className="shrink-0 rounded-full aspect-square bg-zinc-100 h-[67px] w-[67px]"
        />
      ))}
    </div>
  );
}

export default ImageGallery;