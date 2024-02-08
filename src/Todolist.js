import React,{useState} from "react";
import TodoItem from "./TodoItem.js";

function Todolist(){
    const[tasks,setTasks]=useState([{
        id:1,
        text:'ScrumCall',
        completed:true
    },
    {
        id:2,
        text:'Meeting',
        completed:false
    }]);
    const[text,setText]=useState('');
    function addTask(){
        const newTask={
            id:Date.now(),
            text,
            completed:false
        };
        setTasks([...tasks,newTask]);
        setText('');
    }
    function deleteTask(id){
        setTasks(tasks.filter(tasks=> tasks.id !== id));
    }
    function toggleTasks(id){
        setTasks(tasks.map(tasks=>{
            if(tasks.id===id)
            {
                return{...tasks,completed:!tasks.completed};
            }
            else
            {
                return tasks;
            }
        })); 
    }
    return(
        <div className="Todolist">
           {tasks.map(tasks=>(
                <TodoItem Key={tasks.id}
                tasks={tasks}
                toggleTasks={toggleTasks}
                deleteTask={deleteTask}>
                </TodoItem>
            ))}
        <input
        value={text}
        onChange={e=>setText(e.target.value)}>
        </input>
        <button onClick={()=>addTask(text)}>
           Add
        </button>
        </div>
    );
}
export  default Todolist;