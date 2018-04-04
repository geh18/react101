import React, { Component } from 'react';


class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: 'Gezim'
    }
  }

  handleInputChange = (e) => {
    this.setState({
      val: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Hi {this.state.val}</p>
        <input type='text' value={this.state.val} onChange={this.handleInputChange} />

      </div>
    )
  }
}

export default Input;
