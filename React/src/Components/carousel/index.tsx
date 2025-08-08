import React, { useEffect, useState } from "react";

interface CarouselProps {
  CarouselImages: string[];
  interval?: number; 
}

const Carousel: React.FC<CarouselProps> = ({ CarouselImages, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselImages.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [CarouselImages.length, interval]);

  return (
    <div className="relative  mx-auto overflow-hidden">
      <div className="h-200">
        <img
          src={CarouselImages[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-screen h-full object-cover transition-all duration-700"
        />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {CarouselImages.map((_, index) => (
          <span
            key={index}
            className={`w-7 h-1 ${
              index === currentIndex ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
