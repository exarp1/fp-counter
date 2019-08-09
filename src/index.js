// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Counter extends React.Component {
  render() {
    return (
      <button> Hello World!</button>
    )
  }
}
ReactDOM.render(
  <Counter/>,
  document.getElementById('root')
);
