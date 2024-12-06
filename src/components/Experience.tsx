import React from 'react';

const experiences = [
  {
    company: "FinTech Solutions Inc.",
    role: "Senior Backend Engineer",
    period: "2020 - Present",
    description: "Led development of high-frequency trading systems processing $1B+ daily transactions. Implemented distributed payment processing system using Go and gRPC.",
    tech: ["Go", "Python", "PostgreSQL", "Redis", "Kubernetes"]
  },
  {
    company: "Digital Banking Co.",
    role: "Backend Engineer",
    period: "2018 - 2020",
    description: "Developed core banking APIs and real-time transaction processing systems. Enhanced system security and compliance measures.",
    tech: ["Python", "Django", "MySQL", "Docker", "AWS"]
  },
  {
    company: "Tech Innovators Ltd.",
    role: "Software Engineer",
    period: "2016 - 2018",
    description: "Built microservices architecture for payment gateway integration. Implemented fraud detection systems using machine learning.",
    tech: ["Go", "Python", "MongoDB", "RabbitMQ"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
                <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="text-lg text-indigo-600 dark:text-indigo-400">{exp.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}