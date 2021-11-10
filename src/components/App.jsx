import React, { Component } from 'react';
import { googleAPIKey } from '../keys';
import './App.css';
import VideoPlayer from './VideoPlayer/VideoPlayer.jsx'
import SearchBar from './SearchBar/SearchBar.jsx';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            DisplayVideo: 'iVAZL7zzzqI'
        };
    }
    
    render() {
        return (
            <div>
            <SearchBar/>
            <VideoPlayer video_id = {this.state.DisplayVideo}/>
            </div>
        )
    }
}

export default App;