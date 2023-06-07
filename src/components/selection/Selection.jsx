import React, { useState } from "react";

// local imports
import "./selection.css";
import { categories } from "../../utils/constants";

const Selection = ({ selectedTerm, setSelectedTerm }) => {
    return (
        <div className='selection'>
            {categories.map((category, i) => (
                <div
                    key={i}
                    className='category'
                    style={{
                        backgroundColor:
                            selectedTerm === category ? "#000" : "#f8f8f8",
                        color: selectedTerm === category ? "#FFF" : "#333",
                        ":hover": {
                            backgroundColor:
                                selectedTerm === category ? "red" : "#f0f0f0",
                        },
                    }}
                    onClick={() => setSelectedTerm(category)}
                >
                    <p>{category}</p>
                </div>
            ))}
        </div>
    );
};

export default Selection;
