import React, { useState } from 'react';
import { motion } from 'framer-motion';

import knowedgeImage from '../assets/knowledge-partner/bridge-logo.jpeg'
import knowedgeImage2 from '../assets/knowledge-partner/mariwala-logo.png'


const knowledgePartners = [
    {
        logo: knowedgeImage, // Placeholder logo
        name: 'Bridge Kolkata',
        description: 'BRIDGE is a Kolkata, India, based non-profit that engages at the intersections of Gender- Sexuality, Inclusion, and Economics. It works to build evidence, narratives, networks, and action for pro-people, pro-humanity and pro-ecology changes in society, with a focus on the gender-sexuality minority communities from East and North East India, and the backdrop of the equal rights movement in the larger Bay of Bengal Region. It started its journey in late 2020 with a dual focus on ground-level climate issues and gender-sexuality rights and later consolidated its objectives to focus its work primarily on enabling equal rights and access for gender-sexuality minorities.',
    },
    {
        logo: knowedgeImage2,
        name: 'MHI',
        description: 'Mariwala Health Initiative (MHI) is a Mumbai, India-based funding and advocacy organization committed to reimagining mental health through a rights-based, inclusive, and intersectional lens. Working at the crossroads of mental health, social justice, and community care, MHI supports grassroots and community-led initiatives that center lived experiences, challenge systemic barriers, and prioritize care for marginalized populations—including gender and sexual minorities, Dalit and Adivasi communities, persons with disabilities, and others historically excluded from mainstream mental health narratives. Since its inception in 2014, MHI has aimed to democratize mental health by amplifying alternative voices, supporting psychosocial well-being, and building sustainable, community-rooted ecosystems of care across India.',
    },
];

const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const KnowledgePartnersSection = () => {
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
                            Knowledge Partners
                        </motion.h2>
                        <div className="flex justify-center"> {/* Added flex and justify-center for centering the grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-8"> {/* Removed items-center justify-center here */}
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

export default KnowledgePartnersSection;