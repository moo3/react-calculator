import React, { Component } from 'react';

class Key extends Component {
    handleClick = () => {
        this.props.onClick(this.props.code);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.code}
            </button>
        );
    }
}

export default Key;