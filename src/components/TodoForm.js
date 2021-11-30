import React from "react";

class TodoForm extends React.Component {

    handleChange = e => {

        this.setState({
           ...this.state,
           input: e.target.value
       })


    }

    handleComplete = e => {
        e.preventDefault()

        this.props.handleComplete()
    }
    
    handleClick = (e)=> {
        e.preventDefault();

        this.props.handleNewItem(this.state.input)
    }

    render() {
        return(
            <div>
                <input onChange={this.handleChange} type='test' name='task' placeholder='Task'  />
                <button onClick={this.handleClick} >Add Task</button>
                <button onClick={this.handleComplete} >Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm