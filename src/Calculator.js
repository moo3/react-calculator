import React, { Component } from 'react';
import is from 'is';
import Display from './Display';
import Keypad from './Keypad';
import logo from './logo.svg';
import './Calculator.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      left: '',
      right: '',
      op: null,
      output: 0
    }
  }

  handleClick(key) {
    this.handleInput(key);
  }

  handleInput(input) {
    //experimenting - expand logic to do proper calculation
    let isNumber = /[1234567890]/.test(input);
    let isExpr = !isNumber;
    let isResultExpr = isExpr && input === '=';
    let targetState = {};

    if(isExpr) {
      if(isResultExpr) {
        targetState.output = parseInt(this.state.left) + parseInt(this.state.output);
      } else {
        targetState.left = this.state.output;
        targetState.output = '0';
      }
    } else {
      targetState.output = this.state.output + input;
    }

    this.setState(targetState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculator</h1>
        </header>
        <section>
          <Display output={this.state.output}/>
          <Keypad handleClick={this.handleClick.bind(this)}/>
        </section>
      </div>
    );
  }
}

export default App;
