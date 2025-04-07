import React, { useState, useEffect } from 'react';

const PartnersAndTestimonials = () => {
  // Example partner data
  const partners = [
    {
      id: 1,
      name: "NCST",
      logo: "https://via.placeholder.com/120x60?text=NCST" // replace with actual logo URL
    },
    {
      id: 2,
      name: "UR",
      logo: "https://via.placeholder.com/120x60?text=UR"   // replace with actual logo URL
    }
    // Add more partners if needed
  ];

  // Example testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "“The Admin Portal allows us to manage our healthcare team patient data effortlessly; ensuring that all operations run smoothly.”",
      name: "Dr. Emily Smith",
      title: "Chief of Surgery",
      avatar: "https://via.placeholder.com/48?text=ES" // replace with actual avatar
    },
    {
      id: 2,
      quote:
        "“The efficiency and accuracy of the system have significantly improved our workflow. Highly recommend!”",
      name: "Sarah Johnson",
      title: "Healthcare Administrator, Global Health",
      avatar: "https://via.placeholder.com/48?text=SJ" // replace with actual avatar
    }
    // Add more testimonials if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full py-12 bg-gray-50">
      {/* PARTNERS SECTION */}
      <div className="max-w-5xl px-4 mx-auto mb-16 text-center">
        <h2 className="mb-8 text-2xl font-bold text-indigo-600 md:text-3xl">
          Our Partners
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center">
              {/* Logo */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain mb-2 max-h-14"
              />
              {/* Partner name */}
              <p className="text-sm font-semibold text-gray-700">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="py-10 bg-white">
        <div className="max-w-4xl px-4 mx-auto text-center">
          {/* Quote text */}
          <p className="mb-6 text-xl italic text-gray-700 md:text-2xl">
            {currentTestimonial.quote}
          </p>

          {/* User info */}
          <div className="flex items-center justify-center space-x-3">
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              className="object-cover w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-800">{currentTestimonial.name}</p>
              <p className="text-sm text-gray-500">{currentTestimonial.title}</p>
            </div>
          </div>

          {/* Dots for testimonial navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-indigo-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersAndTestimonials;
