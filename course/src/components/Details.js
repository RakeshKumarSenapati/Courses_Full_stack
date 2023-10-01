import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {

const [course, setCourses] = useState([])

const {id} = useParams();
const history = useHistory();



const getSingleCourse = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/api/courses/${id}/`)
//   console.log(data);
  setCourses(data);
  
}

useEffect(() => {
    getSingleCourse();
},[])


const deleteCourse = async (id) => {
    alert ("Delete Successful...");
    await axios.delete(`http://127.0.0.1:8000/api/courses/${id}/`)
    history.push("/course")
    
}



    return (
        <div>
            <h1>Detail of Single Course </h1>
            <hr></hr>
            <div className="full-student-detail">
                
                <img src={course.img} height="300" width="500"/>
                <div className="student-detail">
                    <p ><b>Course ID:</b>{' '}{course.id} <br></br><br></br>
                    <b>Course Nmae:</b>{' '}{course.name} <br></br><br></br>
                    <b>Course Description:</b>{' '}{course.description} <br></br><br></br>
                    <b>Course Faculty:</b>{' '}{course.faculty}</p>
                </div> 
            </div>
           

          

            <Link className="btn btn-outline-primary mr-2" to={`/update/${course.id}`}>Update</Link>
            <Link className="btn btn-danger" style={{marginLeft:'1em'}} onClick={() => deleteCourse(course.id)}>Delete</Link>
        </div>
    );
};

export default Details;