import React from 'react';
import Task from "./Task";





function Column (props) {





    return (
        <div className='col-4 col-lg' style={{border: '1px solid'}} >
            <h3> {props.column.title} </h3>
            {props.tasks.filter(el => el.status === props.column.status).sort((a, b) => b.priority - a.priority).map(el => <Task
                task={el}
                key={el.id}
                changeStatus={props.changeStatus}
                changePriority={props.changePriority}
                deleteTask={props.deleteTask}
                editTask={props.editTask}
            /> )}
        </div>
    );
}

export default Column;
