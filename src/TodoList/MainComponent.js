import React from "react";

class MainComponent extends React.Component {
  state = {
    userInput: "",
    list: [],
  };

  onChangeInput(input) {
    this.setState({
      userInput: input,
    });
  }

  addItem(input) {
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({
      list: listArray,
      userInput: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content">
            <div className="col-5 align-items-center">
              <h3 className="bg-primary text-white p-3 text-center">
                Yapılacaklar Listesi
              </h3>
              <div>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="yeni faaliyet giriniz"
                    value={this.state.userInput}
                    onChange={(e) => this.onChangeInput(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      onClick={() => this.addItem(this.state.userInput)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <ol>
                {this.state.list.map((val) => (
                  <li>{val}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
