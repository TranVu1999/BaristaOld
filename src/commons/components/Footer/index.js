import React, { Component } from 'react';
import './style.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__content--top">
                        <div className="cf-container d-gr-4 footer-grid">
                            <div className="footer-widget">
                                <h6>Opening Hours</h6>
                                <ul className="timeline">
                                    <li>
                                        <span>Monday</span>
                                        <div className="space" />
                                        <span className="highlight">Closed</span>
                                    </li>

                                    <li>
                                        <span>Tuesday</span>
                                        <div className="space" />
                                        <span>9:00 - 22:00</span>
                                    </li>

                                    <li>
                                        <span>Wednesday</span>
                                        <div className="space" />
                                        <span>9:00 - 22:00</span>
                                    </li>

                                    <li>
                                        <span>Thursday</span>
                                        <div className="space" />
                                        <span>9:00 - 22:00</span>
                                    </li>

                                    <li>
                                        <span>Friday</span>
                                        <div className="space" />
                                        <span>9:00 - 1:00</span>
                                    </li>

                                    <li>
                                        <span>Saturday</span>
                                        <div className="space" />
                                        <span>12:00 - 01:00</span>
                                    </li>

                                    <li>
                                        <span>Sunday</span>
                                        <div className="space" />
                                        <span>9:00 - 22:00</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-widget">
                                <h6>Latest Post</h6>
                                <ul className="lst-lastest-post">
                                    <li>
                                        <a href="/#">Expand your mind, chagne everything</a>
                                        <span className="post-date">14.02.2017</span>
                                    </li>
                                    <li>
                                        <a href="/#">Places to get lost</a>
                                        <span className="post-date">14.02.2017</span>
                                    </li>
                                    <li>
                                        <a href="/#">Lewis Howes</a>
                                        <span className="post-date">14.02.2017</span>
                                    </li>
                                    <li>
                                        <a href="/#">Elevate Your Expectations</a>
                                        <span className="post-date">14.02.2017</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-widget">
                                <h6>Contact Us</h6>
                                <div className="text-widget">
                                    <a href="/#" className="highlight">admin123@gmail.com</a>
                                    <br />
                                    1-444-123-4559
                                    <br />
                                    Raymond Boulevard 224,
                                    <br />
                                    New York
                                </div>
                                <h6>The last standard post</h6>
                                <form>
                                    <div className="form-group d-flex-between">
                                        <input type="text" placeholder="Your E-Mail" />
                                        <button><span className="icon icon-play3" /></button>
                                    </div>
                                </form>
                            </div>

                            <div className="footer-widget">
                                <h6>Other Location</h6>
                                <h5 className="mb-25">Barista Coffee Shop</h5>
                                <div className="text-widget">
                                    2606 Saints Alley
                                    <br />
                                    Tampa, FL 33602
                                </div>
                                <div className="line mb-25" />
                                    <h5 className="mb-25">Barista Cafe</h5>
                                    <div className="text-widget">
                                        3497 Watson Street
                                        <br />
                                        Camden, NJ 08102
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="copy-right">
                            <div className="cf-container d-flex-between">
                                <span>Barista Edge Themes</span>
                                <div className="social">
                                    <a href="/#"><span className="icon icon-facebook" /></a>
                                    <a href="/#"><span className="icon icon-twitter" /></a>
                                    <a href="/#"><span className="icon icon-vimeo" /></a>
                                    <a href="/#"><span className="icon icon-linkedin2" /></a>
                                    <a href="/#"><span className="icon icon-tumblr" /></a>
                                    <a href="/#"><span className="icon icon-instagram" /></a>
                                </div>
                                <span>© 2017 All rights reserved</span>
                            </div>
                        </div>
                    </div>
            </footer>

        )
    }
}
