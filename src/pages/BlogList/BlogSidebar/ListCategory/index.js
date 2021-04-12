import React, { Component } from 'react';
import './style.scss';
import CategoryItem from './CategoryItem'

export default class ListCategory extends Component {
    render() {
        return (
            <div className="lst-cat">
                <CategoryItem catTitle = "Competition" amount = "3"/>
                <CategoryItem catTitle = "Delicious" amount = "15"/>
                <CategoryItem catTitle = "Enjoyment" amount = "15"/>
                <CategoryItem catTitle = "Life" amount = "3"/>
                <CategoryItem catTitle = "Lifestyle" amount = "17"/>
                <CategoryItem catTitle = "Media" amount = "7"/>
            </div>

        )
    }
}
