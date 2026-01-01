import React, { useState, useEffect } from "react";
import axios from "axios";
import bgimage from "../assets/bg_1.jpg";
import { MdLocationOn } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { RiFileTextLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import Jobapplication from "./Jobapplication";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Browsejobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRange, setSelectedRange] = useState("");

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/jobapplication");
  };



  const [page, setPage] = useState(1);
  const limit = 5; 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchJobs();
  }, []);

  const salaryRanges = [
    { label: "10,000 - 20,000", min: 10000, max: 20000 },
    { label: "20,000 - 50,000", min: 20000, max: 50000 },
    { label: "50,000 - 1,00,000", min: 50000, max: 100000 },
    { label: "Above 1,00,000", min: 100000, max: Infinity },
  ];

  const filteredJobs = jobs.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const salary = parseInt(item.salary);
    let matchesSalary = true;

    if (selectedRange) {
      const range = salaryRanges.find((r) => r.label === selectedRange);
      matchesSalary = salary >= range.min && salary <= range.max;
    }

    return matchesSearch && matchesSalary;
  });

  //  PAGINATION LOGIC
  const totalPages = Math.ceil(filteredJobs.length / limit);
  const start = (page - 1) * limit;
  const currentJobs = filteredJobs.slice(start, start + limit);

  return (
    <>
      <div
        className=" h-[50vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,255,0.8), rgba(255,192,203,0.8)), url(${bgimage})`,
        }}
      ><h1 className="text-5xl font-bold text-white">Browse Jobs</h1></div>

      <div className="w-full flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search by job name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // Reset page on search
          }}
          className="border-2 border-gray-300 p-2 rounded-lg w-1/2 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-center gap-6 mt-5 flex-wrap">
        {salaryRanges.map((range) => (
          <label key={range.label} className="flex items-center gap-2">
            <input
              type="radio"
              name="salaryRange"
              checked={selectedRange === range.label}
              onChange={() => {
                setSelectedRange(range.label);
                setPage(1); // Reset page on filter
              }}
              className="w-4 h-4"
            />
            <span className="font-medium">{range.label}</span>
          </label>
        ))}

        <button
          onClick={() => {
            setSelectedRange("");
            setPage(1);
          }}
          className="ml-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-semibold"
        >
          Clear Filter
        </button>
      </div>

      {/* Job Listings */}
      <div className="w-full py-8">
        <ul className="space-y-5 space-x-2">
          {currentJobs.map((item, index) => (
            <li
              key={item._id || index}
              className="container group max-w-4xl m-auto text-left my-5 border cursor-pointer border-gray-200 rounded-md shadow-md hover:shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between px-5 md:px-10 py-5"
            >
              <div className="content w-full md:w-3/4">
                <p className="text-blue-500 font-bold flex items-center px-0.5 leading-8">
                  <BsBriefcase />
                  <span className="capitalize ml-1">{item.company}</span>
                </p>

                <h1 className="text-3xl font-bold leading-8">{item.title}</h1>

                <div>
                <h2 className="text-black font-bold flex items-center leading-8">
                  <MdLocationOn className="text-red-500 text-xl mr-1" />
                  {item.location}
                </h2>

                <h2 className="font-bold flex items-center leading-8">
                  <BiRupee className="text-xl mr-1" />
                  {item.salary}/-
                </h2>

                <h2 className="text-sm font-semibold flex items-center leading-8">
                  <RiFileTextLine className="text-xl mr-1" />
                  {item.description}
                </h2>
              </div>
              </div>

              <div className="button flex mt-4 md:mt-0 items-center">
                <div className="w-10 h-10 mx-1.5 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-800 bg-orange-500 text-white">
                  <FaHeart size={22} />
                </div>
                
                  <button onClick={goToAbout} className="bg-blue-600 p-2 font-bold rounded-lg text-white hover:bg-blue-400 cursor-pointer mx-1.5">
                    Apply Job
                  </button>
               
              </div>
            </li>
          ))}
        </ul>

        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500 mt-5">
            No jobs found for selected salary range.
          </p>
        )}

        {/* ⭐ PAGINATION BUTTONS */}
        {filteredJobs.length > 0 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span className="font-bold text-lg">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

        )}
      </div>
      <Footer/>
    </>
  );
};

export default Browsejobs;
