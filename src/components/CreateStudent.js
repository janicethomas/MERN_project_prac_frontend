import StudentForm from "./StudentForm";
import { useState } from "react";
import Axios from "axios";

function CreateStudent()
{
    const [arr,setArr] = useState([]);
    const getState = (childData)=>{
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]}
        Axios.post("https://mern-project-prac-backend.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("record added")
            else
            Promise.reject();

        })
        .catch((err)=>alert(err));
    }

    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue="" emailValue="" rollNoValue="">
                Create Student
            </StudentForm>
        </form>
    )
}

export default CreateStudent;