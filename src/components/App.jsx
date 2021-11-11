import React from 'react';
import './App.css';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
// import axios from 'axios';
// import { googleAPIKey } from '../keys';
// import VideoPlayer from './VideoPlayer/VideoPlayer.jsx'
// import CommentsForm from './CommentsForm/CommentsForm';
// import SearchBar from './SearchBar/SearchBar.jsx';

function App() {
    return (
      <div className="app">
        <Header />

        <div className="app__page">
          <Sidebar />
          <RecommendedVideos />
        </div>
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