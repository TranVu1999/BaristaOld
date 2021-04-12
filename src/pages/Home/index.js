import React, { Component } from 'react';

import BookTable from './BookTable';
import HotSale from './HotSale';
import LastestPost from './LastestPost';
import ListBanner from './ListBanner';
import MainSlider from './MainSlider';
import OurMenu from './OurMenu';
import OurService from './OurService';
import Parallax from './Parallax';
import ServicePost from './ServicePost';
import SmallSlider from './SmallSlider';

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class HomePage extends Component {
    render() {
        return (
            <>
                <MainSlider/>
                <ListBanner/>
                <BookTable/>
                <ServicePost/>
                <Parallax/>
                <OurService/>
                <SmallSlider/>
                <OurMenu/>
                <HotSale/>
                <LastestPost/>
            </>
        )
    }

    componentDidMount(){
        this.props.onUpdateUrl(this.props.match);
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        }
    }
}

export default connect(null, mapDispatchToProps)(HomePage)
