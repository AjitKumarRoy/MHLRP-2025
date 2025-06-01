import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGlobe, FaMicrophone } from "react-icons/fa"; // Example social icons

// ----------------------------------------------------------------------
// IMPORT EACH IMAGE HERE
// Ensure these paths are correct relative to THIS FILE's location.
// If your images are in `src/assets/` and `src/assets/committee/`,
// these relative paths should be correct assuming Speakers.js is in `src/components/` or similar.
// ----------------------------------------------------------------------
import speaker1 from "../assets/committee/demo-speaker.png";
import speaker2 from "../assets/committee/demo-speaker.png";
import girishwarMishraDu from "../assets/committee/girishwar-mishra-du.jfif";
import anandPrakashDu from "../assets/committee/anand-prakash-du.jfif";
import ritaRaniTalukdar from "../assets/committee/rita-rani-talukdar.jpg";
import dharmeshwariRgu from "../assets/committee/Dharmeswari-rgu.png";
import trudeSunbergUk from "../assets/committee/trude-sunberg-uk.webp";
import indraneelBhowmikTu from "../assets/committee/indraneel-bhowmik-tu.jpeg";
import spkJenaDu from "../assets/committee/spk-jena-du.jfif";
import kblKgp from "../assets/committee/kbl-kgp.jfif";
import queerFounder from "../assets/committee/queer-founder.jfif";
import kumamDavidson from "../assets/committee/KumamDavidson.jfif";

// Sample speaker data (replace with your actual data and image paths)
const speakersData = [
  {
    type: "Keynote Speakers",
    speakers: [
      {
        name: "Dr. Trude Sundberg",
        designation: "Director",
        affiliation: "Q-Step Centre",
        bio: "Senior Lecturer, University of Kent, United Kingdom",
        image: trudeSunbergUk, // Using imported image
        linkedin:
          "https://www.linkedin.com/in/trude-diesen-sundberg-47126722/?originalSubdomain=uk",
      },
      {
        name: "Dr. Anand Prakash",
        designation: "Professor",
        affiliation: "Department of Psychology",
        bio: "University of Delhi",
        image: anandPrakashDu, // Using imported image
        linkedin:
          "https://www.linkedin.com/in/anand-prakash-a24ba99/?originalSubdomain=in",
      },
      {
        name: "Kumam Davidson Singh",
        designation: "Founder, Matai Society & ",
        affiliation: "Co-Founder, The Chinky Homo Project",
        bio: "Ethnographer, Writer and Educator, Manipur",
        image: kumamDavidson,
        linkedin:
          "https://www.linkedin.com/in/kumam-davidson-a7392870/?originalSubdomain=in",
      },
      // Add more keynote speakers
    ],
  },
  {
    type: "Invited Speakers",
    speakers: [
      {
        name: "To Be",
        designation: "Updated",
        affiliation: "Soon",
        bio: "",
        image: speaker1, // Using imported image
        linkedin: "",
        twitter: "",
      },
      // {
      //     name: 'Prof. Girishwar Misra',
      //     designation: 'Vice Chancellor',
      //     affiliation: 'Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya, Wardha, Maharashtra',
      //     bio: 'Educator, Psychologist, Social Scientist, Writer, Editor.',
      //     image: girishwarMishraDu, // Using imported image
      //     twitter: 'https://twitter.com/aishakhan_data',
      //     website: 'https://datawiseanalytics.com',
      // },
      // {
      //     name: 'Dr. Anand Prakash',
      //     designation: 'Prof & Head, Department of Psychology',
      //     affiliation: 'University of Delhi',
      //     bio: 'hello heloo heloo',
      //     image: anandPrakashDu, // Using imported image
      //     linkedin: 'https://www.linkedin.com/in/bencartersecurity',
      // },
      // {
      //     name: 'Prof. Rita Rani Talukdar',
      //     designation: 'Department of Psychology',
      //     affiliation: 'Gauhati University, Guwahati, Assam',
      //     bio: 'hello heloo heloo',
      //     image: ritaRaniTalukdar, // Using imported image
      //     linkedin: 'https://www.linkedin.com/in/bencartersecurity',
      // },
      // {
      //     name: 'Dr. Dharmeshwari Lourembam',
      //     designation: 'Assistant Professor',
      //     affiliation: 'Department of Psychology, Rajiv Gandhi University, Rono Hills, Doimukh, Arunachal Pradesh',
      //     bio: 'hello heloo heloo',
      //     image: dharmeshwariRgu, // Using imported image
      //     linkedin: 'https://www.linkedin.com/in/bencartersecurity',
      // },
      // {
      //     name: 'Dr. Trude Sundberg',
      //     designation: 'Director',
      //     affiliation: 'Q-Step Centre',
      //     bio: 'Senior Lecturer, University of Kent, United Kingdom',
      //     image: trudeSunbergUk, // Using imported image
      //     linkedin: 'https://www.linkedin.com/in/bencartersecurity',
      // },
      // {
      //     name: 'Prof. Indraneel Bhowmik',
      //     designation: 'Department of Economics',
      //     affiliation: 'Tripura University',
      //     bio: 'hello heloo heloo',
      //     image: indraneelBhowmikTu, // Using imported image
      //     linkedin: 'https://www.linkedin.com/in/bencartersecurity',
      // },
      // {
      //     name: 'Prof. S.P.K. Jena',
      //     designation: 'Senior Professor in Dept. of Applied Psychology',
      //     affiliation: 'University of Delhi',
      //     bio: 'hello heloo heloo',
      //     image: spkJenaDu, // Using imported image
      //     linkedin: 'https://www.linkedin.com/in/bencartersecurity',
      // },
      // {
      //     name: 'Prof. K.B.L. Srivastava',
      //     designation: 'Professor (OB/HRD), Dept. of HSS',
      //     affiliation: 'IIT Kharagpur',
      //     bio: 'hello heloo heloo',
      //     image: kblKgp, // Using imported image
      //     linkedin: 'https://www.linkedin.com/in/bencartersecurity',
      // },
      // {
      //     name: 'Sawang Wangchha',
      //     designation: 'Founder',
      //     affiliation: 'Arunachal Pradesh Queer Station',
      //     bio: 'It is the first and only Queer Community Collective of Arunachal Pradesh',
      //     image: queerFounder, // Using imported image
      //     linkedin: 'https://www.linkedin.com/in/bencartersecurity',
      // },

      // Add more invited speakers
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

const speakerCardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 },
  },
};

