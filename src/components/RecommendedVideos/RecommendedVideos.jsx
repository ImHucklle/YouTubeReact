import React from "react";
import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard.jsx';

function RecommendedVideos(){
    return(
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="THE BATMAN - Main Trailer"
                    views="33.3 Million"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLRF9_MOYUXfJ-8Bxknj0YSma7RNmZ6TU9jInnpxvg=s176-c-k-c0x00ffffff-no-rj"
                    channel="Warner Brothers Pictures"
                    image="https://i.ytimg.com/vi/mqqft2x_Aa4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTpgaSN8199NNo06NEo5LebSJNJQ"
                />
                <VideoCard 
                    title="THE BATMAN - Main Trailer"
                    views="33.3 Million"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLRF9_MOYUXfJ-8Bxknj0YSma7RNmZ6TU9jInnpxvg=s176-c-k-c0x00ffffff-no-rj"
                    channel="Warner Brothers Pictures"
                    image="https://i.ytimg.com/vi/mqqft2x_Aa4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTpgaSN8199NNo06NEo5LebSJNJQ"
                />
                <VideoCard 
                    title="THE BATMAN - Main Trailer"
                    views="33.3 Million"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLRF9_MOYUXfJ-8Bxknj0YSma7RNmZ6TU9jInnpxvg=s176-c-k-c0x00ffffff-no-rj"
                    channel="Warner Brothers Pictures"
                    image="https://i.ytimg.com/vi/mqqft2x_Aa4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTpgaSN8199NNo06NEo5LebSJNJQ"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos;

