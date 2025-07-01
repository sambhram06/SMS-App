import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    usn: "",
    name: "",
    aadhaar: "",
    branch: "",
    mobile: "",
    place: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://qpbm0ncqh9.execute-api.ap-south-1.amazonaws.com/dev/sms-app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });

      if (response.ok) {
        alert("Student added successfully!");
        navigate("/students"); 
      } else {
        alert("Failed to add student.");
      }
    } catch (error) {
      console.error("Error adding student:", error);
      alert("An error occurred while adding student.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-gray-200 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <input name="usn" placeholder="USN" onChange={handleChange} required className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
        <input name="name" placeholder="Name" onChange={handleChange} required className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
        <input name="aadhaar" placeholder="Aadhaar" onChange={handleChange} required className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
        <input name="branch" placeholder="Branch" onChange={handleChange} required className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} required className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
        <input name="place" placeholder="Place" onChange={handleChange} required className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Student
        </button>
      </form>
    </div>
  );
}
