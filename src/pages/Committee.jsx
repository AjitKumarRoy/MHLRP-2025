import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------------------
// IMPORT EACH IMAGE HERE
// Ensure these paths are correct relative to THIS FILE's location.
// If your images are in `src/assets/committee/`, these paths should be correct assuming Committee.js is in `src/components/` or similar.
// ----------------------------------------------------------------------
import directorNerist from "../assets/committee/director-nerist.png";
import sarsingGao from "../assets/committee/sarsing-gao.png";
import anandPrakashDu from "../assets/committee/anand-prakash-du.jfif";
import girishwarMishraDu from "../assets/committee/girishwar-mishra-du.jfif";
import trudeSunbergUk from "../assets/committee/trude-sunberg-uk.webp";
import ritaRaniTalukdar from "../assets/committee/rita-rani-talukdar.jpg";
import spkJenaDu from "../assets/committee/spk-jena-du.jfif";
import kblKgp from "../assets/committee/kbl-kgp.jfif";
import indraneelBhowmikTu from "../assets/committee/indraneel-bhowmik-tu.jpeg";
import rajuBorthakurNerist from "../assets/committee/Raju-borthakur-nerist.jpeg";
import drYumaNarahNerist from "../assets/committee/Dr.-Yuma-Narah-nerist.jpg";
import drGelingModiNerist from "../assets/committee/Dr.-Geling-Modi-nerist.jpg";
import paridaNerist from "../assets/committee/parida-nerist.jpg";
import arnabNerist from "../assets/committee/arnab-nerist.png";
import ranendraNerist from "../assets/committee/ranendra-nerist.jpg";
import yamemNerist from "../assets/committee/yamem-nerist.jpg";
import drRaviKumarGuptaNerist from "../assets/committee/Dr.-Ravi-Kumar-Gupta-nerist.jpg";
import kunalBorahNerist from "../assets/committee/kunal-borah-nerist.jpg";
import santoshNerist from "../assets/committee/santosh-nerist.jpeg";
import soniaNerist from "../assets/committee/Sonia-nerist.jpg";
import toriBasarNerist from "../assets/committee/tori-basar-nerist.jpg";
import kaushikRayNerist from "../assets/committee/kaushik-ray-nerist.png";
import dharmeshwariRgu from "../assets/committee/Dharmeswari-rgu.png";
import kakaliRgu from "../assets/committee/kakali-rgu.png";
import pauloPortugal from "../assets/committee/paulo-portugal.webp";
import tokoSamaNerist from "../assets/committee/toko-sama-nerist.png";
import sahilNijhawan from "../assets/committee/sahilNijhawan.avif"; // Placeholder for Sahil Nijhawan
import demoImage from "../assets/committee/demo-speaker.png"; // Placeholder for Head of HSS

// Conference-specific constants (consistent with About.jsx)
const conferenceName =
  "Invisible Struggles: Mental Health and the Lived Realities of the Peripheralized";
const conferenceShortForm = "MHLRP 2025";
const hosting = "Department of Humanities and Social Sciences";
const venue =
  "North Eastern Regional Institute of Science and Technology (NERIST)";
const committeeDescription =
  "Meet the organizing team of MHLRP 2025, including chief patrons, conveners, and advisory committee members, dedicated to addressing mental health disparities at NERIST, November 6-7, 2025.";
const logoImage = "/assets/mhlrp-logo.png"; // Production path after Vite build
const baseUrl = "https://mhlrp2025.com"; // Replace with actual domain

