import { link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav>
            <Link to="/" Style="">Home</Link>
            <Link to="/students" style="">Students</Link>
        </nav>
    );

}