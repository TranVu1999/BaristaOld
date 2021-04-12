import React, { Component } from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

export default class Breadcrumb extends Component {
    render() {
        const {mainTitle} = this.props;

        return (
            <div className="main-page__breadcrumb">
                <div className="cf-container d-flex-between full-screen">
                    <h3>{mainTitle}</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./index.html">Barista</a></li>
                        <li className="breadcrumb-item"><a href="./my-account.html">Error 404</a></li>                        
                    </ul>
                </div>

                <div className="d-flex-between responsive">

                    <NavLink to = "/my-account">
                        <span aria-hidden="true" className="arrow_carrot-left"></span>
                    </NavLink>
                    <h3 id="titlePage">{mainTitle}</h3>
                    <a href="/#" className="cart">
                        <span aria-hidden="true" className="icon_cart_alt" />
                        <span className="number">1</span>
                    </a>
                </div>
            </div>
        )
    }
}
