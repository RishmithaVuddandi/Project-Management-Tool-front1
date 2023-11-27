import React, { useEffect, useState } from "react";
import Task from "./Task"; // Import your Task component
import Navbar from "./Navbar"; // Import your Navbar component
import Sidebar from "./Sidebar"; // Import your Sidebar component
import image from '../2.jpg';
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import { Link } from 'react-router-dom';
import TaskModal from "./TaskModal";
import AddProjectModal from "./AddProjectModal";
function Kanban(props) {
  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust the height according to your needs
    display: 'flex',
    flexDirection: 'column',
  };
  const [projectID,setProjectID]=useState();
  const [edit,setEdit]=useState(false);
  const [name,setname]=useState("");
  useEffect(() => {
    try{
      const storedId = localStorage.getItem('prid');
      
 
      if (storedId) {
        setProjectID(JSON.parse(storedId));
      }
      
    }
    catch{
     
    }
  }, [props,edit]);
  
  const getPrId=(child)=>{
    setProjectID(child.id);
    setname(child.name);
    // console.log("paersg",child.id)
    setEdit(true)
    localStorage.setItem('prid', JSON.stringify(child.id));
  }
  return (
    <div style={containerStyle}>
    {console.log(1)}
    {console.log(projectID,props.id)}
      <Navbar /> {/* the Navbar component */}
      <div className="text-center fw-bold" style={{fontFamily:'Slabserif',fontSize:'25px'}}>{name}</div>
      <div className="flex container mx-auto">
        <Sidebar id={props.id} getPrId={getPrId} /> {/* the Sidebar component */}
        {edit?(<div className="flex-1">
          <Task id={projectID} userID={props.id} /> {/* the Task component here */}
        </div>):(null)}
      </div>
    </div>
  );
}

export default Kanban;
