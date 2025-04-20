import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Array of your image URLs for the background slider
const backgroundImages = [
  '/src/assets/Bagurugba.jpg',
  '/src/assets/bihu.jpg',
  '/src/assets/buildings1.jpg',
  // Add more image URLs here
];

const backgroundImageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const heroContentVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delayChildren: 0.4, staggerChildren: 0.2 } },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden py-32 px-8 text-center bg-gray-900" // Darker base for premium feel
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={backgroundImages[currentImageIndex]}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImages[currentImageIndex]}')` }}
          variants={backgroundImageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black opacity-60" /> {/* Increased dark overlay opacity */}

      {/* Hero Content */}
      <motion.div
        className="relative max-w-3xl mx-auto z-10 pt-20" // Ensure content is above the background
        variants={heroContentVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-5xl font-extrabold text-white mb-8 leading-tight" // More impactful typography
          variants={textVariants}
        >
          Elevating Innovation to New Dimensions
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 leading-relaxed mb-12" // Softer text color
          variants={textVariants}
        >
          Experience the forefront of technological advancement at ICTCON 2025, a confluence of visionary minds and groundbreaking ideas. Join us from [Start Date] to [End Date] in the vibrant city of [Location].
        </motion.p>
        <motion.div className="space-x-4" variants={textVariants}>
          <motion.button
            className="bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
          >
            Secure Your Spot
          </motion.button>
          <motion.button
            className="bg-transparent text-blue-400 border-2 border-blue-400 py-4 px-8 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
          >
            Discover More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;