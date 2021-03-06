import React from 'react';
import Counter from "./counter";

class Counters extends React.Component{

    render(){
        const {onReset, counters, onIncrement, onDecrement, onDelete} = this.props;
        return(
            <div>               
                <button onClick={onReset} 
                className="btn btn-primary btn-sm">Reset</button>
               <div> {counters.map(counter => (
                   <Counter 
                   key={counter.id}
                   onIncrement={onIncrement}
                   onDecrement={onDecrement}
                   onDelete={onDelete}
                   counter={counter}/>))}
              
                </div>
            </div>
        );
    }
    
}

export default Counters;
