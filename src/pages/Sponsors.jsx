import React from 'react';
import { motion } from 'framer-motion';

// Dummy sponsor data (replace with actual logos and links)
const sponsors = [
  { id: 1, name: 'TechCorp', logo: 'https://via.placeholder.com/150/abcdef/ffffff?Text=TechCorp', link: '#' },
  { id: 2, name: 'Innovate Solutions', logo: 'https://via.placeholder.com/150/fedcba/ffffff?Text=Innovate', link: '#' },
  { id: 3, name: 'Global Industries', logo: 'https://via.placeholder.com/150/aabbcc/ffffff?Text=Global', link: '#' },
  // Add more sponsors as needed
];

const Sponsors = () => {
  return (
    <motion.section
      id="sponsors"
      className="py-20 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-8 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Valued Sponsors
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + sponsor.id * 0.1 }}
            >
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-24 object-contain" />
              </a>
            </motion.div>
          ))}
        </div>
        {sponsors.length > 0 && (
          <motion.p
            className="mt-8 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            We extend our sincere gratitude to our sponsors for their generous support.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
};

export default Sponsors;