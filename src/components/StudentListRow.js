import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow(props)
{
    const {_id, name, email, rollNo} = props.obj;
    const handleClick = () => {
        Axios.delete("https://mern-project-prac-backend.onrender.com/studentRoute/delete-student/"+ _id)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("record deleted")
                window.location.reload()
            }
            else
            Promise.reject();

        })
        .catch((err)=>alert(err));
    }

    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>
                <button class="btn btn-success mx-3">
                    <Link to={"/edit-student/"+_id} class="text-light text-decoration-none">
                    Edit
                    </Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
                </td>
        </tr>
    )
}

export default StudentListRow;