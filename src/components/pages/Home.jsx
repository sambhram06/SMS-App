import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-50">
      <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-6 py-10">
        <div className="bg-purple-300 p-6 rounded-xl hover:bg-purple-100 shadow w-full text-center">
          <h2 className="text-lg font-semibold mb-2">1. View Student Base Details</h2>
          <p className="mb-2">Check all student records and basic information.</p>
          <Link to="/students" className="text-blue-700 ">Go to Student List</Link>
        </div>

        <div className="bg-red-300 p-6 rounded-xl hover:bg-red-100 shadow w-full text-center">
          <h2 className="text-lg font-semibold mb-2">2. Add Students</h2>
          <p className="mb-2">Register a new student into the system.</p>
          <Link to="/add" className="text-green-700 ">Add New Student</Link>
        </div>

        <div className="bg-green-300 p-6 rounded-xl hover:bg-green-100 shadow w-full text-center">
          <h2 className="text-lg font-semibold mb-2">3. Update Student</h2>
          <p className="mb-2">Modify existing student details.</p>
          <Link to="/update" className="text-yellow-700 ">Update Student</Link>
        </div>

        <div className="bg-orange-300 p-6 rounded-xl hover:bg-orange-100 shadow w-full text-center">
          <h2 className="text-lg font-semibold mb-2">4. Delete Student</h2>
          <p className="mb-2">Remove a student from the records.</p>
          <Link to="/delete" className="text-red-700 ">Delete Student</Link>
        </div>
      </div>
    </div>
  );
}
