// src/pages/Contact.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaHeadset,
  FaCog,
} from "react-icons/fa";
import emailjs from "@emailjs/browser"; // Import EmailJS

// --- EmailJS Configuration (Add these lines) --
// IMPORTANT: Replace with your actual IDs.
// For production, you should use environment variables (see Step 4).
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// --- End EmailJS Configuration ---

// Replace with your actual contact information and Google Maps embed URL
const contactDetails = [
  {
    title: "General Inquiries",
    icon: FaQuestionCircle,
    email: "mhlrp2025@gmail.com",
    phone: "+91 8837321508",
  },
];

const venueDetails = {
  address: "NERIST, NIRJULI, 791109, ARUNACHAL PRADESH, India",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.84513236048!2d93.74029521038959!3d27.129687450635668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746aa9da1dd1bf1%3A0x3338f788c38d9e9e!2sNorth%20Eastern%20Regional%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1745120134336!5m2!1sen!2sin", // Replace with your actual embed URL
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

const Contact = () => {

  const baseUrl = "https://mhlrp2025.com";



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null); // Reset status

    // Send email using EmailJS
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSubmissionStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setSubmissionStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        // Optionally clear status message after a few seconds
        setTimeout(() => setSubmissionStatus(null), 5000);
      });
  };

  return (
    <motion.div
      className="min-h-screen py-20 bg-gradient-to-br from-lime-50 to-emerald-100"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact | MHLRP 2025 International Conference</title>
        <link rel="canonical" href="https://mhlrp2025.com/contact" />
        <meta
          name="description"
          content="Contact MHLRP 2025 at NERIST, Nirjuli, Arunachal Pradesh. Reach us via email at mhlrp2025@gmail.com or phone at +91 8837321508 for inquiries."
        />
        <meta
          name="keywords"
          content="MHLRP 2025 contact, NERIST conference contact, mental health conference 2025 contact, mhlrp2025@gmail.com, NERIST Nirjuli contact"
        />
        <meta
          property="og:title"
          content="Contact | MHLRP 2025 International Conference"
        />
        <meta
          property="og:description"
          content="Get in touch with MHLRP 2025 organizers at NERIST, Nirjuli. Email mhlrp2025@gmail.com or call +91 8837321508 for support."
        />
        <meta
          property="og:image"
          content={`${baseUrl}/assets/mhlrp-logo.png`}
        />
        <meta property="og:url" content={`${baseUrl}/contact`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
    
        <meta
          name="twitter:title"
          content="Contact | MHLRP 2025 International Conference"
        />
        <meta
          name="twitter:description"
          content="Contact MHLRP 2025 at NERIST, Nirjuli for the mental health conference. Email or call us for assistance."
        />
        <meta
          name="twitter:image"
          content={`${baseUrl}/assets/mhlrp-logo.png`}
        />
        <link rel="canonical" href={`${baseUrl}/contact`} />
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
          <h1 className="text-4xl font-extrabold text-emerald-800 mb-6 tracking-tight">
            Get in <span className="text-lime-700">Touch</span> with MHLRP 2025
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're here to help! Reach out to us through the contact information
            below or send us a message directly.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="text-3xl text-lime-500 mb-4">
                <contact.icon />
              </div>
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                {contact.title}
              </h3>
              {contact.email && (
                <p className="text-gray-600 mb-1">
                  <FaEnvelope className="inline mr-2" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-lime-500 transition duration-200"
                  >
                    {contact.email}
                  </a>
                </p>
              )}
              {contact.phone && (
                <p className="text-gray-600">
                  <FaPhone className="inline mr-2" />
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:text-lime-500 transition duration-200"
                  >
                    {contact.phone}
                  </a>
                </p>
              )}
              {contact.address && (
                <p className="text-gray-600">
                  <FaMapMarkerAlt className="inline mr-2" />
                  {contact.address}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 mb-12"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-emerald-700 mb-6 flex items-center">
            <FaEnvelope className="mr-2 text-lime-500" /> Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name" // IMPORTANT: Match with EmailJS template variable
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email" // IMPORTANT: Match with EmailJS template variable
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject" // IMPORTANT: Match with EmailJS template variable
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message" // IMPORTANT: Match with EmailJS template variable
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            {/* Submission Status Message */}
            {isSubmitting && (
              <p className="text-blue-600">Sending message...</p>
            )}
            {submissionStatus === "success" && (
              <p className="text-green-600">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-red-600">
                Failed to send message. Please try again later.
              </p>
            )}
            <motion.button
              type="submit"
              className={`bg-lime-500 hover:bg-lime-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              variants={buttonVariants}
              whileHover="hover"
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Location & Map Section */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-emerald-700 mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-lime-500" /> Conference Venue
            Location
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            {venueDetails.address}
          </p>
          <div className="overflow-hidden rounded-md shadow-sm">
            <iframe
              title="Conference Venue Map"
              src={venueDetails.googleMapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
