import React, { Component } from 'react';
import './style.scss';

export default class CommentItem extends Component {
    render() {
        const {contentComment} = this.props;
        console.log("content comment", contentComment);

        return (
            <li className="cmt-item">
                <div className="d-flex-start align-start cmt-item__content">
                <img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="user avatar" className="cmt-item--avatar" />
                <div className="cmt-item--text">
                    <div className="d-flex-between align-start cmt-item--text__top">
                    <div>
                        <h4 className="author">{contentComment.userName}</h4>
                        <span className="time">{contentComment.time}</span>
                    </div>
                    <div className="product-rate">
                        <div 
                            className="product-rate--overlay" 
                            style={{width: 100 - contentComment.rating + '%'}} 
                        />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                    </div>
                    </div>
                    <div className="cmt-item--text__bottom">
                        <p>{contentComment.content}</p>
                    </div>
                </div>
                </div>
            </li>
        )
    }
}
