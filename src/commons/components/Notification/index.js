import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style.scss';

class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCloseNotify: false
        }
    }
    renderNotifyContent = () =>{
        const {notifyInfo} = this.props;
        if(notifyInfo.typeNotify){
            return notifyInfo.typeNotify === 1 ? (
                <div className = "notify-content">
                    <span aria-hidden="true" className="icon_check_alt2"></span>
                    <strong>Well done! </strong>
                    {notifyInfo.notify}
                </div>
            ) : (
                <div className = "notify-content">
                    <span aria-hidden="true" class="icon_close_alt2"></span>
                    <strong>Oh snap!</strong>
                    {notifyInfo.notify}
                </div>
            )
        }
    }

    renderClassNotify = () =>{
        const {notifyInfo} = this.props;
        const {isCloseNotify} = this.state;

        let strClass = '';
        if(isCloseNotify){
            strClass = 'neon-notify';
        }else{
            strClass = 'neon-notify open';
        }

        if(notifyInfo.typeNotify === 1){
            strClass += ' success';
        }else if(notifyInfo.typeNotify === -1){
            strClass += ' error';
        }

        return strClass;
    }

    render() {

        return (
            <>
                <div 
                    className = {this.renderClassNotify()}
                >
                    {this.renderNotifyContent()}
                </div>
            </>
        );
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.notifyInfo.typeNotify !== 0){
            return {
                isClose: true
            }
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.isClose){
            var that = this;
            const timer = setTimeout(() => {
                that.setState({
                    isCloseNotify: true
                })
            }, 3000);

            return () => clearTimeout(timer);
        }
    }
}

const mapStateToProps = state =>{
    return{
        notifyInfo : state.notifyReducer
    }
}

export default connect(mapStateToProps) (Notification);