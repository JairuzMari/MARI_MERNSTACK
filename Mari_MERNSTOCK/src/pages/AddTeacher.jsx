import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function AddTeacher({ teacherList, setTeachersList }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        employeeNumber: '',
        department: 'DIT',
        specialization: '',
        gender: 'Male'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTeacher = {
            id: Date.now(),
            ...formData
        };

        if (setTeachersList) {
            setTeachersList((prev) => [...prev, newTeacher]);
        }

        navigate('/teachers');
    };

    return (
        <div className="page-container">
            <div className="details-card form-card">
                <span className="accent-bar"></span>

                <div className="details-header">
                    <h1>Add New Teacher</h1>
                </div>

                <form onSubmit={handleSubmit} className="teacher-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Jairuz"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Employee Number</label>
                        <input
                            type="text"
                            name="employeeNumber"
                            value={formData.employeeNumber}
                            onChange={handleChange}
                            placeholder="e.g. F004"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Department</label>
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="e.g. DIT"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Specialization</label>
                        <input
                            type="text"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            placeholder="e.g. Programming"
                            required
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-btn">
                            Add Teacher
                        </button>
                        <Link to="/teachers" className="back-btn">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}