// src/pages/PaymentDetails.jsx (or wherever you prefer to store your pages)
import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaWallet, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks for navigation data

// IMPORTANT: Import your QR code image here
// Place your QR code image in the `src/assets/` folder (or adjust the path accordingly)
import UpiQrCode from '../assets/upi-qr-code.jpeg'; // Example: Assuming your QR code is in src/assets/upi-qr-code.png
// If your QR code is in public folder, you can use '/upi-qr-code.png' directly in img src without import

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
};

const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const PaymentDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // Get category and fee from the navigation state passed from Registration.jsx
    const { category, fee } = location.state || {};

    // Optional: Redirect if no category or fee is found (e.g., user directly accessed this URL)
    React.useEffect(() => {
        if (!category || !fee) {
            console.warn("Navigated to PaymentDetails without registration tier data. Redirecting to registration.");
            navigate('/registration'); // Redirects to the registration page
        }
    }, [category, fee, navigate]); // Depend on category, fee, and navigate to re-run if they change

    if (!category || !fee) {
        return null; // Or a loading spinner, or a message while redirecting
    }

    return (
        <motion.div
            className="min-h-screen py-20 bg-gradient-to-br from-indigo-50 to-purple-100"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            <div className="container mx-auto px-8 pt-20">
                <motion.div
                    className="text-center mb-12"
                    variants={{ initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
                >
                    <h1 className="text-4xl font-extrabold text-indigo-800 mb-4 tracking-tight">
                        Complete Your <span className="text-purple-600">Registration Payment</span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Thank you for choosing to register for MHLRP 2025! Please find the payment details below for your selected category.
                    </p>
                    <p className="text-xl font-semibold text-purple-700 mt-4">
                        You selected: <span className="font-bold">{category}</span> (Fee: <span className="font-bold">{fee}</span>)
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Bank Transfer Details Card */}
                    <motion.div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-indigo-500" variants={sectionVariants}>
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-6 flex items-center">
                            <FaUniversity className="mr-3 text-indigo-500" /> Bank Transfer Details
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            {/* <p><strong>Account Name:</strong> NERIST Conference Account</p> */}
                            {/* <p><strong>Bank Name:</strong> State Bank of India</p> */}
                            {/* <p><strong>Customer ID:</strong> 00000092113672552</p> */}
                            <p><strong>Account Number:</strong> 00000044071146257</p> {/* Replace with your actual account number */}
                            <p><strong>IFSC Code:</strong> SBIN0018744</p> {/* Replace with your actual IFSC code */}
                            {/* <p><strong>SWIFT Code:</strong> SBININBBXXX</p>  */}
                            {/* Replace with your actual SWIFT code for international */}
                            <p><strong>Home Branch:</strong> NERIST, Nirjuli</p>
                            <p><strong>Branch Address:</strong> NERIST, Nirjuli (18744) NE Regional Institute of Science and Technology, NERIST Campus, Naharlagun, Arunachal 791110</p>
                            <p className="text-sm text-gray-600 mt-4"><FaExclamationCircle className="inline mr-1 text-orange-500" /> Please include your **Full Name** and "**MHLRP 2025 Registration**" in the transaction remarks/notes.</p>
                        </div>
                    </motion.div>

                    {/* UPI / Other Payment Methods Card */}
                    <motion.div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500" variants={sectionVariants}>
                        <h2 className="text-2xl font-semibold text-purple-700 mb-6 flex items-center">
                            <FaWallet className="mr-3 text-purple-500" /> UPI & Other Payment Methods
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p><strong>UPI ID:</strong> mhlrp2025@sbi</p> {/* Replace with your actual UPI ID */}
                            <p className="font-semibold text-lg">Scan QR Code to Pay:</p>
                            <div className="w-full max-w-xs mx-auto my-4 p-4 rounded-md text-center border border-gray-200">
                                {/* Use the imported QR code image */}
                                <img
                                    src={UpiQrCode}
                                    alt="UPI QR Code for Payment"
                                    className="w-full h-auto object-contain"
                                />
                                <p className="text-sm text-gray-600 mt-2">Open any UPI app and scan to complete payment.</p>
                            </div>
                            <p>For any credit/debit card payments, please refer to the payment gateway link provided upon successful submission of the full registration form (if applicable).</p>
                            <p className="text-sm text-gray-600 mt-4"><FaExclamationCircle className="inline mr-1 text-orange-500" /> For payment-related issues, please contact our support team at **mhlrp2025@gmail.com**.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Important Note */}
                <motion.div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-400 mt-8" variants={sectionVariants}>
                    <h2 className="text-2xl font-semibold text-teal-700 mb-4 flex items-center">
                        <FaCheckCircle className="mr-2 text-teal-500" /> After Payment
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Once your payment is complete, please allow up to **48 hours** for us to process your registration. You will receive a confirmation email with further instructions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-2">
                        If you have filled out a separate registration form, please ensure your payment reference (e.g., transaction ID) matches your form submission.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PaymentDetails;