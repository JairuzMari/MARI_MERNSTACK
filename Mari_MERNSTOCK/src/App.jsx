import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import TeachersList from "./pages/TeachersList";
import TeacherDetails from "./pages/TeacherDetails";
import AddTeacher from "./pages/AddTeacher";
import Navbar from "./components/Navbar";
import initialStudents from "./data/students.json";
import initialTeachers from "./data/teachers.json";

function App() {
  const [studentList, setStudentList] = useState(initialStudents);
  const [teacherList, setTeachersList] = useState(initialTeachers);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Student Routes */}
        <Route path="/students" element={<Students students={studentList} />} />
        <Route path="/student/:id" element={<StudentDetails students={studentList} />} />
        <Route
          path="/add-student"
          element={<AddStudent studentList={studentList} setStudentList={setStudentList} />}
        />

        {/* Teacher Routes - FIXED: Used TeachersList instead of Teachers */}
        <Route path="/teachers" element={<TeachersList teachers={teacherList} />} />
        <Route path="/teacher/:id" element={<TeacherDetails teachers={teacherList} />} />
        <Route
          path="/add-teacher"
          element={<AddTeacher teacherList={teacherList} setTeachersList={setTeachersList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;