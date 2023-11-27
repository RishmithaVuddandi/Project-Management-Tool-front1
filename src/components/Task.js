import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import AddTaskModal from "./AddTaskModal";
import BtnPrimary from "./BtnPrimary";
import DropdownMenu from "./DropdownMenu";
// import TaskModal from "./TaskModal";
import { useParams, useNavigate } from "react-router";
import ProjectDropdown from "./ProjectDropdown";
import axios from "axios";
import toast from "react-hot-toast";
import TaskModal from "./TaskModal";
import { Link } from "react-router-dom";

function Task(props) {

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    let data = {};
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
      data = {
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      };
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
      data = {
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      };
    }

    updateTodo(data);
  };
  const [addTaskModalProps, setAddTaskModalProps] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const [isAddTaskModalOpen, setAddTaskModal] = useState(false);

  // const [columns, setColumns] = useState(columnsFromBackend);
  const [columns, setColumns] = useState({});
  const [isRenderChange, setRenderChange] = useState(false);
  const [isTaskOpen, setTaskOpen] = useState(false);
  const [taskId, setTaskId] = useState(false);
  const [title, setTitle] = useState("");
  const { projectId } = useParams();
  const [data, setData] = useState();
  const [edit,setEdit]=useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAddTaskModalOpen || isRenderChange) {
      axios
        .get(`https://project-planner-server1.onrender.com/tasks/`)
        .then((res) => {
          console.log("Fetched project data:", res.data,props.id);
          var arr = [];
          var count = 0;
          res.data.map((val, index) => {
            if (val.projectId === props.id) {
                console.log(val,arr)
              arr[count] = val;
              count += 1;
              console.log("Updated columns state:", columns);
                setEdit(true)
              setRenderChange(false);
            }
            
          });
          setData(arr)
        })
        .catch((error) => {
          toast.error("Something went wrong");
        });
        
    }
  }, [projectId, isAddTaskModalOpen, isRenderChange,props]);
  const [expand,setExpand]=useState();
  const handleEdit=(event,id)=>{
    event.preventDefault();
    setTaskId(id)
    setExpand(true);

  }
  const  handleDelete2=(data2)=>{
    axios.delete("https://project-planner-server1.onrender.com/tasks/delete/"+data2)
    .then((res)=>{
        if(res.status===200){
            alert("Task deleted successfully");
            window.location.reload();
        }
    })
  }
  const handleUpdate=(id)=>{
    setExpand(false)
    setTaskId(id);
    setTaskOpen(true)
    const taskData = {
        title,
        description: desc,
        assignedTo: assignedto,
        projectId: props.id,
      };
      axios.put("https://project-planner-server1.onrender.com/tasks/update/"+id,taskData)
      .then((res)=>{
        if(res.status===200){
            alert("Task Updated Successfullt")
        }
        else{
            Promise.reject();
        }
      })
      .catch((err)=>alert(err))
  }
  
    const [desc, setDesc] = useState('');
    const [assignedto, setAssignedto] = useState('');
  var exp=false;
  var handle1;
  const display = function () {
    console.log("ekwjgnd",data)
    try{
    return data.map((val, index) => {
        console.log("entered");
      return (
        <>
        {/* <DropdownMenu taskId={taskId}  projectId={props.prid} setRenderChange={isRenderChange}  /> */}
          <div class="card">
            <div className="card-header bg-warning" style={{ backgroundColor: 'green' }}>
            <h5 class=" d-inline-block mr-auto">{val.title} <span className="ml-auto d-inline-block text-right" style={{right:'0'}}><DropdownMenu taskId={val._id} handleDelete={handleDelete} projectId={props.prid} setRenderChange={isRenderChange}  /></span></h5>
           </div>
            <div class="card-body">
              <h5 class="card-title">{val.assignedTo}</h5>
              <p class="card-text">
                {val.description}
              </p>
              
            </div>
        </div>
        </>
      );
    
    });
}
catch{}
  };
  const updateTodo = (data) => {
    axios
      .put(`https://project-planner-server1.onrender.com/project/${projectId}/todo`, data)
      .then((res) => {
        console.log("Task updated sucessfully");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  const handleDelete = (e, taskId) => {
    e.stopPropagation();
    axios
      .delete(`https://project-planner-server1.onrender.com/tasks/delete/${taskId}`)
      .then((res) => {
        toast.success("Task is deleted");
        setRenderChange(true);
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  const handleTaskDetails = (id) => {
    setTaskId({ projectId, id });
    setTaskOpen(true);
  };

  const handleLocation = (e) => {
    e.preventDefault();
    const newParams = new URL(e.currentTarget.href).pathname.slice(1);
    console.log("New Params:", newParams);
    setSelectedProjectId(newParams);
    setAddTaskModal(true);
    setAddTaskModalProps({ projectId: newParams }); // Pass the project ID to the modal
  };

  const handleAddTask = () => {
    setAddTaskModal(true);
    setAddTaskModalProps({ projectId: selectedProjectId }); // Pass the project ID to the modal
  };

  return (
    <div className="px-12 py-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl text-gray-800 flex justify-start items-center space-x-2.5">
          <span>
            {title.slice(0, 25)}
            {title.length > 25 && "..."}
          </span>
          <ProjectDropdown id={props.id} userId={props.userID} navigate={navigate} />
        </h1>
        <BtnPrimary onClick={handleAddTask} style={{ backgroundColor: '#9A3B3B', fontFamily:'serif',fontSize:'20px' }}>Add todo</BtnPrimary>
      </div>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >

        {edit?(<>{display()}</>):(null)}
      </DragDropContext>
      <AddTaskModal
        isAddTaskModalOpen={isAddTaskModalOpen}
        setAddTaskModal={setAddTaskModal}
        projectId={props.id}
      />
      <TaskModal
        isOpen={isTaskOpen}
        setIsOpen={setTaskOpen}
        id={{ projectId: props.id, id: taskId }}
      />
    </div>
  );
}

export default Task;
