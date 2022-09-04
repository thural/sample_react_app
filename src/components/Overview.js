import React from "react";


const Overview = (props) => {
  const { tasks, deleteTask, toggleEdit, handleEdit } = props;

  return (
    <ul>
      {
        tasks.map(task =>
        (
          <li key={task.id} >
            <input type="text"
              id="taskInput"
              onChange={(e) => handleEdit(e, task.id)}
              defaultValue={task.text}
              readOnly={task.readOnly}
            />
            <button onClick={() => toggleEdit(task.id)}>
              {task.readOnly ? "edit" : "submit"}
            </button>
            <button onClick={() => deleteTask(task.id)}>
              delete
            </button>
          </li>
        ))
      }
    </ul>
  );
};

export default Overview;