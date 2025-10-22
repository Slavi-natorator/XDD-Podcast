import React, { useEffect, useState } from "react";
import "./Carousel.css"; // import the CSS file

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    if (length === 0) return;
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);
    return () => clearInterval(slideInterval);
  }, [length, interval]);

  if (length === 0) {
    return <div className="carousel-empty">No images available</div>;
  }

  return (
    <div className="carousel-container">
      {/* Slides */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={img.src}
              alt={img.alt || `Slide ${index + 1}`}
              className="carousel-image"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
