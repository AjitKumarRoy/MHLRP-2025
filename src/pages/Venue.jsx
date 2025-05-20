import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBuilding, FaHotel, FaPlane, FaTrain, FaCar } from 'react-icons/fa';

// Replace with your Google Maps embed URL (see instructions below)
  const venueGoogleMapLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.84513236048!2d93.74029521038959!3d27.129687450635668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746aa9da1dd1bf1%3A0x3338f788c38d9e9e!2sNorth%20Eastern%20Regional%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1745120134336!5m2!1sen!2sin" ;

// Replace with your actual venue details and Google Maps embed URL
const venueDetails = {
    name: 'NERIST, Nirjuli',
    address: 'NIRJULI, 791109, ARUNACHAL PRADESH, India',
    description: 'A premier event space equipped with state-of-the-art facilities, offering a comfortable and conducive environment for MHLRP 2025.',
    highlights: ['Spacious conference halls', 'Modern audio-visual equipment', 'Free Wi-Fi', 'On-site catering'],
    googleMapsEmbedUrl: venueGoogleMapLink,
    venueImage: '/src/assets/NERIST-gate.png', // Replace with an actual image of the venue
};

// Optional accommodation data
const accommodations = [
    { name: 'Hotel Grand Star', distance: '1.5 km from venue', website: '[HOTEL_GRAND_STAR_WEBSITE]', image: '/src/assets/hotel1-placeholder.jpg' },
    { name: 'The Park Residency', distance: '2.2 km from venue', website: '[THE_PARK_RESIDENCY_WEBSITE]', image: '/src/assets/hotel2-placeholder.jpg' },
    // Add more accommodation options
];

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
};

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    hover: { scale: 1.01, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Venue = () => {
    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-orange-50 to-amber-100"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <div className="container mx-auto px-8 pt-20">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16"
                    variants={{ initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
                >
                    <h1 className="text-4xl font-extrabold text-orange-800 mb-6 tracking-tight">
                        Conference <span className="text-amber-700">Venue</span> - MHLRP 2025
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Discover the location for MHLRP 2025 and find helpful information for your visit to NERIST, Nirjuli.
                    </p>
                </motion.div>

                {/* Venue Details Card */}
                <motion.div className="bg-white rounded-xl shadow-md p-8 mb-12" variants={cardVariants}>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-8 rounded-md overflow-hidden shadow-sm">
                            <img src={venueDetails.venueImage} alt={venueDetails.name} className="w-full h-auto object-cover" />
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center">
                                <FaBuilding className="mr-2 text-amber-500" /> {venueDetails.name}
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                <FaMapMarkerAlt className="inline mr-2 text-amber-500" /> {venueDetails.address}
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">{venueDetails.description}</p>
                            {venueDetails.highlights && (
                                <div>
                                    <h3 className="text-lg font-semibold text-orange-700 mb-2">Highlights:</h3>
                                    <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                                        {venueDetails.highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Location & Map Section */}
                <motion.div className="bg-white rounded-xl shadow-md p-8 mb-12" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-amber-500" /> Location & Map
                    </h2>
                    <div className="overflow-hidden rounded-md shadow-sm">
                        <iframe
                            title="Conference Venue Map"
                            src={venueDetails.googleMapsEmbedUrl}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Optional Accommodation Section */}
                {accommodations && accommodations.length > 0 && (
                    <motion.div className="mb-12" variants={cardVariants}>
                        <h2 className="text-2xl font-semibold text-orange-700 mb-6 flex items-center">
                            <FaHotel className="mr-2 text-amber-500" /> Recommended Accommodation
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {accommodations.map((hotel, index) => (
                                <motion.div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-6 flex flex-col" variants={cardVariants} whileHover="hover">
                                    <div className="relative w-full h-40 rounded-md overflow-hidden mb-3">
                                        <img src={hotel.image} alt={hotel.name} className="object-cover w-full h-full" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-orange-700 mb-1">{hotel.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{hotel.distance}</p>
                                    <motion.a
                                        href={hotel.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-amber-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-amber-600 transition duration-300 mt-auto"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                    >
                                        Visit Website
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Optional Travel Information Section */}
                {/* Add a similar card structure here for travel information (by air, rail, road), using icons like FaPlane, FaTrain, FaCar */}
            </div>
        </motion.div>
    );
};

export default Venue;