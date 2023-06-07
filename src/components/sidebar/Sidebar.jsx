import React from "react";
import CottageIcon from "@mui/icons-material/Cottage";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
// local imports
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='home'>
                <CottageIcon />
                <p>Home</p>
            </div>
        </div>
    );
};

export default Sidebar;
