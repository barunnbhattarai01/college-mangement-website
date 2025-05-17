import React, { useEffect, useState } from "react";
import "./Slideshow.css"; 




const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0); 
  const slideIntervalTime = 3000;
  const [intervalId, setIntervalId] = useState(null);

  const slides = [
      "./apex4.png",
    "./apex5.png",
    "./apex6.png",
    "./apex10.png",
    "./apex11.png",
    "./apex12.png",
    "./apex13.png",
    "./apex14.png"
  ];

  useEffect(() => {
    
    const id = setInterval(() => {
      nextSlide();
    }, slideIntervalTime);
    setIntervalId(id);

   
    return () => clearInterval(id);
  }, []);

  const showSlide = (index) => {
    if (index >= slides.length) {
      setSlideIndex(0);
    } else if (index < 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(slideIndex + 1);
  };

  const prevSlide = () => {
    clearInterval(intervalId);
    showSlide(slideIndex - 1);
  };

  return (
    <main className="bg-emerald-200">
    <div className="slideshow-container" id="slideshow">
      {slides.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === slideIndex ? "displaySlides" : ""}`}
        />
      ))}

      <button onClick={prevSlide} className="prev-button">Prev</button>
      <button onClick={nextSlide} className="next-button">Next</button>
    </div>
    </main>
  );
};

export default Slideshow;

