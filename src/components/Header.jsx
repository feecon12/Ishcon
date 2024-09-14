import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const location = useLocation();

  return (
    <NavLink to={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
             h-[1px] inline-block bg-dark 
             absolute left-0 -bottom-0.5 
             group-hover:w-full transition-[width] ease duration-300
             ${location.pathname === href ? "w-full" : "w-0"} dark:bg-light
             `}
      >
        &nbsp;
      </span>
    </NavLink>
  );
};

// mobile links
const CustomMobileLink = ({ to, title, className = "", toggle }) => {
  const location = useLocation();

  const handleClick = () => {
    toggle();
    location.push(to);
  };

  return (
    <button
      href={to}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
             h-[1px] inline-block bg-light dark:bg-dark 
             absolute left-0 -bottom-0.5 
             group-hover:w-full transition-[width] ease duration-300
             ${location.pathname === to ? "w-full" : "w-0"} dark:bg-dark 
             `}
      >
        &nbsp;
      </span>
    </button>
  );
};

export const Header = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='w-full px-32 py-8 font-medium text-dark flex items-center justify-between'>
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light  block transistion-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light  block transistion-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-dark  dark:bg-light block transistion-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
        ></span>
      </button>

      {/* Desktop view */}
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/contactus" title="Contact Us" className="ml-4" />
      </nav>

      <div className="flex items-center justify-center flex-wrap ">
        <motion.a href='https://twitter.com'
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className='w-6 mr-3'
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/feecon12"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/feecon-behera-574009188/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 m-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a href='' target={'_blank'} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-light rounded-full'>
          <PinterestIcon />
        </motion.a>
        <motion.a href='' target={'_blank'} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3'>
          <DribbbleIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-5 flex items-center justify-center rounded-full p-0.5 
                        ${mode === "light"
              ? "bg-dark text-light"
              : "bg-light text-dark"
            }
                    
                        `}
        >
          {mode === "dark" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </div>

      {/* Mobile view */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          {/* Page navigations */}
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink href='/articles' title='Articles' className='' toggle={handleClick} />
          </nav>

          {/* Social Icons */}
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a href='https://twitter.com' target={'_blank'} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mr-3 sm:mx-1'>
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/feecon12"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/feecon-behera-574009188/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 m-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a href='' target={'_blank'} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 mx-3 bg-light rounded-full sm:mx-1'>
              <PinterestIcon />
            </motion.a>
            <motion.a href='' target={'_blank'} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-6 ml-3 sm:mx-1'>
              <DribbbleIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-1 flex items-center justify-center rounded-full p-0.5 
                                ${mode === "light"
                  ? "bg-light text-dark"
                  : "bg-dark text-light"
                }
                            `}
            >
              {mode === "dark" ? (
                <MoonIcon className={"fill-dark"} />
              ) : (
                <SunIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

