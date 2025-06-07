"use client";

import { MailIcon, ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { RainbowButton } from "../magicui/rainbow-button";
import { SparklesText } from "../magicui/sparkles-text";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Image
            src="/Slices_19.gif"
            alt="Joseph Alforque"
            width={128}
            height={128}
            className="flex items-center justify-center mx-auto mb-6 rounded-full"
          />
        </motion.div>

        <motion.h1 variants={itemVariants}>
          <SparklesText className="text-5xl md:text-7xl font-bold mb-6">
            Joseph Alforque
          </SparklesText>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Full-Stack Software Engineer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Passionate about creating innovative web applications with modern
          technologies. I build scalable, user-friendly solutions that make a
          difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <RainbowButton size="lg" className="gap-2">
            <MailIcon className="w-4 h-4" />
            Get In Touch
          </RainbowButton>
          <RainbowButton size="lg" className="gap-2" variant="outline">
            <ExternalLinkIcon className="w-4 h-4" />
            View Resume
          </RainbowButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
