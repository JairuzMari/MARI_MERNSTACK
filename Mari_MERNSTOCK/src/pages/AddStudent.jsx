import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AddStudent({ studentList, setStudentList }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        studentNo: '',
        gender: 'Male',
        age: '',
        course: 'BSIT'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newStudent = {
            id: Date.now(),
            ...formData,
            age: Number(formData.age)
        };

        if (setStudentList) {
            setStudentList((prev) => [...prev, newStudent]);
        }

        navigate('/students');
    };

    return (
        <div className="page-container">
            <div className="details-card form-card">
                <span className="accent-bar"></span>

                <div className="details-header">
                    <h1>Add New Student</h1>
                </div>

                <form onSubmit={handleSubmit} className="student-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Juan Dela Cruz"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Student Number</label>
                        <input
                            type="text"
                            name="studentNo"
                            value={formData.studentNo}
                            onChange={handleChange}
                            placeholder="e.g. 2024-10004"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="e.g. 20"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Course</label>
                        <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            placeholder="e.g. BSIT"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            ➕ Add Student
                        </button>
                        <Link to="/students" className="back-btn">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}