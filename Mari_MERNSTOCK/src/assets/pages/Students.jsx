import studentsData from "../data/students.json";
import Student from "../components/Students";

export default function Students() {

    return(
         <div>
            <h2>
                Student List
            </h2>
            <div>
                {studentsData.map((student) => (
                    <Student key={student.id} student={student} />
                ))}
            </div>
         </div>


    );
}