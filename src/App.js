// packages imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// lcoal imports
import {
    NavBar,
    Feed,
    VideoDetail,
    ChannelDetail,
    FeedSearch,
    Sidebar,
} from "./components";
import "./index.css";
import "./app.css";

const App = () => {
    console.log("Allah is the greatest.");
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<FeedSearch />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
