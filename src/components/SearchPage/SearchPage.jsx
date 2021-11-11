import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import React from 'react';
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
        </div>
    )
}

export default SearchPage