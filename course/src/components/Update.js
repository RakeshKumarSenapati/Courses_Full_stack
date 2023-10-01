import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateCourse = () => {

    let history = useHistory();
    const { id } = useParams();

   
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [faculty, setFaculty] = useState(null)


    useEffect(() => {
        loadCourses();
    }, [])


    // load courses by its is and show data to forms by value

   let loadCourses = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/courses/${id}/`);
   
    setName(result.data.name);
    setDescription(result.data.description);
    setFaculty(result.data.faculty);
   }


// Update s single course by id 


   const updateSingleCourse = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('description',description)
        formField.append('faculty',faculty)

        await axios.put(`http://127.0.0.1:8000/api/courses/${id}/`, formField).then(history.push('/course'))


    }



    

    return (
       
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Update A Course</h2>
    
 <form>
    

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
      
      <button onClick={updateSingleCourse} className="btn btn-primary btn-block">Update Course</button>
      </form>
  </div>
</div>
 
    );
};

export default UpdateCourse;