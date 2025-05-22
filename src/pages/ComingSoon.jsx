import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Import your background image or video
import backgroundImage from '../assets/coming-soon-bg.jpg'; // Replace with your image
// Or import video: import backgroundVideo from '../assets/coming-soon-bg.mp4';

const ComingSoon = () => {
    const conferenceDate = new Date('July 25, 2025 09:00:00 GMT+0530'); // Replace with your actual conference start date and time
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

    function getTimeRemaining() {
        const total = Date.parse(conferenceDate) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days: days < 10 ? '0' + days : days,
            hours: hours < 10 ? '0' + hours : hours,
            minutes: minutes < 10 ? '0' + minutes : minutes,
            seconds: seconds < 10 ? '0' + seconds : seconds,
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(getTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
            style={{ backgroundImage: `url(${backgroundImage})` }} // Or use video element
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}

            <motion.div className="relative z-10 text-center p-8 rounded-lg shadow-xl bg-black bg-opacity-30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-indigo-400 tracking-tight"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    MHLRP 2025
                </motion.h1>
                <motion.p className="text-lg md:text-xl text-gray-300 mb-6"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    This Page is under Construction.
                </motion.p>

                <motion.div className="flex space-x-4 justify-center mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-pink-400">{timeRemaining.days}</div>
                        <div className="text-sm text-gray-400">Days</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">{timeRemaining.hours}</div>
                        <div className="text-sm text-gray-400">Hours</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400">{timeRemaining.minutes}</div>
                        <div className="text-sm text-gray-400">Minutes</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-400">{timeRemaining.seconds}</div>
                        <div className="text-sm text-gray-400">Seconds</div>
                    </div>
                </motion.div>

                <motion.div className="mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <p className="text-gray-300 mb-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        Be the first to know when we launch!
                    </p>
                    <div className="flex rounded-full overflow-hidden border border-gray-600">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent text-white px-4 py-2 focus:outline-none w-full"
                            style={{ fontFamily: 'Open Sans, sans-serif' }}
                        />
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Subscribe
                        </button>
                    </div>
                </motion.div>

                <motion.div className="flex space-x-4 justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                >
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:info@ictcon.org" className="text-gray-400 hover:text-white transition duration-300">
                        <FaEnvelope size={24} />
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ComingSoon;