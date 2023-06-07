import { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";

// lcoal imports
// -- styles
import "./searchBar.css";

const SearchBar = ({ hide, setHide }) => {
    const field = useRef(null);
    const button = useRef(null);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
        }
    };

    useEffect(() => {
        if (!hide) {
            field.current.classList.remove("activef");
            button.current.classList.remove("activeb");
        } else {
            field.current.classList.add("activef");
            button.current.classList.add("activeb");
        }
    }, [hide]);

    return (
        <>
            <form className='searchbar' onSubmit={handleSubmit}>
                {hide && (
                    <div className='searchIcon' onClick={() => setHide(false)}>
                        <SearchIcon />
                    </div>
                )}
                {/* {!hide && SearchVar} */}
                <div className='field activef' ref={field}>
                    <input
                        type='search'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button type='submit' className='activeb' ref={button}>
                    <SearchIcon />
                </button>
            </form>
        </>
    );
};

export default SearchBar;
