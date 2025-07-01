import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const topics = [
    { title: "Admin", path: "/home", color: "bg-blue-600" },
    { title: "Teachers", path: "/teachers", color: "bg-green-600" },
    { title: "Attendance", path: "/attendance", color: "bg-yellow-500" },
    { title: "Marksheet", path: "/marksheet", color: "bg-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold mb-10">Student Management System</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {topics.map((topic) => (
          <div
            key={topic.title}
            onClick={() => navigate(topic.path)}
            className={`text-white ${topic.color} cursor-pointer p-6 rounded-2xl shadow-xl text-center text-2xl font-semibold hover:scale-105 transition-transform duration-300`}
          >
            {topic.title}
          </div>
        ))}
      </div>
    </div>
  );
}
