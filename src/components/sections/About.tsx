'use client';

import { motion } from 'framer-motion';
import { Code, Server, Database, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Expert in building scalable APIs and server-side applications using Node.js, Python, and Java."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Proficient in MongoDB, MySQL, PostgreSQL with focus on data modeling and optimization."
    },
    {
      icon: Code,
      title: "Full Stack",
      description: "Experience with React, Angular, and modern frontend technologies for complete solutions."
    },
    {
      icon: Zap,
      title: "Emerging Tech",
      description: "Specialized in blockchain technology, machine learning, and IoT applications."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I&apos;m a passionate backend developer with a strong foundation in computer science and a keen interest in emerging technologies. 
            My journey in software development has been driven by curiosity and a desire to build robust, scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              What Drives Me
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I believe in writing clean, maintainable code that solves real-world problems. 
              My approach combines technical expertise with a deep understanding of user needs, 
              ensuring that every solution I build is not just functional, but also intuitive and scalable. 
              I&apos;m constantly learning and adapting to new technologies, always eager to take on challenging projects 
              that push the boundaries of what&apos;s possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 