import React from 'react';
import { Mail, Linkedin, Github, Terminal } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-8">
            <a href="mailto:alex@example.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Mail className="h-6 w-6" />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}