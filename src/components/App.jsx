import React from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import axios from 'axios';
// import { googleAPIKey } from '../keys';
// import VideoPlayer from './VideoPlayer/VideoPlayer.jsx'
// import CommentsForm from './CommentsForm/CommentsForm';

function App() {
    return (
      <div className="app">
        <Router>
        <Header />

          <Switch>
            <Route path="/search/:searchTerm">
              <h1>Search Page</h1>
            </Route>
            <Route path="/">
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

// class App extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             DisplayVideo: 'iVAZL7zzzqI'
//         };
//     }
    
//     componentDidMount() {
//         this.getVideo();
//         this.createComment();
//     }

//     getVideo = async () => {
//         let response = await axios.get('http://127.0.0.1:8000/youtube/');
//         this.setState({
//             DisplayVideo: response.data
//         });
//     }
    
//     createComment = async (newComment) => {
//         let response = await axios.post("http://127.0.0.1:8000/youtube/", newComment);
//         this.setState({
//             newComment: response.data
//         });
//         this.getVideo();
//     }

//     render() {
//         return (
//             <div>
//                 <SearchBar/>          
//                 <VideoPlayer video_id = {this.state.DisplayVideo}/>
//                 <CommentsForm newComment={this.createComment} />
//             </div>
//         )
//     }
// }

export default App;