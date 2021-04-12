import React, { Component } from 'react';
import PostItem from './PostItem';

export default class ListPost extends Component {
    render() {
        return (
            <div className="lst-post">
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </div>

        )
    }
}
