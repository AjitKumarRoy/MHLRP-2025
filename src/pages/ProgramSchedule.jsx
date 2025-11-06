import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaUser, FaTags } from 'react-icons/fa';

// Updated program schedule data from the image
const programSchedule = [
    {
        day: 'Inaugural Session', // Updated day title from the image
        sessions: [
            {
                time: '08:30 - 09:30 A.M.',
                title: 'Registration',
                speaker: 'N/A',
                venue: 'Main Hall', // Added a default venue
                type: 'general',
            },
            {
                time: '09:30 - 09:35 A.M.',
                title: 'Welcome Address by HoD, HSS',
                speaker: 'Prof. R. Barthakur',
                venue: 'Main Hall',
                type: 'general',
            },
            {
                time: '09:35 - 09:40 A.M.',
                title: 'Lighting of the Lamp',
                speaker: 'N/A',
                venue: 'Main Hall',
                type: 'ceremony',
            },
            {
                time: '09:40 - 09:50 A.M.',
                title: 'Felicitation of the Guests',
                speaker: 'N/A',
                venue: 'Main Hall',
                type: 'ceremony',
            },
            {
                time: '09:50 - 10:00 A.M.',
                title: 'Conference Overview',
                speaker: 'Dr. Yuma Narah',
                venue: 'Main Hall',
                type: 'general',
            },
            {
                time: '10:00 - 10:10 A.M.',
                title: 'Address by Director, NERIST',
                speaker: 'Prof. Narendranath S.',
                venue: 'Main Hall',
                type: 'talk',
            },
            {
                time: '10:10 - 10:20 AM',
                title: 'Address by Director, SJETA',
                speaker: 'Shri Yumlam Kaha',
                venue: 'Main Hall',
                type: 'talk',
            },
            {
                time: '10:20 - 10:30 A.M.',
                title: 'Address by the Special Invitee',
                speaker: 'Dr. Nikhil Sengupta',
                venue: 'Main Hall',
                type: 'talk',
            },
            {
                time: '10:30 - 10:40 A.M.',
                title: 'Address by the Guest of Honour',
                speaker: 'Prof. Rita Rani Talukdar',
                venue: 'Main Hall',
                type: 'talk',
            },
            {
                time: '10:40 - 10:45 A.M.',
                title: 'Book Release under TRI Projects',
                speaker: 'Dr. Bikash Bage',
                venue: 'Main Hall',
                type: 'ceremony',
            },
            {
                time: '10:45 - 11:40 A.M.',
                title: 'Address by Chief Guest cum Keynote Speech',
                speaker: 'Prof. Anand Prakash',
                venue: 'Main Hall',
                type: 'keynote',
            },
            {
                time: '11:45 - 11:50 A.M.',
                title: 'Vote of Thanks',
                speaker: 'Dr. Ravi Kumar Gupta',
                venue: 'Main Hall',
                type: 'general',
            },
            {
                time: '11:50 A.M.',
                title: 'National Anthem',
                speaker: 'N/A',
                venue: 'Main Hall',
                type: 'ceremony',
            },
            {
                time: 'Following Anthem',
                title: 'Group Photograph followed by High Tea',
                speaker: 'N/A',
                venue: 'Outside Hall',
                type: 'break',
            },
            {
                time: '12:00 PM - 01:00 PM',
                title: 'Plenary Session',
                speaker: 'Prof. Trude Sundberg',
                venue: 'Main Hall',
                type: 'plenary',
            },
            {
                time: '01:00 PM',
                title: 'Lunch Break',
                speaker: 'N/A',
                venue: 'Dining Area',
                type: 'break',
            },
        ],
    },
    // Removed the sample "July 26, 2025" day
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

// Updated colors to include new types
const sessionColors = {
    keynote: 'bg-teal-100 text-teal-700 border-teal-500',
    plenary: 'bg-blue-100 text-blue-700 border-blue-500',
    talk: 'bg-purple-100 text-purple-700 border-purple-500',
    ceremony: 'bg-yellow-100 text-yellow-700 border-yellow-500',
    general: 'bg-gray-100 text-gray-700 border-gray-500',
    break: 'bg-indigo-100 text-indigo-700 border-indigo-500',
    // Original types (you can keep or remove them)
    invited: 'bg-purple-100 text-purple-700 border-purple-500',
    technical: 'bg-green-100 text-green-700 border-green-500',
    workshop: 'bg-orange-100 text-orange-700 border-orange-500',
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
                                        {/* This logic dynamically pulls the color from sessionColors */}
                                        <span className={`inline-block bg-${sessionColors[session.type]?.split('-')[1]}-100 text-${sessionColors[session.type]?.split('-')[1]}-700 rounded-full px-3 py-1 text-sm font-semibold`}>
                                            {session.type.toUpperCase()}
                                        </span>
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