import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  html,
  tailwind,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  laravel,
  flutter,
  vue,
  sql,
  mysql,
  linux,
  php,
  gonoka,
  nortorn,
  wingbank
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX/UI Design",
    icon: creator,
  },
];

const technologies = [
  //limit 14
  {
    name: "Laravel",
    icon: laravel,
  },

  {
    name: "PHP",
    icon: php,
  },
    {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "SQL",
    icon: sql,
  },
    {
    name: "MYSQL",
    icon: mysql,
  },
    {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "VUE",
    icon: vue,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
   {
    name: "LINUX",
    icon: linux,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Technical Speacialist",
    company_name: "Wing Bank Plc",
    icon: wingbank,
    iconBg: "#ABCC3D",
    date: "Apr 2021 - May 2023",
    points: [
      "Delivered comprehensive technical support for POS terminals, ensuring smooth operations for business processes",
      "Collaborated with various teams to identify and resolve technical challenges for merchants, ensuring efficiency",
      "Repaired and maintained POS terminals nationwide, ensuring both hardware and software operated reliably",
      "Support technical issues sale team(Wcx x Merchant) to make sure it work smoothly when transaction or payments",
      "TECHNOLOGY: Microsoft Office 365, BI Tool, Outlook..."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Gonoka",
    icon: gonoka,
    iconBg: "#18499E",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Conducted comprehensive testing on web applications to identify and resolve critical issues, ensuring quality",
      "Designed and developed interactive web applications using JavaScript, VueJS, and Tailwind CSS for better usability",
      "Resolved technical issues promptly, ensuring minimal disruption to website performance and user satisfaction",
      "TECHNOLOGY: VueJS, Linux"

    ],
  },
  {
    title: "Full-Time Developer",
    company_name: "Nortorn University",
    icon: nortorn,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Lead the deployment of new systems for 3000 students and lecturers, ensuring seamless integration and usability",
      "Enhanced the NU Staff System by developing new functionalities using modern frameworks like Vue3 and Laravel",
      "Delivered technical support for students and lecturers, resolving issues efficiently to improve system usage",
      "Reported the problem and fix issue if needed.",
      "TECHNOLOGY: MySQL, PHP, Laravel, VueJS, Flutter, TailwindCss, Typescript, Linux, Figma..."
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
