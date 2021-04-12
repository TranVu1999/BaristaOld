import React, { Component } from 'react';
import './style.scss';

export default class SearchPage extends Component {
    onHandleOpenSearchPage = () =>{
        this.props.onHandleOpenSearchPage();
    }

    render() {
        const {isOpenSearchPage} = this.props;
        return (
            <div 
                className = {isOpenSearchPage ? "search-page active" : "search-page"}
            >
                <form className="form form-search">
                    <div className ="form-group">
                        <input type="text" placeholder="Search here..." className="input-control"/>
                    </div>
                </form>
                <button
                    onClick = {this.onHandleOpenSearchPage}
                ><span aria-hidden="true" class="icon_close"></span></button>
            </div>
        )
    }
}
