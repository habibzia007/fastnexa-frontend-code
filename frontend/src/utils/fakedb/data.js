import divabout from "../../assets/images/divabout.png";
import group from "../../assets/images/group.svg";
import Vector from "../../assets/images/vector1.svg";
import Vector1 from "../../assets/images/vector2.svg";
import Vector3 from "../../assets/images/vector3.svg";
// choose us
import link1 from "../../assets/images/link1.png";
import link2 from "../../assets/images/link2.png";
import link3 from "../../assets/images/link3.png";

// blog
import blog0 from "../../assets/images/blog0.png";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";

//aboutusservice
import aboutservice1 from "../../assets/images/aboutservice1.jpg";

//attention client
import attentionclient1 from "../../assets/attentionclient1.svg";
import attentionclient2 from "../../assets/attentionclient2.svg";
import attentionclient3 from "../../assets/attentionclient3.svg";
import attentionclient_msg from "../../assets/attentionclient_msg.svg";
import attentionclient_fb from "../../assets/attentionclient_fb.svg";
import attentionclient_wp from "../../assets/attentionclient_wp.svg";

export const BlogCardData = [
  {
    image: { blog0 },
    author: "Andrew Paker",
    comments: 5,
    date: "08",
    month: "Aug",
    title: "How to become a successful businessman",
  },
  {
    image: { blog1 },
    author: "Andrew Paker",
    comments: 3,
    date: "10",
    month: "Aug",
    title: "Who Needs Extract Value From Data?",
  },
  {
    image: { blog2 },
    author: "Andrew Paker",
    comments: 8,
    date: "12",
    month: "Aug",
    title: "Easy and Most Powerful Server and Platform.",
  },
];
export const chooseUsData = [
  {
    img: { link1 },
    title: "Information Managementt Systems",
    description: "Harness the power of top-tier tech talent to drive innovation and optimize your information systems with our dedicated remote teams."
  },
  {
    img: { link2 },
    title: "Information Database Security",
    description: "Protect your critical data with advanced security measures implemented by our skilled professionals, ensuring robust database protection."
  },
  {
    img: { link3 },
    title: "Multifunctional Technology",
    description: "Benefit from versatile technology solutions tailored to meet diverse business needs, supported by our expert teams to ensure seamless integration and performance."
  },
];

export const WhatWeProvideData = [
  {
    img: { group },
    link: "software-development",
    title: "Software Development Services",
    description:
      "Accelerate innovation with world-class tech teams. We match you with an entire remote team of incredible freelance talent to bring your ideas to life.",
  },
  {
    img: { Vector },
    link: "dev-ops",
    title: "DevOps Services",
    description:
      "Enhance your development and operations processes with our expert DevOps teams, ensuring seamless integration and delivery.",
  },
  {
    img: { Vector1 },
    link: "cloud-computing",
    title: "Cloud Computing Services",
    description:
      "Leverage the power of the cloud to boost efficiency and scalability, with our specialized teams providing tailored cloud solutions.",
  },
  {
    img: { Vector3 },
    link: "cyber-security",
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with our advanced cybersecurity measures, safeguarding your business against threats.",
  },
  {
    img: { Vector3 },
    link: "network-infrastructure",
    title: "Network and Infrastructure ",
    description:
      "Build Services: Develop robust IT infrastructures with our expert teams, ensuring a reliable and efficient network for your business.",
  },
  {
    img: { Vector3 },
    link: "information-security",
    title: "Information Security Services",
    description:
      "Ensure the confidentiality, integrity, and availability of your data with our comprehensive information security services.",
  },
  {
    img: { Vector3 },
    link: "business-continuity-disaster-recovery",
    title: "Business Continuity & Disaster Recovery",
    description:
      "Safeguard your business against disruptions with our resilient business continuity and disaster recovery solutions.",
  },
];

export const whoWeAreData = [
  {
    title: "Soft Kode",
    description: "A Dept of Software Coding and Development.",
  },
  {
    title: "GT",
    description: "A  Dept of Gaming Technology.",
  },
  {
    title: "ISec",
    description: "A Dept of Information and Cybersecurity.",
  },
  {
    title: "EDS",
    description: "A Dept of sd Coding and Development.",
  },
  {
    title: "HDE",
    description: "A  Dept of dfd Technology.",
  },
  {
    title: "ERTYTD",
    description: "A Dept of df and Cybersecurity.",
  },
];

export const aboutUsServicesData = [
  {
    title: "Our Mission",
    description: `Our mission is simple yet profound: to harness the limitless capabilities of Artificial Intelligence (AI) and apply them to solve real-world challenges. We believe that the future is defined by innovation, and we're dedicated to helping you shape that future by delivering cutting-edge solutions tailored to your unique goals and objectives.`,
    img: aboutservice1,
    reverse: false,
  },
  {
    title: "Our Vision",
    description: `At FAST NEXA, our vision is bold and ambitious: to lead the way in shaping the future of technology. We envision a world where innovation knows no bounds, where the possibilities of artificial intelligence are limitless, and where technology serves as a catalyst for positive change and transformation.`,
    img: aboutservice1,
    reverse: true,
  },
  {
    title: "Our Values",
    description: `At FAST NEXA, our values are the cornerstone of everything we do. They embody who we are, what we stand for, and how we strive to make a difference in the world. With these guiding principles at the heart of our operations, we remain steadfast in our commitment to delivering excellence in all that we undertake.`,
    img: aboutservice1,
    reverse: false,
    hasAccordion: true,
  },
];

export const attentionClientData = [
  {
    image: attentionclient1,
    title: "Office address",
    description: "74 Highfield Road, Lahore Pakistan",
  },
  {
    image: attentionclient2,
    title: "Phone Numbers",
    description: "+44 20 7946 0380 +44 20 7946 0295",
  },
  {
    image: attentionclient3,
    title: "E-mail & Live Chats",
    description: "support@fastnexa.com",
    socialIcons: [
      {
        icon: attentionclient_wp,
        link: "https://www.facebook.com",
      },
      {
        icon: attentionclient_fb,
        link: "https://www.twitter.com",
      },
      {
        icon: attentionclient_msg,
        link: "https://www.linkedin.com",
      },
    ],
  },
];
