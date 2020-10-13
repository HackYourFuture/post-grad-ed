import React from 'react';
import './NavBar.css';
import logo2 from '../images/logo2.png';

import AddItem from './AddItem';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';



const NavBar = () =>{
    const gradients = ['#036086', '#0B2B49']



    return(
        <div className="headerBox">
            <div className='logoBox'>
                <img className="logo2" src={logo2} alt='logo_TV2Z' />
            </div>
            <div className ="searchBarContainer">
                <SearchBar />
            </div>
            <div className ="AddItemContainer">
                 <AddItem />
            </div>
            <div className ="LoginButtonContainer">
                <LoginButton />
            </div>
           

        </div>
    )
}

export default NavBar;