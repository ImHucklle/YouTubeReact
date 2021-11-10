import React from "react";
import "./VideoPlayer.css"

const VideoPlayer = ({ videoId }) => (
    <body>
        <div className="video-responsive">
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/watch?${videoId}`}
            frameborder="0"></iframe>
        </div>
    </body>    

);

export default VideoPlayer;