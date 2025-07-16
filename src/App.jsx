import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import './index.scss';  
import '@fontsource/inter/400.css'; //regular
import '@fontsource/inter/700.css'; //bold


export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      id: 1,
      title: "Movie Website",
      description: "A modern movie discovery site built with ReactJS, Tailwind CSS, HTML, and an external API to show trending films.",
      image: "/movies.jpg",
      link: "https://github.com/rajkela20/MovieSite",
      tech: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Node.js", "API"]
    },
    {
      id: 2,
      title: "Portfolio Site",
      description: "A personal portfolio made with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
      image: "/portfolios.jpg",
      link: "https://github.com/rajkela20/Portfolio?tab=readme-ov-file",
      tech: ["HTML", "TailwindCSS", "JavaScript", "React", "SCSS", "NodeJS"]
    },
    {
      id: 3, 
      title: "FastEat",
      description: "A website created to make it easier for you to find your favorite dish recipes. Technologies used: HTML, SCSS, NodeJS, React, MySQL",
      image: "/fasteat.jpg",
      link: "https://github.com/rajkela20/FastEat",
      tech: ["HTML", "SCSS", "JavaScript", "React", "SCSS", "MySQL", "NodeJS", "API"]
    }
  ];

useEffect(() => {
  const html = document.documentElement;
  html.classList.toggle('dark', darkMode);
  html.classList.toggle('light-mode', !darkMode);
}, [darkMode]);

  const { t } = useTranslation(); 
  const title = t("hero.title");  

   return (
    <div className="relative min-h-screen">
      {/* Starry Background - only visible in light mode */}
      {!darkMode && (
        <div className="stars-container fixed inset-0 -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      )}
      
      <div className={`relative z-10 ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
        
      <header className="p-6 flex justify-between items-center sticky top-0 z-50 bg-white/5 dark:bg-black/5 backdrop-blur-sm border-b border-white/10 dark:border-gray-800/50">
  <motion.h1 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="text-2xl font-Nunito font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
  >
    {t("h1.mojeime")}
  </motion.h1>

  <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
    {['about', 'projects', 'contact'].map((item) => (
      <motion.a
        key={item}
        href={`#${item}`}
        whileHover={{ 
          scale: 1.1,
          color: "#a78bfa" 
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-400 px-1 py-1"
      >
        {t(`nav.${item}`)}
      </motion.a>
    ))}
  </nav>

  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center gap-2"
  >
    <div className="flex border border-gray-200 dark:border-gray-700 rounded-full p-1">
      {['en', 'sr', 'ru'].map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`text-xs px-3 py-1 rounded-full transition-all ${
            i18n.language === lang 
              ? 'bg-purple-500 text-white' 
              : 'hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>

    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-purple-500" />
      )}
    </button>
  </motion.div>
</header>
      
      {/* Hero */}
      
{/* Hero Section with Inter Font */}
<section className="h-screen flex flex-col justify-center items-center text-center px-4">
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.03 }}
    className="space-y-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-md hover:shadow-lg transition-all"
  >
    {/* Name/Title with Inter */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-4xl md:text-6xl font-bold text-gray-100 drop-shadow-lg font-inter"
    >
      {title.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          className={char.trim() !== "" ? "bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent" : ""}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto whitespace-pre-line font-inter"
    >
      {t("hero.subtitle")}
    </motion.p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ delay: 0.6, duration: 0.8 }} 
    className="mt-6 flex gap-6"
  >
   <motion.div className="flex justify-center space-x-4">
  <motion.a 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href="https://github.com/rajkela20" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-purple-400 hover:text-purple-500 transition"
    aria-label="GitHub"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  </motion.a>

    <motion.a 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href="https://linkedin.com/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-purple-400 hover:text-purple-500 transition"
    aria-label="LinkedIn"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  </motion.a>
     <motion.a 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href="mailto:dusanrajic111@gmail.com" 
    className="text-purple-400 hover:text-purple-500 transition"
    aria-label="Email"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
    </svg>
  </motion.a>
</motion.div>
  </motion.div>
</section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mx-auto shadow-md hover:shadow-xl hover:border-white/30 transition-all space-y-8"
>
  <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-white text-transparent bg-clip-text font-inter">
  {t("about.gettoknow")}
</h2>

  
  <p className="text-slate-400/90 dark:text-slate-300/90 leading-relaxed mb-8 font-inter">
    {t("about.desc")}
  </p>

  <div className="space-y-6">
    <h3 className="font-bold text-xl text-secondary dark:text-secondary-light font-inter">
      Technical Skills
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="p-1">
        <h4 className="font-semibold mb-3 text-accent dark:text-accent-light font-inter">
          Languages
        </h4>
        <ul className="space-y-2 text-slate-400 dark:text-slate-300 font-inter">
          {['JavaScript', 'PHP', 'HTML/CSS', 'SCSS', 'MySQL', 'C#', 'C++'].map((lang) => (
            <li key={lang} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              {lang}
            </li>
          ))}
        </ul>
      </div>

      {/* Frameworks Column */}
      <div className="p-1">
        <h4 className="font-inter font-semibold mb-3 text-accent dark:text-accent-light">
          Frameworks
        </h4>
        <ul className="space-y-2 text-slate-400 dark:text-slate-300 font-inter">
          {['React', 'Next.js', 'Tailwind CSS'].map((framework) => (
            <li key={framework} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              {framework}
            </li>
          ))}
        </ul>
      </div>

      {/* Tools Column */}
      <div className="p-1">
        <h4 className="font-inter font-semibold mb-3 text-accent dark:text-accent-light">
          Tools
        </h4>
        <ul className="space-y-2 text-slate-400 dark:text-slate-300 font-inter">
          {['Git/GitHub', 'Adobe CC', 'Unity','VS/VSCode','UE5(newbie)'].map((tool) => (
            <li key={tool} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              {tool}
            </li>
          ))}
        </ul>
      </div>
       <div className="p-1">
        <h4 className="font-inter font-semibold mb-3 text-accent dark:text-accent-light">
          Proficient in
        </h4>
        <ul className="space-y-2 text-slate-400 dark:text-slate-300 font-inter">
          {['Serbian (native)', 'English (fluent)', 'Russian (B1)'].map((tool) => (
            <li key={tool} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</motion.div>
      </section>

     {/* Projects  */}
<section id="projects" className="py-24 px-6 bg-transparent dark:bg-transparent backdrop-blur-sm">
  <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg font-inter">Projects</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {projects.map((project, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className=" font-inter bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:shadow-lg transition-all"
      >
        <div className="h-48 bg-gray-800/50 relative overflow-hidden">
          <img 
            src={`/assets/${project.image}`} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white font-inter">{project.title}</h3>
          <p className="text-gray-300 mb-4 font-inter">{project.description}</p>
          <a 
            href={project.link} 
            className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
          >
            View project <span className="ml-1">→</span>
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Contact */}
     <motion.section
  id="contact"
  className="py-24 px-6 text-center bg-transparent backdrop-blur-sm"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="font-inter text-4xl font-bold mb-6 text-white drop-shadow-lg">{t("contact.title")}</h2>
  
  <form
    action="https://formspree.io/f/your_form_id"
    method="POST"
    className="max-w-xl mx-auto space-y-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg"
  >
    <input
      type="text"
      name="name"
      required
      placeholder={t("contact.name")}
      className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    />
    <input
      type="email"
      name="email"
      required
      placeholder={t("contact.email")}
      className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    />
    <textarea
      name="message"
      required
      rows="5"
      placeholder={t("contact.message")}
      className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    ></textarea>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition shadow-md"
    >
      {t("contact.button")}
    </motion.button>
  </form>
</motion.section>


      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} rajkela20. All rights reserved. 
      </footer>
    </div>
    </div>
  );
}
