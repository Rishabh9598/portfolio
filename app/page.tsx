"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

type SkillKey = 'Python' | 'Data Analysis' | 'Machine Learning' | 'Visualization' | 'Problem Solving';

interface SkillDetail {
  description: string;
  keyPoints: string[];
}

interface SkillDetails {
  [key: string]: SkillDetail;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillKey | null>(null);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Optimize star generation
  const [stars, setStars] = useState<{
    top: string;
    left: string;
    width: string;
    height: string;
    opacity: number;
  }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 20 }).map(() => ({
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setStars(generatedStars);
  }, []);

  const skillDetails: SkillDetails = {
    'Python': {
      description: 'Proficient in Python programming with focus on data science applications. Skilled in using libraries like NumPy, Pandas, and Scikit-learn for data analysis and machine learning.',
      keyPoints: [
        'Data manipulation and analysis with Pandas',
        'Numerical computing with NumPy',
        'Machine learning implementation with Scikit-learn',
        'Data visualization with Matplotlib and Seaborn'
      ]
    },
    'Data Analysis': {
      description: 'Expertise in analyzing complex datasets to extract meaningful insights. Experienced in statistical analysis, data cleaning, and visualization.',
      keyPoints: [
        'Exploratory Data Analysis (EDA)',
        'Statistical analysis and hypothesis testing',
        'Data cleaning and preprocessing',
        'Data visualization and reporting'
      ]
    },
    'Machine Learning': {
      description: 'Strong foundation in machine learning algorithms and their practical applications. Experience in building and deploying predictive models.',
      keyPoints: [
        'Supervised learning (Regression, Classification)',
        'Model evaluation and validation',
        'Feature engineering and selection',
        'Model deployment and optimization'
      ]
    },
    'Visualization': {
      description: 'Skilled in creating compelling data visualizations to communicate insights effectively. Experience with various visualization tools and techniques.',
      keyPoints: [
        'Interactive dashboards',
        'Statistical visualizations',
        'Data storytelling',
        'Custom visualization design'
      ]
    },
    'Problem Solving': {
      description: 'Strong analytical and problem-solving skills, with experience in breaking down complex problems into manageable solutions.',
      keyPoints: [
        'Algorithmic thinking',
        'Critical analysis',
        'Solution optimization',
        'Creative problem-solving approaches'
      ]
    }
  };

  // Add form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_beyui8c',
        'template_9vi5igr',
        formRef.current!,
        'qJE1knjg87jA946yE'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#0A0A0F] to-black overflow-hidden px-4 py-16" id="home">
      {/* Optimized floating shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute top-10 left-1/4 w-72 h-72 bg-[#CFAEFF]/20 blur-3xl rounded-full"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
        
        {/* Optimized star field */}
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/20 rounded-full"
              style={{
                ...star,
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [star.opacity, star.opacity * 1.2, star.opacity],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Optimized Hero Section */}
      <motion.section 
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
        style={{ opacity, scale }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          My journey in data science is inspired by{' '}
          <span className="text-[#CFAEFF] inline-block hover:scale-105 transition-transform duration-300">space</span>,{' '}
          <span className="text-[#CFAEFF] inline-block hover:scale-105 transition-transform duration-300">pattern</span>,{' '}
          <span className="text-[#CFAEFF] inline-block hover:scale-105 transition-transform duration-300">sound</span>, and{' '}
          <span className="text-[#CFAEFF] inline-block hover:scale-105 transition-transform duration-300">insight</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/80 font-light max-w-xl backdrop-blur-sm bg-white/5 p-6 rounded-2xl"
        >
          Welcome to my portfolio — a space where data, creativity, and technology blend to reveal new perspectives.
        </motion.p>
      </motion.section>

      {/* Enhanced Learning Journey section with glassmorphism */}
      <section className="relative z-10 w-full flex justify-center py-20 px-2 bg-gradient-to-b from-black to-white/90">
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden transform-gpu hover:scale-[1.02] transition-transform duration-500">
          {/* Left side: Title and subtitle with enhanced 3D effect */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start justify-center bg-[#F7F7FA]/90 backdrop-blur-md px-8 py-10 border-b md:border-b-0 md:border-r border-black/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 font-sans transform-gpu hover:scale-105 transition-transform duration-300">Learning Journey</h2>
            <Link href="/learning-journey">
              <motion.div 
                className="bg-[#CFAEFF] text-black font-semibold rounded-xl px-5 py-2 text-lg shadow-lg tracking-widest transform-gpu hover:scale-105 transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                8 MONTHS
              </motion.div>
            </Link>
          </div>
          {/* Right side: 3-column process with enhanced cards */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-10 bg-white/90 backdrop-blur-md">
            {/* RESEARCH */}
            <div className="transform-gpu hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold text-black mb-2 tracking-wide">RESEARCH</h3>
              <p className="text-black/80 text-base leading-relaxed">
                Explored Python, Statistics, and Data Analysis using pandas and NumPy. Studied real-world datasets and domain problems.
              </p>
            </div>
            {/* PROJECTS */}
            <div className="transform-gpu hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold text-black mb-2 tracking-wide">PROJECTS</h3>
              <p className="text-black/80 text-base leading-relaxed">
                Built projects like Education EDA, Real Estate Price Prediction, and a Mood-Based Music Recommender using AI.
              </p>
            </div>
            {/* TOOLS & TECH */}
            <div className="transform-gpu hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-bold text-black mb-2 tracking-wide">TOOLS & TECH</h3>
              <p className="text-black/80 text-base leading-relaxed">
                Practiced with Jupyter, Python, GitHub, Excel, Seaborn, Linear Regression, and EDA techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optimized Project Cards */}
      <section className="relative z-10 w-full flex justify-center py-20 px-2 bg-black" id="projects">
        <div className="w-full max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards with optimized animations */}
            {[
              {
                title: "Social Media Engagement Dashboard",
                description: "Developed a dashboard to analyze and visualize engagement metrics across multiple social media platforms.",
                image: "https://blog.socialchamp.com/wp-content/uploads/2024/04/Content-Blog-Banner_Q2-2024_1125x600_034_Social-Media-Engagement.png",
                link: "https://github.com/Rishabh9598/Social-Media-Engagement-Dashboard-",
                tags: ["Data Analysis", "Visualization", "Dashboard"]
              },
              {
                title: "Real Estate Price Prediction",
                description: "Built a linear regression model to predict property prices in Mumbai using area and amenities.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
                link: "https://github.com/Rishabh9598/Data-Analysis-Assignment",
                tags: ["Machine Learning", "Python", "Regression"]
              },
              {
                title: "Mood-Based Music Recommender",
                description: "Developed an AI system that suggests music based on facial expression, voice, and text mood inputs.",
                image: "https://static.wixstatic.com/media/nsplsh_298b083d3329480f9aeb3b0263956edd~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_298b083d3329480f9aeb3b0263956edd~mv2.jpg",
                link: "https://ai-mood-music.onrender.com",
                tags: ["AI", "Machine Learning", "Web App"]
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#18181C] rounded-2xl shadow-lg p-6 flex flex-col items-center group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                }}
              >
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center group-hover:text-[#CFAEFF] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-[#CFAEFF]/10 text-[#CFAEFF] border border-[#CFAEFF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#CFAEFF] text-black font-semibold shadow hover:bg-white transition-all duration-300 group-hover:scale-105"
                >
                  View Project
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Me section with glassmorphism */}
      <section className="relative z-10 w-full flex justify-center py-20 px-2 bg-[#18181C]" id="about">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-[#23232A]/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-14 transform-gpu hover:scale-[1.02] transition-transform duration-500">
          {/* Image with enhanced 3D effect */}
          <div className="flex-shrink-0 transform-gpu hover:scale-105 transition-transform duration-300">
            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6">
              <Image
                src="/rishu.jpg"
                alt="Rishabh Shukla"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* About Content with enhanced typography */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans transform-gpu hover:scale-105 transition-transform duration-300">About Rishabh</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 text-center md:text-left backdrop-blur-sm bg-white/5 p-4 rounded-xl">
              I&apos;m a second-year Computer Science student with a Data Science specialization, passionate about solving real-world problems through data. I blend logic with creativity to find meaningful insights in chaos.
            </p>
            <div className="flex flex-wrap gap-3 mb-2 justify-center md:justify-start">
              {(Object.keys(skillDetails) as SkillKey[]).map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => setSelectedSkill(tag)}
                  className="group relative bg-[#CFAEFF]/20 text-[#CFAEFF] px-4 py-2 rounded-xl text-sm font-semibold tracking-wide backdrop-blur-sm border border-[#CFAEFF]/30 transform-gpu cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: '0 0 15px rgba(207, 174, 255, 0.1)',
                  }}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    {tag}
                    <svg 
                      className="w-4 h-4 transition-transform group-hover:rotate-180" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#CFAEFF]/0 via-[#CFAEFF]/10 to-[#CFAEFF]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.button>
              ))}
            </div>

            {/* Skill Details Modal */}
            <AnimatePresence>
              {selectedSkill && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                  onClick={() => setSelectedSkill(null)}
                >
                  <motion.div
                    className="bg-[#23232A] rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-[#CFAEFF]/20"
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-[#CFAEFF]">{selectedSkill}</h3>
                      <button
                        onClick={() => setSelectedSkill(null)}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-white/80 mb-4">{skillDetails[selectedSkill].description}</p>
                    <ul className="space-y-2">
                      {skillDetails[selectedSkill].keyPoints.map((point: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-white/70">
                          <span className="text-[#CFAEFF] mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Resume Download Button */}
            <motion.a
              href="/Resume (1).pdf"
              download
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#CFAEFF] text-black font-semibold shadow-lg hover:bg-white transition-all duration-300 transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 0 30px rgba(207, 174, 255, 0.2)',
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transition-transform group-hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </div>
      </section>

      {/* Enhanced Contact section with glassmorphism */}
      <section className="relative z-10 w-full flex justify-center py-20 px-2 bg-black" id="contact">
        <div className="w-full max-w-3xl flex flex-col items-center bg-[#18181C]/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-14 transform-gpu hover:scale-[1.02] transition-transform duration-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-sans text-center transform-gpu hover:scale-105 transition-transform duration-300">Let&apos;s Connect</h2>
          {/* Contact Buttons with enhanced 3D effects */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <motion.a
              href="tel:9598428803"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#23232A] text-[#CFAEFF] font-semibold shadow hover:bg-[#CFAEFF] hover:text-black transition-all duration-200 transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{
                boxShadow: '0 0 20px rgba(207, 174, 255, 0.1)',
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transition-transform group-hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              9598428803
            </motion.a>
            <motion.a
              href="mailto:rishabhshukla6390@gmail.com"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#23232A] text-[#CFAEFF] font-semibold shadow hover:bg-[#CFAEFF] hover:text-black transition-all duration-200 transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{
                boxShadow: '0 0 20px rgba(207, 174, 255, 0.1)',
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transition-transform group-hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4m0-4V8" /></svg>
              Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rishabh-shukla-435916276/"
          target="_blank"
          rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#23232A] text-[#CFAEFF] font-semibold shadow hover:bg-[#CFAEFF] hover:text-black transition-all duration-200 transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{
                boxShadow: '0 0 20px rgba(207, 174, 255, 0.1)',
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transition-transform group-hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 01-12 0 6 6 0 0112 0zm-6 8v-4m0 0v-4m0 4h4m-4 0H8" /></svg>
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/Rishabh9598"
          target="_blank"
          rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#23232A] text-[#CFAEFF] font-semibold shadow hover:bg-[#CFAEFF] hover:text-black transition-all duration-200 transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{
                boxShadow: '0 0 20px rgba(207, 174, 255, 0.1)',
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="transition-transform group-hover:scale-110"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
              GitHub
            </motion.a>
            <motion.a
              href="https://www.geeksforgeeks.org/user/rishabhshxvnx/"
          target="_blank"
          rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#23232A] text-[#CFAEFF] font-semibold shadow hover:bg-[#CFAEFF] hover:text-black transition-all duration-200 transform-gpu"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{
                boxShadow: '0 0 20px rgba(207, 174, 255, 0.1)',
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transition-transform group-hover:scale-110"><circle cx="12" cy="12" r="10" stroke="#CFAEFF" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M12 8v8" /></svg>
              GFG
            </motion.a>
          </div>
          {/* Contact Form with enhanced 3D effects */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4"
          >
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="px-4 py-2 rounded-lg bg-[#23232A] text-white placeholder:text-[#CFAEFF]/60 focus:outline-none focus:ring-2 focus:ring-[#CFAEFF] transform-gpu"
              whileFocus={{ scale: 1.02 }}
              style={{
                boxShadow: '0 0 20px rgba(207, 174, 255, 0.1)',
              }}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="px-4 py-2 rounded-lg bg-[#23232A] text-white placeholder:text-[#CFAEFF]/60 focus:outline-none focus:ring-2 focus:ring-[#CFAEFF] transform-gpu"
              whileFocus={{ scale: 1.02 }}
              style={{
                boxShadow: '0 0 20px rgba(207, 174, 255, 0.1)',
              }}
            />
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              required
              rows={4}
              className="px-4 py-2 rounded-lg bg-[#23232A] text-white placeholder:text-[#CFAEFF]/60 focus:outline-none focus:ring-2 focus:ring-[#CFAEFF] resize-none transform-gpu"
              whileFocus={{ scale: 1.02 }}
              style={{
                boxShadow: '0 0 20px rgba(207, 174, 255, 0.1)',
              }}
            />
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg text-sm bg-green-500/20 text-green-400"
              >
                Message sent successfully! I will get back to you soon.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg text-sm bg-red-500/20 text-red-400"
              >
                Failed to send message. Please try again later.
              </motion.div>
            )}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 px-6 py-2 rounded-lg bg-[#CFAEFF] text-black font-bold shadow hover:bg-white transition-colors transform-gpu ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              whileHover={!isSubmitting ? { scale: 1.05, rotateY: 5 } : {}}
              style={{
                boxShadow: '0 0 30px rgba(207, 174, 255, 0.2)',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#CFAEFF] text-black shadow-lg hover:bg-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
