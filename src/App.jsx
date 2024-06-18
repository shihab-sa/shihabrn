// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Games from "./pages/Games";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <div className="flex-3 lg:w-[20%] md:w-[20%]">
          <Sidebar />
        </div>
        <div className="flex-9 lg:w-[80%] md:w-[80%]">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
