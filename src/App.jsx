// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Games from "./pages/Games";
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
            <Route path="/games" element={<Games />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
