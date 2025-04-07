import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaClipboardList, FaClock, FaUserNurse, FaUserMd } from 'react-icons/fa';

const PatientFlow = () => {
  const processSteps = [
    {
      id: 1,
      title: "Patient Arrival",
      description: "Patient checks in at the reception desk",
      icon: <FaHospital className="text-2xl" />
    },
    {
      id: 2,
      title: "Registration",
      description: "Complete paperwork and verify insurance information",
      icon: <FaClipboardList className="text-2xl" />
    },
    {
      id: 3,
      title: "Waiting Room",
      description: "Patient waits to be called by nurse",
      icon: <FaClock className="text-2xl" />
    },
    {
      id: 4,
      title: "Initial Assessment",
      description: "Nurse checks vital signs and records symptoms",
      icon: <FaUserNurse className="text-2xl" />
    },
    {
      id: 5,
      title: "Doctor Consultation",
      description: "Doctor examines patient and provides diagnosis/treatment",
      icon: <FaUserMd className="text-2xl" />
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="max-w-5xl px-4 mx-auto">
        <motion.h2 
          className="mt-16 mb-12 text-3xl font-bold text-center text-blue-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Customer Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 h-1 transform -translate-y-1/2 bg-blue-200 top-1/2" />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col items-center">
                  {/* Step circle */}
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                    {step.icon}
                  </div>
                  
                  {/* Step content */}
                  <div className="p-4 text-center">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFlow;
