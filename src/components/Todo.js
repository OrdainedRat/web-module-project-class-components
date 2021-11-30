import React from "react";

const Todo = (props) => {
   const decor = props.todo.completed == true ? 'underline' : 'none'

    const handleClicking = () => {
        props.handleToggling(props.todo)
    }
    // console.log('here is my todo', props.todo)
    return(
        <div onClick={handleClicking}>
           <p style={{textDecoration: decor }} > {props.todo.name} </p>
           
        </div>
    )
}

export default Todo