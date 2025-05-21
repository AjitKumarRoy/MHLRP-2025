import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaTrophy,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// Conference-specific constants (consistent with Homepage.jsx)
const conferenceName =
  "Invisible Struggles: Mental Health and the Lived Realities of the Peripheralized";
const conferenceShortForm = "MHLRP 2025";
const hosting = "Department of Humanities and Social Sciences";
const venue =
  "North Eastern Regional Institute of Science and Technology (NERIST)";
const aboutDescription =
  "Learn about MHLRP 2025, an international conference addressing mental health disparities in peripheralized communities, held on November 6-7, 2025, at NERIST, Nirjuli, Arunachal Pradesh.";
const logoImage = "/assets/mhlrp-logo.png"; // Production path after Vite build
const baseUrl = "https://your-conference-website.com"; // Replace with actual domain



// Sample team member data (replace with your actual data and image paths)
// const teamMembers = [
//     { name: 'Dr. Evelyn Reed', role: 'Conference Chair', image: '/src/assets/team-evelyn.jpg' },
//     { name: 'Mr. Samuel West', role: 'Program Coordinator', image: '/src/assets/team-samuel.jpg' },
//     { name: 'Ms. Olivia Moore', role: 'Registration Manager', image: '/src/assets/team-olivia.jpg' },
//     // Add more team members
// ];

// const coreValues = [
//     { name: 'Innovation', icon: FaLightbulb, description: 'We foster and showcase cutting-edge research and technological advancements.' },
//     { name: 'Collaboration', icon: FaHandshake, description: 'We believe in the power of bringing together diverse minds to share ideas.' },
//     { name: 'Excellence', icon: FaTrophy, description: 'We are committed to maintaining high standards in all aspects of the conference.' },
//     { name: 'Impact', icon: FaBullseye, description: 'We aim to contribute meaningfully to the progress of information and communication technology.' },
// ];

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

// const teamCardVariants = {
//     initial: { opacity: 0, scale: 0.9 },
//     animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
//     hover: { scale: 1.03, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: { duration: 0.2 } },
// };

