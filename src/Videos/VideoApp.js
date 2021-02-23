import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "./YouTube";
import VideoList from "./VideoList";

class VideoApp extends React.Component {
    state = {videos: [] };
    onTermSubmit = async term => {
        const response = await YouTube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState ({ videos: response.data.items })
    };

    render () {
        
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <br/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}


export default VideoApp;