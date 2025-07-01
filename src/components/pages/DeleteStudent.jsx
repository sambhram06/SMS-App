import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteStudent() {
  const navigate = useNavigate();
  const API_URL = `https://qpbm0ncqh9.execute-api.ap-south-1.amazonaws.com/dev/sms-app`;

  const [usn, setUsn] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}?usn=${usn}`);
      if (response.ok) {
        const data = await response.json();
        setStudent(data);
        setError("");
      } else {
        setError("Student not found. Please check the USN.");
        setStudent(null);
      }
    } catch (err) {
      console.error("Error fetching student:", err);
      setError("Failed to fetch student.");
      setStudent(null);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete student ${student.name}?`);
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}?usn=${usn}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Student deleted successfully!");
        navigate("/students");
      } else if (response.status === 404) {
        alert("Student not found.");
      } else {
        alert("Failed to delete student.");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("An error occurred while deleting the student.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-red-100 rounded-xl shadow">
      {!student ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-red-700">Enter USN to Delete</h2>
          <form onSubmit={handleFetch} className="space-y-4">
            <input
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              required
              placeholder="Enter USN"
              className="w-full p-2 text-black border-b-2 border-gray-400 focus:border-red-700 outline-none"
            />
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Fetch Student
            </button>
          </form>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-red-700">Confirm Deletion</h2>
          <div className="text-black space-y-2">
            <p><strong>USN:</strong> {student.usn}</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Branch:</strong> {student.branch}</p>
            <p><strong>Place:</strong> {student.place}</p>
          </div>
          <button
            onClick={handleDelete}
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Confirm Delete
          </button>
        </>
      )}
    </div>
  );
}
