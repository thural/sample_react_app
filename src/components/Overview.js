import React from "react";


const Overview = (props) => {
  const { tasks, deleteList, editList } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id} >
          {task.text}
          <button onClick={() => editList(task.id)}>edit</button>
          <button onClick={() => deleteList(task.id)}>delete</button>
          </li>
      })}
    </ul>
  );
};

export default Overview;