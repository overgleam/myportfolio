"use client";

import {
  HomeIcon,
  FileIcon,
  BrainIcon,
  FileTextIcon,
  CodeXmlIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import ModeToggle from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  code: (props: IconProps) => <CodeXmlIcon {...props} />,
  brain: (props: IconProps) => <BrainIcon {...props} />,
  file: (props: IconProps) => <FileIcon {...props} />,
  mail: (props: IconProps) => <MailIcon {...props} />,
  user: (props: IconProps) => <UserIcon {...props} />,
};

const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#about", icon: Icons.user, label: "About" },
  ],
  contact: {
    social: {
      Skills: {
        name: "Skills",
        url: "#skills",
        icon: Icons.brain,
      },
      Projects: {
        name: "Projects",
        url: "#projects",
        icon: Icons.code,
      },
      Contact: {
        name: "Contact",
        url: "#contact",
        icon: Icons.mail,
      },
    },
  },
};

export function DockDemo() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latestValue: number) => {
    if (latestValue < lastScrollY) {
      setIsVisible(true);
    } else if (latestValue > lastScrollY + 15) {
      setIsVisible(false);
    }
    setLastScrollY(latestValue);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 0, pointerEvents: "none" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 30,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn("fixed left-1/2 transform -translate-x-1/2 z-50")}
    >
      <TooltipProvider>
        <Dock
          direction="middle"
          className="bg-background/80 backdrop-blur-md border border-border/50"
        >
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-primary/10"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full hover:bg-primary/10"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </motion.div>
  );
}
