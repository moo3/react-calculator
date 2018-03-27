import React, { Component } from 'react';

class Display extends Component {
    displayStyle = {
        position: 'relative',
        height: '100px'
    };

    outputStyle = {
        fontSize: '4em',
        margin: '5px',
        margin: '15px'
    }

    render() {
        return (
            <div style={this.displayStyle}>
                <h1 style={this.outputStyle}>{this.props.output}</h1>
            </div>
        );
    }
}

export default Display;