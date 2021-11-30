import React from "react"
import Todo from "./Todo"
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
 
const TodoList = (props) => {
    

    console.log('here it is', props.todos)
    return(
        <div>
            <h2>Showing</h2>
          {props.todos.map(item => (
             <Todo key={item.id} todo={item} handleToggling={props.handleToggling} handleComplete={props.handleComplete} />
          ))}
            
          
            
        </div>
    )
 }

 export default TodoList