import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';

const Courses = () =>{

    let history = useHistory();
    const { id } = useParams();

    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [faculty, setFaculty] = useState(null)

    useEffect(() => {
        loadCourses();
    }, [])

    const loadCourses = async () =>{
        const result = await axios.get(`http://127.0.0.1:8000/api/courses/${id}/`)

        setName(result.data.name);
        setDescription(result.data.description);
        setFaculty(result.data.faculty);
    }

    const updateCourse = async () =>{

        let formField = new FormData()

        formField.append('name',name)
        formField.append('description',description)
        formField.append('faculty',faculty)

        await axios.put(`http://127.0.0.1:8000/api/courses/${id}/`, formField).then(history.push('/course'))

    }

    return(
        <div>
            Name:<input 
            type='text'
            name='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            /><br></br>

            Description:<input 
            type='text'
            name='description'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            /><br></br>
            Faculty:<input 
            type='text'
            name='faculty'
            value={faculty}
            onChange={(e)=>setFaculty(e.target.value)}
            /><br></br>
            <button onClick={updateCourse} className="btn btn-primary btn-block">Update Course</button>
            
        </div>
    )


}

export default Courses;
