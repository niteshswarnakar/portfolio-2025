import React from "react";
import { Terminal, Database, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Backend Engineer in Golang and Python
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors">
            Experienced software developer focused on building accessible
            products for the web who is passionate and dedicated enough to the
            career with adaptive and coordinating nature.
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium dark:text-white">Go</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium dark:text-white">Python</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium dark:text-white">FinTech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
