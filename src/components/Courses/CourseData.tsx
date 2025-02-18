import { Course } from "@/types/course";

const CoursesData : Course[] = [
  
    {
        id: 1,
        image: '/Images/Services/ml.jpg',
        title: 'Introduction to React',
        description: 'Learn the basics of React and build your first application.',
        whyThisCourse: 'React is one of the most popular JavaScript libraries for building user interfaces. This course provides a strong foundation for modern web development.React is one of the most popular JavaScript libraries for building user interfaces. This course provides a strong foundation for modern web development.',
        syllabus: [
            'Introduction to React',
            'JSX Syntax',
            'React Components',
            'State and Props',
            'Event Handling',
            'Hooks',
            'Building a React Application',
        ],
        teacher: 'John Doe, Senior Frontend Developer',
    },
    {
        id: 2,
        image: '/Images/Services/ml.jpg',
        title: 'Advanced JavaScript',
        description: 'Deep dive into advanced JavaScript concepts and techniques.',
        whyThisCourse: 'JavaScript is the backbone of modern web applications. This course helps you master advanced topics for building complex apps.',
        syllabus: [
            'Asynchronous JavaScript (Promises, Async/Await)',
            'Closures and Scope',
            'Advanced Functions and Callbacks',
            'JavaScript Design Patterns',
            'Modules and Webpack',
            'Performance Optimization',
            'Testing and Debugging JavaScript',
        ],
        teacher: 'Jane Smith, JavaScript Expert',
    },
    {
        id: 3,
        image: '/Images/Services/ml.jpg',
        title: 'Tailwind CSS for Beginners',
        description: 'Master the utility-first CSS framework and build responsive designs.',
        whyThisCourse: 'Tailwind CSS is a highly flexible and customizable framework. Learn how to style your web applications faster and more efficiently.',
        syllabus: [
            'Introduction to Tailwind CSS',
            'Utility-First Concept',
            'Responsive Design with Tailwind',
            'Customizing Tailwind Configuration',
            'Building Components with Tailwind',
            'Advanced Layouts and Patterns',
        ],
        teacher: 'Mark Lee, CSS & Frontend Specialist',
    },
];

export default CoursesData;