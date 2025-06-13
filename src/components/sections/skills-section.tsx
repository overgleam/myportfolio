"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CodeIcon,
  ServerIcon,
  SmartphoneIcon,
  CloudIcon,
  ComponentIcon,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// Devicon imports
import ReactOriginalIcon from "react-devicons/react/original";
import NextjsOriginalIcon from "react-devicons/nextjs/original";
import TypescriptOriginalIcon from "react-devicons/typescript/original";
import TailwindcssOriginalIcon from "react-devicons/tailwindcss/original";
import JavascriptOriginalIcon from "react-devicons/javascript/original";
import Html5OriginalIcon from "react-devicons/html5/original";
import Css3OriginalIcon from "react-devicons/css3/original";
import PythonOriginalIcon from "react-devicons/python/original";
import JavaOriginalIcon from "react-devicons/java/original";
import CsharpOriginalIcon from "react-devicons/csharp/original";
import DotnetcoreOriginalIcon from "react-devicons/dotnetcore/original";
import MongodbOriginalIcon from "react-devicons/mongodb/original";
import MysqlOriginalIcon from "react-devicons/mysql/original";
import FirebaseOriginalIcon from "react-devicons/firebase/original";
import GitOriginalIcon from "react-devicons/git/original";
import FigmaOriginalIcon from "react-devicons/figma/original";
import ArduinoOriginalIcon from "react-devicons/arduino/original";
import CplusplusOriginalIcon from "react-devicons/cplusplus/original";
import ScikitLearnOriginalIcon from "react-devicons/scikitlearn/original";

import { ShineBorder } from "../magicui/shine-border";
import { Marquee } from "../magicui/marquee";

// Technology icon mapping using Devicon
const techIcons = {
  // Frontend
  React: () => <ReactOriginalIcon size="32" />,
  "Next.js": () => <NextjsOriginalIcon size="32" />,
  "Tailwind CSS": () => <TailwindcssOriginalIcon size="32" />,
  Shadcn: () => <ComponentIcon size="32" />,

  // Backend
  "REST API": () => <CloudIcon size="32" />,
  "ASP.NET": () => <DotnetcoreOriginalIcon size="32" />,
  ScikitLearn: () => <ScikitLearnOriginalIcon size="32" />,

  // Database
  MongoDB: () => <MongodbOriginalIcon size="32" />,
  MySQL: () => <MysqlOriginalIcon size="32" />,
  Firebase: () => <FirebaseOriginalIcon size="32" />,

  // Mobile Development
  "React Native": () => <ReactOriginalIcon size="32" />,

  // AI & Machine Learning
  "Machine Learning": () => <ScikitLearnOriginalIcon size="32" />,

  // IoT & Embedded
  Arduino: () => <ArduinoOriginalIcon size="32" />,

  // Tools & Platforms
  Git: () => <GitOriginalIcon size="32" />,
  Figma: () => <FigmaOriginalIcon size="32" />,
};

const skills = {
  "Frontend Development": {
    icon: CodeIcon,
    color: "from-blue-400 to-blue-600",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn" },
    ],
  },
  "Backend & Database": {
    icon: ServerIcon,
    color: "from-green-400 to-green-600",
    skills: [
      { name: "REST API" },
      { name: "ASP.NET" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
    ],
  },
  "Mobile & Advanced Tech": {
    icon: SmartphoneIcon,
    color: "from-purple-400 to-purple-600",
    skills: [
      { name: "Machine Learning" },
      { name: "React Native" },
      { name: "Arduino" },
      { name: "Git" },
      { name: "Figma" },
    ],
  },
};

// Programming languages for the marquee
const programmingLanguages = [
  { name: "JavaScript", icon: JavascriptOriginalIcon },
  { name: "TypeScript", icon: TypescriptOriginalIcon },
  { name: "Python", icon: PythonOriginalIcon },
  { name: "Java", icon: JavaOriginalIcon },
  { name: "C#", icon: CsharpOriginalIcon },
  { name: "C++", icon: CplusplusOriginalIcon },
  { name: "HTML5", icon: Html5OriginalIcon },
  { name: "CSS", icon: Css3OriginalIcon },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 60, opacity: 0, scale: 0.9 },
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

const SkillItem = ({
  skill,
  index,
}: {
  skill: { name: string };
  index: number;
}) => {
  const TechIcon = techIcons[skill.name as keyof typeof techIcons];

  return (
    <motion.div
      className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300 group hover:scale-105 border border-transparent hover:border-primary/20"
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
    >
      <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        {TechIcon ? (
          <TechIcon />
        ) : (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-sm font-bold">
            {skill.name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <span className="font-medium text-foreground">{skill.name}</span>
    </motion.div>
  );
};

const LanguageMarqueeItem = ({
  language,
}: {
  language: { name: string; icon: React.ComponentType<{ size?: string }> };
}) => {
  const IconComponent = language.icon;
  return (
    <div className="flex items-center gap-3 px-6 py-3 mx-2 rounded-lg  backdrop-blur-sm  shadow-sm hover:shadow-md">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <IconComponent size="32" />
      <span className="font-medium text-foreground whitespace-nowrap">
        {language.name}
      </span>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 font-mono">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={cardVariants}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(skills).map(([category, categoryData]) => {
              const IconComponent = categoryData.icon;
              return (
                <motion.div key={category} variants={cardVariants}>
                  <div className="relative h-full group">
                    <Card className="relative h-full bg-card/40 backdrop-blur-sm">
                      <ShineBorder
                        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        className="rounded-lg"
                      />
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-3 relative">
                          <div
                            className={`w-14 h-14 rounded-full bg-gradient-to-br ${categoryData.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                          >
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <div
                            className={`absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br ${categoryData.color} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`}
                          />
                        </div>
                        <CardTitle className="text-lg font-bold text-foreground leading-tight">
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {categoryData.skills.map((skill, index) => (
                          <SkillItem
                            key={skill.name}
                            skill={skill}
                            index={index}
                          />
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Programming Languages Marquee */}
          <motion.div className="relative" variants={cardVariants}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Languages I work with
              </h3>
            </div>
            <div className="relative">
              <Marquee>
                {programmingLanguages.map((language, index) => (
                  <LanguageMarqueeItem key={index} language={language} />
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background dark:from-background"></div>
            </div>
          </motion.div>

          {/* Enhanced Decorative Elements */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute top-60 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
            <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-green-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-pink-500/5 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
