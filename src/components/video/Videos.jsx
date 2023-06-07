// local imports
import "./videos.css";

import { VideoCard, ChannelCard } from "../";

const Videos = ({ videos, direction }) => {
    return (
        <div
            className='videos'
            style={{ flexDirection: direction ? direction : "row" }}
        >
            {videos?.length ? (
                videos.map(
                    (video) => (
                        video.id.channelId && <ChannelCard channel={video} />,
                        video.id.videoId && <VideoCard video={video} />
                    )
                )
            ) : (
                <div> no Videos </div>
            )}
        </div>
    );
};

export default Videos;
