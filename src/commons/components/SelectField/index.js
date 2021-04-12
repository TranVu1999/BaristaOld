import React, { Component } from 'react';
import * as Other from './../../constant/Other';

export default class SelectFieldComponent extends Component {

    onHandleChange = (event) =>{
        this.props.onSelectChange(event);
    }

    renderOption = () =>{
        const {name} = this.props;

        switch (name) {
            case 'year':
                return Other.LIST_YEAR.map(item =>{
                    return (
                        <option 
                            key = {item} 
                            value = {item}
                        >Năm {item}</option>
                    )
                });
            case 'month':
                const lstMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                return lstMonth.map(item =>{
                    return (
                        <option 
                            key = {item} 
                            value = {item}
                        >Tháng {item}</option>
                    )
                });
            case 'date':
                const {year, month} = this.props;
                let flag = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
                let amountDate = 30;

                if(month ==='1' || month === '3' || month === '5' || month === '7' 
                 || month === '8' || month === '10' || month === '12'){
                    amountDate = 31;
                }else if(month === '2'){
                    amountDate = flag ? 29 : 28;
                }

                const lstDate = new Array(amountDate).fill(0);
                return lstDate.map((item, index) =>{
                    return (
                        <option 
                            key = {index + 100} 
                            value = {index + 1}
                        >Ngày {index + 1}</option>
                    )
                });
        
            default:
                return null;
        } 
    }

    render() {
        const {value, name} = this.props;
        return (
            <select 
                value = {value}
                onChange={this.onHandleChange}
                name = {name}
            >
                {this.renderOption()}
            </select>
        )
    }
}
