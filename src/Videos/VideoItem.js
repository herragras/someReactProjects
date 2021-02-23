import React from "react";

const VideoItem = ({video, onVideoSelect}) => {
    return (
    <div>
        <div className="card-columns">
            <div onClick={()=> onVideoSelect(video)} className="card">
            <img src={video.snippet.thumbnails.medium.url}/>
        </div>
        <div className="card-body card-title">
            {video.snippet.title}
        </div>
        </div>
    </div>
    );
};

export default VideoItem;