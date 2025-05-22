import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import CallForPapers from "./pages/CallForPapers";
import ProgramSchedule from "./pages/ProgramSchedule";
import Registration from "./pages/Registration";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import ImportantDates from "./pages/ImportantDates";
import PaperSubmission from "./pages/PaperSubmission";
import Committee from "./pages/Committee";
import PaymentDetails from "./pages/PaymentDetails";
import ComingSoon from "./pages/ComingSoon";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HelmetProvider>
        <Router>
          <Layout>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about/" element={<About />} />
              <Route path="/important-dates" element={<ImportantDates />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/paper-submission" element={<PaperSubmission />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/payment-details" element={<PaymentDetails />} />
              <Route path="/program-schedule" element={<ComingSoon />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Router>
      </HelmetProvider>
    </MantineProvider>
  );
}

export default App;
