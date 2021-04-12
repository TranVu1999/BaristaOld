import React, { Component } from 'react';
import './style.scss';

export default class CategoryItem extends Component {
    render() {
        const {catTitle, amount} = this.props;
        return (
            <div className="cat-item">
                <span aria-hidden="true" className="arrow_triangle-right" />
                <a href="/#">{catTitle} ({amount})</a>
            </div>
        )
    }
}
