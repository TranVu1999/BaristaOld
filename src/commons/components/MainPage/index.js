import React, { Component } from 'react';

import './style.scss';

export default class MainPage extends Component {
    render() {
        return (
            <section className="main-page">
                {this.props.children}
            </section>
        )
    }
}
