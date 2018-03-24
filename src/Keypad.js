import React, {Component} from 'react';
import Key from './Key';

class Keypad extends Component {
    handleClick = this.props.handleClick;

    render() {
        return(
            <div>
                <div>
                    <Key code="1" onClick={this.handleClick} />
                    <Key code="2" onClick={this.handleClick} />
                    <Key code="3" onClick={this.handleClick} />
                    <Key code="+" onClick={this.handleClick} />
                </div>
                <div>
                    <Key code="4" onClick={this.handleClick} />
                    <Key code="5" onClick={this.handleClick} />
                    <Key code="6" onClick={this.handleClick} />
                    <Key code="-" onClick={this.handleClick} />
                </div>
                <div>
                    <Key code="7" onClick={this.handleClick} />
                    <Key code="8" onClick={this.handleClick} />
                    <Key code="9" onClick={this.handleClick} />
                    <Key code="*" onClick={this.handleClick} />
                </div>
                <div>
                    <Key code="C" onClick={this.handleClick} />
                    <Key code="0" onClick={this.handleClick} />
                    <Key code="/" onClick={this.handleClick} />
                    <Key code="=" onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default Keypad;