import React, { Component } from 'react';
import './style.scss';
import {connect} from 'react-redux';
import ListComment from '../../../commons/components/ListComment';
import FormReview from '../../../commons/components/FormReview';

class ProductTab extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentTab: 0
        }
    }

    onHandleChageCurrentTab = (tabIndex) =>{
        this.setState({currentTab: tabIndex});
    }

    renderTabDescription = () =>{
        const {prodDetail} = this.props;
        return <div className="product-tab__item">
            <p>{prodDetail}</p>
        </div>
    }

    renderTabInfomation = () =>{
        const {prodInfomation} = this.props;
        const keys = Object.keys(prodInfomation);
        return (
            <>
                <div className="product-tab__item" id="tab-additional__information">
                    <table>
                        <tbody>
                            {keys.map((item, index) =>{
                                return (
                                    <tr key = {index}>
                                        <th>{item}</th>
                                        <td>{prodInfomation[item]}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
        
    }

    renderTagComment = () =>{
        return (
            <div className="product-tab__item">
                <h2>{this.props.amountComment} Reviews For <span>Paper Bag</span> </h2>
                <ListComment/>
                <FormReview prodId = {this.props.prodInfo.productId}/>
            </div>
        )
    }

    render() {
        const {currentTab} = this.state;
        return (
            <div className="product-tabs">
                <ul className="product-nav">
                    <li 
                        className= {currentTab === 0 ? "product-nav__item active" :"product-nav__item"}
                        onClick = {() =>this.onHandleChageCurrentTab(0)}
                    >
                        <h4>Description</h4>
                    </li>

                    <li 
                        className= {currentTab === 1 ? "product-nav__item active" :"product-nav__item"}
                        onClick = {() =>this.onHandleChageCurrentTab(1)}
                    >
                        <h4>Additional Information</h4>
                    </li>
                    <li 
                        className= {currentTab === 2 ? "product-nav__item active" :"product-nav__item"}
                        onClick = {() =>this.onHandleChageCurrentTab(2)}
                    >
                        <h4>Review (<span>{this.props.amountComment}</span>)</h4>
                    </li>
                </ul>

                {currentTab === 0 ? this.renderTabDescription() : ""}
                {currentTab === 1 ?this.renderTabInfomation() : ""}
                {currentTab === 2 ?this.renderTagComment() : ""}
                
            </div>

        )
    }
}

const mapStateToProps = state =>{
    const prodInfo = state.productDetailReducer.data;
    return {
        prodInfo,
        prodDetail: prodInfo.productDetail,
        prodInfomation: prodInfo.prodInfomation,
        amountComment: prodInfo.prodReview.length
    }
}

export default connect(mapStateToProps, null)(ProductTab);
