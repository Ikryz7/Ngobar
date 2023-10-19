import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink href="/">
        <Image
          src="/icon.png" // Adjust this to the relative path of your logo image
          alt="Logo"
          width={64} // Set the width according to your design
          height={64} // Set the height according to your design
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
