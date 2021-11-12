import React from "react";
import "./VideoPlayer.css"

const VideoPlayer = ({ video_id }) => (
    <body>
        <div className="videoPlayer">
            <div className="video-responsive">
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${video_id}`} // ` back tik is used to read the variable
                frameborder="0"></iframe>
            </div>
        </div>
    </body>
);

export default VideoPlayer;