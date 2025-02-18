'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

import { Course } from '@/types/course'


  

const CourseCard = ({ course }:{course:Course}) => {


    const { id, image, title, description,teacher  } = course;
      
    
      const router = useRouter();
    
      const handleCourseEnroll = () => {
        router.push(`/course/${id}`); // Navigate to a new page
      };
  return (



    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="font-bold  mb-2">{teacher}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out"
          onClick={handleCourseEnroll}
          >
          Enroll
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;