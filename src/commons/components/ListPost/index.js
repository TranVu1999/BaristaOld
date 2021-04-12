import React, { Component } from 'react';
import './style.scss';

import PostItem from './PostItem';

export default class ListPost extends Component {

    renderListPost = () =>{
        const {listPost} = this.props;
        return listPost.map((item, index) =>{
            return <PostItem key = {index} postItem = {item}/>
        })
    }

    render() {
        
        return (
            <div className="d-gr-3 services-post">
                {this.renderListPost()}
            </div>

        )
    }
}
