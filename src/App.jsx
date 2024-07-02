// App.js

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./ProjectComponents/Project";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <div className="flex-3">
          <Sidebar />
        </div>
        <div className="flex-9 w-[100%]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
