import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import logo from './logo.svg';
import './Calculator.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      curr: null,
      prev: null,
      op: null,
      output: ''
    }
  }

  handleClick(key) {
    this.handleInput(key);
  }

  handleInput(input) {
    //experimenting - expand logic to do proper calculation
    this.setState({
      output: this.state.output + input
    });
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
