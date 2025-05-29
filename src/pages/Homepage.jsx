import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // for seo
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBullhorn,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";

import KnowledgePartnersSection from "@/components/KnowledgePartners";
import SupportersSection from "@/components/Supporters";
import ScrollingNotification from "@/components/ScrollingNotification";

// Import your actual hero images
import heroImage1 from "../assets/background-image/nerist-background1.jpg";
import heroImage2 from "../assets/background-image/nerist-background2.jpg";
import heroImage3 from "../assets/background-image/nerist-background3.jpg";
import heroImage4 from "../assets/background-image/nerist-library.jpg";
import aboutImage from "../assets/mhlrp-logo.png";
import speaker1Image from "../assets/committee/demo-speaker.png";
import speaker2Image from "../assets/committee/demo-speaker.png";
import venueImage from "../assets/NERIST-gate.png";
import sponsor1Logo from "../assets/knowledge-partner/bridge-logo.jpeg";
import sponsor2Logo from "../assets/knowledge-partner/mariwala-logo.png";

// Conference-specific constants (consistent with other pages)
const conferenceName = "Invisible Struggles: Mental Health and the Lived Realities of the Peripheralized";
const conferenceShortForm = "MHLRP 2025";
const hosting = "Department of Humanities and Social Sciences";
const venue = "North Eastern Regional Institute of Science and Technology";
const venueShortForm = "NERIST";
const deemedUniversity = "Deemed-to-be University under the Ministry of Education, Government of India";
const aboutText = "Mental health remains a global concern, with marginalized and peripheralized communities experiencing significant disparities in access to mental health care, social support, and economic opportunities. These populations, often neglected in mainstream discussions, face unique psychological stressors arising from socio-political, economic, cultural and geographical exclusion. Addressing their mental health concerns requires a multidisciplinary approach involving psychology, public health, social work, policy-making, and community engagement. The conference aims to bring together international experts, researchers, practitioners, and policymakers to deliberate on effective strategies for promoting mental well-being among peripheralized populations.";
const baseUrl = "https://mhlrp2025.com"; // Replace with actual domain
const logoImage = "/assets/mhlrp-logo.png"; // Production path after Vite build
const homepageDescription = "Join MHLRP 2025 on November 6-7, 2025, at NERIST, Arunachal Pradesh, to explore mental health solutions for peripheralized communities. Submit abstracts by July 31, 2025.";

// Structured data for the Homepage
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `${conferenceShortForm} - Mental Health Conference`,
  "description": homepageDescription,
  "url": baseUrl,
  "isPartOf": {
    "@type": "Event",
    "name": conferenceName,
    "startDate": "2025-11-06",
    "endDate": "2025-11-07",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": venue,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nirjuli",
        "addressLocality": "Itanagar",
        "addressRegion": "Arunachal Pradesh",
        "postalCode": "791109",
        "addressCountry": "IN"
      }
    },
    "description": aboutText,
    "organizer": {
      "@type": "Organization",
      "name": hosting,
      "url": "https://nerist.ac.in/humanities-and-social-sciences-department/"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Abstract Submission",
        "description": "Submit abstracts by July 31, 2025, for MHLRP 2025.",
        "validThrough": "2025-07-31",
        "url": `${baseUrl}/paper-submission`
      },
      {
        "@type": "Offer",
        "name": "Conference Registration",
        "description": "Register by October 25, 2025, for MHLRP 2025.",
        "validThrough": "2025-10-25",
        "url": `${baseUrl}/registration`
      }
    ]
  }
};


const keynoteSpeakers = [
  {
    name: "To be",
    title: "Updated",
    affiliation: "soon",
    image: speaker1Image,
    link: "/speakers",
  },
  {
    name: "To be ",
    title: "Updated",
    affiliation: "soon",
    image: speaker2Image,
    link: "/speakers",
  },
  // {
  //   name: "Dr. Trude Sundberg",
  //   title: "Director",
  //   affiliation: "Q-Step Centre",
  //   image: speaker1Image,
  //   link: "/speakers",
  // },
  // Add more speakers
];
const importantDates = [
  {
    date: "31st July, 2025",
    event: "Abstract Submission Deadline",
    link: "/paper-submission",
  },
  {
    date: " 15th August, 2025",
    event: "Confirmation of Acceptance",
    link: "/paper-submission",
  },
  {
    date: "15th October, 2025",
    event: "Full Paper Submission Deadline",
    link: "/paper-submission",
  },
  {
    date: "25th October, 2025",
    event: "Registration & Payment Deadline",
    link: "/registration",
  },
  {
    date: "6th & 7th November, 2025",
    event: "Conference Dates",
    link: "/schedule",
  },
  {
    date: "15th September, 2025",
    event: "Early Bird Registration Ends",
    link: "/registration",
  },
];
const venueName = "NERIST, Nirjuli";
const venueLink = "/venue";
const callForPapersLink = "/call-for-papers"; // Or /paper-submission
const sponsors = [
  sponsor1Logo,
  sponsor2Logo,
  sponsor1Logo,
  sponsor2Logo,
  sponsor1Logo /* Add more sponsor logos */,
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 },
  },
};

