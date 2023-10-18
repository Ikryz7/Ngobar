import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-32 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold 
        border border-solid border-transparent dark:border-light
            "
        whileHover={{
          backgroundColor: [
            "#12121",
            "#352F44",
            "#5C5470",
            "#4F4557",
            "#12121",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Ikryzz.
      </MotionLink>
    </div>
  );
};

export default Logo;
