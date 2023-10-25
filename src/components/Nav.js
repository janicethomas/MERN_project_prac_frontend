import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav class="navbar bg-warning px-2">
            <Link className = "navbar-brand" to="/">CRUD operations</Link>
            <div class = "nav">
                <Link class = "nav-link" to="/create-student">Create student</Link>
                <Link class = "nav-link" to="/student-list">Student List</Link>
            </div>
        </nav>
    )
}

export default Nav;