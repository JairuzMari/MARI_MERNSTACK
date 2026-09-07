import {link} from "react-router-dom";

export default function Student({ student }) {


    return (
        <div>
        <h3>{student.name}</h3>
        <p>Student No. {student.studentNumber}</p>
        <p>Course: {student.course}</p>
        <Link to={ '/studentts/$(studebt.id)'}>
            <button>
                view
            </button>
        </Link>
        </div>
    );
}