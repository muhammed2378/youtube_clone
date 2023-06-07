import React from "react";
import { Sidebar, Content } from "../";

// local imports
import "./feed.css";

const Feed = () => {
    return (
        <div className='feed'>
            <Sidebar />
            <Content />
        </div>
    );
};

export default Feed;
