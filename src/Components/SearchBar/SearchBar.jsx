import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
       <>
        <p className="search-p">Search a country: </p>
           <input
            className="search-bar"
            type="text"
            placeholder="e.g. Libanon, Argentina...."
            value={searchQuery}
            onChange={handleSearch}
        />
       </>
    );
}

export default SearchBar;