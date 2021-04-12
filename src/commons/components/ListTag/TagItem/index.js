import React, { Component } from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';


class TagItem extends Component {

    render() {
        const {tagItem} = this.props;

        return (
            <NavLink 
                to = {`${tagItem.tagAlias}`} 
                className="tag"
            >{tagItem.tagTitle}</NavLink>
        )
    }
}

export default TagItem
