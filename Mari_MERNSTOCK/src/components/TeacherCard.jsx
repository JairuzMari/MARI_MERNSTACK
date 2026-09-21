import React from 'react';

export default function TeacherCard({ teacher }) {
    if (!teacher) return null;

    const { name, employeeNumber, department, specialization, gender } = teacher;

    return (
        <div className="teacher-card">
            <span className="accent-bar"></span>

            <div className="card-header">
                <h2>{name}</h2>
            </div>

            <div className="card-body">
                <div className="info-row">
                    <span className="label">Employee No:</span>
                    <span className="value gold">{employeeNumber || "N/A"}</span>
                </div>

                <div className="info-row">
                    <span className="label">Gender:</span>
                    <span className="value">{gender || "N/A"}</span>
                </div>

                <div className="info-row">
                    <span className="label">Department:</span>
                    <span className="value">{department || "N/A"}</span>
                </div>

                <div className="info-row course-row">
                    <span className="label">Specialization:</span>
                    <span className="course-badge">{specialization || "N/A"}</span>
                </div>
            </div>
        </div>
    );
}