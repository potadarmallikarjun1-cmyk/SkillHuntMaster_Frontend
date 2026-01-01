import React, { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiVault } from "react-icons/ci";
import jobData from "../Json Data/Jobcategory.json";
import comp1 from "../assets/company-1.jpg";
import comp2 from "../assets/company-2.jpg";
import comp3 from "../assets/company-3.jpg";
import comp4 from "../assets/company-4.jpg";
import per1 from "../assets/person_1.jpg";
import per2 from "../assets/person_2.jpg";
import per3 from "../assets/person_3.jpg";
import people from "../Json Data/People.json";
import bgimage from "../assets/bg_1.jpg";
import Footer from "./Footer";
import profile_data from "../Json Data/Profile.json";
import Cadidte_slider from "./Cadidte_slider";

function Home() {
  const categories = [
    "Category",
    "Web Development",
    "App Development",
    "UI / UX Design",
    "Digital Marketing",
    "Graphic Design",
  ];

  const [users, setUsers] = useState(jobData.jobCategories);
  const [emp, setEmp] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setEmp(people);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="flex items-center justify-center h-auto lg:h-[90vh] sm:h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,255,0.8), rgba(255,192,203,0.8)),url(${bgimage})`,
        }}
      >
        <div className="content text-white w-[90%] pt-14 leading-1.5 sm:w-[70%] lg:w-full text-center">
          <h1 className="pt-4 pb-2 lg:py-3 lg:pt-0 text-lg sm:text-xl font-semibold text-md">
            Find Job, Employment, and Career Opportunities
          </h1>

          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl py-2 sm:py-6">
            The Easiest Way to Get Your New Job
          </h2>

          {/* ICONS ROW */}
          <div className="icons flex flex-col sm:flex-row justify-center gap-y-5 gap-x-10 sm:gap-x-[130px] items-center text-2xl py-5">
            <div className="flex items-center justify-center gap-2">
              <BiWorld className="text-5xl sm:text-6xl font-medium" />
              <div>
                <span>46</span>
                <span className="block text-lg">Countries</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <HiOutlineUserGroup className="text-5xl sm:text-6xl font-medium" />
              <div>
                <span>450</span>
                <span className="block text-lg">Companies</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <RiPagesLine className="text-5xl sm:text-6xl font-medium" />
              <div>
                <span>46</span>
                <span className="block text-lg">Countries</span>
              </div>
            </div>
          </div>
          {/* SEARCH FORM */}
          <div className="form w-fit mx-auto px-5 sm:px-8 bg-white rounded-lg text-black py-6 my-5">
            <div className="grid grid-cols-1 sm:flex sm:items-center sm:gap-3">
              {/* Job Input */}
              <div className="border-gray-600 border rounded-md flex items-center px-2 mb-3 sm:mb-0">
                <FaBriefcase className="text-xl text-gray-400" />
                <input
                  type="text"
                  placeholder="eg. Developer"
                  className="p-2 rounded-md w-full border-none outline-none"
                />
              </div>

              {/* Category */}
              <div className="relative   h-fit text-left leading-4.5 border-gray-600 border rounded-md flex items-center py-2 px-8 mb-3 sm:mb-0 cursor-pointer">
                {/* Selected Value */}
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-between w-full"
                >
                  <h1 className="text-gray-500 w-[150px]">
                    {selectedCategory}
                  </h1>
                  <IoMdArrowDropdown
                    className={`text-xl text-gray-400 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown List */}
                {open && (
                  <div className="absolute top-full left-0 w-full bg-white border mt-2 rounded shadow-md z-20">
                    {categories.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedCategory(item);
                          setOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="border-gray-600 border rounded-md flex items-center px-2 mb-3 sm:mb-0">
                <FaMapMarkerAlt className="text-xl text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="p-2 rounded-md w-full border-none outline-none"
                />
              </div>

              <input
                type="submit"
                value="Search"
                className="bg-blue-600 text-lg font-bold px-12 py-2 rounded-lg text-white cursor-pointer mt-2 sm:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
      {/* JOB ROW */}
      <div className="jobrow grid grid-cols-2 gap-5 lg:absolute lg:left-[9.1%] lg:top-[78%] mt-5 lg:h-fit w-[90%] mx-auto mb-20 lg:w-[80%]  lg:grid-cols-6 lg:grid lg:gap-4 ">
        {profile_data.map((item, id) => (
          <div key={id} className="jobcontent text-md bg-yellow-400">
            <div
              className={`card h-full w-full  font-bold cursor-pointer flex items-center justify-center py-6 flex-col border border-gray-200 hover:bg-blue-600 hover:text-white transition
                 ${
                   id === 1
                     ? "bg-orange-500 text-white h-full hover:bg-blue-600 "
                     : "bg-white text-black hover:bg-blue-600 hover:text-white"
                 }                
                `}
            >
              <h1 className="text-lg text-center">{item.profile}</h1>
              <CiVault className="text-5xl text-blue-400 " />
              <p className="space-x-1.5">
                <span className="space-x-1.5">{item.open_positions} </span>
                positions
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* JOB CATEGORY SECTION */}
      <div className="w-full mx-auto lg:mt-[120px] lg:mb-[60px]">
        <div className="jcrow w-full text-center flex flex-col items-center">
          <p className="text-blue-600 font-bold text-lg">Job Categories</p>
          <h1 className="text-3xl sm:text-4xl font-semibold py-4">
            Top Categories
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1100px]">
            {users.map((items, index) => (
              <div className="jcard" key={index}>
                <div className="border-b border-orange-300 py-2.5 px-5 text-left hover:bg-orange-100 cursor-pointer group flex items-center  justify-between">
                  <div>
                    <h1 className="text-lg font-semibold group-hover:text-blue-400">
                      {items.category}
                    </h1>
                    <h3>{items.positions} Positions</h3>
                  </div>
                  <div className="icon font-bold text-orange-300 text-2xl opacity-0 transform transition-all group-hover:translate-x-3 group-hover:opacity-100">
                    &gt;
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {/* TOP PARTNERS */}
      <div className="partners py-5  text-center w-full bg-gray-100">
        <h1 className="text-3xl sm:text-4xl text-violet-600 font-bold">
          Top Hiring Partners
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] m-auto py-6">
          {[comp1, comp2, comp3, comp4].map((img, i) => (
            <div
              key={i}
              className="group border border-gray-300 hover:shadow-xl cursor-pointer hover:transition-all hover:duration-100 py-3 rounded-md"
            >
              <img src={img} className="w-full rounded" alt="" />
              <br />
              <p>Company</p>
              <h1>
                <span className="bg-orange-300 text-white font-bold px-2 rounded-md">
                  500
                </span>{" "}
                positions
              </h1>
            </div>
          ))}
        </div>
      </div>
      
      {/* CANDIDATE SECTION */}
      <Cadidte_slider/>
      {/* NEWSLETTER FORM */}
      <div className="form w-full h-full py-16 bg-gray-100 flex justify-center">
        <div className="parent text-center px-5">
          <h1 className="text-4xl font-semibold mb-5">
            Subscribe to our Newsletter
          </h1>
          <p>Far far away, behind the word mountains, far from the countries</p>
          <p>there live the blind texts.</p>
          <div className="tag flex mt-8 bg-white border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              className="w-full p-3 outline-none"
              placeholder="Enter email"
            />
            <button className="bg-orange-400 px-5 text-white font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
