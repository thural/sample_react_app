import React, { Component } from 'react';
import uniqid from "uniqid";
import './App.css';
import Overview from "./components/Overview";


class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      task: {
        text: '',
        id: uniqid(),
        readOnly: true
      }
    };

  };

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        readOnly: true
      }
    })
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks
        .concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      }
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks
        .filter(task => task.id !== id)
    })
  };

  toggleEdit = (id) => {
    this.setState(state => {
      return { tasks: state.tasks.map(task => {
        if (task.id === id) {
          const selected = {...task};
          selected.readOnly = !task.readOnly;
          return selected
        } else return task
      })}
    });

    console.log(this.state.tasks);
  };

  handleEdit = (e, id) => {
    this.setState(state => {
      return { tasks: state.tasks.map(task => {
        if (task.id === id) {
          const selected = {...task};
          selected.text = e.target.value;
          return selected
        } else return task
      })}
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>

        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            type="text"
            id="taskInput"
            value={task.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add Task</button>
        </form>

        <Overview
          tasks={tasks}
          deleteTask={this.deleteTask}
          toggleEdit={this.toggleEdit}
          handleEdit={this.handleEdit}
        />

      </div>
    );
  }
}

export default App;
