import React, { Component } from 'react';
import './style.scss';
import Banner from '../../commons/components/Banner';
import BookingForm from '../../commons/components/BookingForm';

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';

class BookingPage extends Component {
    render() {
        return (
            <>
                <Banner bannerTitle = "Booking Page"/>

                <section className="main-page cf-bg section-padding">
                    <div className="cf-container">
                        <div className="d-flex-between booking__content">
                        <div className="booking--left">
                            <h2>Reserve your table here</h2>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis,  hinc partem ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei mea.</p>
                        </div>
                        <div className="booking--right">
                            <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/open-table-img-1_avrbs4.png" alt="bg" />
                        </div>
                        </div>
                        <div className="book-table">
                            <div className="book-table__container">
                                <BookingForm/>
                            </div>
                        </div>
                    </div>
                </section>

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

export default connect(null, mapDispatchToProps)(BookingPage)
