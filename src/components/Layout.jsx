import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {children} {/* This is where the content of each page will be rendered */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;