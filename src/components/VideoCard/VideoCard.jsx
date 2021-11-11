import Avatar from '@material-ui/core';
import React from 'react';

function VideoCard({ image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img src={image} alt="" />
            <div className="videoCard_info">
                <Avatar 
                    className="videoCard_avatar"
                    alt={channel}
                    src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default VideoCard;