"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { AuroraText } from "../magicui/aurora-text";
import { MagicCard } from "../magicui/magic-card";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import {
  Drawer,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useState } from "react";
import { toast } from "sonner";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! 🎉", {
          description: "I'll get back to you within 24 hours.",
          duration: 5000,
        });
        setFormData({ name: "", email: "", message: "" });
        setIsDrawerOpen(false); // Close the drawer
      } else {
        const errorData = await response.json();
        toast.error("Failed to send message", {
          description: errorData.error || "Please try again later.",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong", {
        description: "Please check your connection and try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 font-mono">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Ready to Build Something
              <br />
              <AuroraText className="mt-4">Amazing Together?</AuroraText>
            </h2>

            <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always excited about new opportunities and innovative
              projects. Let's discuss how we can turn your vision into reality.
            </p>
          </motion.div>
          {/* CTA Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            variants={itemVariants}
          >
            {/* Primary CTA */}
            <motion.div variants={cardVariants}>
              <Card className="p-0 shadow-none border-none">
                <MagicCard className="py-6" gradientOpacity={0.2}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <MailIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Email Me</h3>
                        <p className="text-muted-foreground text-sm">
                          Get in touch directly
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Drop me a line and I'll get back to you within 24 hours.
                    </p>
                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                      <DrawerTrigger asChild>
                        <InteractiveHoverButton className="w-full">
                          Send Message
                        </InteractiveHoverButton>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Send me a message</DrawerTitle>
                          <DrawerDescription>
                            I'll get back to you within 24 hours.
                          </DrawerDescription>
                        </DrawerHeader>
                        <form
                          onSubmit={handleSubmit}
                          className="md:flex items-center justify-center"
                        >
                          <div className="p-4 space-y-4 md:w-xl ">
                            <div className="space-y-2">
                              <Label
                                htmlFor="name"
                                className="text-sm font-medium"
                              >
                                Name
                              </Label>
                              <Input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-border rounded-md bg-background"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="email"
                                className="text-sm font-medium"
                              >
                                Email
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-border rounded-md bg-background"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="message"
                                className="text-sm font-medium"
                              >
                                Message
                              </Label>
                              <Textarea
                                id="message"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                className="max-h-[120px] sm:max-h-[150px] resize-none"
                                rows={5}
                              />
                            </div>

                            <DrawerFooter>
                              <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                              </Button>
                              <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DrawerClose>
                            </DrawerFooter>
                          </div>
                        </form>
                      </DrawerContent>
                    </Drawer>
                  </CardContent>
                </MagicCard>
              </Card>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div variants={cardVariants}>
              <Card className="p-0 shadow-none border-none">
                <MagicCard className="py-6" gradientOpacity={0.2}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <LinkedinIcon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          Connect on LinkedIn
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Let's network professionally
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Connect with me for opportunities and professional
                      networking.
                    </p>
                    <Link
                      href="https://www.linkedin.com/in/joseph-alforque-7b0a72323"
                      target="_blank"
                    >
                      <InteractiveHoverButton className="w-full">
                        Connect
                      </InteractiveHoverButton>
                    </Link>
                  </CardContent>
                </MagicCard>
              </Card>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center items-center gap-6"
            variants={itemVariants}
          >
            <div className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground">
              <span>Or find me on</span>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild className="group">
                <Link
                  href="https://github.com/overgleam"
                  className="flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>GitHub</span>
                </Link>
              </Button>

              <Button variant="ghost" size="sm" asChild className="group">
                <Link
                  href="https://www.facebook.com/darkwanted08"
                  className="flex items-center gap-2"
                >
                  <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>Facebook</span>
                </Link>
              </Button>

              <Button variant="ghost" size="sm" asChild className="group">
                <Link
                  href="https://www.instagram.com/darkwanted08"
                  className="flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>Instagram</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
