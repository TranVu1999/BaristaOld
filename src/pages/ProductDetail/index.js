import React, { Component } from 'react'
import './style.scss';

import Banner from '../../commons/components/Banner'
import MainPage from '../../commons/components/MainPage'
import ProductThumb from './ProductThumb'
import ProductSummary from './ProductSummary';
import ListProduct from './../../commons/components/ListProduct'

import {connect} from 'react-redux';
import {actProductDetailApi, actDropBylApi} from './modules/actions';
import {actUpdateUrl} from './../../commons/modules/Url/actions';
import ProductTab from './ProductTab';

import api from './../../api';

class ProductDetailPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            listProduct: []
        }
    }

    render() {
        return (
            <>
                <Banner bannerTitle = "Shop" bannerImg = "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/shop-title-area_fjcbvl.jpg"/>

                <MainPage>
                    <div className="cf-container">
                        <div className = "product-detail">
                            <div className="product-detail__content">
                                <div className="d-flex-between align-start">
                                    <ProductThumb/>
                                    <ProductSummary/>
                                </div>
                                
                                <ProductTab/>
                            </div>

                            <h3 className = "mb-30">related products</h3>
                            <ListProduct lstProduct = {this.state.listProduct}/>
                        </div>
                    </div>
                </MainPage>
            </>
        )
    }

    componentDidMount(){
        const {prodAlias} = this.props.match.params;
        this.props.fetchData(prodAlias);
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })

        let productId = this.props.prodInfo.productId;
        let accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
        
        if(accountInfo){
            this.props.onDropByDetail({
                productId: productId,
                accountId: accountInfo.accountId
            })
        }
        
        const {keyInfo, prodInfo} = this.props;
        if(keyInfo.key.length > 0){
            const data = {
                key: keyInfo.key,
                accountId: keyInfo.accountId,
                productId: prodInfo.productId
            }
            
            api.post(`/key-map/add-key`, data)
            .then(res =>{
                console.log("res", res.data)
            })
            .catch(err =>{
                
            })
        }

        console.log("productId", prodInfo)

        api.get(`/product/get-relative/${productId}`)
        .then(res =>{
            console.log("res", res.data)
            this.setState({
                
                listProduct: res.data
            })
        })
        .catch(err => console.log(err))


    }
}

const mapStateToProps = state =>{
    return {
        prodInfo: state.productDetailReducer.data,
        keyInfo: state.keySearchReducer
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        fetchData: produAlias =>{
            dispatch(actProductDetailApi(produAlias))
        },
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        },
        onDropByDetail: data =>{
            actDropBylApi(data);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage)
