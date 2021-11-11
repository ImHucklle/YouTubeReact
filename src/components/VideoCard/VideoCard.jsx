import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import './VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" />
            <div className="videoCard_info">
                <Avatar 
                    className="videoCard_avatar"
                    alt={channel}
                    src={channelImage} />
                <div className="videoCard__text">
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