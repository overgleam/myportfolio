"use client";

import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { motion } from "framer-motion";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Particles } from "@/components/magicui/particles";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-background">
      <Particles className="absolute inset-0 z-0" />
      <motion.div
        className="text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SparklesText className="text-6xl font-bold mb-4">404</SparklesText>
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <RainbowButton>
          <Link href="/">Go Home</Link>
        </RainbowButton>
      </motion.div>
    </section>
  );
}
