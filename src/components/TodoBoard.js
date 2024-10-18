import React from "react";
import TodoItem from "./TodoItem";
const TodoBoard = ({ todoList, getTasks }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item) => <TodoItem item={item} getTasks={getTasks} />)
      ) : (
        <h2>No Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
