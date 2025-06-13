"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Lens } from "../magicui/lens";
import { BorderBeam } from "../magicui/border-beam";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import Image from "next/image";

const projects = [
  {
    title: "EduPath",
    description:
      "A hybrid machine learning model for guiding senior high school graduates in higher education. My thesis project that combines multiple ML algorithms to provide personalized educational pathways.",
    tech: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Flask",
      "Firebase",
      "Next.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/overgleam/edupath",
    live: "https://josephalforque23.web.app",
    image: "/edupath.png",
    featured: false,
    category: "Machine Learning",
  },
  {
    title: "Community Portal",
    description:
      "A comprehensive homeowners subdivision management system featuring resident management, billing, announcements, and community engagement tools.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/overgleam/communityportal",
    // live: "https://josephalforque.vercel.app",
    image: "/communityportal.jpg",
    featured: false,
    category: "Full-Stack Development",
  },
  {
    title: "Eskina",
    description:
      "An AI-powered system that recognizes and processes jeepney route codes using computer vision for public transportation management.",
    tech: ["React Native", "Tailwind CSS", "Pytorch", "Python", "YOLO"],
    github: "https://github.com/overgleam/jeepney-recognition",
    // live: "https://alforque.vercel.app",
    image: "/jeepney.jpg",
    featured: false,
    category: "Computer Vision",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div variants={itemVariants} className="relative">
      <Card className="relative h-full overflow-hidden bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500">
        <BorderBeam
          size={250}
          duration={12}
          delay={3}
          colorFrom="#a855f7"
          colorTo="#3b82f6"
        />
        <CardHeader>
          <Lens zoomFactor={1.5} lensSize={120}>
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover transition-all duration-500 group-hover:scale-105"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <Badge
                variant="outline"
                className="bg-background/80 backdrop-blur-sm text-foreground"
              >
                {project.category}
              </Badge>
            </div>
          </Lens>
        </CardHeader>

        {/* Project Content */}
        <div className="p-6 pt-0">
          <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>
          <CardContent className="p-0">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {project.tech.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-muted/50 hover:bg-muted/80 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InteractiveHoverButton className="rounded-lg text-sm">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    Code
                  </div>
                </InteractiveHoverButton>
              </Link>

              {project.live && (
                <Button
                  size="sm"
                  className="flex-1 gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                  asChild
                >
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 px-4 relative overflow-hidden font-mono"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2 className="text-4xl md:text-6xl font-bold mb-4">
              Projects
            </motion.h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
