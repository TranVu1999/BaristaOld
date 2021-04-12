import React, { Component } from 'react'
import './style.scss';
import ProductItem from './ProductItem';

import {connect} from 'react-redux';

class ListProduct extends Component {
    renderProductItem = () =>{
        const {listTopRated} = this.props;

        return listTopRated.slice(0, 3).map((item, index) => {
            return <ProductItem key = {index} productContent = {item}/>
        })
    }
    render() {
        return (
            <div className="lst-prod">
                {this.renderProductItem()}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        listTopRated: state.shopReducer.data.listTopRated
    }
}

export default connect(mapStateToProps)(ListProduct)