// Structured data for the Committee page
const eventData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Committee - ${conferenceShortForm}`,
  description: committeeDescription,
  url: `${baseUrl}/committee`,
  isPartOf: {
    "@type": "Event",
    name: conferenceName,
    startDate: "2025-11-06",
    endDate: "2025-11-07",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nirjuli",
        addressLocality: "Itanagar",
        addressRegion: "Arunachal Pradesh",
        postalCode: "791109",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: hosting,
      url: "https://nerist.ac.in/humanities-and-social-sciences-department/",
    },
    contributor: [
      {
        "@type": "Person",
        name: "Prof. Narendranath S.",
        jobTitle: "Director, NERIST",
        affiliation: {
          "@type": "Organization",
          name: "NERIST",
        },
      },
      {
        "@type": "Person",
        name: "Dr. Yuma Narah",
        jobTitle: "Convener, MHLRP 2025",
        affiliation: {
          "@type": "Organization",
          name: "NERIST",
        },
      },
      {
        "@type": "Person",
        name: "Prof. Anand Prakash",
        jobTitle: "Professor, Department of Psychology",
        affiliation: {
          "@type": "Organization",
          name: "University of Delhi",
        },
      },
      // Add more key members as needed
    ],
  },
};

// Sample committee member data (replace with your actual data and image paths)
const committeeMembers = [
  {
    role: "Chief Patron",
    members: [
      {
        name: "Prof. Narendranath S.",
        affiliation: "NERIST",
        designation: "Director",
        image: directorNerist,
      },
      // Add more organizing committee members
    ],
  },
  {
    role: "Patron",
    members: [
      {
        name: "Prof. Sarsing Gao",
        affiliation: "Dean (Academic)",
        designation: "NERIST",
        image: sarsingGao,
      },
      // Add more organizing committee members
    ],
  },
  {
    role: "Advisory Committee",
    members: [
      {
        name: "Prof. Anand Prakash",
        affiliation: "Professor, Department of Psychology",
        designation: "University of Delhi",
        image: anandPrakashDu,
      },
      {
        name: "Prof. Girishwar Misra",
        affiliation: "Professor, Department of Psychology",
        designation: "University of Delhi",
        image: girishwarMishraDu,
      },
      {
        name: "Dr. Trude Sundberg",
        affiliation: "Sr. lecturer, Social Policy",
        designation: "University of Kent, United Kingdom",
        image: trudeSunbergUk,
      },
      {
        name: "Prof. Rita R. Talukdar",
        affiliation: "Professor, Department of Psychology",
        designation: "Gauhati University",
        image: ritaRaniTalukdar,
      },
      {
        name: "Prof. S.P.K. Jena",
        affiliation: "Professor, Department of Applied Psychology",
        designation: "Delhi University",
        image: spkJenaDu,
      },
      {
        name: "Prof. K. B. L. Srivastava",
        affiliation: "Professor (Psychology), Department of HSS",
        designation: "IIT KGP",
        image: kblKgp,
      },
        {
        name: "Dr. Dharmeshwari Lourembam",
        affiliation: "Assistant Professor, Department of Psychology",
        designation: "RGU",
        image: dharmeshwariRgu,
      },
      {
        name: "Dr. Kakali Goswami",
        affiliation: "Assistant Professor, Department of Psychology",
        designation: "RGU",
        image: kakaliRgu,
      },
      {
        name: "Dr. Sahil Nijhawan",
        affiliation: "Future Leaders Fellow",
        designation: "Zoological Society of London",
        image: sahilNijhawan,
      },
      {
        name: "Prof. Indraneel Bhowmik",
        affiliation: "Professor, Department of Economics",
        designation: "Tripura University",
        image: indraneelBhowmikTu,
      },
      // Add more organizing committee members
    ],
  },
  {
    role: "Conference Chair",
    members: [
      {
        name: "Head, Department of HSS",
        designation: "NERIST",
        image: demoImage,
      },
      // Add more organizing committee members
    ],
  },
  {
    role: "Convener",
    members: [
      {
        name: "Dr. Yuma Narah",
        affiliation: "Assistant Professor, Department of HSS",
        designation: "NERIST",
        image: drYumaNarahNerist,
      },
    ],
  },
  {
    role: "Joint Convener",
    members: [
      {
        name: "Dr. Geling Modi",
        affiliation: "Assistant Professor, Department of HSS",
        designation: "NERIST",
        image: drGelingModiNerist,
      },
      // Add more advisory committee members
    ],
  },
  {
    role: "Organizing Committee",
    members: [
      {
        name: "Prof. P. Parida",
        affiliation: "Chairperson, Professor, Department of HSS",
        designation: "NERIST",
        image: paridaNerist,
      },
      {
        name: "Prof. Raju Barthakur",
        affiliation: "Professor, Department of HSS",
        designation: "NERIST",
        image: rajuBorthakurNerist,
      },
      {
        name: "Prof. Arnab Bandyopadhyay",
        affiliation: "Professor, Department of AE",
        designation: "NERIST",
        image: arnabNerist,
      },
      {
        name: "Shri Ranendra Prasad",
        affiliation: "Associate Professor, Department of HSS",
        designation: "NERIST",
        image: ranendraNerist,
      },
      {
        name: "Dr. Yamem Tamut",
        affiliation: "Associate Professor, Department of CE",
        designation: "NERIST",
        image: yamemNerist,
      },
      {
        name: "Dr. Ravi Kumar Gupta",
        affiliation: "Associate Professor, Department of HSS",
        designation: "NERIST",
        image: drRaviKumarGuptaNerist,
      },
      {
        name: "Dr. Kunal Borah",
        affiliation: "Associate Professor, Department of Physics",
        designation: "NERIST",
        image: kunalBorahNerist,
      },
      {
        name: "Dr. Santosh Tamang",
        affiliation: "Assistant Professor, Department of ME",
        designation: "NERIST",
        image: santoshNerist,
      },
      {
        name: "Dr. Chiging Sonia",
        affiliation: "Assistant Professor, Department of Physics",
        designation: "NERIST",
        image: soniaNerist,
      },
      {
        name: "Ms. Tori Basar",
        affiliation: "Assistant Professor, Department of CE",
        designation: "NERIST",
        image: toriBasarNerist,
      },
      {
        name: "Mr. Kaushik Ray",
        affiliation: "Assistant Professor, Department of CSE",
        designation: "NERIST",
        image: kaushikRayNerist,
      },
      // Add more advisory committee members
    ],
  },
  {
    role: "Review Board",
    members: [
      {
        name: "Prof. P. Parida",
        affiliation: "Professor, Department of HSS",
        designation: "NERIST",
        image: paridaNerist,
      },
      {
        name: "Prof. Anand Prakash",
        affiliation: "Professor, Department of Psychology",
        designation: "University of Delhi",
        image: anandPrakashDu,
      },
      {
        name: "Prof. Rita R. Talukdar",
        affiliation: "Professor, Department of Psychology",
        designation: "Gauhati University",
        image: ritaRaniTalukdar,
      },
      {
        name: "Prof. S.P.K. Jena",
        affiliation: "Professor, Department of Applied Psychology",
        designation: "Delhi University",
        image: spkJenaDu,
      },
      {
        name: "Prof. K. B. L. Srivastava",
        affiliation: "Professor (Psychology), Department of HSS",
        designation: "IIT KGP",
        image: kblKgp,
      },
      {
        name: "Dr. Dharmeshwari Lourembam",
        affiliation: "Assistant Professor, Department of Psychology",
        designation: "RGU",
        image: dharmeshwariRgu,
      },
      {
        name: "Dr. Kakali Goswami",
        affiliation: "Assistant Professor, Department of Psychology",
        designation: "RGU",
        image: kakaliRgu,
      },
      {
        name: "Prof. Indraneel Bhowmik",
        affiliation: "Professor, Department of Economics",
        designation: "TU",
        image: indraneelBhowmikTu,
      },
      {
        name: "Dr. Ravi Kumar Gupta",
        affiliation: "Associate Professor, Department of HSS",
        designation: "NERIST",
        image: drRaviKumarGuptaNerist,
      },
      {
        name: "Dr. Yuma Narah",
        affiliation: "Assistant Professor, Department of HSS",
        designation: "NERIST",
        image: drYumaNarahNerist,
      },
      {
        name: "Dr. Geling Modi",
        affiliation: "Assistant Professor, Department of HSS",
        designation: "NERIST",
        image: drGelingModiNerist,
      },
      // Add more advisory committee members
    ],
  },
  {
    role: "Editorial Committee",
    members: [
      // {
      //   name: "Prof. J. Paulo Davim",
      //   affiliation: "Series Editor",
      //   designation: "University of Aveiro, Portugal",
      //   image: pauloPortugal,
      // },
      {
        name: "Prof. Girishwar Misra",
        affiliation: "Professor, Department of Psychology",
        designation: "University of Delhi",
        image: girishwarMishraDu,
      },
      {
        name: "Prof. Raju Barthakur",
        affiliation: "Professor, Department of HSS",
        designation: "NERIST",
        image: rajuBorthakurNerist,
      },
      {
        name: "Dr. Yuma Narah",
        affiliation: "Assistant Professor, Department of HSS",
        designation: "NERIST",
        image: drYumaNarahNerist,
      },
      {
        name: "Dr. Geling Modi",
        affiliation: "Assistant Professor, Department of HSS",
        designation: "NERIST",
        image: drGelingModiNerist,
      },
      // Add more advisory committee members
    ],
  },
  {
    role: "Finance Committee",
    members: [
      {
        name: "Prof. Arnab Bandyopadhyay",
        affiliation: "Professor, Department of AE",
        designation: "NERIST",
        image: arnabNerist,
      },
      {
        name: "Dr. Ravi Kumar Gupta",
        affiliation: "Associate Professor, Department of HSS",
        designation: "NERIST",
        image: drRaviKumarGuptaNerist,
      },
      {
        name: "Shri Toko Shama",
        affiliation: "Assistant Registrar",
        designation: "NERIST",
        image: tokoSamaNerist,
      },
      // Add more advisory committee members
    ],
  },
  {
    role: "Publicity Committee",
    members: [
      {
        name: "Dr. Kunal Borah",
        affiliation: "Associate Professor, Department of Physics",
        designation: "NERIST",
        image: kunalBorahNerist,
      },
      {
        name: "Dr. Yamem Tamut",
        affiliation: "Associate Professor, Department of CE",
        designation: "NERIST",
        image: yamemNerist,
      },
      {
        name: "Dr. Santosh Tamang",
        affiliation: "Assistant Professor, Department of ME",
        designation: "NERIST",
        image: santoshNerist,
      },
      // Add more advisory committee members
    ],
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const memberCardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 },
  },
};

const Committee = () => {
  return (
    <motion.div
      className="min-h-screen py-20 bg-gradient-to-br from-gray-100 to-blue-100"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Helmet>
        <title>
          Committee | {conferenceShortForm}: Mental Health Conference | NERIST
        </title>
        <link rel="canonical" href="https://mhlrp2025.com/committee" />
        <meta name="description" content={committeeDescription} />
        <meta
          name="keywords"
          content="MHLRP 2025 committee, mental health conference organizers, NERIST, Arunachal Pradesh, 2025, conference committee, advisory committee, convener MHLRP, Prof. Narendranath S., Dr. Yuma Narah, Prof. Anand Prakash"
        />
        <meta property="og:title" content={`Committee - ${conferenceName}`} />
        <meta
          property="og:description"
          content="Meet the dedicated team behind MHLRP 2025, including chief patrons, conveners, and advisory members from NERIST, University of Delhi, and more."
        />
        <meta property="og:image" content={`${baseUrl}${logoImage}`} />
        <meta property="og:url" content={`${baseUrl}/committee`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Committee - ${conferenceName}`} />
        <meta
          property="twitter:description"
          content="Meet the dedicated team behind MHLRP 2025, including chief patrons, conveners, and advisory members from NERIST, University of Delhi, and more."
        />
        <meta property="twitter:image" content={`${baseUrl}${logoImage}`} />
        <script type="application/ld+json">{JSON.stringify(eventData)}</script>
        <link rel="canonical" href={`${baseUrl}/committee`} />
      </Helmet>

      <div className="container mx-auto px-8 pt-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={{
            initial: { opacity: 0, y: -30 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <h1 className="text-4xl font-extrabold text-blue-800 mb-6 tracking-tight">
            Our <span className="text-indigo-600">Dedicated</span> Team
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Meet the passionate individuals who are working hard to make MHLRP
            2025 a successful and memorable event.
          </p>
        </motion.div>

        {committeeMembers.map((committee, index) => (
          <motion.section
            key={index}
            className="mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-blue-700 mb-8 flex items-center">
              <FaUsers className="mr-3 text-indigo-500" /> {committee.role}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {committee.members.map((member, memberIndex) => (
                <motion.div
                  key={memberIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col items-center p-6"
                  variants={memberCardVariants}
                  whileHover="hover"
                >
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image} // Now uses the imported variable
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800 text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-0">
                    {member.designation}
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    {member.affiliation}
                  </p>
                  {/* You could add social media links or a "View Profile" button here if needed */}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export default Committee;
