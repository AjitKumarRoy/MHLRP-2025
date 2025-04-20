import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import { FaCalendarAlt, FaMapMarkerAlt, FaBullhorn, FaUsers, FaBuilding } from 'react-icons/fa';

// Import your actual hero images
import heroImage1 from '../assets/Bagurugba.jpg';
import heroImage2 from '../assets/bihu.jpg';
import heroImage3 from '../assets/buildings1.jpg';
import aboutImage from '../assets/Bagurugba.jpg';
import speaker1Image from '../assets/Bagurugba.jpg';
import speaker2Image from '../assets/Bagurugba.jpg';
import venueImage from '../assets/Bagurugba.jpg';
import sponsor1Logo from '../assets/Bagurugba.jpg';
import sponsor2Logo from '../assets/Bagurugba.jpg';

// Sample data (replace with your actual conference data)
const conferenceName = 'NERIST Conf. 2025';
const tagline = 'Innovating the Future of Information and Communication Technology';
const aboutText = 'Join leading researchers, academics, and industry experts at NERIST Conf. 2025 to explore the latest advancements and trends in ICT. Discover cutting-edge research, network with peers, and contribute to the future of technology. ';
const keynoteSpeakers = [
    { name: 'Dr. Eleanor Vance', title: 'Chief Innovation Officer', affiliation: 'Global Tech Innovations Inc.', image: speaker1Image, link: '/speakers' },
    { name: 'Professor Kenji Tanaka', title: 'Professor of Robotics', affiliation: 'Tokyo Institute of Advanced Robotics', image: speaker2Image, link: '/speakers' },
    // Add more speakers
];
const importantDates = [
    { date: 'May 10, 2025', event: 'Paper Submission Deadline', link: '/paper-submission' },
    { date: 'June 15, 2025', event: 'Early Bird Registration Ends', link: '/registration' },
    { date: 'July 25-27, 2025', event: 'Conference Dates', link: '/schedule' },
];
const venueName = 'City Convention Center, Guwahati';
const venueLink = '/venue';
const callForPapersLink = '/call-for-papers'; // Or /paper-submission
const sponsors = [sponsor1Logo, sponsor2Logo, sponsor1Logo, sponsor2Logo, sponsor1Logo /* Add more sponsor logos */];

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
};

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    hover: { scale: 1.02, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const Homepage = () => {
    const heroImages = [heroImage1, heroImage2, heroImage3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [heroImages.length]);

    return (
        <motion.div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200" variants={containerVariants} initial="initial" animate="animate">
            {/* Hero Section with Image Slider */}
            <section className="relative py-24 md:py-48 bg-cover bg-center overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={currentImageIndex}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }} // Adjust opacity for desired darkness of overlay
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black opacity-40" /> {/* Slightly reduced static overlay opacity */}
                <div className="container mx-auto text-center relative z-10">
                    <motion.h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
                        variants={{ initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } } }}>
                        {conferenceName}
                    </motion.h1>
                    <motion.p className="text-lg md:text-xl text-gray-200 mb-8"
                        variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' } } }}>
                        {tagline}
                    </motion.p>
                    <motion.Link to="/registration" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300"
                        variants={{ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.7, ease: 'easeOut' } } }}>
                        Register Now
                    </motion.Link>
                </div>
            </section>

            {/* About the Conference Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-8">
                    <motion.h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center" variants={cardVariants}>About {conferenceName}</motion.h2>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" variants={cardVariants}>
                        <div>
                            <img src={aboutImage} alt="About ICTCON 2025" className="rounded-lg shadow-md" />
                        </div>
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">{aboutText}</p>
                            <Link to="/about" className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300">Learn More <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Keynote Speakers Teaser */}
            {keynoteSpeakers.length > 0 && (
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-8">
                        <motion.h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center" variants={cardVariants}>Keynote Speakers</motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {keynoteSpeakers.slice(0, 3).map((speaker, index) => (
                                <motion.div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col items-center p-6" variants={cardVariants} whileHover="hover">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                                        <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-full" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-indigo-800 text-center mb-1">{speaker.name}</h3>
                                    <p className="text-sm text-gray-600 text-center mb-0">{speaker.title}</p>
                                    <p className="text-sm text-gray-500 text-center">{speaker.affiliation}</p>
                                    <Link to={speaker.link} className="text-indigo-500 hover:text-indigo-700 mt-2 text-sm transition duration-300">More Info</Link>
                                </motion.div>
                            ))}
                        </div>
                        {keynoteSpeakers.length > 3 && (
                            <div className="text-center mt-6">
                                <Link to="/speakers" className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300">View All Speakers <span aria-hidden="true">&rarr;</span></Link>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Important Dates Highlight */}
            {importantDates.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-8">
                        <motion.h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center" variants={cardVariants}>Important Dates</motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {importantDates.map((dateItem, index) => (
                                <motion.div key={index} className="bg-indigo-100 rounded-lg shadow-md p-6 flex items-center" variants={cardVariants}>
                                    <FaCalendarAlt className="text-indigo-500 text-2xl mr-4" />
                                    <div>
                                        <h4 className="font-semibold text-indigo-800">{dateItem.event}</h4>
                                        <p className="text-gray-700">{dateItem.date}</p>
                                        <Link to={dateItem.link} className="text-indigo-500 hover:text-indigo-700 text-sm transition duration-300">Learn More</Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link to="/dates" className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300">View All Dates <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Venue Showcase */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-8">
                    <motion.h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center" variants={cardVariants}>Venue</motion.h2>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" variants={cardVariants}>
                        <div>
                            <img src={venueImage} alt={venueName} className="rounded-lg shadow-md" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{venueName}</h3>
                            <p className="text-gray-700 leading-relaxed mb-4">The conference will be held at a premier location offering excellent facilities and a comfortable environment for all attendees.</p>
                            <Link to={venueLink} className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300">Explore Venue <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call for Papers Teaser (Optional) */}
            {callForPapersLink && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-8 text-center">
                        <motion.div className="bg-indigo-50 rounded-lg p-8 shadow-md" variants={cardVariants}>
                            <FaBullhorn className="text-indigo-500 text-4xl mb-4" />
                            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Call for Papers</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">Submit your innovative research and contribute to the advancement of information and communication technology.</p>
                            <Link to={callForPapersLink} className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300">Submit Paper</Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Sponsors & Partners Section */}
            {sponsors.length > 0 && (
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-8">
                        <motion.h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center" variants={cardVariants}>Our Sponsors & Partners</motion.h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
                            {sponsors.map((sponsor, index) => (
                                <motion.div key={index} className="bg-white rounded-lg shadow-sm p-4 flex justify-center items-center" variants={cardVariants} whileHover={{ opacity: 0.8 }}>
                                    <img src={sponsor} alt={`Sponsor ${index + 1}`} className="max-h-16 object-contain" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </motion.div>
    );
};

export default Homepage;