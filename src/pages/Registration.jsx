import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaUserGraduate,
  FaUniversity,
  FaBuilding,
  FaCheckCircle,
  FaCreditCard,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import registrationFeeImage from "../assets/payment-modal.png"; // Import your image if needed

// Sample registration data (replace with your actual data)
const registrationTiers = [
  {
    category: "PhD Scholars / Delegates",
    fee: "INR 1000 / USD 10",
    deadline: "25 October, 2025",
    benefits: [
      "Early Bird Price - INR 750 / USD 15",
      "Conference materials",
      "Lunch and coffee breaks",
      "Certificate of participation",
      "Opportunity to present paper",
    ],
    icon: FaUserGraduate,
    color: "bg-blue-100 text-blue-700",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    category: "Faculty Members / Independent Researchers / Corporate Members",
    fee: "INR 1500 / USD 15",
    deadline: "25 October, 2025",
    benefits: [
      "Early Bird Price - INR 1200 / USD 20",
      "Conference materials",
      "Lunch and coffee breaks",
      "Certificate of participation",
      "Opportunity to present paper",
    ],
    icon: FaUniversity,
    color: "bg-green-100 text-green-700",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  // {
  //     category: 'Industry Delegates',
  //     fee: 'INR 2,500 / USD 35',
  //     deadline: '25 October, 2025',
  //     benefits: [
  //         'Early Bird Price - INR 2000 / USD 30',
  //         'Conference materials',
  //         'Lunch and coffee breaks',
  //         'Certificate of participation',
  //         'Networking opportunities',
  //         'Industry-focused sessions',
  //     ],
  //     icon: FaBuilding,
  //     color: 'bg-indigo-100 text-indigo-700',
  //     buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
  // },
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

const buttonVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.5 },
  },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Registration = () => {
  const baseUrl = "https://mhlrp2025.com";


  return (
    <motion.div
      className="min-h-screen py-20 bg-gradient-to-br from-teal-50 to-cyan-100"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >

      {/* SEO Metadata */}
      <Helmet>
        <title>Registration | MHLRP 2025 International Conference</title>
        <link rel="canonical" href="https://mhlrp2025.com/" />
        <meta
          name="description"
          content="Register for MHLRP 2025, the International Conference on Mental Health and Life Resilience Psychology, November 6-7, 2025, at NERIST. Choose from PhD Scholars, Faculty, or Industry tiers."
        />
        <meta
          name="keywords"
          content="MHLRP 2025 registration, mental health conference registration, NERIST conference 2025, PhD scholars registration, faculty registration, international psychology conference"
        />
        <meta property="og:title" content="Registration | MHLRP 2025 International Conference" />
        <meta
          property="og:description"
          content="Join MHLRP 2025 on November 6-7 at NERIST. Register as a PhD Scholar, Faculty, or Industry Delegate. Early bird discounts available until October 25, 2025."
        />
        <meta property="og:image" content={`${baseUrl}/assets/mhlrp-logo.png`} />
        <meta property="og:url" content={`${baseUrl}/registration`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Registration | MHLRP 2025 International Conference" />
        <meta
          name="twitter:description"
          content="Register for MHLRP 2025 at NERIST. Secure your spot for the mental health and psychology conference with early bird pricing."
        />
        <meta name="twitter:image" content={`${baseUrl}/assets/mhlrp-logo.png`} />
        <link rel="canonical" href={`${baseUrl}/registration`} />
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
          <h1 className="text-4xl font-extrabold text-teal-800 mb-6 tracking-tight">
            MHLRP 2025 <span className="text-cyan-600">Registration</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join us for MHLRP 2025! Choose the registration category that best
            suits you and secure your spot today.
          </p>
        </motion.div>

        {/* Registration Fee Structure Section */}
        <motion.div
          className="mb-16"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
          }}
        >
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
             REGISTRATION FEE AND PAYMENT MODALITIES 
          </h2>
          <div className="flex justify-center items-center">
            <img
              src={registrationFeeImage}
              alt="Registration Fee Structure"
              className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* <p className="text-center text-gray-600 mt-4 text-sm italic">
            Below is the detailed registration fee structure for MHLRP 2025.
          </p> */}
        </motion.div>

        {/* Pricing Tiers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* grid --> 1, 2, 3  (original) */}
          {registrationTiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between ${tier.color}`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div>
                <div className="text-4xl font-bold mb-4 flex items-center justify-center">
                  <tier.icon className="mr-2" size={32} /> {tier.category}
                </div>
                <p className="text-2xl font-semibold text-gray-800 text-center mb-3">
                  {tier.fee}
                </p>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Deadline: {tier.deadline}
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="mb-1">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Changed to Link component to navigate internally */}
              <Link
                to="/payment-details" // The path to your PaymentDetails page
                state={{ category: tier.category, fee: tier.fee }} // Pass data to the PaymentDetails page
                className={`inline-flex items-center justify-center ${tier.buttonColor} text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300 mt-4`}
                // Note: For Framer Motion animations on Link, you might need to wrap the Link in a motion.div
                // or use a specific Framer Motion Link component if your version provides one.
                // The Tailwind hover effects will still work.
              >
                <FaCreditCard className="mr-2" /> Register Now
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Key Registration Information Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 border-l-4 border-cyan-400"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-cyan-700 mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-cyan-500" /> Important
            Registration Information
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>
              Payment can be made via credit card, debit card, bank transfer and
              QR-Code.
            </li>
            <li>
              The registration fee includes access to all conference sessions,
              registration kit, participation certificate, and refreshment.
            </li>
            <li>
              Cancellation policy: The registration fee, once paid, is non-refundable..
            </li>
            <li>
              For any registration and other queries, please contact :
              mhlrp2025@gmail.com / +91-8837321508.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Registration;