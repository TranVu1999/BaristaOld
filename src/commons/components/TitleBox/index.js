import React, { Component } from 'react';
import './style.scss';

export default class TitleBox extends Component {
    render() {
        const {smallTitle, mainTitle} = this.props;
        return (
            <div className="title-box">
                <p>{smallTitle}</p>
                <h2>{mainTitle}</h2>
            </div>
        )
    }
}
