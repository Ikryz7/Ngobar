import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="fles items-center lg:py-2">
          Build{" "}
          <span className="text-primary dark:text-secondary text-2xl">
            &hearts;
          </span>
          by&nbsp;
          <Link
            href="https://github.com/Ikryz7"
            className="underline underline-offset-2"
          >
            Ikryzz
          </Link>
        </div>
        {/* <Link
          href="https://www.linkedin.com/in/nurochmanrizky/"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
