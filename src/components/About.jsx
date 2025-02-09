import React from "react";
import Tilt from 'react-parallax-tilt';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#222831] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in PHP Laravel, JavaScript, and expertise in frameworks like VueJS and Flutter for mobile development. I also have strong knowledge of SQL and MySQL for efficient database management. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        <br />
        <div className="flex gap-4 mt-2 font-medium">
          <a className="flex gap-2 text-white text-md items-center" href="https://www.linkedin.com/in/din-somnang/">
            <div className="bg-blue-800 rounded-full w-10 h-10 flex justify-center items-center"> <Linkedin /></div>
            <span className="hover:text-blue-600">LinkedIn</span></a>
          <a className="flex gap-2 text-white text-md items-center" href="https://github.com/Som-Nang">
            <div className="bg-gray-800 rounded-full w-10 h-10 flex justify-center items-center"><Github /></div>
            <span className="hover:text-gray-600">GitHub</span>
          </a>
        </div>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
