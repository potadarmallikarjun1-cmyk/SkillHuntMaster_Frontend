import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import Browsejobs from "../Pages/Browsejobs";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Postjob from "../Pages/Postjob";
import Jobapplication from "../Pages/Jobapplication";
import Blog from "../Pages/Blog";

function Navbar() {
  const [isScrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Router>
        <div className="main-container bg-cover bg-center bg-no-repeat w-full min-h-screen">

          {/* NAVBAR */}
          <nav
            className={`flex items-center justify-between px-7 py-3 w-full z-50 transition-all duration-300 ${
              isScrolled
                ? "fixed top-0 left-0 bg-blue-600 shadow-lg"
                : "absolute bg-transparent"
            }`}
            style={{
              backgroundImage: isScrolled
                ? "linear-gradient(90deg, rgba(0,0,255,0.9), rgba(255,192,203,0.9))"
                : "none",
            }}
          >
            {/* LOGO */}
            <div className="logo">
              <h1 className="text-2xl font-medium text-white">SkillHunt</h1>
            </div>

            {/* MOBILE MENU BUTTON */}
            <IoMenu
              className="text-3xl font-bold text-white lg:hidden md:hidden cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            />

            {/* DESKTOP LINKS */}
            <div className="links text-white text-md font-semibold space-x-3 hidden lg:block md:block">
              <Link to="/">Home</Link>
              <Link to="/browsejobs">Browsejobs</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>

              <Link
                to="/postjob"
                className="bg-blue-500 py-2 px-4 rounded-sm hover:bg-blue-400"
              >
                Post a job
              </Link>
               
            </div>
          </nav>

          {/* MOBILE MENU */}
          {openMenu && (
            <div className="bg-blue-600 text-white text-lg font-semibold flex flex-col space-y-4 p-5 lg:hidden md:hidden fixed top-[60px] left-0 w-full z-40">
              <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
              <Link to="/browsejobs" onClick={() => setOpenMenu(false)}>Browsejobs</Link>
              <Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>
              <Link to="/blog"  onClick={() => setOpenMenu(false)}>Blog</Link>

              <Link
                to="/postjob"
                onClick={() => setOpenMenu(false)}
                className="bg-blue-500 py-2 px-4 rounded-sm"
              >
                Post a job
              </Link>
               
              
            </div>
          )}

          {/* CONTENT — FIXED NAV HEIGHT ADJUST */}
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browsejobs" element={<Browsejobs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/postjob" element={<Postjob />} />
              <Route path="/jobapplication" element={<Jobapplication />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Navbar;
