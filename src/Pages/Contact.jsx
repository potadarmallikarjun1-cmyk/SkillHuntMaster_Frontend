import React from "react";
import bgimage from "../assets/bg_1.jpg";
import Footer from "./Footer";
import MyMap from "./Mymap";

function Contact() {
  return (
    <>
      {/* Top Banner */}
      <div
        className="h-[50vh] sm:h-[50vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,255,0.8), rgba(255,192,203,0.8)), url(${bgimage})`,
        }}
      ><h1 className="text-5xl font-bold  text-white ">Contact Us</h1></div>

      {/* Main Section */}
      <div className="bg-gray-50 w-full">
        <div className="max-w-6xl m-auto leading-10 py-10 px-5 text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Contact Information
          </h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 lg:gap-10 mt-4">
            <p className="w-full sm:w-auto">
              Address: 64th sector Noida <br /> India, Asia
            </p>
            <p className="w-full sm:w-auto">Phone: 7204342887</p>
            <p className="w-full sm:w-auto">Email: mrpotadar123@gmail.com</p>
            <p className="w-full sm:w-auto">
              Website: www.mallikarjunpotadar123.com
            </p>
          </div>
        </div>

        {/* Map + Form */}
        <div className="max-w-6xl m-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">

            {/* MAP SECTION */}
            <div className="w-full">
              <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg">
                <MyMap />
              </div>
            </div>

            {/* FORM SECTION */}
            <div className="w-full">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full">
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border border-gray-300 w-full rounded-md px-3 py-2"
                  />

                  <input
                    type="text"
                    placeholder="Enter your phone"
                    className="border border-gray-300 w-full rounded-md px-3 py-2"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 w-full rounded-md px-3 py-2"
                  />

                  <textarea
                    rows={4}
                    placeholder="Your message..."
                    className="border border-gray-300 w-full rounded-md px-3 py-2"
                  ></textarea>

                  <button
                    type="button"
                    className="font-bold bg-blue-500 px-6 py-2 text-white rounded-md hover:bg-blue-600 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
