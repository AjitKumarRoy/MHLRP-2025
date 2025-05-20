import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUniversity, FaBuilding, FaCheckCircle, FaCreditCard, FaInfoCircle } from 'react-icons/fa';

// Sample registration data (replace with your actual data)
const registrationTiers = [
    {
        category: 'Students',
        fee: 'INR 1000 / USD 20',
        deadline: '25 October, 2025',
        benefits: [
            'Early Bird Price - INR 750 / USD 15',
            'Conference materials',
            'Lunch and coffee breaks',
            'Certificate of participation',
        ],
        link: '[YOUR_STUDENT_REGISTRATION_LINK]',
        icon: FaUserGraduate,
        color: 'bg-blue-100 text-blue-700',
        buttonColor: 'bg-blue-500 hover:bg-blue-600',
    },
    {
        category: 'Academics',
        fee: 'INR 1500 / USD 25',
        deadline: '25 October, 2025',
        benefits: [
            'Early Bird Price - INR 1200 / USD 20',
            'Conference materials',
            'Lunch and coffee breaks',
            'Certificate of participation',
            'Opportunity to present paper',
        ],
        link: '[YOUR_ACADEMIC_REGISTRATION_LINK]',
        icon: FaUniversity,
        color: 'bg-green-100 text-green-700',
        buttonColor: 'bg-green-500 hover:bg-green-600',
    },
    {
        category: 'Industry Delegates',
        fee: 'INR 2,500 / USD 35',
        deadline: '25 October, 2025',
        benefits: [
            'Early Bird Price - INR 2000 / USD 30',
            'Conference materials',
            'Lunch and coffee breaks',
            'Certificate of participation',
            'Networking opportunities',
            'Industry-focused sessions',
        ],
        link: '[YOUR_INDUSTRY_REGISTRATION_LINK]',
        icon: FaBuilding,
        color: 'bg-indigo-100 text-indigo-700',
        buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    },
];

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
};

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    hover: { scale: 1.02, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Registration = () => {
    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-teal-50 to-cyan-100"
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
                    <h1 className="text-4xl font-extrabold text-teal-800 mb-6 tracking-tight">
                        MHLRP 2025 <span className="text-cyan-600">Registration</span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Join us for MHLRP 2025! Choose the registration category that best suits you and secure your
                        spot today.
                    </p>
                </motion.div>

                {/* Pricing Tiers Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {registrationTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between ${tier.color}`}
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div>
                                <div className="text-4xl font-bold mb-4 flex items-center justify-center">
                                    <tier.icon className="mr-2" size={32} /> {tier.category}
                                </div>
                                <p className="text-2xl font-semibold text-gray-800 text-center mb-3">{tier.fee}</p>
                                <p className="text-sm text-gray-600 text-center mb-4">Deadline: {tier.deadline}</p>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
                                    {tier.benefits.map((benefit, i) => (
                                        <li key={i} className="mb-1">{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                            <motion.a
                                href={tier.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center ${tier.buttonColor} text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 mt-4`}
                                variants={buttonVariants}
                                whileHover="hover"
                            >
                                <FaCreditCard className="mr-2" /> Register Now
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                {/* Key Registration Information Card */}
                <motion.div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-cyan-400" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center">
                        <FaInfoCircle className="mr-2 text-cyan-500" /> Important Registration Information
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                        <li>Payment can be made via credit card, debit card, or bank transfer (details on the portal).</li>
                        <li>The registration fee includes access to all conference sessions, materials, and meals as specified.</li>
                        <li>Cancellation policy: [Insert your cancellation policy here].</li>
                        <li>For any registration queries, please contact : mhlrp2025@gmail.com.</li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Registration;