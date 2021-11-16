import React, { Component } from "react";
import "./VideoPlayer.css"

class VideoPlayer extends Component {
    constructor(props){
        super(props);
        this.state =  {
            video_id: ''
        };
    }

    render(){
        return (
            <body>
                <div>{this.props.title}</div>
                    <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src={`https://www.youtube.com/embed/${this.props.video_id}`}>
                    </iframe>
                <div>{this.props.description}</div>
             </body>
        );
    }
}
export default VideoPlayer;