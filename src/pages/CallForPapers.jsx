import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaUpload, FaCheckCircle, FaBookOpen, FaEye, FaBook } from 'react-icons/fa';

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

const CallForPapers = () => {
    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-indigo-100"
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
                        Call for <span className="text-purple-600">Papers</span> - ICTCON 2025
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We invite researchers, scholars, and practitioners to submit their original and unpublished work
                        to ICTCON 2025. Explore opportunities to share your innovative ideas and contribute to the
                        advancement of information and communication technology.
                    </p>
                    <motion.button
                        href="/submission" // Replace with your actual submission link
                        className="inline-flex items-center bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition duration-300 mt-8"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <FaUpload className="mr-2" /> Submit Your Paper
                    </motion.button>
                </motion.div>

                {/* Themes and Topics Section */}
                <motion.div className="mb-12" variants={cardVariants}>
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                            <FaBookOpen className="mr-2 text-purple-500" /> Themes and Topics
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                            <li>Artificial Intelligence and Machine Learning</li>
                            <li>Big Data Analytics and Data Mining</li>
                            <li>Cloud Computing and Distributed Systems</li>
                            <li>Cybersecurity and Information Assurance</li>
                            <li>Internet of Things (IoT) and Sensor Networks</li>
                            <li>Mobile Computing and Applications</li>
                            <li>Networking and Communication Technologies</li>
                            <li>Software Engineering and Agile Development</li>
                            <li>Human-Computer Interaction (HCI)</li>
                            <li>Emerging Trends in ICT</li>
                            {/* Add more themes and topics as needed */}
                        </ul>
                    </div>
                </motion.div>

                {/* Submission Guidelines Section */}
                <motion.div className="mb-12" variants={cardVariants}>
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                            <FaFileAlt className="mr-2 text-purple-500" /> Submission Guidelines
                        </h2>
                        <ol className="list-decimal list-inside text-gray-600 leading-relaxed">
                            <li>Papers must be original and not submitted elsewhere.</li>
                            <li>Submissions should be in English.</li>
                            <li>Authors are invited to submit full papers (typically 6-8 pages).</li>
                            <li>Include author names, affiliations, and email addresses.</li>
                            <li>Clearly indicate the corresponding author.</li>
                            <li>Follow the prescribed paper format (see "Paper Format" section).</li>
                            <li>All submissions will undergo a rigorous peer-review process.</li>
                            {/* Add more guidelines */}
                        </ol>
                        <motion.button
                            href="/guidelines" // Replace with a link to detailed guidelines
                            className="inline-flex items-center bg-indigo-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-300 mt-4"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Read Detailed Guidelines
                        </motion.button>
                    </div>
                </motion.div>

                {/* Paper Format Section */}
                <motion.div className="mb-12" variants={cardVariants}>
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                            <FaCheckCircle className="mr-2 text-purple-500" /> Paper Format
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            All submitted papers must adhere to the following format:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                            <li>Use the provided LaTeX or Word template.</li>
                            <li>Paper size: A4.</li>
                            <li>Margins: 1 inch on all sides.</li>
                            <li>Font: Times New Roman, 12pt.</li>
                            <li>Single-spaced.</li>
                            <li>Include abstract, keywords, introduction, methodology, results, discussion, conclusion, and references.</li>
                            {/* Add more format details */}
                        </ul>
                        <motion.button
                            href="/templates" // Replace with a link to download templates
                            className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300 mt-4"
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Download Paper Templates
                        </motion.button>
                    </div>
                </motion.div>

                {/* Review Process Section */}
                <motion.div className="mb-12" variants={cardVariants}>
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                            <FaEye className="mr-2 text-purple-500" /> Review Process
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            All submitted papers will undergo a thorough double-blind peer-review process by experts in
                            the relevant fields. The criteria for evaluation include originality, significance, technical
                            soundness, clarity of presentation, and relevance to the conference themes.
                        </p>
                    </div>
                </motion.div>

                {/* Publication Section */}
                <motion.div variants={cardVariants}>
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                            <FaBook className="mr-2 text-purple-500" /> Publication
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Accepted and presented papers will be published in the conference proceedings, which will be
                            indexed in major academic databases. Select high-quality papers may also be considered for
                            publication in partner journals (details will be announced).
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CallForPapers;