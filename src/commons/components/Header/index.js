import React, { Component } from "react";
import "./style.scss";
import logo from "./../../../assets/Images/logo/logo-1.png";
import { NavLink } from "react-router-dom";
import CartHeader from "../CartHeader";
import {connect} from 'react-redux';
import {actOpenLoginPopup} from './../../modules/Login/actions';
import SearchPage from "../SearchPage";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpenResMenu : false,
      isOpenSearchPage: false
    }
  }

  handleToggleLoginPopup = (event) => {
    this.props.onLogin(true);
    event.preventDefault();
  };

  handleGuestAction = (onOpenLogin) => {
    let {accountInfo, accountFlag} = this.props;

    if (accountFlag === 1) {
      return (
        <ul className="sub-menu">
          <li>
            <NavLink to="my-account">{accountInfo.userEmail.substring(0, accountInfo.userEmail.indexOf('@'))}</NavLink>
          </li>
        </ul>
      );
    }

    return (
      <ul className="sub-menu">
        <li 
          onClick = {this.onHandleOpenLoginForm}
        ><span>Sign In</span></li>
        <li><NavLink to="signup">Sign Up</NavLink></li>
      </ul>
    );
  };

  // open responsive mene
  handleToggleMenu = () =>{
    this.setState({isOpenResMenu: !this.state.isOpenResMenu});
  }

  onHandleOpenLoginForm = () =>{
    this.props.onHandleOpenLoginForm(true);
  }

  onHandleOpenSearchPage = () =>{
    this.setState({
      ...this.state,
      isOpenSearchPage: !this.state.isOpenSearchPage
    })
  }

  isDarkHearder = () =>{
    let {urlPath} = this.props;
    if(
      urlPath.indexOf("about") !== -1 ||
      urlPath.indexOf("booking") !== -1 ||
      urlPath.indexOf("what-we-offer") !== -1 ||
      urlPath.indexOf("blog-list") !== -1 ||
      urlPath.indexOf("shop") !== -1 ||
      urlPath.indexOf("product-detail") !== -1 ||
      urlPath.indexOf("signup") !== -1 ||
      urlPath.indexOf("contact") !== -1
    ){
      return true;
    }

    return false;
  }

  renderClassHeader = () =>{
    const {isFixedHeader} = this.props;
    let classHeader = '';
    classHeader = this.isDarkHearder() ? "header dark" : "header";

    classHeader += isFixedHeader ? " fixed" : "";
    return classHeader;
  }

  render() {
    let {amountCart, isFixedHeader} = this.props;
    const {isOpenResMenu, isOpenSearchPage} = this.state;

    return (
      <>
        <header 
          className= {this.renderClassHeader()}
        >
          <SearchPage 
            isOpenSearchPage = {isOpenSearchPage}
            onHandleOpenSearchPage = {this.onHandleOpenSearchPage}
          />

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
                <img src={!this.isDarkHearder() ? logo : "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851625/BaristaCoffee/logo/logo-2_x72h08.png"} alt="logo" />
                
              </NavLink>
            </div>

            <nav 
              className = {isOpenResMenu ? "header__nav header--responsive" : "header__nav"}
            >
              <ul>
                <li>
                  <NavLink to = "/" className="nav-span">Home</NavLink>
                </li>
                <li className="toggle-sub-menu">
                  <div className="nav-span">
                    <span >About</span>
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                    <span aria-hidden="true" class="arrow_triangle-down"></span>
                  </div>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="about">About Me</NavLink>
                    </li>
                    <li>
                      <NavLink to="contact">Contact Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="what-we-offer">What We Offer</NavLink>
                    </li>
                    <li>
                      <NavLink to="booking">Booking</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to = "/shop" className="nav-span">Shop</NavLink>
                </li>
                <li>
                <NavLink to = "/blog-list" className="nav-span">Blog</NavLink>
                </li>
                
                <li className="toggle-sub-menu">
                  <div className="nav-span">
                    <span id="toggleLoginForm">My Account</span>
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                    <span aria-hidden="true" class="arrow_triangle-down"></span>
                  </div>
                  {this.handleGuestAction()}
                  
                  
                </li>

                <li className="bulkhead">
                  <span />
                </li>
                <li class="toggle-span">
                  <div className="header__cart">
                    <div>
                      <span class="nav-span icon icon-cart" ></span>
                      <span class="number">{amountCart}</span>
                    </div>

                    <CartHeader/>
                  </div>
                </li>
                <li>
                  <button 
                    className="header__search"
                    onClick = {this.onHandleOpenSearchPage}
                  >
                    <span className="nav-span icon icon-search" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        
        <header 
          className= {isFixedHeader ? "header fixed-header open" : "header fixed-header close"}
        >
          <SearchPage 
            isOpenSearchPage = {isOpenSearchPage}
            onHandleOpenSearchPage = {this.onHandleOpenSearchPage}
          />

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
                  <NavLink to = "/" className="nav-span">Home</NavLink>
                </li>
                <li className="toggle-sub-menu">
                  <div className="nav-span">
                    <span >About</span>
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                    <span aria-hidden="true" class="arrow_triangle-down"></span>
                  </div>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="about">About Me</NavLink>
                    </li>
                    <li>
                      <NavLink to="contact">Contact Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="what-we-offer">What We Offer</NavLink>
                    </li>
                    <li>
                      <NavLink to="booking">Booking</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to = "/shop" className="nav-span">Shop</NavLink>
                </li>
                <li>
                <NavLink to = "/blog-list" className="nav-span">Blog</NavLink>
                </li>
                <li className="toggle-sub-menu">
                  <div className="nav-span">
                    <span id="toggleLoginForm">My Account</span>
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                    <span aria-hidden="true" class="arrow_triangle-down"></span>
                  </div>
                  {this.handleGuestAction()}
                  
                  
                </li>

                <li className="bulkhead">
                  <span />
                </li>
                <li class="toggle-span">
                  <div className="header__cart">
                    <div>
                      <span class="nav-span icon icon-cart" ></span>
                      <span class="number">{amountCart}</span>
                    </div>

                    <CartHeader/>
                  </div>
                </li>
                <li>
                  <button 
                    className="header__search"
                    onClick = {this.onHandleOpenSearchPage}
                  >
                    <span className="nav-span icon icon-search" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

const mapStateToProps = state =>{
  let amountCart = 0;
  for(let item of state.cartReducer.data){ amountCart += item.amount}

  const accountInfo = state.loginReducer.data;
  return {
    amountCart,
    accountInfo: accountInfo.accountInfo,
    accountFlag: accountInfo.flag,
    urlPath: state.urlReducer.urlInfo.path
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onHandleOpenLoginForm: isLoginForm =>{
      dispatch(actOpenLoginPopup(isLoginForm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)
