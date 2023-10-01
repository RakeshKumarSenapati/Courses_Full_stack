
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const AddCourses = () => {

    let history = useHistory();


    const [img, setImg] = useState(null)
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [faculty, setFaculty] = useState(null)


    const addNewCourse = async () => {
        let formField = new FormData()
        formField.append('name',name)
        formField.append('description',description)
        formField.append('faculty',faculty)

        if(img !== null) {
          formField.append('img', img)
        }

        await axios({
          method: 'post',
          url:'http://127.0.0.1:8000/api/courses/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          history.push('/course')
        })
    }
   
    return (
        <div className="container">
            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h1 className="text-center mb-4">Add A Courses</h1>
        

        <div className="form-group">
        <label>Course Image</label>
             <input type="file" className="form-control" onChange={(e)=>setImg(e.target.files[0])}/>
          </div><br></br>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Course Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div><br></br>
         
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Course Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div><br></br>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Course Faculty"
              name="faculty"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
            />
          </div><br></br>
          
          <button className="btn btn-primary btn-block" onClick={addNewCourse}>Add Course</button>
       
      </div>
    </div>
        </div>
    );
};

export default AddCourses;