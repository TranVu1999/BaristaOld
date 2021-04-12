import React, { Component } from "react";
import "./style.scss";
import logo from "./../../assets/Images/logo/logo-1.png";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpenResMenu : false
    }
  }

  handleToggleLoginPopup = (event) => {
    this.props.onLogin(true);
    event.preventDefault();
  };

  handleGuestAction = (onOpenLogin) => {
    const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
    if (!accountInfo) {
      return (
        <ul className="sub-menu">
          <li>
            <span
              href="/#"
              onClick={(e) => {
                onOpenLogin(true);
              }}
            >
              Sign In
            </span>
          </li>
          <li>
            <a href="/#">Sign Up</a>
          </li>
        </ul>
      );
    }

    return (
      <ul className="sub-menu">
        <li>
          <NavLink to="my-account">TranVudpqn123</NavLink>
        </li>
      </ul>
    );
  };

  // open responsive mene
  handleToggleMenu = () =>{
    this.setState({isOpenResMenu: !this.state.isOpenResMenu});
  }

  render() {
    let { onOpenLogin } = this.props;
    const {isOpenResMenu} = this.state;

    return (
      <header className="header">
        <div className="d-flex-between px-25 header__content">
          <div className="header--nav-toggle">
            <input 
              type="checkbox" 
              id="toggle-menu" 
              onChange = {this.handleToggleMenu}
            />
            <label htmlFor="toggle-menu" className="toggle">
              <span />
              <span />
              <span />
              <span />
            </label>
          </div>

          <div className="header__logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <nav 
            className = {isOpenResMenu ? "header__nav header--responsive" : "header__nav"}
          >
            <ul>
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Shop</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
              <li className="toggle-sub-menu">
                <div>
                  <span id="toggleLoginForm">My Account</span>
                  <span aria-hidden="true" className="arrow_carrot-right"></span>
                </div>
                
                {this.handleGuestAction(onOpenLogin)}
              </li>

              <li className="bulkhead">
                <span />
              </li>
              <li>
                <a href="/#" className="header__cart">
                  <span className="icon icon-cart" />
                  <span className="number">0</span>
                </a>
              </li>
              <li>
                <a href="/#" className="header__search">
                  <span className="icon icon-search" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
