import React, { Component } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

class Header extends Component{
    state = {
        searchVideo: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchVideo)
        this.props.getVideo(this.state.searchVideo);
    }
    
    render() {
        return(
            <div className="header">
                <div className="header__left">
                    <MenuIcon />
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Bronson" />
                </div>

                <div className="header__input">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="searchVideo">Search</label>
                        <input action='Search' onChange={this.handleChange} name='searchVideo' type="text" value={this.state.searchVideo}/>
                        <button type='submit'>Search</button>
                    </form> 
                </div>

                <div className="header__icons">
                    <VideoCallIcon className="header__icons" />
                    <AppsIcon className="header__icons" />
                    <NotificationsIcon className="header__icons" />
                    <Avatar 
                        alt="Avatar"
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQHq-Wxlz4dxPQ/profile-displayphoto-shrink_800_800/0/1562357674253?e=1642032000&v=beta&t=eapGU1FxatMPjAfjJIfJ0kgbqGAncBee2dysuSjWQPg" />
                </div>      
            </div>
        )
    }
}

export default Header