const Homepage = () => {
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [heroImages.length]);


  return (
      <motion.div
        className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >

        <Helmet>
        <title>Home | {conferenceShortForm}: Mental Health Conference | NERIST</title>
        <link rel="canonical" href="https://mhlrp2025.com/" />
        <meta name="description" content={homepageDescription} />
        <meta
          name="keywords"
          content="MHLRP 2025, mental health conference, NERIST, Arunachal Pradesh, 2025, peripheralized communities, abstract submission, call for papers, registration 2025, Microsoft CMT peer review"
        />
        <meta property="og:title" content={conferenceName} />
        <meta
          property="og:description"
          content="Join MHLRP 2025 on November 6-7, 2025, at NERIST to address mental health for peripheralized communities. Submit abstracts by July 31, 2025."
        />
        <meta property="og:site_name" content="MHLRP 2025" />
        <meta property="og:image" content={`${baseUrl}${logoImage}`} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={conferenceName} />
        <meta
          property="twitter:description"
          content="Join MHLRP 2025 on November 6-7, 2025, at NERIST to address mental health for peripheralized communities. Submit abstracts by July 31, 2025."
        />
        <meta property="twitter:image" content={`${baseUrl}${logoImage}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <link rel="canonical" href={baseUrl} />
      </Helmet>


        {/* Hero Section with Image Slider */}
        <section className="relative py-24 md:py-48 bg-cover bg-center overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }} // Adjust opacity for desired darkness of overlay
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black opacity-40" />{" "}
          {/* Slightly reduced static overlay opacity */}
          <div className="container mx-auto text-center relative z-10">
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
              variants={{
                initial: { opacity: 0, y: -50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                },
              }}
            >
              {conferenceName}
            </motion.h1>
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
              variants={{
                initial: { opacity: 0, y: -50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                },
              }}
            >
              ({conferenceShortForm})
            </motion.h1>
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
              variants={{
                initial: { opacity: 0, y: -50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                },
              }}
            >
              {hosting}
            </motion.h1>
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
              variants={{
                initial: { opacity: 0, y: -50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                },
              }}
            >
              {venue}
            </motion.h1>
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
              variants={{
                initial: { opacity: 0, y: -50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                },
              }}
            >
              ({venueShortForm})
            </motion.h1>
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight"
              variants={{
                initial: { opacity: 0, y: -50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                },
              }}
            >
              ({deemedUniversity})
            </motion.h1>
            <motion.div
              className="mt-10"
              variants={{
                initial: { opacity: 0, scale: 0.9 },
                animate: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, delay: 0.7, ease: "easeOut" },
                },
              }}
              initial="initial"
              animate="animate"
            >
              <Link
                to="/registration"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300"
              >
                Submit your Abstract
              </Link>
            </motion.div>
          </div>
        </section>

         {/* --- Scrolling Notification Component --- */}
      <ScrollingNotification
        text="📢 The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."
        speed={70} // You can adjust the speed (pixels per second)
      />
      {/* -------------------------------------- */}

        {/* About the Conference Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <motion.h2
              className="text-3xl font-semibold text-indigo-700 mb-8 text-center"
              variants={cardVariants}
            >
              About {conferenceShortForm}
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={cardVariants}
            >
              <div>
                <img
                  src={aboutImage}
                  alt="About MHLRP 2025"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {aboutText}
                </p>
                <Link
                  to="/about"
                  className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300"
                >
                  Learn More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Keynote Speakers Teaser */}
        {keynoteSpeakers.length > 0 && (
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-8">
              <motion.h2
                className="text-3xl font-semibold text-indigo-700 mb-8 text-center"
                variants={cardVariants}
              >
                Keynote Speakers
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {keynoteSpeakers.slice(0, 3).map((speaker, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col items-center p-6"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-indigo-800 text-center mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-0">
                      {speaker.title}
                    </p>
                    <p className="text-sm text-gray-500 text-center">
                      {speaker.affiliation}
                    </p>
                    <Link
                      to={speaker.link}
                      className="text-indigo-500 hover:text-indigo-700 mt-2 text-sm transition duration-300"
                    >
                      More Info
                    </Link>
                  </motion.div>
                ))}
              </div>
              {keynoteSpeakers.length > 3 && (
                <div className="text-center mt-6">
                  <Link
                    to="/speakers"
                    className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300"
                  >
                    View All Speakers <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Important Dates Highlight */}
        {importantDates.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-8">
              <motion.h2
                className="text-3xl font-semibold text-indigo-700 mb-8 text-center"
                variants={cardVariants}
              >
                Important Dates
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {importantDates.map((dateItem, index) => (
                  <motion.div
                    key={index}
                    className="bg-indigo-100 rounded-lg shadow-md p-6 flex items-center"
                    variants={cardVariants}
                  >
                    <FaCalendarAlt className="text-indigo-500 text-2xl mr-4" />
                    <div>
                      <h4 className="font-semibold text-indigo-800">
                        {dateItem.event}
                      </h4>
                      <p className="text-gray-700">{dateItem.date}</p>
                      <Link
                        to={dateItem.link}
                        className="text-indigo-500 hover:text-indigo-700 text-sm transition duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  to="/important-dates"
                  className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300"
                >
                  View All Dates <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Venue Showcase */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-8">
            <motion.h2
              className="text-3xl font-semibold text-indigo-700 mb-8 text-center"
              variants={cardVariants}
            >
              Venue
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={cardVariants}
            >
              <div>
                <img
                  src={venueImage}
                  alt={venueShortForm}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                  {venueName}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nestled in Nirjuli, Itanagar, in the Indian state of Arunachal
                  Pradesh, the North Eastern Regional Institute of Science and
                  Technology (NERIST) is a Centrally Funded Technical Institute
                  (CFTI) established in 1984. It is a deemed-to-be-university
                  that is autonomous and fully funded by the Ministry of
                  Education, Government of India. NERIST is the first Institute
                  in the country to have adopted a modular pattern of
                  engineering education which was later adopted by the Sant
                  Longowal Institute of Engineering and Technology (SLIET), the
                  Central Institute of Technology (CIT), Kokrajhar in Assam, and
                  Ghani Khan Choudhury Institute of Technology (GKCIT), Malda,
                  West Bengal. Representatives from the Ministry of Education,
                  the Government of India, the eight North Eastern beneficiary
                  states, AICTE, and education professionals comprise the Board
                  of Management, which oversees the institute. The Governor of
                  Arunachal Pradesh serves as the de facto head of the NERIST
                  Society, with education ministers from every state in the
                  Northeast as its members. The Chairman is in charge of the
                  Board of Management. All the undergraduate programmes in
                  engineering and applied sciences are accredited by the NBA,
                  apart from the Indian Council of Forestry Research and
                  Education (ICFRE) and the Indian Council of Agricultural
                  Research (ICAR), wherever applicable.
                </p>
                <Link
                  to={venueLink}
                  className="text-indigo-500 hover:text-indigo-700 font-semibold transition duration-300"
                >
                  Explore Venue <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call for Papers Teaser (Optional) */}
        {callForPapersLink && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-8 text-center">
              <motion.div
                className="bg-indigo-50 rounded-lg p-8 shadow-md"
                variants={cardVariants}
              >
                <FaBullhorn className="text-indigo-500 text-4xl mb-4" />
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                  Call for Papers
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                We invite researchers, scholars, and practitioners to submit their original and unpublished work to MHLRP 2025. Explore opportunities to share your innovative ideas and contribute to the advancement of Peripheralized Community.
                </p>
                <Link
                  to={callForPapersLink}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300"
                >
                  Submit Paper
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        <SupportersSection />

        <KnowledgePartnersSection />

        {/* Sponsors & Partners Section */}
        {/* {sponsors.length > 0 && (
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-8">
              <motion.h2
                className="text-3xl font-semibold text-indigo-700 mb-8 text-center"
                variants={cardVariants}
              >
                Sponsors
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
                {sponsors.map((sponsor, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-4 flex justify-center items-center"
                    variants={cardVariants}
                    whileHover={{ opacity: 0.8 }}
                  >
                    <img
                      src={sponsor}
                      alt={`Sponsor ${index + 1}`}
                      className="max-h-16 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )} */}
      </motion.div>
  );
};

export default Homepage;
