import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    name: '',
    id: null,
    completed: false
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { 
      todos: todos
    }
     
      }
      

  handleNewItem = (item)=> {
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  
    

    console.log('clicked item:', item)
    
    
  }

  handleToggling = (item)=>{
   console.log(item.id)
    this.setState({
      ...this.state,
      todos: this.state.todos.map(t => {
        if(t.id === item.id) {
          return {...t, completed: !t.completed};
        } else {
          return t;
        }
      })
    })
  }

  handleComplete = ()=>{
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(t => {
        return (!t.completed)
      })
    })
  }

  render() {
    return (
      <div>
        <h2>~Todo List~</h2>
        <TodoList todos={this.state.todos} handleToggling={this.handleToggling} /> 
        <TodoForm handleNewItem={this.handleNewItem} handleComplete={this.handleComplete} />
      </div>
    );
  }
}

export default App;
 