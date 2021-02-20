import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./TodoList/MainComponent";



function getTime() {
    return (new Date()).toLocaleTimeString()
};

const App = () => {
    return (
        <div className="container mt-md-3">
            <div className="row justify-content">
                <div className="col-5 align-items-center">
                    <h2 className="bg-secondary text-white p-3 text-center">Current Time:</h2>
                    <h1 className="text-center">{getTime()}</h1>
                </div>
            </div>
        </div>

    );
};
ReactDOM.render(
            <App />, document.querySelector('#root'));

ReactDOM.render(
            <MainComponent />, document.querySelector('#root1'));
