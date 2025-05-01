import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaUsers, FaLightbulb, FaHandshake, FaTrophy } from 'react-icons/fa';

// Sample team member data (replace with your actual data and image paths)
const teamMembers = [
    { name: 'Dr. Evelyn Reed', role: 'Conference Chair', image: '/src/assets/team-evelyn.jpg' },
    { name: 'Mr. Samuel West', role: 'Program Coordinator', image: '/src/assets/team-samuel.jpg' },
    { name: 'Ms. Olivia Moore', role: 'Registration Manager', image: '/src/assets/team-olivia.jpg' },
    // Add more team members
];

const coreValues = [
    { name: 'Innovation', icon: FaLightbulb, description: 'We foster and showcase cutting-edge research and technological advancements.' },
    { name: 'Collaboration', icon: FaHandshake, description: 'We believe in the power of bringing together diverse minds to share ideas.' },
    { name: 'Excellence', icon: FaTrophy, description: 'We are committed to maintaining high standards in all aspects of the conference.' },
    { name: 'Impact', icon: FaBullseye, description: 'We aim to contribute meaningfully to the progress of information and communication technology.' },
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

const teamCardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const About = () => {
    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-indigo-50 to-violet-100"
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
                    <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 tracking-tight">
                        About <span className="text-violet-600">NERIST Conf. 2025</span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Learn more about our mission, vision, core values, and the dedicated team behind NERIST Conf. 2025.
                    </p>
                </motion.div>

                {/* Our Mission Card */}
                <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                        <FaBullseye className="mr-2 text-violet-500" /> Our Mission
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        To provide a premier international forum for researchers, academics, and industry professionals
                        to exchange the latest advancements and innovations in information and communication technology,
                        fostering collaboration and driving future progress in the field.
                    </p>
                </motion.div>

                {/* Our Vision Card */}
                <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                        <FaEye className="mr-2 text-violet-500" /> Our Vision
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        To be a leading global conference in information and communication technology, recognized for its
                        high-quality research presentations, impactful discussions, and its role in shaping the future
                        of the digital world.
                    </p>
                </motion.div>

                {/* Core Values Section */}
                <motion.div className="mb-12" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-6 flex items-center">
                        <FaLightbulb className="mr-2 text-violet-500" /> Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div key={index} className="bg-white rounded-lg shadow-md p-6 text-center" variants={cardVariants} whileHover="hover">
                                <div className="text-3xl text-violet-500 mb-3">
                                    <value.icon />
                                </div>
                                <h3 className="text-lg font-semibold text-indigo-800 mb-1">{value.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* The Team Behind It Section */}
                <motion.div className="mb-12" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-6 flex items-center">
                        <FaUsers className="mr-2 text-violet-500" /> The Team Behind It
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col items-center p-6"
                                variants={teamCardVariants}
                                whileHover="hover"
                            >
                                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                                    <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                                </div>
                                <h3 className="text-lg font-semibold text-indigo-800 text-center mb-1">{member.name}</h3>
                                <p className="text-sm text-gray-600 text-center">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Why Attend? Card */}
                <motion.div className="bg-white rounded-xl shadow-md p-8" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                        <FaTrophy className="mr-2 text-violet-500" /> Why Attend ICTCON 2025?
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                        <li>Gain insights from leading experts and keynote speakers.</li>
                        <li>Present your research and receive valuable feedback.</li>
                        <li>Network with peers, academics, and industry professionals.</li>
                        <li>Explore the latest trends and innovations in ICT.</li>
                        <li>Participate in interactive workshops and tutorials.</li>
                        <li>Expand your knowledge and advance your career.</li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;