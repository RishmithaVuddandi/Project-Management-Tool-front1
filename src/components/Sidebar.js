import React, { useCallback, useEffect, useState } from 'react';
import AddProjectModal from './AddProjectModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

{/* <p>Project ID: {project._id}</p> */}

const Sidebar = (props) => {
  const [isModalOpen, setModalState] = useState(false);
  const [projects, setProjects] = useState([]);
  const [paramsWindow, setParamsWindow] = useState(window.location.pathname.slice(1));
  const createProject = () => {
    const projectData = {
      title: 'Project Title',
      description: 'Project Description',
      assignedTo: 'Assigned User',
      userId: props.id.id,
    };

    axios.post('https://project-planner-server1.onrender.com/project', projectData)
      .then((res) => {
        console.log('Project created:', res.data);
        closeModal();
        document.dispatchEvent(new Event('projectUpdate'));
      })
      .catch((error) => {
        console.error('Error creating project:', error);
      });
  };

  useEffect(() => {
    {console.log(props.id.id,"akjsbjsnfs")}
    var rr=[]
    var count=0;
    axios.get('https://project-planner-server1.onrender.com/project')
      .then((res) => {
        console.log(res.data,props.id)
        res.data.map((val,index)=>{
          if(val.userid===props.id){
            rr[count]=val;
            count+=1
          }
          setProjects(rr);
        })
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
      console.log(rr,projects)
  }, [props.id]);

  const openModal = useCallback(() => {
    setModalState(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalState(false);
  }, []);


  const projectData = () => {
  };

  const handleLocation = (e,data) => {
    e.preventDefault(); // Corrected from data.preventDefault() to data.preventDefault()
    console.log("clicked")
    props.getPrId(data);
    const newParams = new URL(e.currentTarget.href).pathname.slice(1);
    console.log('New Params:', newParams);
    setParamsWindow(newParams);
  };

  return (
    <div className='py-5'>
      <div className="px-4 mb-3 flex items-center justify-between">
        <span style={{ marginLeft: '0px', marginRight: '20px', fontFamily:'serif',fontSize:'20px' }}>Projects</span>
        <button onClick={openModal} className='bg-indigo-200 rounded-full p-[2px] focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-offset-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-indigo-600">
            <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <ul className='border-r border-gray-300 pr-2'>
      {console.log(projects,"askjfksjdf")}
        {projects.map((project, index) => (
          <Link key={index}  onClick={(e) => handleLocation(e,{id:project._id,name:project.title})}>
            <li className={`px-5 py-1.5 mb-1 text-gray-600 font text-sm capitalize select-none hover:text-indigo-600 rounded transition-colors hover:bg-indigo-200/80 ${paramsWindow === project._id && 'text-indigo-600 bg-indigo-200/80'}`} style={{fontFamily:'serif',fontSize:'20px'}}>
              {project.title}
            </li>
          </Link>
        ))}
      </ul>
      <AddProjectModal id={props.id} isModalOpen={isModalOpen} closeModal={closeModal} createProject={createProject} />
    </div>
  );
};

export default Sidebar;
