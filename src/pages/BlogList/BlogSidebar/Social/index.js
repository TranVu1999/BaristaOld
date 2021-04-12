import React, { Component } from 'react';
import './style.scss';

export default class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="/#"><span className="icon icon-facebook" /></a>
                <a href="/#"><span className="icon icon-twitter" /></a>
                <a href="/#"><span className="icon icon-vimeo" /></a>
                <a href="/#"><span className="icon icon-linkedin2" /></a>
                <a href="/#"><span className="icon icon-tumblr" /></a>
                <a href="/#"><span className="icon icon-instagram" /></a>
            </div>

        )
    }
}
