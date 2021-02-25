import React from 'react'

class TimeApp extends React.Component {
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

export default TimeApp;
