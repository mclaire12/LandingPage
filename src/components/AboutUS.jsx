import { FaBullseye, FaLightbulb, FaHeartbeat } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const clickEffect = {
    scale: [1, 0.9, 1],
    transition: { duration: 0.2 },
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container max-w-6xl px-4 mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-800 dark:text-white">About Us</h2>
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Mission Card */}
          <motion.div
            className="p-5 transition-transform duration-300 bg-white dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={clickEffect}
          >
            <FaBullseye className="mx-auto mb-3 text-3xl text-blue-600 dark:text-blue-400" />
            <h3 className="mb-2 text-lg font-semibold dark:text-white">Our Mission</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We provide healthcare professionals with cutting-edge tools to manage HIV/TB co-infection effectively, ensuring better patient outcomes through data-driven decisions.
            </p>
          </motion.div>

          {/* Approach Card */}
          <motion.div
            className="p-5 transition-transform duration-300 bg-white dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={clickEffect}
          >
            <FaLightbulb className="mx-auto mb-3 text-3xl text-yellow-500 dark:text-yellow-400" />
            <h3 className="mb-2 text-lg font-semibold dark:text-white">Our Approach</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We empower medical staff with seamless workflows, from patient registration to diagnosis, making it easier to deliver quality care.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="p-5 transition-transform duration-300 bg-white dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={clickEffect}
          >
            <FaHeartbeat className="mx-auto mb-3 text-3xl text-red-500 dark:text-red-400" />
            <h3 className="mb-2 text-lg font-semibold dark:text-white">Our Vision</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We aim to lead the way in healthcare innovation, continuously improving our platform to meet the evolving needs of the medical community.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;