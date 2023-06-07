import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// local imports
import "./feedSearch.css";
import { fetchFromApi } from "../../utils/fetchFromApi";
import Videos from "../video/Videos";

const FeedSearch = () => {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const { items } = await fetchFromApi(
                    `search?part=snippet&q=${searchTerm}`
                );
                setVideos(items);
                console.log(items);
            } catch (err) {
                console.log(err);
            }
        }
        fetchVideos();
    }, [searchTerm]);

    return (
        <div className='searchReslut'>
            <h1>
                Search Results for:{" "}
                <span style={{ color: "#ff1505" }}>{searchTerm}</span>
            </h1>
            <Videos videos={videos} />
        </div>
    );
};

export default FeedSearch;
