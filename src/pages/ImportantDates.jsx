import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import ScrollingNotification from "@/components/ScrollingNotification";

// Conference-specific constants (consistent with About.jsx and Committee.jsx)
const conferenceName =
  "Invisible Struggles: Mental Health and the Lived Realities of the Peripheralized";
const conferenceShortForm = "MHLRP 2025";
const hosting = "Department of Humanities and Social Sciences";
const venue =
  "North Eastern Regional Institute of Science and Technology (NERIST)";
const importantDatesDescription =
  "Discover key deadlines for MHLRP 2025, including abstract submission by July 31, 2025, and conference dates on November 6-7, 2025, at NERIST, Arunachal Pradesh.";
const logoImage = "/assets/mhlrp-logo.png"; // Production path after Vite build
const baseUrl = "https://mhlrp2025.com"; // Replace with actual domain

// Structured data for the Important Dates page
const eventData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Important Dates - ${conferenceShortForm}`,
  description: importantDatesDescription,
  url: `${baseUrl}/important-dates`,
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
    eventSchedule: [
      {
        "@type": "Schedule",
        startDate: "2025-05-30",
        name: "Call for Papers Opens",
        description: "The submission portal for research papers opens.",
      },
      {
        "@type": "Schedule",
        startDate: "2025-07-31",
        name: "Last date for Abstract Submission",
        description: "The last date to submit your abstract for MHLRP 2025.",
      },
      {
        "@type": "Schedule",
        startDate: "2025-08-30",
        name: "Notification of Acceptance",
        description:
          "Authors will be notified about the status of their submitted abstract.",
      },
      {
        "@type": "Schedule",
        startDate: "2025-10-15",
        name: "Last date for Full Paper Submission",
        description:
          "Deadline for submitting the final version of accepted papers.",
      },
      {
        "@type": "Schedule",
        startDate: "2025-10-25",
        name: "Registration & Payment Deadline",
        description: "Last date for regular registration and payment.",
      },
      {
        "@type": "Schedule",
        startDate: "2025-11-06",
        endDate: "2025-11-07",
        name: "MHLRP 2025 Conference Dates",
        description:
          "The main dates of the Conference on Mental Health and the Lived Realities of the Peripheralized.",
      },
    ],
  },
};

// Sample important dates data (replace with your actual dates)
const importantDates = [
  {
    date: "30th May, 2025",
    event: "Call for Papers Opens",
    status: "past", // 'past', 'upcoming', 'critical'
    description: "The submission portal for research papers opens.",
  },
  {
    date: "15th August, 2025",
    event: "Last date for Abstract Submission",
    status: "critical",
    description: "The last date to submit your abstract for MHLRP 2025.",
  },
  {
    date: "4th September, 2025",
    event: "Notification of Acceptance",
    status: "upcoming",
    description:
      "Authors will be notified about the status of their submitted abstract.",
  },
  {
    date: "15th October, 2025",
    event: "Last date for Full Paper Submission",
    status: "upcoming",
    description:
      "Deadline for submitting the final version of accepted papers.",
  },
  {
    date: "25th October, 2025",
    event: "Registration & Payment Deadline",
    status: "upcoming",
    description: "Last date for regular registration and payment.",
  },
  {
    date: "6th & 7th November, 2025",
    event: "MHLRP 2025 Conference Dates",
    status: "upcoming",
    description:
      "The main dates of the Conference on Mental Health and the Lived Realities of the Peripheralized.",
  },
  // Add more important dates
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

const dateVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const statusColors = {
  past: "bg-gray-100 text-gray-600 border-gray-300",
  upcoming: "bg-blue-100 text-blue-700 border-blue-500",
  critical: "bg-red-100 text-red-700 border-red-500",
};

const ImportantDates = () => {
  return (
    <motion.div
      className="min-h-screen py-20 bg-gradient-to-br from-purple-100 to-pink-100"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
        <ScrollingNotification text="📢 Publication of the selected papers in a journal or edited
 volume format by reputed publishers." />
      <Helmet>
        <title>
          Important Dates | {conferenceShortForm}: Mental Health Conference |
          NERIST
        </title>
        <link rel="canonical" href="https://mhlrp2025.com/important-dates" />
        <meta name="description" content={importantDatesDescription} />
        <meta
          name="keywords"
          content="MHLRP 2025 important dates, mental health conference deadlines, NERIST, Arunachal Pradesh, 2025, abstract submission July 31, conference dates November 2025, paper submission deadline"
        />
        <meta
          property="og:title"
          content={`Important Dates - ${conferenceName}`}
        />
        <meta
          property="og:description"
          content="Stay updated with MHLRP 2025 deadlines: abstract submission by July 31, 2025, full paper by October 15, 2025, and conference on November 6-7, 2025 at NERIST."
        />
        <meta property="og:image" content={`${baseUrl}${logoImage}`} />
        <meta property="og:url" content={`${baseUrl}/important-dates`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Important Dates - ${conferenceName}`}
        />
        <meta
          property="twitter:description"
          content="Stay updated with MHLRP 2025 deadlines: abstract submission by July 31, 2025, full paper by October 15, 2025, and conference on November 6-7, 2025 at NERIST."
        />
        <meta property="twitter:image" content={`${baseUrl}${logoImage}`} />
        <script type="application/ld+json">{JSON.stringify(eventData)}</script>
        <link rel="canonical" href={`${baseUrl}/important-dates`} />
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
            <FaCalendarAlt className="inline mr-2 text-pink-600" /> Important
            Dates - MHLRP 2025
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Stay updated with the key deadlines and milestones for MHLRP 2025.
            Mark your calendars!
          </p>
        </motion.div>

        {/* Important Dates Listing */}
        <div className="space-y-6">
          {importantDates.map((dateItem, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${
                statusColors[dateItem.status] || "border-gray-400"
              }`}
              variants={dateVariants}
            >
              <div className="md:flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-purple-700">
                    {dateItem.event}
                  </h3>
                  <p className="text-lg font-bold text-gray-800">
                    {dateItem.date}
                  </p>
                  {dateItem.description && (
                    <p className="text-gray-600 mt-1">{dateItem.description}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0">
                  {dateItem.status === "past" && (
                    <FaCheckCircle className="text-green-500 text-2xl" />
                  )}
                  {dateItem.status === "critical" && (
                    <FaExclamationTriangle className="text-red-500 text-2xl" />
                  )}
                  {dateItem.status === "upcoming" && (
                    <FaCalendarAlt className="text-blue-500 text-2xl" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImportantDates;
