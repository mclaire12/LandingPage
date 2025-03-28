import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Efficient Healthcare System",
    description: "Our platform helps streamline patient data management and improve efficiency in healthcare facilities.",
    image: "https://source.unsplash.com/600x400/?hospital,medical",
  },
  {
    id: 2,
    title: "Real-time Patient Monitoring",
    description: "Get instant updates on patient health status and treatment progress in real-time.",
    image: "https://source.unsplash.com/600x400/?doctor,technology",
  },
  {
    id: 3,
    title: "Secure Medical Records",
    description: "We prioritize data security to ensure patient records are safe and accessible only by authorized personnel.",
    image: "https://source.unsplash.com/600x400/?medicine,data",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute flex items-center w-full p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0, x: index > currentSlide ? 100 : -100 }}
          animate={{ opacity: index === currentSlide ? 1 : 0, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: index === currentSlide ? "flex" : "none" }}
        >
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold text-blue-900">{slide.title}</h2>
            <p className="mt-2 text-gray-600">{slide.description}</p>
          </div>
          <div className="w-1/2">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Slider;
