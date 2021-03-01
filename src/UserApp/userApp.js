import React, { Component } from 'react'
import User from "./user";

class UserApp extends Component {
    render() {
        return (
            <div>
                <User name="Ahmet Arif"
                      department="IT"
                      salary="2500"
                />
                <User name="Red Kit"
                      department="IT"
                      salary="2700"
                />
            </div>
        )
    }
}

export default UserApp;