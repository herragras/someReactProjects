import React from "react";

class TodoBar extends React.Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="yeni faaliyet giriniz" />
                <div className="input-group-append">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}
export default TodoBar;