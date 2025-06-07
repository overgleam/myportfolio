"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  CloudIcon,
  UserIcon,
  SparklesIcon,
} from "lucide-react";
import { motion } from "framer-motion";

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
  const highlights = [
    {
      icon: CodeIcon,
      title: "Web Development",
      description: "React, Next.js, TypeScript",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: ServerIcon,
      title: "Backend Systems",
      description: "Python, Java, C#, APIs",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: DatabaseIcon,
      title: "Data Management",
      description: "MongoDB, MySQL, Firebase",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/10 to-violet-500/10",
    },
    {
      icon: CloudIcon,
      title: "Development Tools",
      description: "Git, Vercel, Figma",
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-500/10 to-pink-500/10",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Git",
    "Figma",
    "Vercel",
  ];

  return (
    <section id="about" className="py-32 px-4 ">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            className="grid lg:grid-cols-2 gap-16 items-start mb-20"
          >
            {/* Left Column - Story */}
            <div className="space-y-8">
              <motion.div
                className="relative"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-25" />
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <SparklesIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Hi There!</h3>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    I'm Joseph Alforque, I recently graduated Computer Science
                    in University of Cebu. I'm passionate about web development
                    and AI projects. I'm currently exploring AI, ML, and
                    software development, and looking for opportunities to grow
                    as a software engineer.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm currently seeking opportunities to start my career as a
                    software engineer or developer. If you're looking for a
                    passionate and motivated team member who's eager to learn
                    and contribute, I'd love to connect and discuss how I can
                    add value to your team!
                  </p>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold mb-4">
                  Technologies I work with
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-2 px-4 bg-muted/50 hover:bg-muted/80 transition-all duration-300 border border-border/50 hover:border-primary/30"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className={`h-full bg-gradient-to-br ${item.bgGradient} border-border/30 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <CardContent className="p-8 text-center relative z-10">
                        <div className="relative mb-6">
                          <div
                            className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div
                            className={`absolute inset-0 w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${item.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`}
                          />
                        </div>

                        <h3 className="font-bold text-lg mb-3 text-foreground">
                          {item.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
