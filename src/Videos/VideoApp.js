import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "./YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class VideoApp extends React.Component {
    state = {videos: [], selectedVideo: null };
    onTermSubmit = async term => {
        const response = await YouTube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState ({ videos: response.data.items })
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    render () {
        
        return (
            <div className="container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <br/>
                <div><VideoDetail video={this.state.selectedVideo}/></div>
                <VideoList 
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}/>
            </div>
        );
    }
}


export default VideoApp;