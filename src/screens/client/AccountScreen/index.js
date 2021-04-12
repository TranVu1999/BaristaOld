import React, { Component } from 'react';
import MainPageComponent from '../../../components/MainPage';
import AccountContainer from '../../../containers/Account';
import Breadcrumb from './../../../components/Breadcrumb';

export default class AccountScreen extends Component {
    render() {
        const {url} = this.props.match;
        const {alias} = this.props.match.params;

        return (
            <MainPageComponent>
                <Breadcrumb url = {url}/>
                <AccountContainer alias = {alias}/>
            </MainPageComponent>
        )
    }
}