const Speakers = () => {
  const baseUrl = "https://mhlrp2025.com";

  return (
    <motion.div
      className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-pink-100"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* SEO Metadata */}
      <Helmet>
        <title>Speakers | MHLRP 2025 International Conference</title>
          <link rel="canonical" href="https://mhlrp2025.com/speakers" />
        <meta
          name="description"
          content="Meet the MHLRP 2025 keynote speakers Dr. Trude Sundberg, Dr. Anand Prakash, Kumam Davidson Singh, and invited speakers at NERIST, Nirjuli."
        />
        <meta
          name="keywords"
          content="MHLRP 2025 keynote speakers, NERIST conference keynote speakers, Dr. Trude Sundberg, Dr. Anand Prakash, Kumam Davidson Singh, mental health conference 2025 speakers"
        />
        <meta
          property="og:title"
          content="Speakers | MHLRP 2025 International Conference"
        />
        <meta
          property="og:description"
          content="Join MHLRP 2025 at NERIST, Nirjuli, to hear from keynote speakers Dr. Trude Sundberg, Dr. Anand Prakash, Kumam Davidson Singh, and other experts."
        />
        <meta
          property="og:image"
          content={`${baseUrl}/assets/mhlrp-logo.png`}
        />
        <meta property="og:url" content={`${baseUrl}/speakers`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@MHLRP2025" />{" "}
        {/* Replace with your Twitter handle */}
        <meta
          name="twitter:title"
          content="Speakers | MHLRP 2025 International Conference"
        />
        <meta
          name="twitter:description"
          content="Hear from MHLRP 2025 keynote speakers Dr. Trude Sundberg, Dr. Anand Prakash, Kumam Davidson Singh, and more at NERIST, Nirjuli."
        />
        <meta
          name="twitter:image"
          content={`${baseUrl}/assets/mhlrp-logo.png`}
        />
        <link rel="canonical" href={`${baseUrl}/speakers`} />
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
          <h1 className="text-4xl font-extrabold text-purple-800 mb-6 tracking-tight">
            Our Esteemed <span className="text-pink-600">Speakers</span> - MHLRP
            2025
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are honored to host these distinguished experts and thought
            leaders who will share their insights and expertise at MHLRP 2025.
          </p>
        </motion.div>

        {speakersData.map((speakerType, index) => (
          <motion.section
            key={index}
            className="mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-semibold text-purple-700 mb-8 flex items-center">
              <FaMicrophone className="mr-3 text-pink-500" /> {speakerType.type}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakerType.speakers.map((speaker, speakerIndex) => (
                <motion.div
                  key={speakerIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col items-center p-6"
                  variants={speakerCardVariants}
                  whileHover="hover"
                >
                  <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4">
                    <img
                      src={speaker.image} // Using imported image
                      alt={speaker.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800 text-center mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-2">
                    {speaker.designation}
                  </p>
                  <p className="text-sm text-gray-500 text-center mb-3">
                    {speaker.affiliation}
                  </p>
                  <p className="text-sm text-gray-700 text-center leading-relaxed">
                    {speaker.bio.substring(0, 80)}...
                  </p>{" "}
                  {/* Brief bio */}
                  <div className="flex space-x-3 mt-4">
                    {speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {speaker.twitter && (
                      <a
                        href={speaker.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500"
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {speaker.website && (
                      <a
                        href={speaker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500"
                      >
                        <FaGlobe size={20} />
                      </a>
                    )}
                    {/* Add more social/profile links as needed */}
                  </div>
                  {/* Optional: Add a "Learn More" button/modal */}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export default Speakers;
