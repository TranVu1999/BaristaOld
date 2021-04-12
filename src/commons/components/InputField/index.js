import React, { Component } from 'react'
import './style.scss';

export default class InputFieldComponent extends Component {

    onHandleChange = (event) =>{
        this.props.onHandleChange(event);
    }

    onHandleBlur = event =>{
        this.props.onHandleBlur(event);
    }

    render() {
        let {value, placeholder, name, error} = this.props;
        return (
            <div className="input-group relative-notify">
                <input 
                    type="text" 
                    defaultValue= {value}
                    placeholder = {placeholder} 
                    onChange = {this.onHandleChange}
                    onBlur = {this.onHandleBlur}
                    name = {name}
                    className = {error ? "error" : ""}
                /> 

                {
                    error ? (
                        <div className = "notify-box">
                            <span aria-hidden="true" class="icon_error-circle notify-icon"></span>
                            <p className = "notify warning notify-content">{error}</p>
                        </div>
                    ): null
                }

                
            </div>
        )
    }
}
