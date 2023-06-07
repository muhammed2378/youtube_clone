import React from "react";
import { Link } from "react-router-dom";

// import locals
import "./channelCard.css";

const ChannelCard = ({ channel }) => {
    const channleLogo = channel?.snippet?.thumbnails?.high?.url;

    return (
        <Link to={`/channel/${channel?.id}`} className='channelCard'>
            <div
                className='channel-logo'
                style={{
                    backgroundImage: `url(${channleLogo})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className='channel-con'>
                <p>{channel?.snippet?.title}</p>
                <p>{channel?.statistics?.subscriberCount}</p>
            </div>
            <div>{channel?.snippet?.channelId}</div>
        </Link>
    );
};

export default ChannelCard;
