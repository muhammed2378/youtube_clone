import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

// locla imports
import "./videoDetails.css";
import { fetchFromApi } from "../../utils/fetchFromApi";
import { Videos } from "../";
const VideoDetail = () => {
    const [info, setInfo] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function getVideos() {
            try {
                const item = await fetchFromApi(
                    `videos?part=statistics&id=${id}`
                );
                const relatedVideos = await fetchFromApi(
                    `search?part=snippet&relatedVideoId=${id}`
                );
                setInfo(item.items[0]);
                setVideos(relatedVideos.items);
            } catch (error) {
                console.log(error);
            }
        }
        getVideos();
    }, [id]);

    if (!info) return "loading...";

    const {
        snippet: { channelTitle, title, channelId },
        statistics: { viewCount, likeCount },
    } = info;

    return (
        <div className='video-page'>
            {/* <div className="sticky-container">

            </div> */}
            <div className='videoBox'>
                <ReactPlayer
                    className='video-player'
                    url={`https://www.youtube.com/watch?v=${id}`}
                    controls
                    style={{ width: "100%" }}
                />
                <div className='videoDetail'>
                    <div className='title'>
                        <p>{title}</p>
                    </div>
                    <div className='statics'>
                        <Link
                            to={`/channel/${channelId}`}
                            className='channel-wise'
                        >
                            <p>{channelTitle}</p>
                            <CheckCircle />
                        </Link>
                        <div className='video-wise'>
                            <p>{likeCount} Likes</p>
                            <p>{viewCount} views</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='related-videos'>
                <Videos videos={videos} direction='column' />
            </div>
        </div>
    );
};

export default VideoDetail;
