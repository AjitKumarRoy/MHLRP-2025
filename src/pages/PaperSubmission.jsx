import React from 'react';
import { motion } from 'framer-motion';
import { FaListOl, FaFileAlt, FaLink, FaExclamationTriangle, FaUpload  } from 'react-icons/fa';

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
};

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    hover: { scale: 1.01, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const PaperSubmission = () => {
    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-green-50 to-teal-100"
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
                        Paper <span className="text-green-600">Submission</span> - ICTCON 2025
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Follow these steps to submit your research paper to ICTCON 2025. Ensure you adhere to the
                        guidelines and use the provided templates for a smooth submission process.
                    </p>
                    <motion.a
                        href="[YOUR_SUBMISSION_PORTAL_LINK]" // Replace with the actual submission portal link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300 mt-8"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <FaUpload  className="mr-2" /> Go to Submission Portal
                    </motion.a>
                </motion.div>

                {/* Step-by-Step Submission Guide */}
                <motion.div className="mb-12" variants={cardVariants}>
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
                            <FaListOl className="mr-2 text-green-500" /> Submission Steps
                        </h2>
                        <ol className="list-decimal list-inside text-gray-600 leading-relaxed space-y-4">
                            <li>
                                **Prepare Your Paper:** Ensure your paper adheres to the ICTCON 2025 guidelines and uses the official template.
                                <motion.a
                                    href="/templates" // Replace with the link to your templates page
                                    className="inline-block text-blue-500 hover:underline ml-2"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Download Templates
                                </motion.a>
                            </li>
                            <li>
                                **Create an Account:** If you are a new user, create an account on the submission portal.
                                <motion.a
                                    href="[YOUR_SUBMISSION_PORTAL_LINK]/register" // Replace with the registration link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-500 hover:underline ml-2"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Register Here
                                </motion.a>
                            </li>
                            <li>
                                **Login to the Portal:** Use your credentials to log in to the paper submission system.
                                <motion.a
                                    href="[YOUR_SUBMISSION_PORTAL_LINK]/login" // Replace with the login link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-500 hover:underline ml-2"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Login
                                </motion.a>
                            </li>
                            <li>
                                **Submit Your Paper:** Follow the instructions on the portal to upload your paper and provide the necessary information.
                            </li>
                            <li>
                                **Confirmation:** Upon successful submission, you will receive a confirmation email.
                            </li>
                        </ol>
                    </div>
                </motion.div>

                {/* Key Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <motion.div className="bg-white rounded-xl shadow-md p-8" variants={cardVariants}>
                        <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center">
                            <FaFileAlt className="mr-2 text-green-500" /> Submission Guidelines
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Please ensure your paper adheres to the ICTCON 2025 submission guidelines regarding formatting,
                            length, and content.
                        </p>
                        <motion.a
                            href="/guidelines" // Replace with the link to your guidelines page
                            className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            View Guidelines
                        </motion.a>
                    </motion.div>

                    <motion.div className="bg-white rounded-xl shadow-md p-8" variants={cardVariants}>
                        <h3 className="text-xl font-semibold text-teal-700 mb-2 flex items-center">
                            <FaLink className="mr-2 text-green-500" /> Submission Portal
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All papers must be submitted electronically through our online submission portal.
                        </p>
                        <motion.a
                            href="[YOUR_SUBMISSION_PORTAL_LINK]" // Replace with the actual submission portal link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-indigo-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-300"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Go to Portal
                        </motion.a>
                    </motion.div>
                </div>

                {/* Important Notes */}
                <motion.div className="bg-yellow-50 rounded-xl shadow-md p-8 border-l-4 border-yellow-400" variants={cardVariants}>
                    <h3 className="text-xl font-semibold text-orange-700 mb-2 flex items-center">
                        <FaExclamationTriangle className="mr-2 text-orange-500" /> Important Notes
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                        <li>Ensure all authors' information is correctly entered during submission.</li>
                        <li>Only PDF files will be accepted for submission.</li>
                        <li>Double-check your paper for formatting and language before submitting.</li>
                        <li>You can track the status of your submission through the portal.</li>
                        {/* Add more important notes */}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PaperSubmission;