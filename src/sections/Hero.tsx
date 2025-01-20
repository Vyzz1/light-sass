"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cyclinderImage from "@/assets/cylinder.png";
import noddeImage from "@/assets/noodle.png";
import { BorderBeam } from "@/components/border-beam";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]  overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag relative">
              Version 2.0 is here
              <BorderBeam
                size={50}
                colorFrom="#122c5f"
                colorTo="#ffffa4"
                borderWidth={3}
                duration={7}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-gradient-to-b from-black to-[#001E80] bg-clip-text mt-6">
              Path way to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and help you stay focused on your goals.
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>

                <ArrowIcon className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 relative md:mt-0 md:h-[750px] md:flex-1 ">
            <motion.img
              src={cogImage.src}
              alt="cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2.5,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src={cyclinderImage.src}
              width={220}
              height={220}
              style={{ translateY: translateY }}
              className="hidden md:block -top-8  -left-32 md:absolute"
              alt="cylinder"
            />

            <motion.img
              src={noddeImage.src}
              width={220}
              style={{ translateY: translateY, rotate: 30 }}
              className="hidden lg:block top-[524px] left-[448px] lg:absolute  rotate-[30deg]"
              alt="noodle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
