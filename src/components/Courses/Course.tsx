// pages/index.js

'use client';
import React from 'react';

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

import { AuroraBackground } from "@/components/ui/aurora-background";
import CoursesData from './CourseData'


const CourseCard = dynamic(() => import("./SinglePageCourse"), { ssr: false });


export default function Course() {
    return (
        <div className="container mx-auto px-4 py-8">

<AuroraBackground>
  <motion.div
    initial={{ opacity: 0.5, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
  >
    <section className="text-center py-4 px-2 sm:py-8 sm:px-4"> {/* Adjusting padding for smaller screens */}
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-5 sm:mt-10"> {/* Reducing text size on small screens */}
        Courses
      </h1>
      <p className="mt-3 text-sm sm:text-base md:text-xl"> {/* Adjusting text size for smaller screens */}
        Master New Skills, Elevate Your Career.
      </p>
    </section>
  </motion.div>
</AuroraBackground>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {CoursesData.map((course, key) => (
                    <CourseCard
                    course={course} key={key} 
                       
                    />
                ))}
            </div>
        </div>
    );
}