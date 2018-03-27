import React, { Component } from 'react';
import is from 'is';
import Display from './Display';
import Keypad from './Keypad';
import logo from './logo.svg';
import './Calculator.css';

let Operations = {
  add: (a,b) => {
    return parseInt(a)+parseInt(b);
  },

  subtract: (a,b) => {
    return parseInt(a)-parseInt(b);
  },

  multiply: (a,b) => {
    return parseInt(a)*parseInt(b);
  },

  divide: (a,b) => {
    if(parseInt(b) === 0) return a;
    return parseInt(a)/parseInt(b);
  },
}

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      left: '',
      right: '',
      op: null,
      output: '0'
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
        switch(this.state.op) {
          case '+': 
            targetState.output = Operations.add(this.state.left, this.state.output);
            break;
          
          case '-':
            targetState.output = Operations.subtract(this.state.left, this.state.output);
            break;

          case '*':
            targetState.output = Operations.multiply(this.state.left, this.state.output);
            break;

          case '/':
            targetState.output = Operations.divide(this.state.left, this.state.output);
            break;
        }
      } else {
        targetState.left = this.state.output;
        targetState.output = '';
        targetState.op = input;
      }
    } else {
      if(input === 'C') {
        targetState.output = '';
      } else {
        targetState.output = this.state.output === '0' ? input : this.state.output + input;
      }
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
