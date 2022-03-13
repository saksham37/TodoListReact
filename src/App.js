import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          text: "My task 1",
          completed: true
        },
        {
          id: 2,
          text: "My task 2",
          completed: true
        },
        {
          id: 3,
          text: "My task 3",
          completed: true
        },
        {
          id: 4,
          text: "My task 4",
          completed: true
        },
        {
          id: 5,
          text: "My task 5",
          completed: true
        }
      ]
    };
  }
  handleChange = (item) => {
    console.log("handleChange called");
    const todoList = this.state.todos;
    let index = todoList.indexOf(item);
    todoList[index].completed = !todoList[index].completed;
    this.setState({
      todos: todoList
    });
  };
  render() {
    const todoList = this.state.todos;
    // const handleChange = this.handleChange;
    // console.log(handleChange);
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        {todoList.map((item) => {
          return (
            <TodoItem
              item={item}
              onHandleChange={this.handleChange}
              key={item.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
