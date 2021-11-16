import React from "react";
import './RecommendedVideos.css';
import {useEffect} from 'react';

function RecommendedVideos(props){

    useEffect(()=>{

    }, [props.video_id])

    return(
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
            </div>
        </div>
    )
}

export default RecommendedVideos;

