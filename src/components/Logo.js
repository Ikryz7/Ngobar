import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link href="/">
        <Image src="/icon.png" alt="Ikryzz Logo" width={64} height={64} />
      </Link>
    </div>
  );
};

export default Logo;
