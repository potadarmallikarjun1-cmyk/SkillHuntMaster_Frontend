import React, { useState } from "react";
import bgimage from "../assets/bg_1.jpg";
import Footer from "./Footer";

const JobApplication = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    expectedSalary: "",
    resume: null,
    photo: null,
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.expectedSalary.trim())
      newErrors.expectedSalary = "Salary is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.photo) newErrors.photo = "Photo is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setShowSuccess(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      position: "",
      expectedSalary: "",
      resume: null,
      photo: null,
    });

    setErrors({});

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      {/* HEADER */}
      <div
        className="h-[40vh] sm:h-[40vh] w-full bg-cover bg-center flex items-end pb-8 justify-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,255,0.8), rgba(255,192,203,0.8)), url(${bgimage})`,
        }}
      >
        <h1 className="text-4xl font-bold  text-white cursor-pointer ">
          Job Application
        </h1>
      </div>

      {/* FORM */}
      <div className="max-w-4xl mx-auto mt-10 p-8 shadow-xl bg-white rounded-xl my-10">
        {showSuccess && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700 text-center font-semibold">
            ✅ Application submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-5 text-gray-700">
            Personal Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="input border py-2 rounded-md px-3 border-gray-200 w-full"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input  py-2 border rounded-md px-3 border-gray-200 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="input py-2 border rounded-md px-3 border-gray-200 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="input py-2 border rounded-md px-3 border-gray-200 w-full"
              />
              {errors.location && (
                <p className="text-red-500 text-sm">{errors.location}</p>
              )}
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-5 text-gray-700">
            Job Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Position"
                className="input py-2  border rounded-md px-3 border-gray-200 w-full"
              />
              {errors.position && (
                <p className="text-red-500 text-sm">{errors.position}</p>
              )}
            </div>

            <div>
              <input
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                placeholder="Salary"
                className="input  py-2 border rounded-md px-3 border-gray-200 w-full"
              />
              {errors.expectedSalary && (
                <p className="text-red-500 text-sm">{errors.expectedSalary}</p>
              )}
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-700">
            Upload CV
          </h2>

          <div>
            <input
              type="file"
              className=" border py-2 rounded-md px-3 border-gray-200 w-fit cursor-pointer"
              name="resume"
              onChange={handleFileChange}
            />
            {errors.resume && (
              <p className="text-red-500 text-sm">{errors.resume}</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="mt-8 w-full text-white py-3 rounded-lg font-semibold cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,255,0.8), rgba(255,192,203,1))`,
            }}
          >
            Submit Application
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default JobApplication;
