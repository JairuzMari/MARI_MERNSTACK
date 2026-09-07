import { useParams, Link } from "react-router-dom";
import students from "../data/students.json";


export default function StudentDetails() {

    const { id } = useParams();
    const studentId = parseInt(id);
    const student = students.find(s => s.id === studentId);

    if (!student) {

        return <h2>Student Not Found!</h2>
    }
    
        return (

            <div>
                <h2>All the details of { student.name }</h2>
                <p><b>ID</b> { student.id }</p>
                <p><b>Age</b> {student.age }</p>


                <Link to="/students">
                <button>
                    Leave
                </button>
                </Link>
            </div>
        );



}