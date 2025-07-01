import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../SMS-frontend/src/components/pages/Navbar";
import Home from "../../SMS-frontend/src/components/pages/Home";
import ViewStudents from "../../SMS-frontend/src/components/pages/ViewStudent";
import AddStudent from "../../SMS-frontend/src/components/pages/AddStudent";
import UpdateStudent from "../../SMS-frontend/src/components/pages/UpdateStudent";
import DeleteStudent from "../../SMS-frontend/src/components/pages/DeleteStudent";
import LandingPage from "../../SMS-frontend/src/components/pages/LandingPage";

const App = () => {
  return (
    <Router>
      <div >
        <Navbar />
        <div >
          <Routes>
            <Route path="/home" element={<Home />} /> 
            <Route path="/students" element={<ViewStudents />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/update" element={<UpdateStudent />} />
            <Route path="/delete" element={<DeleteStudent />} />
            
            <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<div>Admin Page</div>} />
        <Route path="/teachers" element={<div>Teachers Page</div>} />
        <Route path="/attendance" element={<div>Attendance Page</div>} />
        <Route path="/marksheet" element={<div>Marksheet Page</div>} />  
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;