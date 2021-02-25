import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import TimeApp from "./TimeApp/TimeApp";

import MainComponent from "./TodoList/MainComponent";

import VideoApp from "./Videos/VideoApp";

import BooksApp from "./BooksApp/BooksApp";





ReactDOM.render(
    <BooksApp />, document.querySelector('#root3'));

ReactDOM.render(
            <TimeApp />, document.querySelector('#root'));

ReactDOM.render(
            <MainComponent />, document.querySelector('#root1'));

ReactDOM.render(
            <VideoApp />, document.querySelector('#root2'));
