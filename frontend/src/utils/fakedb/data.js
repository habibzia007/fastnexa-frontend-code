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
    title: "Information managemnet system",
  },
  {
    img: { link2 },
    title: "Information Database Security",
  },
  {
    img: { link3 },
    title: "Multifunctional Technology",
  },
];

export const WhatWeProvideData = [
  {
    img: { group },
    title: "Software Development Services",
    description:
      "Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent.",
  },
  {
    img: { Vector },
    title: "DevOps Services",
    description:
      "Accelerate innovation with world class tech teams We’ll match you to an entire remote team of incredible freelance talent.",
  },
  {
    img: { Vector1 },
    title: "Cloud Computing Services",
    description:
      "Accelerate innovation with world class tech teams We’ll match you to an entire remote team of incredible freelance talent.",
  },
  {
    img: { Vector3 },
    title: "Cybersecurity Services",
    description:
      "Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team of incredible freelance talent.",
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
    title: "Our Approach",
    description: `Delivering specialized services worldwide, Lucerna, as part of the ABM Group, 
  utilizes highly qualified professionals across unlimited geographical boundaries. 
  Whether you are located in the META region, Europe, or beyond, we provide tailor-made 
  services that precisely fit your requirements. Building upon ABM IT's four-decade legacy.`,
    img: aboutservice1,
    reverse: false,
  },
  {
    title: "IT Staff Augmentation",
    description: `In addition to our cyber security expertise, we excel in offering IT staff 
  augmentation services to businesses in the US, UK, and MENA region. Our skilled IT professionals 
  seamlessly integrate into your existing teams, providing the necessary support to meet your 
  project requirements effectively.`,
    img: aboutservice1,
    reverse: true,
  },
  {
    title: "The IT Imperative",
    description: `At Lucerna Tech, our sought-after cyber security talents are backed by technical 
  certifications from various security vendors and industry-leading risk management and information 
  security certifications. Our services adhere to industry best practices and standards, ensuring 
  top-notch solutions for our customers. Partnering with us means collaborating with security experts.`,
    img: aboutservice1,
    reverse: false,
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
