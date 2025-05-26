import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Image from '../assets/supporters/arunachal-affairs.png'
import Image2 from '../assets/supporters/tribal-affairs.png'


const knowledgePartners = [
    {
        logo: Image, // Placeholder logo
        name: 'Department of Social Justice & Empowerment & Tribal Affairs Government of Arunachal Pradesh',
        description: '',
    },
    {
        logo: Image2,
        name: 'Ministry Of Tribal Affairs ',
        description: '',
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Supporters = () => {
    // State to manage which partner's description is currently visible
    // Null means no description is shown. Holds the index of the active partner.
    const [activePartnerIndex, setActivePartnerIndex] = useState(null);

    // Function to handle hover (mouse enter)
    const handleMouseEnter = (index) => {
        setActivePartnerIndex(index);
    };

    // Function to handle hover (mouse leave)
    const handleMouseLeave = () => {
        setActivePartnerIndex(null);
    };

    // Function to handle click (toggles description)
    const handleClick = (index) => {
        // If the clicked partner is already active, deactivate it; otherwise, activate it.
        setActivePartnerIndex(activePartnerIndex === index ? null : index);
    };

    return (
        <> {/* Added a Fragment if this section is directly within another component's return */}
            {knowledgePartners.length > 0 && (
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-8">
                        <motion.h2
                            className="text-3xl font-semibold text-indigo-700 mb-8 text-center"
                            variants={cardVariants}
                        >
                            Supported By
                        </motion.h2>
                        <div className="flex justify-center"> {/* Added flex and justify-center for centering the grid */}
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8"> {/* Removed items-center justify-center here    // grid--> 2, 4, 5 */}
                                {knowledgePartners.map((partner, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center cursor-pointer relative" // Added flex-col, items-center, cursor-pointer, relative
                                        variants={cardVariants}
                                        whileHover={{ opacity: 0.9, scale: 1.05 }} // Slight scale on hover
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => handleClick(index)}
                                    >
                                        <img
                                            src={partner.logo} // Use partner.logo
                                            alt={partner.name} // Use partner.name for alt text
                                            className="max-h-16 object-contain mb-2" // Added mb-2 for spacing
                                        />
                                        <p className="text-gray-700 font-medium text-center text-sm">{partner.name}</p> {/* Display partner name */}

                                        {/* Conditional rendering for description */}
                                        {activePartnerIndex === index && partner.description && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }} // Framer Motion's exit animations require AnimatePresence
                                                transition={{ duration: 0.2 }}
                                                className="absolute bottom-0 left-0 right-0 p-2 bg-indigo-50 text-indigo-800 text-xs text-center rounded-b-lg mt-2 transform translate-y-full border-t border-indigo-100"
                                                style={{ zIndex: 10 }} // Ensure it's above other content
                                            >
                                                {partner.description}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Supporters;