import React, { Component } from 'react';
import './style.scss';

export default class DrinkItem extends Component {
    render() {
        const {drinkContent} = this.props;

        return (
            <div className="menu-item">
                <div className="menu-item--thumb">
                    <a href="/#">
                        <img src = {drinkContent.drinkImg} alt="coffee" />
                    </a>
                </div>

                <div className="menu-item--text">
                    <div className="menu-item--text__top">
                        <h3>
                            <a href="/#">{drinkContent.drinkTitle}</a>
                        </h3>
                        <div className="space" />
                        <h3 className="price">${drinkContent.drinkPrice}</h3>
                    </div>
                    <div className="menu-item--text__bottom">
                        <p>{drinkContent.drinkShortDesc}</p>
                        {drinkContent.isNew ? <span className="label">New</span> : ""}
                        
                    </div>
                </div>
            </div>
        )
    }
}
