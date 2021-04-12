import React, { Component } from 'react'
import ListOffer from '../../commons/components/ListOffer'
import ListOfferImg from '../../commons/components/ListOfferImg'
import MainPage from '../../commons/components/MainPage';
import FullBanner from '../../commons/components/FullBanner';

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class WhatWeOfferPage extends Component {
    render() {
        return (
            <>
                <FullBanner/>

                <MainPage>
                    <div className="offer__content">
                        <ListOffer/>
                        <ListOfferImg/>
                    </div>

                </MainPage>

            </>
        )
    }

    componentDidMount(){
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        }
    }
}

export default connect(null, mapDispatchToProps) (WhatWeOfferPage)
