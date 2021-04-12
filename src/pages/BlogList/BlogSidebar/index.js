import React, { Component } from 'react';
import SidebarWidget from './../../../commons/components/SidebarWidget';
import Search from './../../../commons/components/Search';
import ListTag from './../../../commons/components/ListTag';
import Social from './Social';
import ListCategory from './ListCategory';
import ListPost from './ListPost';

export default class BlogSidebar extends Component {
    render() {
        return (
            <>
                <SidebarWidget widgetTitle = "Search">
                    <Search/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "Recent Posts">
                    <ListPost/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "Categories">
                    <ListCategory/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "Follow Us">
                    <Social/>
                </SidebarWidget>

                <SidebarWidget widgetTitle = "Tags">
                    <ListTag/>
                </SidebarWidget>


                <SidebarWidget>
                    <a href="/#" className="advertisement">
                        <img src="https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/side-bar-img-1_tynhg0.jpg" alt="advertisement"/>
                    </a>
                </SidebarWidget>
            </>
        )
    }
}
