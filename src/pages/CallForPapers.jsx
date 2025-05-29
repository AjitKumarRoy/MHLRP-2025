import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaFileAlt,
  FaUpload,
  FaCheckCircle,
  FaBookOpen,
  FaEye,
  FaBook,
  FaStar,
} from "react-icons/fa";

// Conference-specific constants (consistent with About.jsx, Committee.jsx, ImportantDates.jsx)
const conferenceName =
  "Invisible Struggles: Mental Health and the Lived Realities of the Peripheralized";
const conferenceShortForm = "MHLRP 2025";
const hosting = "Department of Humanities and Social Sciences";
const venue =
  "North Eastern Regional Institute of Science and Technology (NERIST)";
const callForPapersDescription =
  "Submit your research to MHLRP 2025, a mental health conference at NERIST, November 6-7, 2025. Follow our guidelines for abstracts (250 words, APA 7th edition) and full papers.";
const logoImage = "/assets/mhlrp-logo.png"; // Production path after Vite build
const baseUrl = "https://mhlrp2025.com"; // Replace with actual domain

// Structured data for the Call for Papers page
const eventData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Call for Papers - ${conferenceShortForm}`,
  description: callForPapersDescription,
  url: `${baseUrl}/call-for-papers`,
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
    offers: {
      "@type": "Offer",
      name: "Call for Papers Submission",
      description:
        "Opportunity to submit abstracts and full papers for MHLRP 2025, with accepted papers published in conference proceedings.",
      validThrough: "2025-10-15", // Last date for full paper submission
      url: `${baseUrl}/paper-submission`,
    },
  },
};

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
    scale: 1.01,
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 },
  },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.5 },
  },
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
      <Helmet>
        <title>
          Call for Papers | {conferenceShortForm}: Mental Health Conference |
          NERIST
        </title>
        <link rel="canonical" href="https://mhlrp2025.com/" />
        <meta name="description" content={callForPapersDescription} />
        <meta
          name="keywords"
          content="MHLRP 2025 call for papers, mental health conference submission, NERIST, Arunachal Pradesh, 2025, abstract guidelines, APA 7th edition, full paper submission, conference proceedings"
        />
        <meta
          property="og:title"
          content={`Call for Papers - ${conferenceName}`}
        />
        <meta
          property="og:description"
          content="Join MHLRP 2025 by submitting abstracts (250 words) and full papers (2500-3000 words) by October 15, 2025. Accepted papers will be published in conference proceedings."
        />
        <meta property="og:image" content={`${baseUrl}${logoImage}`} />
        <meta property="og:url" content={`${baseUrl}/call-for-papers`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Call for Papers - ${conferenceName}`}
        />
        <meta
          property="twitter:description"
          content="Join MHLRP 2025 by submitting abstracts (250 words) and full papers (2500-3000 words) by October 15, 2025. Accepted papers will be published in conference proceedings."
        />
        <meta property="twitter:image" content={`${baseUrl}${logoImage}`} />
        <script type="application/ld+json">{JSON.stringify(eventData)}</script>
        <link rel="canonical" href={`${baseUrl}/call-for-papers`} />
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
          <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 tracking-tight">
            Call for <span className="text-purple-600">Papers</span> - MHLRP
            2025
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We invite researchers, scholars, and practitioners to submit their
            original and unpublished work to MHLRP 2025. Explore opportunities
            to share your innovative ideas and contribute to the advancement of
            Peripheralized Community.
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
        {/* <motion.div className="mb-12" variants={cardVariants}>
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
            </ul>
          </div>
        </motion.div> */}

        {/* Submission Guidelines Section */}
        <motion.div className="mb-12" variants={cardVariants}>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
              <FaFileAlt className="mr-2 text-purple-500" /> Guidelines for
              Abstract
            </h2>
            <ol className="list-decimal list-inside text-gray-600 leading-relaxed">
              <li>
                <strong>Title Page :</strong> Abstract should not exceed 250
                words, with headings such as introduction, methodology, results,
                conclusion and keywords (4-5 keywords).
              </li>
              <li>
                <strong>Themes Font :</strong> Times New Roman
              </li>
              <li>
                <strong>Font Size :</strong> 12
              </li>
              <li>
                <strong>Line Spacing :</strong> 1.5
              </li>
              <li>
                <strong>Margin :</strong> 1’’ on top, bottom, left and right
              </li>
              <li>
                <strong>Reference, Tables and Graphs :</strong> APA 7th edition
                style format
              </li>
              {/* <li>Follow the prescribed paper format (see "Paper Format" section).</li>
                            <li>All submissions will undergo a rigorous peer-review process.</li> */}
              {/* Add more guidelines */}
            </ol>
            <p className="text-gray-600 leading-relaxed mt-4">
              Abstract should include the author’s designation, affiliation and
              contact details (email & phone number) of the presenting author at
              the end of the abstract.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Joint paper presenters have to register separately.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <i>
                The conference aims to encourage participants from PVTG, Dalit,
                LGBTQIAP+ community, Women etc
              </i>
            </p>
            {/* <motion.button
              href="/guidelines" // Replace with a link to detailed guidelines
              className="inline-flex items-center bg-indigo-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-300 mt-4"
              variants={buttonVariants}
              whileHover="hover"
            >
              Read Detailed Guidelines
            </motion.button> */}
          </div>
        </motion.div>

        {/* Submission Guidelines Section */}
        <motion.div className="mb-12" variants={cardVariants}>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
              <FaFileAlt className="mr-2 text-purple-500" /> Guidelines for Full
              Paper
            </h2>
            <ol className="list-decimal list-inside text-gray-600 leading-relaxed">
              <li>
                The full paper should be 2500-3000 words with headings such as
                introduction, methodology, results, discussions and conclusion.
              </li>
              <li>Referencing style: APA 7th edition</li>
              <li>Declaration of conflict of interest</li>
              <li>The research papers must be original and not published/presented anywhere prior to this conference. The presenter must submit a report of originality generated either by Turnitin or ithenticate.</li>
            </ol>
            {/* <motion.button
              href="/guidelines" // Replace with a link to detailed guidelines
              className="inline-flex items-center bg-indigo-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-300 mt-4"
              variants={buttonVariants}
              whileHover="hover"
            >
              Read Detailed Guidelines
            </motion.button> */}
          </div>
        </motion.div>

          {/* Review Process Section */}
        <motion.div className="mb-12" variants={cardVariants}>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
              <FaEye className="mr-2 text-purple-500" /> Review Process
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All submitted papers will undergo a thorough double-blind
              peer-review process by experts in the relevant fields. The
              criteria for evaluation include originality, significance,
              technical soundness, clarity of presentation, and relevance to the
              conference themes.
            </p>
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
              <li>
                Include abstract, keywords, introduction, methodology, results,
                discussion, conclusion, and references.
              </li>
              {/* Add more format details */}
            </ul>
            {/* <motion.button
              href="/templates" // Replace with a link to download templates
              className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition duration-300 mt-4"
              variants={buttonVariants}
              whileHover="hover"
            >
              Download Paper Templates
            </motion.button> */}
          </div>
        </motion.div>

      

        {/* Publication Section */}
        <motion.div variants={cardVariants}>
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
              <FaBook className="mr-2 text-purple-500" /> Publication
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Publication of the selected papers in a journal or edited volume
              format by reputed publishers.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default CallForPapers;
