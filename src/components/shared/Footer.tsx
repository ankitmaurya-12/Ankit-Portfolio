'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '@/lib/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-max py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">{profile.name}</span>
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Backend Developer & Full Stack Engineer passionate about building scalable solutions 
              and exploring emerging technologies.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} {profile.name}. All rights reserved. Made with{' '}
              <Heart className="inline h-4 w-4 text-red-500" /> using Next.js & TypeScript
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 