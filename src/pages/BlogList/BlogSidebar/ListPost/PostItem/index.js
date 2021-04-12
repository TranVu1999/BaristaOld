import React, { Component } from 'react';
import './style.scss';

export default class PostItem extends Component {
    render() {
        return (
            <div className="post-item">
                <a href="/#" className="post-thumb">
                <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851629/BaristaCoffee/posts/post2_ihfiyr.jpg" alt="post thumb" />
                </a>
                <div className="post-text">
                <h5 className="post-title"><a href="/#">Make it Simple</a> </h5>
                <span className="post-update">23.02.2020</span>
                </div>
            </div>
        )
    }
}
