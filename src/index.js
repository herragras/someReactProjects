import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./TodoList/MainComponent";

import VideoApp from "./Videos/VideoApp";

import BooksApp from "./BooksApp/BooksApp";



class App extends React.Component {
    state = {time:new Date().toLocaleTimeString()}
    componentDidMount() {
        setInterval(() => {this.setState({time:new Date().toLocaleTimeString()})
        }, 1000)
    }
    render () {
    return (
        <div className="container mt-md-3">
            <div className="row justify-content">
                <div className="col-5 align-items-center">
                    <h2 className="bg-secondary text-white p-3 text-center">Current Time:</h2>
                    <h1 className="ml-md-3">{this.state.time}</h1>
                </div>
            </div>
        </div>

    );
};
}

ReactDOM.render(
    <BooksApp />, document.querySelector('#root3'));

ReactDOM.render(
            <App />, document.querySelector('#root'));

ReactDOM.render(
            <MainComponent />, document.querySelector('#root1'));

ReactDOM.render(
            <VideoApp />, document.querySelector('#root2'));
