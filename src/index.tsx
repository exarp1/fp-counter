// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Utils
import _ from 'lodash';

// Constants
const MSGS = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
}

// Types
interface Props {
  update: (msg: string, model: { value: number }) => number
}
interface State {
  value: number
}
interface Model extends State {}


// Counter component
class App extends React.Component<Props> {
  state= {
    value: 0
  }

  render() {
    return (
      <CounterView
        model={this.state}
        onClickAdd={() => this.clickHandler(MSGS.ADD)}
        onClickSubtract={() => this.clickHandler(MSGS.SUBTRACT)}
      />
    )
  }

  clickHandler = (message: string) =>
    this.setState({ value: this.props.update(message, this.state) })
}

function CounterView (props: {model: any, onClickAdd: any, onClickSubtract: any}) {
  const { model, onClickAdd, onClickSubtract } = props

  return (
      <div>
        <div className={"mv2"}>Count: {model.value}</div>
        <button
          className={"pv1 ph2 mr2"}
          onClick={onClickAdd}
        >
          +
        </button>
        <button
          className={"pv1 ph2"}
          onClick={onClickSubtract}
        >
          -
        </button>
      </div>
  )
}

const update = (msg: string, model: Model) => {
  const { value } = model

  return (msg === MSGS.ADD) ? value + 1
    : (msg === MSGS.SUBTRACT) ? value - 1
    : value
}

// Attach to the DOM
ReactDOM.render(
  <App update={update}/>,
  document.getElementById('root')
)
