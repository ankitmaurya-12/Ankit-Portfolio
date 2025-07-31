'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/lib/data/profile';
import { cn } from '@/lib/utils';

export default function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 shadow-2xl">
              <Image
                src="/Ankit_Maurya.jpg"
                alt={profile.name}
                width={192}
                height={192}
                quality={100}
                priority
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            {profile.title}
          </motion.h2>

          {/* Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="h-5 w-5" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Mail className="h-5 w-5" />
              <a 
                href={`mailto:${profile.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Phone className="h-5 w-5" />
              <span>{profile.phone}</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg",
                "hover:shadow-xl transition-all duration-300",
                "hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              )}
            >
              <Linkedin className="h-6 w-6 text-blue-600" />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg",
                "hover:shadow-xl transition-all duration-300",
                "hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              )}
            >
              <Github className="h-6 w-6 text-gray-900 dark:text-white" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 