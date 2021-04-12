import React, { Component } from 'react';

import './style.scss';

export default class MainPageComponent extends Component {
    render() {
        return (
            <section className="main-page section-padding">
                {this.props.children}
            </section>
        )
    }
}
