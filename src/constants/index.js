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
  nu_student_app,
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
  wingbank,
  ai_assistant_app,
  e_assignment
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
    name: "NU-Student App",
    description:"A mobile application that allows students to access their grades, schedules, and other academic information, as well as receive notifications about upcoming events and deadlines.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: nu_student_app,
    source_code_link: null,
    live_demo_link: null,
    apk_link: null,
  },
  {
    name: "AI Assistant App",
    description:" A mobile application that uses artificial intelligence to assist human with AI-Chat Bot, AI translator and Text to image promt generating.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini",
        color: "orange-text-gradient",
      },
      {
        name: "Appwrite",
        color: "pink-text-gradient",
      },
    
    ],
    image: ai_assistant_app,
    source_code_link: null,
    live_demo_link: null,
    apk_link: "link",
  },
   {
    name: "NU-ELearning System",
     description: "The E-Learning Management System is an all-in-one tool to support Teachers-Student. It simplifies attendance tracking, sharing learning materials, and assigning Homework, Assignments, and Midterms. The system also auto-creates student groups for collaborative work and provides an interactive dashboard for real-time insights, helping teachers manage their classes more effectively.",
     tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "orange-text-gradient",
      },
      {
        name: "JQUERY",
        color: "green-text-gradient",
      },
    
    ],
    image: e_assignment,
    source_code_link: null,
    live_demo_link: 'https://somnangdin.vercel.app/src/assets/pdf/e-learning.pdf',
    apk_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects };
