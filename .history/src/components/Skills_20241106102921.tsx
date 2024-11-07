import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Palette, Server, Smartphone } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    items: ["React.js", "CSS", "HTML", "JavaScript"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    items: ["Python", "PostgreSQL", "Flask", "Django"]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["Not quite there yet"]
  },
  {
    category: "UI/UX Design",
    icon: <Palette className="w-6 h-6" />,
    items: ["Figma", "Wire-framing"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["MySQL", "Redis", "Postgresql"]
  },
  {
    category: "Other Technologies",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Git",  "CI/CD", "Testing"]
  }
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="space-y-2">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center"
                  >
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
