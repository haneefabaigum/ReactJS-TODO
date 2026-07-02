import React from "react";
function TaskItem({taskName,deleteTask,completeTask,iscompleted}){  //destructuring the props object to get the taskName property{
      //just by using this props we can pass the data from parent component to child component  neednot be used the list of props like props.taskName
    console.log(taskName, "iscompleted:", iscompleted);
      return(
  
  <>
 <li className='task d-flex justify-content-between border-bottom border-1 p-2'>
            {taskName}
            {!iscompleted &&(
                <div className='task-btns w-50 border-start border-1 d-flex justify-content-around align-items-center'>
               <button className='btn btn-sm btn-success' onClick={() => completeTask(taskName)}>complete</button>
               <button className='btn btn-sm btn-danger' onClick={() => deleteTask(taskName)}>Delete</button>
            </div>
        )}
          </li>
  </>
    )
}
export default TaskItem;
