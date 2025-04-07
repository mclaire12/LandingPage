import { motion } from 'framer-motion';

export default function StatsSection() {
    const stats = [
      { value: "50K+", label: "Patients Monitored", icon: "👥" },
      { value: "10K+", label: "Health Workers Engaged", icon: "👨‍⚕️" },
      { value: "500+", label: "Organizations Participating", icon: "🏢" },
    ];
  
    return (
      <div className="py-12">
        <div className="max-w-5xl px-4 mx-auto">
          <motion.h2 
            className="mb-12 text-3xl font-bold text-center text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Impact
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl">
                  {stat.icon}
                </div>
                <motion.h2 
                  className="text-4xl font-bold text-blue-900"
                >
                  {stat.value}
                </motion.h2>
                <p className="mt-2 text-lg text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  