import { useParams, Link } from "react-router-dom";
import students from "../data/students.json";

export default function StudentDetails() {
    const { id } = useParams();
    const student = students.find((s) => s.id === parseInt(id));

    return (
        <div className="page-container">
            <div className="details-card">
                <span className="accent-bar"></span>

                <div className="details-header">
                    <h1>All details of {student.name}</h1>
                    <span className="student-id-badge">ID #{student.id}</span>
                </div>

                <div className="details-body">
                    <div className="detail-item">
                        <span className="detail-label">Full Name</span>
                        <span className="detail-value">{student.name}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Student No.</span>
                        <span className="detail-value gold">{student.studentNo}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Gender</span>
                        <span className="detail-value">{student.gender}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Age</span>
                        <span className="detail-value">{student.age} yrs old</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Course</span>
                        <span className="course-badge">{student.course}</span>
                    </div>
                </div>

                <div className="details-footer">
                    <Link to="/students" className="back-btn">
                        ← Back to Students
                    </Link>
                </div>
            </div>
        </div>
    );
}