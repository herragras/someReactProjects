import React, { Component } from 'react'
import User from "./user";
import Navbar from "./navbar";

class UserApp extends Component {
    render() {
        return (
            <div>
                <Navbar title="User App"/>
                <User name="Ahmet Mehmet"
                      department="IT"
                      salary="2500"
                />
                <User name="Max Musterman"
                      department="IT"
                      salary="2700"
                />
            </div>
        )
    }
}

export default UserApp;