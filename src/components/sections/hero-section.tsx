"use client";

import { MailIcon, ExternalLinkIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { RainbowButton } from "../magicui/rainbow-button";
import { SparklesText } from "../magicui/sparkles-text";
import Image from "next/image";
import Link from "next/link";
import { ShineBorder } from "../magicui/shine-border";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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
      className="min-h-screen flex items-center justify-center px-4 font-mono"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          className="flex justify-center md:order-last"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="rounded-full p-1"
            animate={{
              background: [
                "linear-gradient(45deg, #FF0080, #7928CA, #0070F3)",
                "linear-gradient(90deg, #0070F3, #FF0080, #7928CA)",
                "linear-gradient(135deg, #7928CA, #0070F3, #FF0080)",
                "linear-gradient(180deg, #FF0080, #7928CA, #0070F3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/Slices_19.gif"
              alt="Joseph Alforque"
              width={256}
              height={256}
              className="rounded-full shadow-2xl w-auto h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>
            <SparklesText className="text-5xl md:text-7xl font-bold mb-4">
              Joseph Alforque
            </SparklesText>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Software Engineer & AI Enthusiast
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto md:mx-0"
          >
            I build dynamic and responsive web applications, with a keen
            interest in artificial intelligence and user-centric design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <RainbowButton size="lg" className="gap-2" asChild>
              <Link href="#contact">
                <MailIcon className="w-4 h-4" />
                Get In Touch
              </Link>
            </RainbowButton>
            <RainbowButton
              size="lg"
              className="gap-2"
              variant="outline"
              asChild
            >
              <Link
                href="/resume.pdf"
                download="Joseph_Alforque_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                View Resume
              </Link>
            </RainbowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
