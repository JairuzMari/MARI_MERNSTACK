import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import navbar from "./components/Navbar";
import Student from "./components/Student";

function App() {
  
  return (

    <BrowserRouter>
    <navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;