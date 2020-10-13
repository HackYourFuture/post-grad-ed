import React from 'react';

import './SearchBar.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () =>{

    const searchHandler = () =>{

    }

    const changeHandler = () =>{

    }
    


    return(
        <div classname='SearchBar'>
            <form 
            // className={isMobile ? 'searchMobileForm' : 'searchForm'}
            >
                <input
                    className="search-input"
                    // value={searchState.inputs.search.value}
                    type="text"
                    placeholder="Search to-do list item"
                    onChange={changeHandler}
                ></input>
                <button
                    className="searchButton"
                    type="submit"
                    onClick={searchHandler}
                    // disabled={!searchState.isValid}
                >
                    <FontAwesomeIcon 
                    className='searchButton__icon'
                    icon={faSearch} 
                    size='2x'
                    />
                </button>
            </form>
           
        </div>


    )
}

export default SearchBar;