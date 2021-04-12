import React, { Component } from 'react';
import './style.scss';

export default class SidebarWidget extends Component {
    render() {
        return (
            <div class="sidebar--widget">
                <h4>{this.props.widgetTitle}</h4>
                {this.props.children}
            </div>
        )
    }
}
