import React from "react";

class Counter extends React.Component{
    
        render() {
    
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>        
                
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-success btn-sm m-2 px-4"
                ><strong>+</strong></button>
                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm px-4"
                ><strong>-</strong></button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >Delete</button>
         
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount = () => {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
      
    }
}

export default Counter;