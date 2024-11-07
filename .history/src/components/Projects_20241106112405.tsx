import { motion } from 'framer-motion';
import mood from '../assets/images/mood.jpg';
import challenge from '../assets/images/100daysofmiva.jpg';
import helpHubImage from '../assets/images/Helping Hands.jpeg';
import mirrorWebImage from '../assets/images/Forest landscape.jpeg';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Django - backend and HTML, CSS & Javascript - frontend, future improvements - featuring real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Django", "HTML", "CSS", "Javascript", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Moodify",
    description: "Moodify is a dynamic, AI-powered app that adapts to user emotions by providing music recommendations and mood-based analytics. Developed with Django, textblob for seamless interactivity and Chart.js for immersive, real-time data visualization.",
    image: mood,
    tags: ["Django", "HTML", "Chart.js", "Javascript", "CSS"],
    liveUrl: "https://moodify-wcmd.onrendered.com",
    githubUrl: "https://github.com/mayowa-kalejaiye/moodify"
  },
  {
    title: "Social Media App",
    description: "A modern social media application with real-time messaging and content sharing capabilities.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "#100Days of MIVA",
    description: "An exciting journey through 100 days of coding, exploring core programming concepts and building projects with technologies like Django, React.js, and Flask. Documenting daily progress and challenges as part of the #100DaysOfCode initiative at MIVA.",
    image: challenge, // Ensure 'challenge' points to the correct image file
    tags: ["Django", "React.js", "Flask"],
    liveUrl: "https://github.com/mayowa-kalejaiye/-100daysofmiva",
    githubUrl: "https://github.com/mayowa-kalejaiye/-100daysofmiva"
  },
  {
    title: "HelpHub",
    description: "A collaborative platform for real-time resource sharing and community support, built with Django, React.js, and Flask for a seamless user experience.",
    image: helpHubImage, // Replace helpHubImage with the correct variable holding the image for HelpHub
    tags: ["Django", "React.js", "WebSocket", "Real-time Collaboration"],
    liveUrl: "https://github.com/mayowa-kalejaiye/Helphub",
    githubUrl: "https://github.com/mayowa-kalejaiye/Helphub"
  },
  {
    title: "MirrorWeb",
    description: "MirrorWeb is a Python-based tool for cloning websites, ideal for learning, testing, or backup purposes. Built with Flask, BeautifulSoup, and Requests, it captures HTML, CSS, JS, and media files to create offline replicas. MirrorWeb is your go-to tool for saving web pages and viewing them offline, effortlessly replicating their structure and content. It's perfect for developers, designers, or anyone curious about how websites are built.",
    image: mirrorWebImage, // Replace mirrorWebImage with the correct variable holding the image for MirrorWeb
    tags: ["Flask", "BeautifulSoup", "Requests", "Python", "Web Scraping", "Offline Viewing"],
    liveUrl: "https://github.com/mayowa-kalejaiye/MirrorWeb",
    githubUrl: "https://mayowa-kalejaiye.github.io/MirrorWeb/"
  },

];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my expertise in various technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors duration-200"
                    title="View Live Project"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors duration-200"
                    title="View Source Code on GitHub"
                  >
                    <Github className="w-6 h-6 text-gray-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
