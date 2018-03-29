import React, {Component} from 'react';


class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>Heyo! Counting: {this.state.count}</p>
        <button onClick={this.incrementCount}>Add one</button>
      </div>
    )
  }
}

export default App;
