import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';

// Sample committee member data (replace with your actual data and image paths)
const committeeMembers = [
    {
        role: 'Organizing Committee',
        members: [
            { name: 'Dr. Alice Wonderland', affiliation: 'Wonderland University', designation: 'Chair', image: '/src/assets/placeholder-profile.jpg' },
            { name: 'Bob The Builder', affiliation: 'Construction Solutions Inc.', designation: 'Co-Chair', image: '/src/assets/placeholder-profile.jpg' },
            { name: 'Charlie Chaplin', affiliation: 'Silent Film Academy', designation: 'Secretary', image: '/src/assets/placeholder-profile.jpg' },
            // Add more organizing committee members
        ],
    },
    {
        role: 'Technical Program Committee',
        members: [
            { name: 'Prof. Diana Prince', affiliation: 'Themyscira Tech', designation: 'Lead', image: '/src/assets/placeholder-profile.jpg' },
            { name: 'Eve Harrington', affiliation: 'Drama Institute', designation: 'Member', image: '/src/assets/placeholder-profile.jpg' },
            { name: 'Frankenstein', affiliation: 'Bio-Engineering Labs', designation: 'Member', image: '/src/assets/placeholder-profile.jpg' },
            // Add more technical program committee members
        ],
    },
    {
        role: 'Advisory Committee',
        members: [
            { name: 'Grace Hopper', affiliation: 'Naval Computing Pioneers', designation: 'Advisor', image: '/src/assets/placeholder-profile.jpg' },
            { name: 'Linus Torvalds', affiliation: 'Open Source Foundation', designation: 'Advisor', image: '/src/assets/placeholder-profile.jpg' },
            { name: 'Ada Lovelace', affiliation: 'Analytical Engine Society', designation: 'Advisor', image: '/src/assets/placeholder-profile.jpg' },
            // Add more advisory committee members
        ],
    },
];

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
};

const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const memberCardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const Committee = () => {
    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-gray-100 to-blue-100"
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
                    <h1 className="text-4xl font-extrabold text-blue-800 mb-6 tracking-tight">
                        Our <span className="text-indigo-600">Dedicated</span> Team
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Meet the passionate individuals who are working hard to make ICTCON 2025 a successful and
                        memorable event.
                    </p>
                </motion.div>

                {committeeMembers.map((committee, index) => (
                    <motion.section key={index} className="mb-16" variants={sectionVariants}>
                        <h2 className="text-3xl font-semibold text-blue-700 mb-8 flex items-center">
                            <FaUsers className="mr-3 text-indigo-500" /> {committee.role}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {committee.members.map((member, memberIndex) => (
                                <motion.div
                                    key={memberIndex}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col items-center p-6"
                                    variants={memberCardVariants}
                                    whileHover="hover"
                                >
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-blue-800 text-center mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-600 text-center mb-0">{member.designation}</p>
                                    <p className="text-sm text-gray-500 text-center">{member.affiliation}</p>
                                    {/* You could add social media links or a "View Profile" button here if needed */}
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>
        </motion.div>
    );
};

export default Committee;