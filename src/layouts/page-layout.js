import React, { Fragment, useEffect, useState } from "react";

import Header from "./Header/header";
import Sidebar from "./sidebar";
import { Transition } from "@headlessui/react";

export default function PageLayout({ children }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (innerWidth <= 1024) {
      setShowNavbar(false);
      setIsMobile(true);
    } else {
      setShowNavbar(true);
      setIsMobile(false);
    }
  };

  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    addEventListener("resize", handleResize);
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header showNav={showNavbar} setShowNav={setShowNavbar} />
      <Transition
        as={Fragment}
        show={showNavbar}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transfrom duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Sidebar showNav={showNavbar} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNavbar && !isMobile ? "ml-56" : ""
        }`}
      >
        <div className="max-w-[1280px]  w-full   mx-auto my-8 min-h-screen">
          <div className="md:px-8 px-4">{children}</div>
        </div>
      </main>
    </>
  );
}
