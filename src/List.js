import React, {Component} from 'react';


class List extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [
        'item 1',
        'item 2',
        'item 3',
      ]
    }
  }

  listItems = () => {
    const list = this.state.items.map(function(item) {
      return <li key={item}>{item}</li>
    });
    return list;
  }

  componentWillMount() {
    this.setState({items: this.state.items})
  }

  render() {
    return (
      <ul>
        {this.listItems}
      </ul>
    )
  }
}

export default List;
