import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// local imports
import "./channelDetail.css";
import { Videos, ChannelCard } from "../";
import { fetchFromApi } from "../../utils/fetchFromApi";

const ChannelDetail = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [channelDT, setChannelDT] = useState(null);

    useEffect(() => {
        async function fetchChannel() {
            try {
                const channelDetails = await fetchFromApi(
                    `channels?part=snippet&id=${id}`
                );
                // console.log(channelDetails.items[0]);
                setChannelDT(channelDetails?.items[0]);
                const channelVideos = await fetchFromApi(
                    `search?channelId=${id}&part=snippet&id&order=date`
                );
                setVideos(channelVideos?.items);
            } catch (error) {
                console.log(error);
            }
        }
        fetchChannel();
    }, [id]);

    return (
        <div className='channelDetail'>
            <ChannelCard channel={channelDT} />
            <Videos videos={videos} />
        </div>
    );
};

export default ChannelDetail;
