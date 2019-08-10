// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Utils
import _ from 'lodash';

// Constants
const initModel = {
  value: 0
};

// Counter component
function Counter(model: { value: number }) {
  return (
    <div>
      <div className={'mv2'}>Count: {model.value}</div>
      <button
        className={'pv1 ph2 mr2'}
        onClick={() => console.log('+ clicked!')}
      >
        +
      </button>
      <button className={'pv1 ph2'} onClick={() => console.log('- clicked!')}>
        -
      </button>
    </div>
  );
}

// Update counter
function update(msg: string, value: number): number{
  return msg === 'plus' ? value + 1 : msg === 'minus' ? value - 1 : value;
}


// IMPURE CODE BELOW
interface AppProps {
  initModel: { value: number},
  update: (msg: string, value: number)=> number,
  view: (model: { value: number}) => any,
  node: any,
}

// App to render the counter
const app = ({initModel, update, view, node}: AppProps) => {
  ReactDOM.render(view(initModel), node);
}

// Capture root node reference to attach our virtual DOM to
const rootNode = document.getElementById('root');

// Show the app
app({ initModel, update, view: Counter, node: rootNode});
