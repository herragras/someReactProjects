import React from "react";

const VideoItem = ({video}) => {
    return (
    <div >
        <div className="card-columns">
            <div className="card">
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