const About = () => {

    // Structured data for the About page
const eventData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `About ${conferenceShortForm}`,
  description: aboutDescription,
  url: `${baseUrl}/about`,
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
  },
};


  return (
    <motion.div
      className="min-h-screen py-20 bg-gradient-to-br from-indigo-50 to-violet-100"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Helmet>
        <title>
          About {conferenceShortForm}: Mental Health Conference | NERIST
        </title>
        <meta name="description" content={aboutDescription} />
        <meta
          name="keywords"
          content="about MHLRP 2025, mental health conference, NERIST, Arunachal Pradesh, India, 2025, peripheralized communities, mental health disparities, conference objectives, sub-themes, mental health equity"
        />
        <meta property="og:title" content={`About ${conferenceName}`} />
        <meta
          property="og:description"
          content="Discover the mission, objectives, sub-themes, and target audience of MHLRP 2025, a conference on mental health for marginalized communities at NERIST."
        />
        <meta property="og:image" content={`${baseUrl}${logoImage}`} />
        <meta property="og:url" content={`${baseUrl}/about`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`About ${conferenceName}`} />
        <meta
          name="twitter:description"
          content="Discover the mission, objectives, sub-themes, and target audience of MHLRP 2025, a conference on mental health for marginalized communities at NERIST."
        />
        <meta name="twitter:image" content={`${baseUrl}${logoImage}`} />
        <script type="application/ld+json">{JSON.stringify(eventData)}</script>
        <link rel="canonical" href={`${baseUrl}/about`} />
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
            About <span className="text-violet-600">MHLRP 2025</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Learn more about our mission, vision, core values, and the dedicated
            team behind MHLRP 2025.
          </p>
        </motion.div>

        {/* Our Mission Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 mb-8"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
            <FaBullseye className="mr-2 text-violet-500" /> THE CONFERENCE
            CONCEPT NOTE
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mental health remains a global concern, with marginalized and
            peripheralized communities experiencing significant disparities in
            access to mental health care, social support, and economic
            opportunities. These populations, often neglected in mainstream
            discussions, face unique psychological stressors arising from
            socio-political, economic, cultural and geographical exclusion.
            Addressing their mental health concerns requires a multidisciplinary
            approach involving psychology, public health, social work,
            policy-making, and community engagement. The conference aims to
            bring together international experts, researchers, practitioners,
            and policymakers to deliberate on effective strategies for promoting
            mental well-being among peripheralized populations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Peripheralizing mental health issues is an area of concern and
            challenge in higher educational institutions as well. The silence of
            those who are marginalized due to factors ranging from race, gender,
            and other intersecting identities remains unheard or unaddressed
            either due to a lack of systemic and empathetically responsive
            internal structures in the institutions or a support system where
            their voices can be heard without bias. These realities not only
            impact academic performance but also widen the intensity of
            marginality and isolation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Addressing these issues and creating responsive systems are
            fundamental requirements for fostering sustainable and inclusive
            communities in higher educational institutions. To achieve this, it
            is imperative that the institutions adopt a multi-pronged approach
            ranging from having proper policy frameworks and culturally and
            racially appropriate measures that acknowledge, respect, and resolve
            the issues in a non-judgmental manner. The peripheral approach
            towards mental health has to be replaced with the centrality of
            sustainability and inclusivity-friendly policies, which will help
            create resilient and non-discriminatory educational spaces.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Against this backdrop, the scope of "peripheralized" can be
            understood in multiple dimensions:
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <li>
              <strong>Social Marginalization : </strong>
              Groups that experience systemic discrimination based on factors
              such as caste, ethnicity, gender, disability, or sexual
              orientation, leading to limited access to mental health resources.
            </li>
            <li>
              <strong>Economic Exclusion : </strong>
              Individuals or communities facing poverty, unemployment, or
              precarious working conditions, which impact their mental
              well-being due to financial insecurity and lack of healthcare
              access.
            </li>
            <li>
              <strong>Geographical Isolation : </strong>
              People living in remote, rural, or underdeveloped areas with
              restricted access to mental health professionals, institutions, or
              awareness programs.
            </li>
            <li>
              <strong>Cultural and Structural Oppression : </strong>
              Communities whose traditional or cultural perspectives on mental
              health are overlooked or stigmatized, leading to barriers in
              seeking psychological support.
            </li>
          </p>

          <p className="text-gray-600 leading-relaxed">
            By analyzing mental health through the lens of peripheralization,
            this international conference attempts an exploration of how
            structural inequalities and systemic neglect contribute to mental
            health disparities, emphasizing the need for inclusive,
            context-sensitive mental health interventions contributing to global
            discussions on mental health equity, policy innovations, and
            community-centred interventions, ultimately leading to sustainable
            mental health solutions for marginalized populations.
          </p>
        </motion.div>

        {/* Our Vision Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 mb-8"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
            <FaEye className="mr-2 text-violet-500" /> CONFERENCE OBJECTIVES
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <li>
              To explore the mental health challenges faced by peripheralized
              communities.
            </li>
            <li>
              To analyze the impact of socio-economic and cultural factors on
              mental health disparities.
            </li>
            <li>
              To discuss evidence-based interventions and policies for enhancing
              mental well-being in marginalized populations.
            </li>
            <li>
              To foster collaboration among researchers, practitioners, and
              policymakers for sustainable mental health solutions.
            </li>
            <li>
              To disseminate research findings and innovative approaches to
              address mental health issues among the peripheralized, in India
              and abroad.
            </li>
            <li>
              To unravel and critically engage with cross-cutting areas - fields
              of practice, subjects, structure, sectors of development and
              practice.
            </li>
          </p>
        </motion.div>

        {/* Our Vision Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 mb-8"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
            <FaEye className="mr-2 text-violet-500" /> SUB-THEMES
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <li>Gender roles and sustainable development goals (SDG).</li>
            <li>Gender and financial inclusion.</li>
            <li>
              Precarity in the Ivory Tower: Mental Health and the Insecurity of
              Academic Labour.
            </li>
            <li>
              Mental health disparities and socio-economic determinants of
              mental well-being among marginalized groups.
            </li>
            <li>
              Cultural and Indigenous perspectives on mental health and suicide
              prevention.
            </li>
            <li>Trauma, resilience, and coping strategies.</li>
            <li>Community-based mental health interventions.</li>
            <li>Role of technology in bridging mental health gaps.</li>
            <li>
              Policy frameworks for mental health equity and Economic evaluation
              of mental health treatment.
            </li>
            <li>Disability and rehabilitation.</li>
            <li>The psychological effect of unemployment.</li>
            <li>
              Barriers to Mental Health Access: The Role of Language, Policy,
              and Institutional Neglect.
            </li>
            <li>
              Stigma, Silence, and Survival: Mental Health in Marginalized
              Gender and Sexual Identities.
            </li>
            <li>
              Buried Grief and Academic Pressure: Peripheralized Youth Coping
              with Intergenerational Trauma.
            </li>
            <li>
              Living Between Two Worlds: Mental Health Experiences of
              First-Generation Learners.
            </li>
          </p>
        </motion.div>

        {/* Our Vision Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 mb-8"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
            <FaUsers className="mr-2 text-violet-500" /> TARGET AUDIENCE:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <li>
              Academicians and researchers in psychology, sociology, economics,
              public health, and related fields.
            </li>
            <li>Mental health practitioners and counsellors.</li>
            <li>Policymakers, corporate, and government representatives.</li>
            <li>
              Non-governmental organizations (NGOs) and community-based
              organizations.
            </li>
            <li>Students and scholars interested in mental health studies.</li>
          </p>
        </motion.div>

        {/* Our Vision Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 mb-8"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
            <FaUsers className="mr-2 text-violet-500" /> EXPECTED OUTCOMES:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <li>
              Strengthened awareness and discourse on mental health challenges
              faced by peripheralized communities.
            </li>
            <li>Policy recommendations for mental health equity.</li>
            <li>
              Establishment of research collaborations for future studies.
            </li>
            <li>
              Publication of selected papers in reputed journals or an edited
              volume.
            </li>
            <li>
              Identification of innovative intervention models for mental health
              care.
            </li>
          </p>
        </motion.div>

        {/* Our Vision Card */}
        {/* <motion.div className="bg-white rounded-xl shadow-md p-8 mb-8" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
                        <FaEye className="mr-2 text-violet-500" /> Our Vision
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        To be a leading global conference in information and communication technology, recognized for its
                        high-quality research presentations, impactful discussions, and its role in shaping the future
                        of the digital world.
                    </p>
                </motion.div> */}

        {/* Core Values Section
                <motion.div className="mb-12" variants={cardVariants}>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-6 flex items-center">
                        <FaLightbulb className="mr-2 text-violet-500" /> Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div key={index} className="bg-white rounded-lg shadow-md p-6 text-center" variants={cardVariants} whileHover="hover">
                                <div className="text-3xl text-violet-500 mb-3">
                                    <value.icon />
                                </div>
                                <h3 className="text-lg font-semibold text-indigo-800 mb-1">{value.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}

        {/* Why Attend? Card */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          variants={cardVariants}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
            <FaTrophy className="mr-2 text-violet-500" /> Why Attend MHLRP 2025?
          </h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
            <li>Gain insights from leading experts and keynote speakers.</li>
            <li>Present your research and receive valuable feedback.</li>
            <li>Network with peers, academics, and industry professionals.</li>
            <li>Participate in interactive workshops and tutorials.</li>
            <li>Expand your knowledge and advance your career.</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
