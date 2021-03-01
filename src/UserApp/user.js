import React, { Component } from 'react'

class User extends Component {
    render(props) {
        //destructing
        const {name, department, salary} = this.props;
        return (
            <div>
                <ul>
                    <li>Name : {name}</li>
                    <li>Department :{department}</li>
                    <li>Salary :{salary}</li>
                </ul>
            </div>
        )
    }
}

export default User;