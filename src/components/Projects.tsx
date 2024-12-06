import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Distributed Payment Gateway",
    description: "High-performance payment processing system handling 10k+ transactions per second with Go and gRPC.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    tech: ["Go", "gRPC", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Crypto Trading Engine",
    description: "Real-time cryptocurrency trading platform with advanced order matching algorithms.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "FastAPI", "Redis", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Financial Data Analytics",
    description: "Machine learning-powered system for real-time financial data analysis and predictions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "TensorFlow", "pandas", "Docker"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <Github className="h-5 w-5 mr-1" />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                    <ExternalLink className="h-5 w-5 mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}