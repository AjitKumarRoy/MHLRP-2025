import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const primaryGradient = 'bg-gradient-to-r from-teal-800 via-blue-900 to-indigo-800';
  const textColor = 'text-gray-200';
  const headingColor = 'text-white';
  const linkHighlight = 'text-teal-300 hover:text-teal-100';
  const borderColor = 'border-gray-700';
  const copyrightColor = 'text-gray-400';

  // Replace with your Google Maps embed URL (see instructions below)
  const iframeHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.84513236048!2d93.74029521038959!3d27.129687450635668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3746aa9da1dd1bf1%3A0x3338f788c38d9e9e!2sNorth%20Eastern%20Regional%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1745120134336!5m2!1sen!2sin" width="350" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <footer className={`${primaryGradient} py-12 md:py-16`}>
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About the Conference Section */}
        <div>
          <h3 className={`text-xl font-semibold ${headingColor} mb-4`}>About NERIST Conf. 2025</h3>
          <p className={`text-sm leading-relaxed mb-4 ${textColor}`}>
            [Insert a brief, compelling description of NERIST Conf. 2025 here. You can take inspiration from the "About Us" section of the 2024 website, focusing on the key aspects and benefits of attending.]
          </p>
          <p className="text-sm">
            <Link to="/about" className={`${linkHighlight} hover:underline`}>
              Read More
            </Link>
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className={`text-xl font-semibold ${headingColor} mb-4`}>Quick Links</h3>
          <ul className={`text-sm space-y-2 ${textColor}`}>
            <li>
              <Link to="/important-dates" className={`${linkHighlight} hover:underline`}>
                Important Dates
              </Link>
            </li>
            <li>
              <Link to="/call-for-papers" className={`${linkHighlight} hover:underline`}>
                Call for Papers
              </Link>
            </li>
            <li>
              <Link to="/paper-submission" className={`${linkHighlight} hover:underline`}>
                Paper Submission
              </Link>
            </li>
            <li>
              <Link to="/registration" className={`${linkHighlight} hover:underline`}>
                Registration
              </Link>
            </li>
            <li>
              <Link to="/program-schedule" className={`${linkHighlight} hover:underline`}>
                Program Schedule
              </Link>
            </li>
            <li>
              <Link to="/venue" className={`${linkHighlight} hover:underline`}>
                Venue
              </Link>
            </li>
            <li>
              <Link to="/speakers" className={`${linkHighlight} hover:underline`}>
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/committee" className={`${linkHighlight} hover:underline`}>
                Committee
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${linkHighlight} hover:underline`}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className={`text-xl font-semibold ${headingColor} mb-4`}>Contact Us</h3>
          <p className={`text-sm leading-relaxed mb-2 ${textColor}`}>
            <FaMapMarkerAlt className="inline mr-2 text-teal-300" />
            [Insert Conference Address Here]
          </p>
          <p className={`text-sm leading-relaxed mb-2 ${textColor}`}>
            <FaEnvelope className="inline mr-2 text-teal-300" />
            <Link to="mailto:[Your Conference Email]" className={`${linkHighlight} hover:underline`}>
              [Your Conference Email]
            </Link>
          </p>
          <p className={`text-sm leading-relaxed mb-2 ${textColor}`}>
            <FaPhone className="inline mr-2 text-teal-300" />
            [Your Conference Phone Number]
          </p>

          {/* Mini Google Map (Moved below the contact info) */}
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: iframeHTML }} />
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className={`text-xl font-semibold ${headingColor} mb-4`}>Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="[Your Facebook Link]" className={`text-gray-400 hover:text-teal-300 hover:underline`}>
              <FaFacebook size={24} />
            </Link>
            <Link to="[Your Twitter Link]" className={`text-gray-400 hover:text-teal-300 hover:underline`}>
              <FaTwitter size={24} />
            </Link>
            <Link to="[Your LinkedIn Link]" className={`text-gray-400 hover:text-teal-300 hover:underline`}>
              <FaLinkedin size={24} />
            </Link>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
      <div className={`mt-8 py-4 border-t ${borderColor} text-center text-sm ${copyrightColor}`}>
        <p>&copy; {new Date().getFullYear()} NERIST Conf. 2025. All Rights Reserved.</p>
        <p>
          Designed & Developed by{' '}
          <Link to="[Your Organization/Developer Link]" className={`${linkHighlight} hover:underline`}>
            Ajit Kumar Roy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;