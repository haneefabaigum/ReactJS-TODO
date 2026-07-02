import { useState } from 'react'
import './App.css';
import TaskItem from './components/TaskItem';

function App() {
  const [count, setCount] = useState(0)
  const [newTask, setNewTask] = useState("");
  const[myTasks, setMyTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([]);
  function handleInputChange(e)
  {
    let newValue = e.target.value;
    setNewTask(newValue);
    //console.log(newTask);
  }

  function addTask(){
    setMyTasks(prev=> [...prev, newTask]);
   console.log(myTasks);
   setNewTask("");
  }

  function deleteTask(taskName){
      let afterDeletion= myTasks.filter(X=>X!=taskName);
    setMyTasks(afterDeletion);
  }
   function completeTask(taskName){
      let completedtask= myTasks.filter(X=>X==taskName);
      let afterCompletion= myTasks.filter(X=>X!=taskName);
    console.log("completed task: ", completedtask[0]);
    setMyTasks(afterCompletion);

    setCompletedTasks(prev=>[...prev, completedtask[0]]);
  
  }

 // let myTasks=["Writing a code", "Making a video", "Shopping for MOM", "Attending an event"];
 //const[myTasks, setMyTasks] = useState(["Writing a code", "Making a video", "Shopping for MOM", "Attending an event"])
  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className='todo-list-mainDiv'>
       <h3 className='text-center'>MY TODO LIST</h3>
      
       <div className='todo-task-input-div'>
         <div className="form-floating w-75">
          <input type="text" className="form-control" id="floatingInput" placeholder="Todo task" onChange={handleInputChange} value={newTask}/>
    
           <label htmlFor="floatingInput">Todo task</label>
          </div>
      <button className='btn btn-primary' id='add-button' onClick={addTask}>+</button>
      </div >


         <h6>To be completed</h6>
         <ul className='tasks-list'>
           {
          myTasks.map((task,index)=>
             <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask} iscompleted={false}/>  
          )
           } 
         </ul>

         <hr />

        
         <h6>Completed Tasks</h6>
         <ul className='tasks-list'>
           {
          completedTasks.map((task,index)=>
             <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask} iscompleted={true}/>  
          )
           }
           
         </ul>
       </div>
      </div>
    
  )
}

export default App
