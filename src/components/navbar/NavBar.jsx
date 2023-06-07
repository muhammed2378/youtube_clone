import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ReorderIcon from "@mui/icons-material/Reorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

// local imports
import SearchBar from "./SearchBar";
// -- styles
import "./navbar.css";
// -- logo
import { logo } from "../../utils/constants";

const NavBar = () => {
    const [hide, setHide] = useState(true);
    return (
        <div className='navbar'>
            {hide && (
                <div className='logo'>
                    <ReorderIcon />
                    <Link to='/'>
                        <img src={logo} alt='Youtube' />
                    </Link>
                </div>
            )}
            {!hide && <ArrowBackIcon onClick={() => setHide(true)} />}
            <SearchBar hide={hide} setHide={setHide} />
            {hide && (
                <div className='profile'>
                    <img src={logo} alt='' />
                </div>
            )}
        </div>
    );
};

export default NavBar;
