"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LearningJourney() {
  const timelineData = [
    {
      period: "Month 1–2",
      title: "Foundation & Tools",
      icon: "💻",
      details: [
        "Learned Python basics: variables, loops, functions, and file handling",
        "Explored NumPy for numerical operations and pandas for data handling",
        "Practiced data manipulation using Jupyter Notebooks",
        "Set up GitHub for project version control"
      ]
    },
    {
      period: "Month 3",
      title: "Statistics & Excel",
      icon: "📊",
      details: [
        "Understood mean, median, mode, standard deviation, correlation",
        "Explored descriptive statistics and data summaries",
        "Practiced data cleaning and visualization using Microsoft Excel"
      ]
    },
    {
      period: "Month 4",
      title: "Exploratory Data Analysis (EDA)",
      icon: "🔍",
      details: [
        "Performed EDA on real datasets (CSV files)",
        "Used Seaborn and Matplotlib for plotting",
        "Handled missing values, outliers, and understood data distributions",
        "Created histograms, boxplots, scatter plots, and pair plots"
      ]
    },
    {
      period: "Month 5",
      title: "Real-World Projects",
      icon: "🚀",
      details: [
        "Built EDA projects like:",
        "Indian Education Indicators",
        "Mumbai Real Estate Price Analysis",
        "Applied IQR method for outlier removal",
        "Wrote clean, modular code and documented it for clarity"
      ]
    },
    {
      period: "Month 6",
      title: "Regression & ML Basics",
      icon: "🤖",
      details: [
        "Learned Linear Regression from scratch",
        "Applied Scikit-learn for model building",
        "Split data using train-test split, used MAE and RMSE for evaluation",
        "Understood underfitting vs. overfitting"
      ]
    },
    {
      period: "Month 7",
      title: "Capstone + Creativity",
      icon: "🎵",
      details: [
        "Built Mood-Based Music Recommender using emotion detection (text, voice, image)",
        "Combined NLP + Computer Vision + ML",
        "Integrated project ideas with real-time platforms (like Spotify)"
      ]
    },
    {
      period: "Month 8",
      title: "Presentation & Deployment",
      icon: "📱",
      details: [
        "Organized project notebooks and GitHub repos",
        "Designed visual reports and dashboards",
        "Practiced writing project documentation and portfolio-ready summaries"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0A0A0F] to-black text-white py-20 px-4">
      {/* Back button */}
      <div className="max-w-6xl mx-auto mb-12">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#CFAEFF]/20 text-[#CFAEFF] hover:bg-[#CFAEFF]/30 transition-colors"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </motion.button>
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          My Learning Journey
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block bg-[#CFAEFF] text-black font-bold px-6 py-2 rounded-xl text-xl"
        >
          8 MONTHS OF GROWTH
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#CFAEFF]/50 to-transparent" />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#18181C]/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-[#CFAEFF]/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-[#CFAEFF] font-semibold text-sm tracking-wider">
                        {item.period}
                      </h3>
                      <h2 className="text-xl font-bold">{item.title}</h2>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/80">
                        <span className="text-[#CFAEFF] mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#CFAEFF] shadow-lg shadow-[#CFAEFF]/30" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white/60"
        >
          <p className="mb-4">Ready to start your own journey?</p>
          <Link href="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-[#CFAEFF] text-black font-semibold hover:bg-white transition-colors"
            >
              Let's Connect
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 