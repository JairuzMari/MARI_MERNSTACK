import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">School Directory</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/students">Students</Link>
                <Link to="/teachers">Teachers</Link>
            </div>
        </nav>
    );
}