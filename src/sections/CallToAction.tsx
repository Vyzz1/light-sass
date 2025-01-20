"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const starX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const springX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-hidden relative"
    >
      <div className="container">
        <div className="section-heading-width relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of reading and support our mission to offer free
            books to children across the world.
          </p>
          <motion.div
            style={{ x: starX }}
            className="absolute -left-[350px] -top-[137px]"
          >
            <Image
              src={starImage || "/placeholder.svg"}
              alt="star"
              width={360}
              height={360}
            />
          </motion.div>
          <motion.div
            style={{ x: springX }}
            className="absolute -right-[331px] -top-[19px]"
          >
            <Image
              src={springImage || "/placeholder.svg"}
              alt="spring"
              width={360}
              height={360}
            />
          </motion.div>
        </div>
        <div className="flex items-center gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn gap-1 btn-text">
            <span>Learn more</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
