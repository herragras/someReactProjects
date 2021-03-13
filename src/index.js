import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./EmloyeeListApp/EmployeeApp.css";

import TimeApp from "./TimeApp/TimeApp";

import MainComponent from "./TodoList/MainComponent";

import VideoApp from "./Videos/VideoApp";

import BooksApp from "./BooksApp/BooksApp";

import CounterApp from "./CounterApp/counterApp";

import UserApp from "./UserApp/userApp";

import TodoTableApp from "./TodoTable/TodoTableApp";

import EmployeeApp from "./EmloyeeListApp/EmployeeApp";


ReactDOM.render(
    <EmployeeApp />, document.querySelector('#root7'));

ReactDOM.render(
    <TodoTableApp />, document.querySelector('#root6'));

ReactDOM.render(
    <UserApp />, document.querySelector('#root5'));

ReactDOM.render(
    <CounterApp />, document.querySelector('#root4'));

ReactDOM.render(
    <BooksApp />, document.querySelector('#root3'));

ReactDOM.render(
    <TimeApp />, document.querySelector('#root'));

ReactDOM.render(
    <MainComponent />, document.querySelector('#root1'));

ReactDOM.render(
    <VideoApp />, document.querySelector('#root2'));
