import { useState, useEffect } from "react";

// local imports
import "./content.css";
import { Selection, Videos } from "../";
import { fetchFromApi } from "../../utils/fetchFromApi";
const Content = () => {
    const [videos, setVideos] = useState([]);
    const [selectedTerm, setSelectedTerm] = useState("All");

    useEffect(() => {
        async function fetchVideos() {
            try {
                const { items } = await fetchFromApi(
                    `search?part=snippet&q=${selectedTerm}`
                );
                setVideos(items);
            } catch (err) {
                console.log(err);
            }
        }
        fetchVideos();
    }, [selectedTerm]);
    return (
        <div className='content'>
            <Selection
                selectedTerm={selectedTerm}
                setSelectedTerm={setSelectedTerm}
            />
            <Videos videos={videos} />
        </div>
    );
};

export default Content;
