"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
export const LogoTicker = () => {
  const logos = [
    acmeLogo,
    quantumLogo,
    echoLogo,
    celestialLogo,
    pulseLogo,
    apexLogo,
  ];

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <React.Fragment key={idx}>
                  {logos.map((logo, idx) => (
                    <Image
                      className="logo-ticker-image"
                      alt={"Logo"}
                      src={logo}
                      key={idx}
                    />
                  ))}
                </React.Fragment>
              )),
            ]}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
