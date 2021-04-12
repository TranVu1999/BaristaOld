import React, { Component } from 'react';
import './style.scss';

export default class ShopControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenSelectBox: false,
            resultSpan: "Sort by lastest"
        }
    }

    handleToggleSelectBox = () =>{
        this.setState({
            ...this.state,
            isOpenSelectBox: !this.state.isOpenSelectBox
        })
    }

    handleChooseItem = (index) =>{
        let span = "";
        switch(index){
            case 0:
                span = "Sort by popularity";
                break;
            case 1:
                span = "Sort by average rating";
                break;
            case 2:
                span = "Sort by lastest";
                break;
            case 3:
                span = "Sort by price: low to high";
                break;
            default:
                span = "Sort by price: hight to low";
                break;
        }

        this.setState({
            isOpenSelectBox: false,
            resultSpan: span
        }, () =>{
            this.props.onHandleSort(index);
        })
    }

    render() {
        const {isOpenSelectBox, resultSpan} = this.state;

        return (
            <div className="d-flex-between lst-product__control">
                <span className="result-count">Showing all {this.props.amount} results</span>
                <form className="sort-lst-product">
                    <div className="form-group">
                    <div className="select-box">
                        <div 
                            className="d-flex-between select-result-box"
                            onClick = {this.handleToggleSelectBox}
                        >
                            <span className="select-result">{resultSpan}</span>
                            <span className="fs1 icon" aria-hidden="true" data-icon="C" />
                        </div>

                        <div 
                            className = {isOpenSelectBox ? "select-option-box open" : "select-option-box"}
                        >
                            <div 
                                className = "select-item"
                                onClick = {() => this.handleChooseItem(0)}
                            >Sort by popularity</div>

                            <div 
                                className = "select-item"
                                onClick = {() => this.handleChooseItem(1)}
                            >Sort by average rating</div>

                            <div 
                                className = "select-item"
                                onClick = {() => this.handleChooseItem(2)}
                            >Sort by lastest</div>

                            <div 
                                className = "select-item"
                                onClick = {() => this.handleChooseItem(3)}
                            >Sort by price: low to high</div>

                            <div 
                                className = "select-item"
                                onClick = {() => this.handleChooseItem(4)}
                            >Sort by price: high to low</div>
                        </div>
                    </div>
                    </div>
                </form>
            </div>

        )
    }
}
