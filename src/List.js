import React, {Component} from 'react';


class List extends Component {
  
  state = {
    count: 3,
    items: []
  }

  componentWillMount() {
    this.populateItems();
  }

  populateItems = () => {
    const items = [];
    for (let i=0; i < this.state.count; i++) {
      items.push('item ' + i);
    }
    this.setState({items: items})
  }

  listItems = () => {
    return this.state.items.map(function(item) {
      return <li key={item}>{item}</li>
    });
  }

  addToList = () => {
    this.setState({count: this.state.count + 1});
    this.populateItems();
  }

  removeFromList = () => {
    this.setState({count: this.state.count - 1});
    this.populateItems();
  }

  render() {
    return (
      <div>
        <button onClick={this.addToList}>Add</button>
        <br></br>
        <button onClick={this.removeFromList}>Remove</button>
        <ul>
          {
            this.state.items.map(function(item) {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default List;
