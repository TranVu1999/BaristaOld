import React, { Component } from 'react';
import Breadcrumb from '../../commons/components/Breadcrumb';
import MainPage from '../../commons/components/MainPage';
import './style.scss';

class NotFoundPage extends Component {
    render() {
        return (
            <MainPage>
                <div className="not-found-page">
                    <div className="mb-50 not-found-page--top">
                        <Breadcrumb mainTitle = "PAGE NOT FOUND"/>
                    </div>

                    <div className="not-found-page--bottom">
                        <div className="cf-container">
                            <span className="not-found--title">404</span>
                            <h3>Page your are looking is not found</h3>
                            <p>The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.</p>
                            <a href="/#" className="barista-btn">Home Page</a>
                        </div>
                    </div>
                </div>
            </MainPage>
        );
    }
}

export default NotFoundPage;