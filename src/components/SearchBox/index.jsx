import { useRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const SearchBox = ({search})=>{
    const searchInput = useRef();
    return(
        <div className="search_box">
            <input ref={searchInput} type="text" placeholder="search here..."/>
            <button onClick={e=>{
                search(searchInput.current.value);
            }}>Search</button>
        </div>
    );
};

SearchBox.propTypes = {
    search:PropTypes.func.isRequired
};
export default SearchBox;