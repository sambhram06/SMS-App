import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-6 flex items-center justify-between w-full">
      <h2 className="text-xl font-bold whitespace-nowrap">Student Management System</h2>
      
      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/students" className="hover:underline">List of Students</Link>
      </div>
    </nav>
  );
}
