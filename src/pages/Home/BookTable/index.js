import React, { Component } from 'react';
import TitleBox from '../../../commons/components/TitleBox';
import BookingForm from './../../../commons/components/BookingForm';
import './style.scss';

export default class BookTable extends Component {
    render() {
        return (
            <section className="book-table">
                <TitleBox smallTitle = "What Happens Here" mainTitle = "Coffee Build Your Base"/>

                <div className="cf-container book-table__container">
                    <BookingForm/>
                </div>
            </section>

        )
    }
}
