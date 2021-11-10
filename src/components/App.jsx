import React, { Component } from 'react';
import { googleAPIKey } from '../keys';
import './App.css';
import VideoPlayer from './VideoPlayer/VideoPlayer.jsx'
import CommentsForm from './CommentsRename/CommentsForm';
import SearchBar from './SearchBar/SearchBar.jsx';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            DisplayVideo: 'iVAZL7zzzqI'
        };
    }
    
    componentDidMount() {
        this.getVideo();
        this.createComment();
    }

    getVideo = async () => {
        let response = await axios.get('http://127.0.0.1:8000/youtube/');
        this.setState({
            DisplayVideo: response.data
        });
    }
    
    createComment = async (newComment) => {
        let response = await axios.post("http://127.0.0.1:8000/youtube/", newComment);
        this.setState({
            newComment: response.data
        });
        this.getVideo();
    }

    render() {
        return (
            <div>
                <SearchBar/>          
                <VideoPlayer video_id = {this.state.DisplayVideo}/>
                <CommentsForm newComment={this.createComment} />
            </div>
        )
    }
}

export default App;