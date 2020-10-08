import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Column from "./Columns";


const columns = [
  {id: 1, title: 'To Do', status: 'todo',},
  {id: 2, title: 'Progress', status: 'progress',},
  {id: 3, title: 'Review', status: 'review',},
  {id: 4, title: 'Finish', status: 'finish',},
]

const tasksList = [
  {id: 17, name: 'Course React Project', status: 'todo', priority: '2'},
  {id: 11, name: 'Learn English', status: 'todo', priority: '1'},
  {id: 12, name: 'Find job', status: 'todo', priority: '8'},
  {id: 13, name: 'Course JSP', status: 'progress', priority: '4'},
  {id: 14, name: 'Course React', status: 'progress', priority: '2'},
  {id: 15, name: 'Kanban Board', status: 'review', priority: '5'},
  {id: 16, name: 'Course JS Syntax', status: 'finish', priority: '5'},
]


function App() {

  const [tasks, setTasks] = useState(tasksList)

  const statuses = ['todo', 'progress', 'review', 'finish'];

  const changeStatus = (id, direction) => {
    const newTasks = tasks.map(el => {
      if (el.id === id) {
        if (direction === 'left') return {...el, status: statuses[statuses.indexOf(el.status) - 1]};
        if (direction === 'right') return {...el, status: statuses[statuses.indexOf(el.status) + 1]};
      } else {
        return el;
      }
    })
    setTasks(newTasks)
  }

  const changePriority = (id, direction) => {
    const newTasks = tasks.map(el => {
      if (el.id === id) {
        if (direction === 'up') return {...el, priority: +el.priority + 1 }
        if (direction === 'down') return {...el, priority: +el.priority - 1 }
      } else return el;
    })
    setTasks(newTasks)
  }

  const deleteTask = (id) => {
    if (window.confirm('Are you sure?')) {
      const newTasks = tasks.filter(el => el.id !== id)
      setTasks(newTasks);
    }
  }

  const [addModeOn, setAddModeOn] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [newPriority, setNewPriority] = useState('')

  const addNewTask = (newTask, newPriority)  => {
    const newTasks = [...tasks, {id: Math.random(), name: newTask, status: 'todo', priority: newPriority}];
    setTasks(newTasks)
    setAddModeOn(false)
    setNewPriority('')
    setNewTask('')
  }


  const editTask = (id, newName) => {
    const newTasks = tasks.map(el => {
      if (el.id === id) return {...el, name: newName};
      return el;
    })
      setTasks(newTasks)
  }


  return (
<div>
  <h1 > Kanban Bord V1 </h1>
      <hr />
  { !addModeOn && <a onClick={() => setAddModeOn(true)} href="#" className="btn btn-primary"> Add new Task </a>}

  { addModeOn &&
    <>
    <input onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder='Name of Task'/>
    <input onChange={(e) => setNewPriority(e.target.value)} value={newPriority} type='number' pattern='[0-9]{0,5}' placeholder='Priority (from 1 to 10)'/>
    <a onClick={() => addNewTask(newTask, newPriority)} href="#" className="btn btn-success"> SAVE </a>
    <a onClick={() => setAddModeOn(false)} href="#" className="btn btn-danger"> CANCEL </a> </>}

  <br />
    <div className='container'>
      <div className='row'>
        {columns.map(el => <Column
            column={el}
            tasks={tasks}
            key={el.id}
            changeStatus={changeStatus}
            changePriority={changePriority}
            deleteTask={deleteTask}
            editTask={editTask}
        />)}

      </div>
    </div>
  </div>

  );
}

export default App;
