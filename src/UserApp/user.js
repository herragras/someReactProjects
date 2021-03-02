import React, { Component } from 'react'
import PropTypes from "prop-types"

class User extends Component {
    state={
        isVisible:false
    }
    static defaultProps = {
        name: "No infos",
        salary: "No infos",
        department: "No infos"
    }
    OnClickHandle = (e) => {
        this.setState({isVisible: !this.state.isVisible})
    }
    render(props) {
        //destructing
        const {name, department, salary} = this.props;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 
                        className="d-inline" style = {{cursor:"pointer"}}
                        onClick={this.OnClickHandle}>{name}</h4>
                        <i className="far fa-trash-alt" style = {{cursor:"pointer"}} />
                    </div>
                    {this.state.isVisible?
                    <div className="card-body">
                        <p className="card-text">Salary : {salary}</p>
                        <p className="card-text">Department : {department}</p>
                    </div>: null
                    }
                </div>
                
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}

export default User;