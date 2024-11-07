import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: "2023",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovators Inc.",
    description: "Leading development of enterprise-scale applications and mentoring junior developers.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    year: "2021",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    year: "2020",
    title: "Software Engineering Degree",
    company: "Tech University",
    description: "Graduated with honors in Computer Science and Software Engineering.",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    year: "2019",
    title: "Junior Developer",
    company: "StartUp Hub",
    description: "Started my journey in web development, working on innovative projects.",
    icon: <Award className="w-6 h-6" />
  }
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate developer with a love for creating beautiful and functional web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              With over 5 years of experience in web development, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale enterprise applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm passionate about creating intuitive user experiences and writing clean, maintainable code. My expertise spans both frontend and backend development, with a particular focus on React and Node.js ecosystems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or learning new technologies to stay at the forefront of web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gray-200 dark:bg-gray-700" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20 pb-8"
              >
                <div className="absolute left-0 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg">
                  {item.icon}
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold mt-1">{item.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {item.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};