import React from "react";

class CounterApp extends React.Component{
    state={
        value: 0
       
    };

        //constructor() {
        //    super();
        //    this.handleIncrement = this.handleIncrement.bind(this);
        //}

        handleIncrement = () => {

            this.setState({ value: this.state.value +1 });
           
        }

     
        render() {
    
        return(
            <div className="m-3">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="brn btn-secondary btn-sm"
                onClick={this.handleIncrement}
                >Increment</button>
                
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount = () => {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
       
   }
    
}

export default CounterApp;