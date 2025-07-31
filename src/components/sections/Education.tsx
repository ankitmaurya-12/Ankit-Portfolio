'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';
import { education } from '@/lib/data/education';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey in computer science and engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mt-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{education.institution}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{education.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-gray-900 dark:text-white">{education.gpa}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Relevant Coursework
              </h4>
              <ul className="space-y-2">
                {education.coursework.map((course, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Award className="h-6 w-6 text-yellow-500" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {education.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Academic Journey
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Strong</div>
                <div className="text-gray-600 dark:text-gray-300">Academic Performance</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Consistent Excellence</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Multiple</div>
                <div className="text-gray-600 dark:text-gray-300">Technical Projects</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Hands-on Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Continuous</div>
                <div className="text-gray-600 dark:text-gray-300">Learning & Growth</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Skill Development</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                My academic journey has been focused on building a strong foundation in computer science principles. 
                I&apos;ve maintained consistent performance while actively engaging in practical projects and staying 
                updated with emerging technologies. My education has provided me with the theoretical knowledge and 
                practical skills needed to excel in software development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 