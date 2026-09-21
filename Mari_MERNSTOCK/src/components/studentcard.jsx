import React from 'react';

export default function StudentCard({ student }) {
    if (!student) return null;

    const { name, studentNo, age, gender, course } = student; //comment

    return (
        <div className="student-card">
            <span className="accent-bar"></span>

            <div className="card-header">
                <h2>{name}</h2>
            </div>

            <div className="card-body">
                <div className="info-row">
                    <span className="label">Student No:</span>
                    <span className="value gold">{studentNo || "N/A"}</span>
                </div>

                <div className="info-row">
                    <span className="label">Gender:</span>
                    <span className="value">{gender || "N/A"}</span>
                </div>

                <div className="info-row">
                    <span className="label">Age:</span>
                    <span className="value">{age ? `${age} yrs old` : "N/A"}</span>
                </div>

                <div className="info-row course-row">
                    <span className="label">Course:</span>
                    <span className="course-badge">{course || "N/A"}</span>
                </div>
            </div>
        </div>
    );
}