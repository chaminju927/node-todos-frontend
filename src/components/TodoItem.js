import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import api from "../utils/api";

const TodoItem = ({ item, getTasks }) => {
  const [isComplete, setIsComplete] = useState(item.isComplete);

  const putTask = async (event) => {
    setIsComplete((prev) => !prev);
    const putId = event.target.id;
    try {
      const response = await api.put(`/tasks/${putId}`, {
        task: item.task,
        isComplete: !isComplete,
      });
      if (response.status === 200) {
        console.log("updated");
        getTasks();
      }
    } catch (err) {
      console.log("err:", err);
    }
  };

  const deleteTask = async (event) => {
    const deleteId = event.target.id;
    try {
      const response = await api.delete(`/tasks/${deleteId}`);
      if (response.status === 200) {
        console.log("deleted");
        getTasks();
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button
              id={item._id}
              className="button-delete"
              onClick={(event) => deleteTask(event)}
            >
              삭제
            </button>
            <button
              id={item._id}
              className="button-delete"
              onClick={(event) => putTask(event)}
            >
              {isComplete ? "끝남" : "안끝남"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
