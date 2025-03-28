import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "tailwindcss/tailwind.css";

const slides = [
  {
    title: "Welcome to the HIV/TB Co-Infection Monitoring System",
    description: "Track and manage customer data with ease.",
    buttonText: "Get Started",
    image: "/images/nurse-checking-elderly-patient-blood-pressure-medical-care-vector-illustration-image-depicts-showcasing-moment-352589753 (1).webp",
  },
  {
    title: "Comprehensive Customer Management",
    description: "Efficiently monitor and treat HIV/TB co-infections.",
    buttonText: "Learn More",
    image: "/images/doctor-checks-child-health-semi-flat-color-vector-characters-sitting-figure-full-body-people-white-using-stethoscope-isolated-modern-cartoon-style-illustration-graphic-design-animation_151.avif",
  },
  {
    title: "Welcome to Data-Driven Healthcare",
    description: "Make informed decisions with our advanced analytics.",
    buttonText: "Explore Analytics",
    image: "/images/vector-silhouette-doctor-leading-team-medical-research-study-with-thick-outline-side-vi_1034071-2313.jpg",
  },
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1
        className="absolute text-3xl font-bold text-blue-900 top-5"
        animate={{ x: [0, 100, -100, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        WELCOME AGAIN 🎉
      </motion.h1>
      <div className="relative w-full max-w-5xl overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-full p-8 md:flex-row"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="text-center md:w-1/2 md:text-left">
                <motion.h1
                  className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="mt-4 text-lg text-gray-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {slide.description}
                </motion.p>
                <motion.a
                  href="#"
                  className="inline-block px-6 py-3 mt-6 text-white rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {slide.buttonText}
                </motion.a>
              </div>
              <motion.div
                className="md:w-1/2"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 left-4 hover:bg-gray-200"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute p-2 transform -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 right-4 hover:bg-gray-200"
        >
          <ChevronRight size={30} />
        </button>
        {/* Progress Indicators */}
        <div className="absolute flex justify-center w-full gap-2 bottom-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
