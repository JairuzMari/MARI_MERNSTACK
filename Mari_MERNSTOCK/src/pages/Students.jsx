import React from "react";
import { Link } from "react-router-dom";
import initialStudents from "../data/students.json";
import StudentCard from "../components/studentcard";

export default function Students({ students }) {
    // Use props if passed from App.jsx, otherwise fallback to initial json
    const studentList = students && students.length > 0 ? students : initialStudents;

    return (
        <div className="page-container">
            <div className="students-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h1 style={{ margin: 0 }}>Student List</h1>
                <Link to="/add-student" className="submit-btn" style={{ textDecoration: "none" }}>
                    ➕ Add Student
                </Link>
            </div>

            <div className="student-grid">
                {studentList.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
}