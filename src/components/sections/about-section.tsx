"use client";

import { SparklesIcon, GraduationCapIcon, BriefcaseIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Pointer } from "@/components/magicui/pointer";
import { TypingAnimation } from "../magicui/typing-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 font-mono">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Introduction Section */}
            <motion.div
              className="relative"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              variants={itemVariants}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-25" />
              <div className="relative bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-border/50 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Hi There!</h3>
                </div>

                <div className="space-y-6">
                  <TypingAnimation
                    duration={15}
                    className="text-md font-light text-muted-foreground text-justify leading-relaxed"
                  >
                    I'm Joseph Alforque. I recently graduated with a degree in
                    Computer Science from the University of Cebu, with a strong
                    passion for web development and AI projects. I'm currently
                    exploring AI, machine learning, and software development,
                    and seeking opportunities to grow as a software engineer.
                  </TypingAnimation>

                  <TypingAnimation
                    duration={10}
                    delay={4300}
                    className="text-md font-light text-muted-foreground text-justify leading-relaxed"
                  >
                    If you're looking for a passionate and motivated team member
                    who's eager to learn and contribute, I'd love to connect and
                    discuss how I can add value to your team!
                  </TypingAnimation>
                </div>
              </div>
              <Pointer>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" className="fill-purple-500" />
                  <circle cx="12" cy="12" r="5" className="fill-white" />
                </svg>
              </Pointer>
            </motion.div>

            {/* Education & Experience Section */}
            <div className="space-y-8">
              {/* Education Section */}
              <motion.div
                className="relative"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                variants={cardVariants}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg blur opacity-25" />
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                      <GraduationCapIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-lg border border-border/20 flex-shrink-0">
                        <Image
                          src="/UC.jpg"
                          alt="University of Cebu"
                          width={48}
                          height={48}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          University of Cebu — Main
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          SB in Computer Science | 2020 - 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Pointer>
                  <motion.div
                    animate={{
                      scale: [0.8, 1, 0.8],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-pink-600"
                    >
                      <motion.path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="currentColor"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </svg>
                  </motion.div>
                </Pointer>
              </motion.div>

              {/* Experience Section */}
              <motion.div
                className="relative"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                variants={cardVariants}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-25" />
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <BriefcaseIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Experience</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-lg border border-border/20 flex-shrink-0">
                        <Image
                          src="/MYT LOGO.png"
                          alt="MYT Softdev Solutions"
                          width={48}
                          height={48}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          MYT Softdev Solutions Inc.
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Software Developer | Aug 2024 - Oct 2024
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-lg border border-border/20 flex-shrink-0">
                        <Image
                          src="/Innosoft.png"
                          alt="Innosoft Solutions"
                          width={48}
                          height={48}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          Innosoft Solutions Inc.
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Computer Servicing | Nov 2019 - Dec 2019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Pointer className="fill-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
