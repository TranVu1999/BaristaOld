import React, { Component } from 'react';
import './style.scss'

import AccordingToggle from './../../../commons/components/AccordingToggle';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {
    actRemoveNotifyApi, 
    actUpdateNotifyApi
} from './../../../commons/modules/AccountInfo/actions';

class AccountNotify extends Component {
    constructor(props){
        super(props);
        this.state = {
            tab: 0,
            attention: {
                promotion: false,
                invoice: false,
                system: false
            }
        }
    }

    onHandleChooseTab = index =>{
        
        this.setState({
            ...this.state,
            tab: index
        })
    }

    onHandleReadNotify = (notifyId) =>{
        const accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
        this.props.onHandleUpdateNotify({
            accountId: accountInfo.accountId,
            notifyId
        })
    }

    onGetAttention = (notify) =>{
        let attention = {
            promotion: false,
            invoice: false,
            system: false
        }
        let arrSystem = notify.filter(item => item.type === 'system');
        attention.system = arrSystem.length > 0;

        let arrPromotion = notify.filter(item => item.type === 'promotion');
        attention.promotion = arrPromotion.length > 0;

        let arrInovice = notify.filter(item => item.type === 'invoice');
        attention.invoice = arrInovice.length > 0

        return attention;
    }

    onHandleRemoveNotify = notifyId =>{
        const accountInfo = JSON.parse(localStorage.getItem('accountInfo'));

        this.props.onHandleRemoveNotify({
            accountId: accountInfo.accountId,
            notifyId
        })
    }

    onGetTitleTab = (index) =>{
        let tabTitle = '';
        switch(index){                
            case 1: 
                tabTitle = "promotion";
                break;
            case 2: 
                tabTitle = "invoice";
                break;
            case 3: 
                tabTitle = "system";
                break;
            default: 
                tabTitle = "all";
                break;
        }
        return tabTitle;
    }

    renderNotify = () =>{
        const type = this.onGetTitleTab(this.state.tab);
        const dataNotify = this.props.accountInfo.notify;

        let listNotify = [];
        if(type === 'all'){
            listNotify = dataNotify;
        }else{
            listNotify = dataNotify.filter(item => item.type === type)
        }

        if(listNotify.length > 0){
            return listNotify.map((item, index) =>{
                return (
                    <div className="notify-item" key = {index}>
                        <div className="time">
                            {
                                item.createDate.date < 10 ? "0" + item.createDate.date : item.createDate.date
                            }.
                            {
                                item.createDate.month < 10 ? "0" + item.createDate.month : item.createDate.month
                            }.
                            {
                                item.createDate.year
                            }
                        </div>
                        <div 
                            className= {`icon ${item.type}`}
                        >
                            {
                                item.type === 'system' ? (
                                    <span aria-hidden="true" className="icon_clock_alt" />
                                ): item.type === 'promotion' ? (
                                    <span aria-hidden="true" className="icon_gift_alt" /> 
                                ) : (
                                    <span aria-hidden="true" className="icon_cart_alt" />
                                )
                            }
                            
                        </div>
                        <div className="content">
                            {item.content}
                        </div>
                        <div className="control">
                            {
                                item.isNew ? 
                                    <button 
                                        className="tick"
                                        onClick = {() => this.onHandleReadNotify(item.notifyId)}
                                    >Đánh dấu đã đọc</button> 
                                : null
                            }
                            <button 
                                className="remove"
                                onClick = {() => this.onHandleRemoveNotify(item.notifyId)}
                            >Xóa</button>
                        </div>
                    </div>
                )
            })
        }
        

        return (
            <AccordingToggle>
                <div className="accordition-toggle--box empty-icon">
                    <div className = "accordition-span">
                        <img src="https://salt.tikicdn.com/desktop/img/account/tiki-not-found-pgae.png" alt="icon"/>
                        <p>Bạn chưa có thông báo</p>
                        <NavLink to="/shop" className="barista-btn">Tiếp tục mua sắm</NavLink>
                    </div>
                </div>
            </AccordingToggle>
        )
    }

    render() {
        const {tab, attention} = this.state;

        return (
            <div className="account-content--box">
                <span className="account__title">Thông báo của tôi</span>
                <div className="account__content">
                    <div class="account__notify">
                        <div className="d-flex-start tab-notify">
                            <div 
                                className= {tab === 0 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(0)}
                            >
                                <span aria-hidden="true" className="icon_house" />
                                {attention.promotion || attention.invoice || attention.system ? <strong /> : null}
                            </div>

                            <div 
                                className= {tab === 1 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(1)}
                            >
                                <span aria-hidden="true" className="icon_gift_alt" />
                                {attention.promotion ? <strong /> : null}
                                
                            </div>

                            <div 
                                className= {tab === 2 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(2)}
                            >
                                <span aria-hidden="true" className="icon_cart_alt" />
                                {attention.invoice ? <strong /> : null}
                            </div>

                            <div 
                                className= {tab === 3 ? "tab-item active" : "tab-item"}
                                onClick = {() => this.onHandleChooseTab(3)}
                            >
                                <span aria-hidden="true" className="icon_clock_alt" />
                                {attention.system ? <strong /> : null}
                            </div>
                        </div>
                        <div className="list-notify">
                            {this.renderNotify()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {notify} = nextProps.accountInfo;

        let attention = {
            promotion: false,
            invoice: false,
            system: false
        }
        let arrSystem = notify.filter(item => item.type === 'system' && item.isNew);
        attention.system = arrSystem.length > 0;

        let arrPromotion = notify.filter(item => item.type === 'promotion' && item.isNew);
        attention.promotion = arrPromotion.length > 0;

        let arrInovice = notify.filter(item => item.type === 'invoice' && item.isNew);
        attention.invoice = arrInovice.length > 0

        if(
            prevState.attention.promotion !== attention.promotion || 
            prevState.attention.invoice !== attention.invoice || 
            prevState.attention.system !== attention.system
        ){
            return {
                ...prevState,
                attention
            }
        }
        // if(attention.promotion || attention.invoice || attention.system){
        //     return {
        //         ...prevState,
        //         attention
        //     }
        // }
        return null;
        
    }

}

const mapStateToProps = state =>{
    return {
        accountInfo : state.accountInfoReducer.accountInfo
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onHandleRemoveNotify: data =>{
            dispatch(actRemoveNotifyApi(data))
        }, 
        onHandleUpdateNotify: data =>{
            dispatch(actUpdateNotifyApi(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountNotify)
