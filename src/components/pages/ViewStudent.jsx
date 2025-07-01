import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ViewStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://qpbm0ncqh9.execute-api.ap-south-1.amazonaws.com/dev/sms-app/");
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          alert("Failed to fetch students.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while fetching students.");
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">USN</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Branch</th>
                <th className="border px-4 py-2">Mobile</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.usn}>
                  <td className="border px-4 py-2">{student.usn}</td>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.branch}</td>
                  <td className="border px-4 py-2">{student.mobile}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <Link
                      to={`/update?usn=${student.usn}`}
                      className="text-blue-600 underline"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/delete?usn=${student.usn}`}
                      className="text-red-600 underline"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
