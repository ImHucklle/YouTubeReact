import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';


function Header(){
    return(
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                {/* className has two underscores. This indicates that "header" is the component we're referencing, and "logo" is the thing we're talking about. */}
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Bronson" /> 
            </div>

            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton" />
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icons" />
                <AppsIcon className="header__icons" />
                <NotificationsIcon className="header__icons" />
                <Avatar 
                    alt="Luca Leyva"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQHq-Wxlz4dxPQ/profile-displayphoto-shrink_800_800/0/1562357674253?e=1642032000&v=beta&t=eapGU1FxatMPjAfjJIfJ0kgbqGAncBee2dysuSjWQPg" />
            </div>      
        </div>
    )
}

export default Header
