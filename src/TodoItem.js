import React from "react";
function TodoItem({tasks,deleteTask,toggleTasks}){
    function handlechange(){
        toggleTasks(tasks.id);
    }


return(
    <div className="TodoItem">
        <input type="CheckBox"
                checked={handlechange}
                onChange={toggleTasks}></input>
        <p>{tasks.text}</p>
        <button onClick={()=>deleteTask(tasks.id)}>Delete</button>
    </div>
);
}
export default TodoItem;