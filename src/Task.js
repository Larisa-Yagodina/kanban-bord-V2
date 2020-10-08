import React, {useState} from "react";


export default function Task (props){

    const [newName, setNewName] = useState('')
    const [editModeOn, setEditModeOn] = useState(false)

 const editTask = () => {
     props.editTask(props.task.id, newName)
     setEditModeOn(false)
     setNewName('')
 }



    return (
       <div className='card'>
           <div className="card-body">
               <h5 className="card-title"> {props.task.name} </h5>
               {props.task.status}
               <hr />
               {'status'}
               {props.task.status !== 'todo' && <a onClick={() => props.changeStatus(props.task.id, 'left')} href="#"
                   className="btn btn-primary"> ← </a>}
               {props.task.status !== 'finish' && <a onClick={() => props.changeStatus(props.task.id, 'right')} href="#"
                   className="btn btn-primary"> → </a>}
               <hr />
               {'priority: '}{props.task.priority} &nbsp;
               {props.task.priority >= 1 && props.task.priority <= 9 && <a onClick={() => props.changePriority(props.task.id, 'up')} href="#"
                                                   className="btn btn-light" className="btn btn-outline-dark"> ↑ </a>}
               {props.task.priority >= 2 && props.task.priority <= 10 && <a onClick={() => props.changePriority(props.task.id, 'down')}  href="#"
                                                     className="btn btn-light" className="btn btn-outline-dark"> ↓ </a>}
                <hr />
               { !editModeOn &&
                   <a onClick={() => setEditModeOn(!editModeOn)} href="#" className="btn btn-warning"> Edit </a>}

               <a onClick={() => props.deleteTask(props.task.id)} href="#" className="btn btn-danger"> Delete </a>


               { editModeOn &&
                   <>
                   <input onChange={(e) => setNewName(e.target.value)} value={newName} placeholder='new Name'/>
                   <br/>
                   <a onClick={editTask} href="#" className="btn btn-success"> Save </a>
                   <a onClick={() => setEditModeOn(!editModeOn)} href="#" className="btn btn-warning"> Cancel </a>
               </>}

           </div>
       </div>
    )
}