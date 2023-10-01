import React from "react";
import ShowCourses from "./components/ShowCourses";
import AddCourses from "./components/AddCourses";
import Header from "./components/header";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Details from "./components/Details";
import UpdateCourse from "./components/Update";
import Courses from "./components/Courses";



const App = () =>{
    return (
        <div style={{textAlign:"center",height:'50em',width:'100%'}}>
            <Header/>
           <BrowserRouter>
           <Switch>
            <Route path="/course" component={ShowCourses}></Route>
           

           </Switch>
           </BrowserRouter>

        </div>
    )
}

export default App