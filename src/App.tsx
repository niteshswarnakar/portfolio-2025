import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-gray-50 dark:bg-gray-800 py-8 transition-colors">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 Nitesh Swarnakar. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;