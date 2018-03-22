import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <h2>{this.props.output}</h2>
        );
    }
}

export default Display;