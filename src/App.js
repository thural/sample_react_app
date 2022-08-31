import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [],
    };
  };

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
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
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default App;
