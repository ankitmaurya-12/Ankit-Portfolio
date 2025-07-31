'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data/skills';
import { Server, Database, Code, Settings, Zap, Users } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  server: Server,
  database: Database,
  monitor: Code,
  settings: Settings,
  zap: Zap,
  users: Users,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical skills span across backend development, databases, frontend technologies, 
            and emerging fields like blockchain and machine learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => {
            const IconComponent = skillCategory.icon ? iconMap[skillCategory.icon] : Code;
            
            return (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    {IconComponent && <IconComponent className="h-6 w-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skillCategory.category}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skillCategory.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {skillCategory.proficiency}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Technical Proficiency Overview
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-gray-600 dark:text-gray-300">Backend Development</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Node.js, Python, Java, API Development
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-gray-600 dark:text-gray-300">Database & DevOps</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  MongoDB, MySQL, Git, Linux, Docker
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-gray-600 dark:text-gray-300">Frontend & Emerging Tech</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  React, Blockchain, Machine Learning
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Continuous Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I&apos;m constantly expanding my skill set through personal projects, 
                online courses, and staying updated with the latest industry trends. 
                My focus areas include cloud architecture, microservices, and AI/ML integration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 