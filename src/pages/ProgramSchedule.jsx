import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaUser, FaTags } from 'react-icons/fa';

// Sample program schedule data (replace with your actual data)
const programSchedule = [
    {
        day: 'July 25, 2025',
        sessions: [
            {
                time: '9:00 - 10:00',
                title: 'Opening Ceremony & Keynote Address',
                speaker: 'Dr. Anya Sharma',
                venue: 'Main Auditorium',
                type: 'keynote',
                description: 'Welcome address and keynote speech on the future of ICT.',
            },
            {
                time: '10:30 - 12:00',
                title: 'Technical Track 1: Artificial Intelligence',
                speaker: 'Various Presenters',
                venue: 'Room 101',
                type: 'technical',
            },
            {
                time: '10:30 - 12:00',
                title: 'Workshop: Machine Learning Fundamentals',
                speaker: 'Dr. Ben Carter',
                venue: 'Workshop Hall A',
                type: 'workshop',
            },
            // Add more sessions for July 25th
        ],
    },
    {
        day: 'July 26, 2025',
        sessions: [
            {
                time: '9:00 - 10:30',
                title: 'Invited Talk: Cybersecurity Challenges',
                speaker: 'Ms. Chloe Davis',
                venue: 'Main Auditorium',
                type: 'invited',
                description: 'An insightful talk on the evolving landscape of cybersecurity threats.',
            },
            {
                time: '11:00 - 12:30',
                title: 'Technical Track 2: Cloud Computing',
                speaker: 'Various Presenters',
                venue: 'Room 102',
                type: 'technical',
            },
            // Add more sessions for July 26th
        ],
    },
    // Add more days as needed
];

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
};

const dayVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const sessionVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.01, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
};

const sessionColors = {
    keynote: 'bg-teal-100 text-teal-700 border-teal-500',
    invited: 'bg-purple-100 text-purple-700 border-purple-500',
    technical: 'bg-green-100 text-green-700 border-green-500',
    workshop: 'bg-orange-100 text-orange-700 border-orange-500',
    // Add more types and colors as needed
};

const ProgramSchedule = () => {
    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
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
                        MHLRP 2025 <span className="text-indigo-600">Program Schedule</span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Explore the detailed schedule of presentations, keynotes, workshops, and other exciting events
                        planned for MHLRP 2025.
                    </p>
                </motion.div>

                {programSchedule.map((daySchedule, index) => (
                    <motion.div key={index} className="mb-12" variants={dayVariants}>
                        <h2 className="text-3xl font-semibold text-blue-700 mb-6">Day: {daySchedule.day}</h2>
                        <div className="space-y-4">
                            {daySchedule.sessions.map((session, sessionIndex) => (
                                <motion.div
                                    key={sessionIndex}
                                    className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-6 border-l-4 ${sessionColors[session.type] || 'border-gray-400'}`}
                                    variants={sessionVariants}
                                    whileHover="hover"
                                >
                                    <div className="flex items-center mb-2">
                                        <FaClock className="mr-2 text-gray-500" />
                                        <span className="font-semibold text-gray-700">{session.time}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-blue-800 mb-2">{session.title}</h3>
                                    <div className="flex items-center text-gray-600 mb-1">
                                        <FaUser className="mr-2" />
                                        <span>{session.speaker}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FaMapMarkerAlt className="mr-2" />
                                        <span>{session.venue}</span>
                                    </div>
                                    {session.description && (
                                        <p className="text-gray-700 mt-3">{session.description}</p>
                                    )}
                                    <div className="mt-3">
                                        <span className={`inline-block bg-${sessionColors[session.type]?.split('-')[1]}-100 text-${sessionColors[session.type]?.split('-')[1]}-700 rounded-full px-3 py-1 text-sm font-semibold`}>{session.type.toUpperCase()}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProgramSchedule;