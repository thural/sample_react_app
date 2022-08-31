import React, { Component } from 'react';

class MyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count:0,
      message:''
    }
    this.countUp = this.countUp.bind(this)
  }
  countUp() {
    this.setState({count:this.state.count + 1})
  }
  render() {
    const {title, onButtonClicked} = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <button onClick={onButtonClicked}>Click Me!</button>
        <button onClick={this.countUp}>Click to count!</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default MyComponent

