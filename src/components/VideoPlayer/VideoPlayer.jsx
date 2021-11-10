import React from "react";
import "./VideoPlayer.css"

const VideoPlayer = ({ video_id }) => (
    <body>
        <div className="video-responsive">
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${video_id}`}
            frameborder="0"></iframe>
        </div>
    </body>    

);

export default VideoPlayer;