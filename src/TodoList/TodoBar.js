import React from "react";


class TodoBar extends React.Component {
    state={
        newItem:"",
        list:[]
    }
    //addItem = ()=>{
       // return (
         // push.this.props.state.list(this.props.value)
          //  );
   //}
    render() {

        return (
            <div className="input-group">
                <input className="form-control" 
                    type="text" 
                    placeholder="yeni faaliyet giriniz" 
                    value={this.state.newItem}
                    onChange={e=> this.updateInput("newItem", e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-primary"
                        //onClick={()=> this.addItem}
                    >Add</button>
                </div>
            </div>
        );
    }
}
export default TodoBar;