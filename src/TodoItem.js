import React from "react";

const TodoItem = (props) => {
  const { item, onhandleChange } = props;
  console.log(onhandleChange);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          onhandleChange(item);
        }}
      />
      <label> {item.text} </label>
    </div>
  );
};

export default TodoItem;
