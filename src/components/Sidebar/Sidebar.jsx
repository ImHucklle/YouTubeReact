import React from "react";
import SidebarRow from "../SidebarRow/SidebarRow";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos";

import './Sidebar.css';
import { OndemandVideo, ThumbUpAltOutlined, VideoLibrary } from "@material-ui/icons";

function Sidebar({}){
    return(
        <div className="sidebar">
            <div className="sidebar__Icons">
                <SidebarRow selected Icon={HomeIcon} title="Home" />
                <SidebarRow Icon={WhatshotIcon} title="Trending" />
                <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            </div>
            <hr />
                <div>
                <RecommendedVideos />
                </div>
        </div>
    )
}

// function RecommendedVideos(){
//     return(
//         <div className="recommendedVideos">
//             <h2>Recommended</h2>
//             <div className="recommendedVideos__videos">
//                 <VideoCard 
//                     title="THE BATMAN - Main Trailer"
//                     views="33.3 Million"
//                     timestamp="1 month ago"
//                     channelImage="https://yt3.ggpht.com/ytc/AKedOLRF9_MOYUXfJ-8Bxknj0YSma7RNmZ6TU9jInnpxvg=s176-c-k-c0x00ffffff-no-rj"
//                     channel="Warner Brothers Pictures"
//                     image="https://i.ytimg.com/an_webp/mqqft2x_Aa4/mqdefault_6s.webp?du=3000&sqp=CKK6tYwG&rs=AOn4CLDDV8m43H4nyN4I9uQwupreMNHSPA"
//                 />
//             </div>
//         </div>
//     )
// }


export default Sidebar;