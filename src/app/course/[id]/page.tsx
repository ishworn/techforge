'use client';

import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { use } from "react";
import CoursesData from "@/components/Courses/CourseData";
import { motion } from "framer-motion";
import Image from "next/image";

const CoursesPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const router = useRouter();

  const course = CoursesData.find((courses) => courses.id.toString() === id);

  if (!course) {
    return <div>Card not found</div>;
  }

  const handleBackClick = () => {
    router.push("/course");
  };

  return (
    <div className="bg-gray-100 min-h-screen">

  
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="mt-4 text-black rounded-md inline-flex items-center lg:my-10 px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-all duration-300 ease-in-out"
      >
        <IoIosArrowRoundBack className="mr-2 text-xl" /> Back to Course
      </button>

      {/* Main Content Section (Image + Course Details) */}
      <motion.div
        className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
         
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Volume */}
          <motion.div className="w-full md:w-1/2">
          <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={600}
                    className="rounded-2xl w-full max-w-md sm:max-w-lg lg:max-w-2xl"
                />
          </motion.div>

          {/* Course Details Volume */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{course.title}</h1>
            <p className="text-gray-600 font-bold">{course.teacher}</p>
            <p className="text-lg text-gray-600 mb-6">{course.description}</p>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Why This Course?</h2>
              <p className="text-gray-600 leading-relaxed w-4/5">{course.whyThisCourse}</p>
            </div>
            
          </div>
        </div>
      </motion.div>

      {/* Syllabus Section (Separate Div Below the Main Content) */}
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-xl mt-8">
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Syllabus</h2>
          <ul className="list-disc list-inside text-gray-600">
            {course.syllabus.map((item, index) => (
              <li key={index} className="mb-2 flex items-center space-x-2 hover:text-blue-500 transition-all duration-300 ease-in-out">
                <span className="text-blue-500">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
