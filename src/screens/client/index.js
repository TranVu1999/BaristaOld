import React, { Component } from 'react';
import './style.scss';
import HeaderComponent from './../../components/Header';
import FooterComponent from './../../components/Footer';
import { Route, Switch } from 'react-router-dom';
import AccountScreen from './AccountScreen';
import HomeScreen from './HomeScreen';
import LoginComponent from './../../containers/LoginPopup';

export default class ClientScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenLogin : false,
        }
    }

    handleLoginPopup = (isOpenLogin) =>{
        this.setState({isOpenLogin: isOpenLogin});
    }

    render() {
        const {isOpenLogin} = this.state;
        return (
            <div className = "main-wrapper">
                <HeaderComponent 
                    onOpenLogin = {this.handleLoginPopup}
                />

                <Switch>
                    <Route path = "/my-account/:alias" component = {AccountScreen}/>
                    <Route path = "/my-account/" component = {AccountScreen}/>
                    <Route path = "/" component = {HomeScreen}/>
                </Switch>
                
                <FooterComponent/>

                <LoginComponent 
                    isOpenLogin = {isOpenLogin}
                    isClosePopup = {this.handleLoginPopup}
                />
            </div>
        )
    }
}
