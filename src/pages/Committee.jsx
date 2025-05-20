import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';

// Sample committee member data (replace with your actual data and image paths)
const committeeMembers = [
    {
        role: 'Chief Patron',
        members: [
            { name: 'Prof. Narendranath S.', affiliation: 'NERIST', designation: 'Director', image: '/src/assets/committee/director-nerist.png' },
            // Add more organizing committee members
        ],
    },
    {
        role: 'Patron',
        members: [
            { name: 'Prof. Sarsing Gao', affiliation: 'Dean (Academic)', designation: 'NERIST', image: '/src/assets/committee/sarsing-gao.png' },
            // Add more organizing committee members
        ],
    },
    {
        role: 'Advisory Committee',
        members: [
            { name: 'Prof. Anand Prakash', affiliation: 'Professor, Department of Psychology', designation: 'University of Delhi', image: '/src/assets/committee/anand-prakash-du.jfif' },
            { name: 'Prof. Girishwar Misra', affiliation: 'Professor, Department of Psychology', designation: 'University of Delhi', image: '/src/assets/committee/girishwar-mishra-du.jfif' },
            { name: 'Dr. Trude Sundberg', affiliation: 'Sr. lecturer, Social Policy', designation: 'University of Kent, United Kingdom', image: '/src/assets/committee/trude-sunberg-uk.webp' },
            { name: 'Prof. Rita R. Talukdar', affiliation: 'Professor, Department of Psychology', designation: 'Gauhati University', image: '/src/assets/committee/rita-rani-talukdar.jpg' },
            { name: 'Prof. S.P.K. Jena', affiliation: 'Professor, Department of Applied Psychology', designation: 'Delhi University', image: '/src/assets/committee/spk-jena-du.jfif' },
            { name: 'Prof. K. B. L. Srivastava', affiliation: 'Professor (Psychology), Department of HSS', designation: 'IIT KGP', image: '/src/assets/committee/kbl-kgp.jfif' },
            { name: 'Prof. Indraneel Bhowmik', affiliation: 'Professor, Department of Economics', designation: 'Tripura University', image: '/src/assets/committee/indraneel-bhowmik-tu.jpeg' },
            // Add more organizing committee members
        ],
    },
    {
        role: 'Conference Chair',
        members: [
            { name: 'Prof. Raju Barthakur', affiliation: 'Head, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Raju-borthakur-nerist.jpeg' },
            // Add more organizing committee members
        ],
    },
    {
        role: 'Convener',
        members: [
            { name: 'Dr. Yuma Narah', affiliation: 'Assistant Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Yuma-Narah-nerist.jpg' },
        ],
    },
    {
        role: 'Joint Convener',
        members: [
            { name: 'Dr. Geling Modi', affiliation: 'Assistant Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Geling-Modi-nerist.jpg' },
            // Add more advisory committee members
        ],
    },
    {
        role: 'Organizing Committee',
        members: [
            { name: 'Prof. P. Parida', affiliation: 'Chairperson, Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/parida-nerist.jpg' },
            { name: 'Prof. Raju Barthakur', affiliation: 'Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Raju-borthakur-nerist.jpeg' },
            { name: 'Prof. Arnab Bandyopadhyay', affiliation: 'Professor, Department of AE', designation: 'NERIST', image: '/src/assets/committee/arnab-nerist.png' },
            { name: 'Shri Ranendra Prasad', affiliation: 'Associate Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/ranendra-nerist.jpg' },
            { name: 'Dr. Yamem Tamut', affiliation: 'Associate Professor, Department of CE', designation: 'NERIST', image: '/src/assets/committee/yamem-nerist.jpg' },
            { name: 'Dr. Ravi Kumar Gupta', affiliation: 'Associate Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Ravi-Kumar-Gupta-nerist.jpg' },
            { name: 'Dr. Kunal Borah', affiliation: 'Associate Professor, Department of Physics', designation: 'NERIST', image: '/src/assets/committee/kunal-borah-nerist.jpg' },
            { name: 'Dr. Santosh Tamang', affiliation: 'Assistant Professor, Department of ME', designation: 'NERIST', image: '/src/assets/committee/santosh-nerist.jpeg' },
            { name: 'Dr. Chiging Sonia', affiliation: 'Assistant Professor, Department of Physics', designation: 'NERIST', image: '/src/assets/committee/Sonia-nerist.jpg' },
            { name: 'Ms. Tori Basar', affiliation: 'Assistant Professor, Department of CE', designation: 'NERIST', image: '/src/assets/committee/tori-basar-nerist.jpg' },
            { name: 'Mr. Kaushik Ray', affiliation: 'Assistant Professor, Department of CSE', designation: 'NERIST', image: '/src/assets/committee/kaushik-ray-nerist.png' },
            // Add more advisory committee members
        ],
    },
    {
        role: 'Review Board',
        members: [
            { name: 'Prof. P. Parida', affiliation: 'Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/parida-nerist.jpg' },
            { name: 'Prof. Anand Prakash', affiliation: 'Professor, Department of Psychology', designation: 'University of Delhi', image: '/src/assets/committee/anand-prakash-du.jfif' },
            { name: 'Prof. Rita R. Talukdar', affiliation: 'Professor, Department of Psychology', designation: 'Gauhati University', image: '/src/assets/committee/rita-rani-talukdar.jpg' },
            { name: 'Prof. S.P.K. Jena', affiliation: 'Professor, Department of Applied Psychology', designation: 'Delhi University', image: '/src/assets/committee/spk-jena-du.jfif' },
            { name: 'Prof. K. B. L. Srivastava', affiliation: 'Professor (Psychology), Department of HSS', designation: 'IIT KGP', image: '/src/assets/committee/kbl-kgp.jfif' },
            { name: 'Dr. Dharmeshwari Lourembam', affiliation: 'Assistant Professor, Department of Psychology', designation: 'RGU', image: '/src/assets/committee/Dharmeswari-rgu.png' },
            { name: 'Dr. Kakali Goswami', affiliation: 'Assistant Professor, Department of Psychology', designation: 'RGU', image: '/src/assets/committee/kakali-rgu.png' },
            { name: 'Prof. Indraneel Bhowmik', affiliation: 'Professor, Department of Economics', designation: 'TU', image: '/src/assets/committee/indraneel-bhowmik-tu.jpeg' },
            { name: 'Dr. Ravi Kumar Gupta', affiliation: 'Associate Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Ravi-Kumar-Gupta-nerist.jpg' },
            { name: 'Dr. Yuma Narah', affiliation: 'Assistant Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Yuma-Narah-nerist.jpg' },
            { name: 'Dr. Geling Modi', affiliation: 'Assistant Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Geling-Modi-nerist.jpg' },
            // Add more advisory committee members
        ],
    },
    {
        role: 'Editorial Committee',
        members: [
            { name: 'Prof. J. Paulo Davim', affiliation: 'Series Editor', designation: 'University of Aveiro, Portugal', image: '/src/assets/committee/paulo-portugal.webp' },
            { name: 'Prof. Girishwar Misra', affiliation: 'Professor, Department of Psychology', designation: 'University of Delhi', image: '/src/assets/committee/girishwar-mishra-du.jfif' },
            { name: 'Prof. Raju Barthakur', affiliation: 'Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Raju-borthakur-nerist.jpeg' },
            { name: 'Dr. Yuma Narah', affiliation: 'Assistant Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Yuma-Narah-nerist.jpg' },
            { name: 'Dr. Geling Modi', affiliation: 'Assistant Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Geling-Modi-nerist.jpg' },
            // Add more advisory committee members
        ],
    },
    {
        role: 'Finance Committee',
        members: [
            { name: 'Prof. Arnab Bandyopadhyay', affiliation: 'Professor, Department of AE', designation: 'NERIST', image: '/src/assets/committee/arnab-nerist.png' },
            { name: 'Dr. Ravi Kumar Gupta', affiliation: 'Associate Professor, Department of HSS', designation: 'NERIST', image: '/src/assets/committee/Dr.-Ravi-Kumar-Gupta-nerist.jpg' },
            { name: 'Shri Toko Shama', affiliation: 'Assistant Registrar', designation: 'NERIST', image: '/src/assets/committee/toko-sama-nerist.png' },
            // Add more advisory committee members
        ],
    },
    {
        role: 'Publicity Committee',
        members: [
            { name: 'Dr. Kunal Borah', affiliation: 'Associate Professor, Department of Physics', designation: 'NERIST', image: '/src/assets/committee/kunal-borah-nerist.jpg' },
            { name: 'Dr. Yamem Tamut', affiliation: 'Associate Professor, Department of CE', designation: 'NERIST', image: '/src/assets/committee/yamem-nerist.jpg' },
            { name: 'Dr. Santosh Tamang', affiliation: 'Assistant Professor, Department of ME', designation: 'NERIST', image: '/src/assets/committee/santosh-nerist.jpeg' },
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
                        Meet the passionate individuals who are working hard to make MHLRP 2025 a successful and
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