import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: "2025",
    title: "Java Enthusiast",
    company: "Self-Learning",
    description: "Diving into Java to expand my programming skill set and build robust, platform-independent applications.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    year: "2024",
    title: "C Programmer & Developer",
    company: "Solo Developer & Mentor",
    description: "Started learning C programming, building a strong foundation in low-level programming. Teaching Django to beginners and guiding them through practical projects.",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    year: "2023",
    title: "First-Year Software Engineering Student",
    company: "MIVA Open University",
    description: "Began programming journey in BSc Software Engineering. Self-taught full-stack development, mastering Python, Django, and JavaScript while working on various freelance projects.",
    icon: <GraduationCap className="w-6 h-6" />
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
          <p className="text-gray-600 dark:text-gray-300">
          Beyond coding, I love teaching programming concepts, mentoring beginners, and collaborating on exciting projects. Whether it's writing about technical challenges or leading a team, I aim to inspire others and push boundaries in the tech space.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Junior Developer (Full Stack - Backend Heavy) crafting beautiful digital experiences.
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
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                As a passionate and ambitious software developer, I'm on a mission to become the best in the world. My journey started with a strong foundation in programming, and I've been steadily building my expertise in web development, particularly in Python, Django, and JavaScript.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I specialize in creating intuitive, user-friendly applications and am currently honing my skills in advanced technologies like Django Rest Framework, React.js, and MySQL. My work has included building e-commerce platforms, crafting innovative CRUD APIs, and designing interactive, responsive web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Beyond coding, I love teaching programming concepts, mentoring beginners, and collaborating on exciting projects. Whether it's writing about technical challenges or leading a team, I aim to inspire others and push boundaries in the tech space.
              </p>
            </div>
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
