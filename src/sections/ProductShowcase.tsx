"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShineBorder } from "@/components/shine-border";
import { BorderBeam } from "@/components/border-beam";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading-width">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className="section-title">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effort turn your ideas leads to a more effective way to track
            progress, manage team and reach your goals.
          </p>
        </div>
        <div className="relative ">
          <ShineBorder
            color={["#38bdf8", "yellow", "pink"]}
            className="p-2 mt-10"
          >
            <Image
              src={productImage}
              alt="Product Image"
              className="rounded-[8px]"
            />
          </ShineBorder>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            width={248}
            style={{
              translateY: translateY,
            }}
            className=" absolute bottom-24 -left-36 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
