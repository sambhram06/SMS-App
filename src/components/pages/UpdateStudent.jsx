import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateStudent() {
  const navigate = useNavigate();
  const [enteredUSN, setEnteredUSN] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleUSNSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://qpbm0ncqh9.execute-api.ap-south-1.amazonaws.com/dev/sms-app?usn=${enteredUSN}`);
      if (response.ok) {
        const data = await response.json();
        setStudent(data);
        setError("");
      } else {
        setError("Student not found. Please check the USN.");
      }
    } catch (err) {
      console.error("Error fetching student:", err);
      setError("Failed to fetch student.");
    }
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://qpbm0ncqh9.execute-api.ap-south-1.amazonaws.com/dev/sms-app?usn=${enteredUSN}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });

      if (response.ok) {
        alert("Student updated successfully!");
        navigate("/students");
      } else {
        alert("Failed to update student.");
      }
    } catch (error) {
      console.error("Error updating student:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-gray-100 rounded-xl shadow">
      {!student ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Enter USN to Update</h2>
          <form onSubmit={handleUSNSubmit} className="space-y-4">
            <input
              name="usn"
              value={enteredUSN}
              onChange={(e) => setEnteredUSN(e.target.value)}
              required
              placeholder="Enter USN"
              className="w-full text-black p-2 border-b-2 border-gray-300 focus:border-black outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Fetch Student
            </button>
          </form>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Update Student</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            <input name="usn" value={student.usn} readOnly className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
            <input name="name" value={student.name} onChange={handleChange} required placeholder="Name" className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
            <input name="aadhaar" value={student.aadhaar} onChange={handleChange} required placeholder="Aadhaar" className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
            <input name="branch" value={student.branch} onChange={handleChange} required placeholder="Branch" className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
            <input name="mobile" value={student.mobile} onChange={handleChange} required placeholder="Mobile" className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
            <input name="place" value={student.place} onChange={handleChange} required placeholder="Place" className="w-full text-black p-2 border-b-2 border-transparent hover:border-black focus:border-black-600 outline-none transition" />
            <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
              Update Student
            </button>
          </form>
        </>
      )}
    </div>
  );
}
