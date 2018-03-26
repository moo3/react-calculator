import React, { Component } from 'react';

class Key extends Component {
    keyStyle = {
        'backgroundColor': '#4CAF50', /* Green */
        border: 'none',
        color: 'white',
        padding: '30px',
        margin: '10px'
    };

    handleClick = () => {
        this.props.onClick(this.props.code);
    }

    render() {
        return (
            <button onClick={this.handleClick} style={this.keyStyle}>
                {this.props.code}
            </button>
        );
    }
}

export default Key;