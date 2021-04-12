import React, { Component } from 'react';
import './style.scss';

export default class AccordingToggle extends Component {
    render() {
        return (
            <div className="accordition-toggle">
                {this.props.children}
            </div>

        )
    }
}
