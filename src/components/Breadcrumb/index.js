import React, { Component } from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

export default class BreadcrumbComponent extends Component {

    // split the param according character '-' into word
    // Then, format the word of param
    createText = text =>{
        let wordPattern = text.split('-');

        let res = '';
        for(let word of wordPattern){
            res += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        }

        return res;
    }

    showBreadcrumb = path =>{
        const pathPattern = path.split('/');

        let itemBreadcrumb = pathPattern.map((word, index) =>{
            if(word){
                return(
                    <li key = {index}
                        className="breadcrumb-item"
                    >
                        <a href="./my-account.html">{this.createText(word)}</a>
                    </li> 
                )
            }
            return null;
        })

        return itemBreadcrumb;
    }

    render() {
        const {url} = this.props;

        return (
            <div className="main-page__breadcrumb">
                <div className="cf-container d-flex-between full-screen">
                    <h3>My Account</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./index.html">Barista</a></li>
                        {/* <li className="breadcrumb-item"><a href="./my-account.html">My Account</a></li> */}
                        {this.showBreadcrumb(url)}
                    </ul>
                </div>

                <div className="d-flex-between responsive">

                    <NavLink to = "/my-account">
                        <span aria-hidden="true" className="arrow_carrot-left"></span>
                    </NavLink>
                    <h3 id="titlePage">My Account</h3>
                    <a href="/#" className="cart">
                        <span aria-hidden="true" className="icon_cart_alt" />
                        <span className="number">1</span>
                    </a>
                </div>
            </div>
        )
    }
}
