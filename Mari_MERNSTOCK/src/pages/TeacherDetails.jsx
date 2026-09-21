import { useParams, Link } from "react-router-dom";
import teachers from "../data/teachers.json";

export default function TeacherDetails() {
    const { id } = useParams();
    const teacher = teachers.find((t) => t.id === parseInt(id));

    return (
        <div className="page-container">
            <div className="details-card">
                <span className="accent-bar"></span>

                <div className="details-header">
                    <h1>All details of {teacher.name}</h1>
                    <span className="student-id-badge">ID #{teacher.id}</span>
                </div>

                <div className="details-body">
                    <div className="detail-item">
                        <span className="detail-label">Full Name</span>
                        <span className="detail-value">{teacher.name}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Employee No.</span>
                        <span className="detail-value gold">{teacher.employeeNumber}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Gender</span>
                        <span className="detail-value">{teacher.gender}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Department</span>
                        <span className="detail-value">{teacher.department}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Specialization</span>
                        <span className="course-badge">{teacher.specialization}</span>
                    </div>
                </div>

                <div className="details-footer">
                    <Link to="/teachers" className="back-btn">
                        ← Back to Teachers
                    </Link>
                </div>
            </div>
        </div>
    );
}