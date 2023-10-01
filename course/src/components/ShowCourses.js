import React, {useState, useEffect} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Toast } from "react-bootstrap";
import { Link } from 'react-router-dom';



const ShowCourses = () => {
    const [courses, setCourses] = useState([])

    const getCourses = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/courses/')
        setCourses(response.data)
    }

    useEffect(() => {
        getCourses();
    },[])


    const [show, setShow] = useState(false);

    return(
        <div>

        <Toast onClose={() => setShow(false)} show={show} delay={3000} bg="primary" autohide>
          <Toast.Header>
          <i class="bi bi-coin" style={{fontSize:'2em'}}></i>
            <strong className="me-auto" style={{marginLeft:'0.5em'}}>Collect Course</strong>
          </Toast.Header>
          <Toast.Body>Woohoo, you're collecting this course. Thank you !</Toast.Body>
        </Toast>
      
         
           <h1 >All the Courses</h1>
           <div style={{margin:'3em', display:'flex',padding:'2em',}}>
           {
             courses.map((course,index) => (
             <div>

    <Card className="m-2 rounded shadow-lg" style={{ width: '18rem', height:'24rem'}}>
      <Card.Img variant="top" src={course.img} style={{height:'10rem'}} />
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>
          {course.description}
        </Card.Text>
        <br></br>
      
        {!show && <Button variant="success" onClick={() => setShow(true)} style={{fontSize:'1em', borderRadius:'0.3em',margin:'0.1em'}}><i class="bi bi-coin"></i>{' '}Collect</Button>}
        <Link  to={`/detail/${course.id}`}><Button variant="primary" style={{color:'white',fontSize:'1em', borderRadius:'0.3em',margin:'0.1em'}}>Details</Button></Link>
      </Card.Body>
    </Card>
    </div>


             )
            )
           }
           </div>
        </div>
    );
};

export default ShowCourses;