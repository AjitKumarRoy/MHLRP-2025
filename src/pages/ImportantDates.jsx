import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import ScrollingNotification from '@/components/ScrollingNotification';

// Sample important dates data (replace with your actual dates)
const importantDates = [
    {
        date: '25th May, 2025',
        event: 'Call for Papers Opens',
        status: 'past', // 'past', 'upcoming', 'critical'
        description: 'The submission portal for research papers opens.',
    },
    {
        date: '31st July, 2025',
        event: 'Last date for Abstract Submission',
        status: 'critical',
        description: 'The last date to submit your abstract for MHLRP 2025.',
    },
    {
        date: '15th August, 2025',
        event: 'Notification of Acceptance',
        status: 'upcoming',
        description: 'Authors will be notified about the status of their submitted abstract.',
    },
    {
        date: '15th October, 2025',
        event: 'Last date for Full Paper Submission',
        status: 'upcoming',
        description: 'Deadline for submitting the final version of accepted papers.',
    },
    {
        date: '25th October, 2025',
        event: 'Registration & Payment Deadline',
        status: 'upcoming',
        description: 'Last date for regular registration and payment.',
    },
    {
        date: '6th & 7th November, 2025',
        event: 'MHLRP 2025 Conference Dates',
        status: 'upcoming',
        description: 'The main dates of the Conference on Mental Health and the Lived Realities of the Peripheralized.',
    },
    // Add more important dates
];

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
};

const dateVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const statusColors = {
    past: 'bg-gray-100 text-gray-600 border-gray-300',
    upcoming: 'bg-blue-100 text-blue-700 border-blue-500',
    critical: 'bg-red-100 text-red-700 border-red-500',
};

const ImportantDates = () => {
    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-purple-100 to-pink-100"
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
                    <h1 className="text-4xl font-extrabold text-purple-800 mb-6 tracking-tight">
                        <FaCalendarAlt className="inline mr-2 text-pink-600" /> Important Dates - MHLRP 2025
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Stay updated with the key deadlines and milestones for MHLRP 2025. Mark your calendars!
                    </p>
                </motion.div>

                {/* Important Dates Listing */}
                <div className="space-y-6">
                    {importantDates.map((dateItem, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${statusColors[dateItem.status] || 'border-gray-400'}`}
                            variants={dateVariants}
                        >
                            <div className="md:flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-700">{dateItem.event}</h3>
                                    <p className="text-lg font-bold text-gray-800">{dateItem.date}</p>
                                    {dateItem.description && (
                                        <p className="text-gray-600 mt-1">{dateItem.description}</p>
                                    )}
                                </div>
                                <div className="mt-2 md:mt-0">
                                    {dateItem.status === 'past' && (
                                        <FaCheckCircle className="text-green-500 text-2xl" />
                                    )}
                                    {dateItem.status === 'critical' && (
                                        <FaExclamationTriangle className="text-red-500 text-2xl" />
                                    )}
                                    {dateItem.status === 'upcoming' && (
                                        <FaCalendarAlt className="text-blue-500 text-2xl" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <ScrollingNotification text="Selected papers will be published in the form of an edited book by Taylor & Francis, shortly after the conclusion of the conference." />
            </div>
            
        </motion.div>
    );
};

export default ImportantDates;