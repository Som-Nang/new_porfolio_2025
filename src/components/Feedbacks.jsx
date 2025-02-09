import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-[#222831] p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      {/* original */}
      {/* <p className='text-white tracking-wider text-[18px]'>{testimonial}</p> */} 
      <div className="d-flex flex-col justify-center items-center">
        <p className='text-white tracking-wider text-[18px] bg-gray-500 p-5 my-1 rounded-md'></p> 
        <p className='text-white tracking-wider text-[18px] bg-gray-500 p-5 rounded-md'></p> 
      </div>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {/* <span className='blue-text-gradient'>@</span> {name} */}
            
          </p>
          <div className=' bg-gray-500 p-5 rounded-md'></div>
          {/* <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p> */}
           <div className=' bg-gray-500 p-5 rounded-md mt-2 w-1/2'></div>
        </div>
        <div className=' bg-gray-500 p-5 rounded-full  mt-2 w-10 h-10 ml-1'></div>
        {/* <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        /> */}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[#4C585B] rounded-[20px]`}>
      <div
        className={`bg-[#45474B] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
