import React from 'react';
import './VideoPlayer.css';
import sampleVideo from '../assets/video/samplevideo.mp4';

const VideoPlayer = ({showFeedbackForm}) => {

    return(
        <div className="videoPlayerDiv">
            <video id="myVideo" width="100%" height="100%" controls onEnded={showFeedbackForm}>
                <source src={sampleVideo} type="video/mp4"/>
            </video>
        </div>  
    )
}

export default VideoPlayer;