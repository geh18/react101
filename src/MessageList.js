import React, { Component } from 'react';
import SingleMessage from './SingleMessage';


class MessageList extends Component {

  state = {
    messages: [
      {
        from: 'Martha',
        content: 'I will be traveling soon',
        status: 'read'
      },
      {
        from: 'John',
        content: 'Come over!',
        status: 'read'
      },
    ]
  }

  render() {
    const messageList = this.state.messages.map(function(message, index) {
      return(
        <div>
          <SingleMessage key={index} message={message} />
          <br/><br/>
        </div>
      )
    })

    return(
      <div>
        <h1>List of Messages</h1>
        {messageList}
      </div>
    )
  }
}

export default MessageList;
