import React from "react";
import { Link } from "react-router-dom";
import initialTeachers from "../data/teachers.json";
import TeacherCard from "../components/TeacherCard"; 

export default function Teachers({ teachers }) {
    
    const teacherList = teachers && teachers.length > 0 ? teachers : initialTeachers;

    return (
        <div className="page-container">
            <div className="teachers-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h1 style={{ margin: 0 }}>Teacher List</h1>
                <Link to="/add-teacher" className="submit-btn" style={{ textDecoration: "none" }}>
                    ➕ Add Teacher
                </Link>
            </div>

            <div className="teacher-grid">
                {teacherList.map((teacher, index) => (
                    <TeacherCard key={teacher.employeeNumber || index} teacher={teacher} />
                ))}
            </div>
        </div>
    );
}