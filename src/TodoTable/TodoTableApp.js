import React from "react";

class App extends React.Component {
  state = {
    newItem: "",
    todos: [
      { id: 1, action: "call your friend" },
      { id: 2, action: "do the homeworks" },
      { id: 3, action: "send the documents" },
      { id: 4, action: "play football with friends" },
    ],
  };

  //Doing a todo table

  renderTodosTable() {
    return this.state.todos.map((todo, id) => {
      return (
        <tr key={id}>
          <td>{this.state.todos.indexOf(todo) + 1}</td>
          <td>{todo.action}</td>
          <td>
            <button className="btn btn-secondary" onClick={(e) => this.deleteItem(todo)} type="button" />
          </td>
        </tr>
      );
    });
  }

  //Add an urgent item

  addUrgentItem = (e) => {
    e.preventDefault();
    if (this.state.newItem !== "")
      this.setState({
        todos: [
          { id: this.state.todos.length+1, action: <strong>{this.state.newItem}</strong> },
          ...this.state.todos,
        ],
      });
    this.setState({ newItem: "" });
  };

  //Add a routine item

  addRoutineItem = (e) => {
    e.preventDefault();
    if (this.state.newItem !== "")
      this.setState({
        todos: [...this.state.todos, { id: this.state.todos.length+1, action: this.state.newItem }],
      });
    this.setState({ newItem: "" });
  };

  //Delete an item

  deleteItem = (todo) => {
    const deletedTodos = this.state.todos.filter(t => t.id !== todo.id);
    this.setState({ todos: deletedTodos });
  };

  //render methode

  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content">
            <div className="col-8 align-items-center">
              <h3 className="bg-primary text-white p-3 m-2">My Todo List</h3>
              <div className="input-group">
                <div>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.newItem}
                    onChange={(e) => this.setState({ newItem: e.target.value })}
                  />
                </div>
                <div className="input-group-append m-1">
                  <span>Add as</span>
                  <button
                    className="btn btn-danger m-1"
                    type="button"
                    onClick={this.addUrgentItem}
                  >
                    Urgent
                  </button>
                  <button
                    className="btn btn-warning m-1"
                    type="button"
                    onClick={this.addRoutineItem}
                  >
                    Routine
                  </button>
                </div>
              </div>

              <div className="custom-control custom-checkbox my-3">
                <input className="custom-control-input" type="checkBox" />
                <label className="custom-control-label" type="button">
                  show all
                </label>
              </div>

              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Todo No</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderTodosTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
