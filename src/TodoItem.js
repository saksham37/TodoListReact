import React from "react";

const TodoItem = (props) => {
  const { item, onHandleChange } = props;
  // console.log(onHandleChange);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          onHandleChange(item);
        }}
      />
      <label> {item.text} </label>
    </div>
  );
};

export default TodoItem;
