import React, { Component } from 'react';
import PropTypes from "prop-types"

class Navbar extends Component {
    render(props) {
        return (
            <div>
              <h2>{this.props.title}</h2>  
            </div>
        )
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps= {
    title: "Default App"
}

export default Navbar;