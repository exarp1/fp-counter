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
  SUBTRACT: 'SUBTRACT'
};
const initModel = { value: 0 }

// Types
interface Model { value: number}
interface Props {
  update: (message: string, model: Model) => number;
  model: { value: number };
  state: { value: number };
  onChangeModel: any;
}

// Counter component
function App({ onChangeModel, model }: Props) {
  const view = (
    <CounterView
      model={model}
      onClickAdd={() => clickHandler(MSGS.ADD)}
      onClickSubtract={() => clickHandler(MSGS.SUBTRACT)}
    />
  );
  function clickHandler (message: string) {
    return onChangeModel({ value: update({message, model})})
  }

  return view
}

function CounterView(props: {
  model: any;
  onClickAdd: any;
  onClickSubtract: any;
}) {
  const { model: { value }, onClickAdd, onClickSubtract } = props;

  return (
    <div>
      <CounterOutput classes="mv2" value={value} />

      <CounterButton classes={'pv1 ph2 mr2'} onClick={onClickAdd}>
        +
      </CounterButton>

      <CounterButton classes={'pv1 ph2'} onClick={onClickSubtract}>
        -
      </CounterButton>
    </div>
  );
}

interface CounterOutputProps {
  classes: string,
  value: number,
}

function CounterOutput(props: CounterOutputProps) {
  const { classes, value } = props;
  return <div className={classes}>Count: {value}</div>;
}

interface CounterButtonProps {
  classes: string,
  onClick: () => void,
  children: any,
}

function CounterButton(props: CounterButtonProps) {
  return (
    <button className={props.classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

const update = ({ message, model }: { message: string, model: Model}) => {
  const { value } = model;

  return message === MSGS.ADD
    ? value + 1
    : message === MSGS.SUBTRACT
    ? value - 1
    : value;
};



///////////////////////////////////////////////////////////////////////////////////
// HOC and DOM stuff - impure
///////////////////////////////////////////////////////////////////////////////////

// HOC which provides a model object we can mutate
const withModel = (WrappedComponent: any) =>
  class extends React.PureComponent<Props> {
    state = {
      value: 0
    };

    public render() {
      return (
        <WrappedComponent
          model={this.state}
          onChangeModel={this.onChangeModel}
          {...this.props}
        />
      );
    }

    public onChangeModel = (newModel: any) => this.setState({ ...newModel })
  }

const AppWithModel: React.ComponentClass<any> = withModel(App)

// Attach to the DOM
ReactDOM.render(
  <AppWithModel update={update} />,
  document.getElementById('root')
);
