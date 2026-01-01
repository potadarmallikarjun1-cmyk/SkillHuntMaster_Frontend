import { useState, useEffect } from "react";
import bgimage from "../assets/bg_1.jpg";
import axios from "axios";
import Footer from "./Footer";


function Postjob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});
  const [jobs, setJobs] = useState([]);

  const [page, setPage] = useState(1);
  const perPage = 4;

  const getJobs = async () => {
    try {
      const res = await axios.get("https://skillhuntmaster-backend-2.onrender.com/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let m = {};
    if (!form.title) m.title = "Required";
    if (!form.company) m.company = "Required";
    if (!form.location) m.location = "Required";
    if (!form.salary) m.salary = "Required";
    if (!form.description) m.description = "Required";
    setErrors(m);
    return Object.keys(m).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (editId) {
        await axios.put(`https://skillhuntmaster-backend-2.onrender.com/api/jobs/${editId}`, form);
      } else {
        await axios.post("https://skillhuntmaster-backend-2.onrender.com/api/jobs", form);
      }

      setForm({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
      });

      setEditId(null);
      getJobs();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({
      title: item.title,
      company: item.company,
      location: item.location,
      salary: item.salary,
      description: item.description,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://skillhuntmaster-backend-2.onrender.com/api/jobs/${id}`);
      getJobs();
    } catch (err) {
      console.log(err);
    }
  };

  const last = page * perPage;
  const first = last - perPage;
  const sliced = jobs.slice(first, last);

  const totalPages = Math.ceil(jobs.length / perPage);

  return (
    <>
      <div
        className="h-[30vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,255,.8), rgba(255,192,203,.8)), url(${bgimage})`,
        }}
      />

      <div className="flex justify-center py-10 w-full ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 border p-6 rounded-md w-[80%] md:w-[50%]"
        >
          <h1 className="text-3xl font-bold text-center text-violet-600 mb-4">
            {editId ? "Update Job" : "Post New Job"}
          </h1>

          <label>Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Job title"
            className="border p-2 rounded"
          />
          {errors.title && <p className="text-red-500">Required</p>}

          <label>Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            className="border p-2 rounded"
          />
          {errors.company && <p className="text-red-500">Required</p>}

          <label>Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Job location"
            className="border p-2 rounded"
          />
          {errors.location && <p className="text-red-500">Required</p>}

          <label>Salary</label>
          <input
            name="salary"
            value={form.salary}
            onChange={handleChange}
            placeholder="Salary"
            className="border p-2 rounded"
          />
          {errors.salary && <p className="text-red-500">Required</p>}

          <label>Description</label>
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Job description"
            className="border p-2 rounded"
          />
          {errors.description && <p className="text-red-500">Required</p>}

          <input
            type="submit"
            value={editId ? "Update" : "Submit"}
            className="bg-violet-600 text-white py-2 rounded cursor-pointer font-bold"
          />
        </form>
      </div>

      <div className="w-full flex flex-col items-center mt-6">
        <h2 className="text-2xl font-bold text-violet-600 mb-4">Posted Jobs</h2>

        <div className="w-[80%] grid md:grid-cols-2 gap-5">
          {sliced.map((job) => (
            <div key={job._id} className="p-4 border shadow bg-white rounded-md">
              <h3 className="text-xl font-bold text-violet-600">{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p className="font-semibold text-green-600">₹ {job.salary}</p>
              <p className="text-gray-600">{job.description}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(job)}
                  className="px-4 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(job._id)}
                  className="px-4 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-5 my-8">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-1 border rounded disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-1 border rounded ${
                page === i + 1 ? "bg-violet-600 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-1 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Postjob;
