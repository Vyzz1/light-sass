"use client";
import CheckIcon from "@/assets/check.svg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/border-beam";
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading-width">
          <h2 className="section-title">Pricing here</h2>
          <p className="section-description mt-5">
            Free tier is available for small teams. Pro and Business tiers are
            available for larger teams.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end">
          {pricingTiers.map(
            ({
              title,
              features,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
            }) => (
              <div
                className={cn(
                  "card",
                  inverse &&
                    "border-black bg-black text-white/60 max-w-sm w-full"
                )}
                key={title}
              >
                <div className="flex justify-between">
                  <h3
                    className={cn(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/50"
                    )}
                  >
                    {title}
                  </h3>

                  {popular && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex text-sm px-4 py-1.5 rounded-xl relative"
                    >
                      {/* <AnimatedBorder /> */}
                      <BorderBeam size={50} duration={6} />
                      <motion.span
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-yellow-200/10"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.span
                        className="relative bg-gradient-to-r from-white to-yellow-200 px-2 py-1.5 rounded-xl text-transparent bg-clip-text font-medium"
                        animate={{
                          backgroundPosition: ["0%", "100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      >
                        Popular
                      </motion.span>
                    </motion.div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-black tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50 ">
                    /month
                  </span>
                </div>
                <button
                  className={cn(
                    "btn btn-primary w-full mt-[30px]",
                    inverse && "bg-white text-black/50"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-4 text-sm"
                    >
                      <CheckIcon className="size-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
