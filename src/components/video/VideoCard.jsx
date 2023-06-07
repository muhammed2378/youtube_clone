import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import moment from "moment";

import "./videoCard.css";

const VideoCard = ({ video }) => {
    const id = video?.id?.videoId;
    const imgURl = video?.snippet?.thumbnails?.high?.url;
    const videoTitle = video?.snippet?.title;
    const channelTitle = video?.snippet?.channelTitle;
    const date = video?.snippet?.publishedAt;
    const channelId = video?.snippet?.channelId;
    return (
        <Link to={`/video/${id}`} className='video-link'>
            <div className='video'>
                <div
                    className='thumbnail'
                    style={{ backgroundImage: `url(${imgURl})` }}
                >
                    {/* <img src={`${imgURl}`} alt='Video' /> */}
                </div>
                <div className='video-con'>
                    <div className='title'>
                        <p>{videoTitle}</p>
                    </div>
                    <Link to={`/channel/${channelId}`}>
                        <div className='channel-title'>
                            <p>{channelTitle}</p>
                            <CheckCircle />
                        </div>
                    </Link>

                    <div className='statistics'>
                        <p>2000k views</p>
                        <p>{moment(date).fromNow()}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
