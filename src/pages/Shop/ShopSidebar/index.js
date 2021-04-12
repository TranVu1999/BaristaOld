import React, { Component } from 'react';
import SidebarWidget from './../../../commons/components/SidebarWidget';
import Search from './../../../commons/components/Search';
import ListProduct from './ListProduct';
import ListTag from './../../../commons/components/ListTag';

import {connect} from 'react-redux';

class ShopSidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            lstTag: []
        }
    }

    render() {
        const {lstTag} = this.state;

        return (
            <>
                <SidebarWidget widgetTitle = "Search">
                    <Search/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "TOP RATED PRODUCTS">
                    <ListProduct/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "Tags">
                    <ListTag lstTag = {lstTag} urlStart="shop"/>
                </SidebarWidget>

                <SidebarWidget>
                    <a href="/#" className="advertisement">
                        <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-sidebar-widget_maxrzx.jpg" alt="advertisement"/>
                    </a>
                </SidebarWidget>
            </>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.listProductCate!==this.props.listProductCate){
            let lstTag = this.props.listProductCate.map((item, index) =>{
                return {
                    'tagTitle': item.prodCateTitle,
                    'tagAlias': '/shop/product-category=' + item.prodCateAlias
                }
            })

            lstTag.push({
                'tagTitle': "All",
                'tagAlias': '/shop'
            })

            this.setState({
                ...this.state,
                lstTag,
                lstTopRated: this.props.lstTopRated
            })
        }
    }
}

const mapStateToProps = state =>{
    return {
        listProductCate: state.shopReducer.data.listProductCate
    }
}

export default connect(mapStateToProps, null)(ShopSidebar) 


