import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "NCST",
      logo: "https://via.placeholder.com/120x60?text=NCST",
      description: "National Council for Science and Technology"
    },
    {
      id: 2,
      name: "UR",
      logo: "https://via.placeholder.com/120x60?text=UR",
      description: "University of Rwanda"
    },
    {
      id: 3,
      name: "MINISANTE",
      logo: "https://via.placeholder.com/120x60?text=MINISANTE",
      description: "Ministry of Health"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-900 dark:text-white">Our Partners</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-32 h-16 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
