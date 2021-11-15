import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import CommentSection from './CommentSection/CommentSection';
import axios from 'axios';
import { googleAPIKey } from '../keys';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';



class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
          displayVideo: [],
          relatedVideos: [],
          video_id: '',
          title: '',
          description: '',
         };
    }
    
    componentDidMount() {
      this.getVideo();
      this.createComment();
    }
 
    getVideo = async (searchVideo) => {
      console.log('state', this.state)
      console.log('props', this.props)
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchVideo}&part=snippet&type=video&key=${googleAPIKey}`)
      this.setState({
        displayVideo: response.data.items,
        video_id: response.data.items[0].id.video_id,
      },() => this.getRelatedVideos())
     }

    getRelatedVideos = async () => {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedVideo=${this.state.video_id}&part=snippet&type=video&key=${googleAPIKey}`)
      this.setState({
        relatedVideos: response.data.items,
        title: response.data.items[0].snippet.title,
        description: response.data.items[0].snippet.description    
      })
    }
     changeVideo=(newVideoId) => {
       this.setState({
         video_id: newVideoId
        }, () =>  this.getRelatedVideos())
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
              <div className="app">
                <Header getVideo={this.getVideo}/>
                <VideoPlayer video_id={this.state.video_id} title={this.state.title} description={this.state.description} />
                <Sidebar />
                <CommentSection/>
              </div>
            </div>
          )
      }
}

export default App;