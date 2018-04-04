import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import List from './List.js';
import MessageList from './MessageList.js';
import Input from './Input.js';

ReactDOM.render(
  <div>
      <App/>
    <hr/>
      <List/>
    <hr/>
     <MessageList/>
    <hr/>
      <Input/>
  </div>, document.getElementById('root'));
