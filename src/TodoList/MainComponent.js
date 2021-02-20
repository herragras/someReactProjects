import React from "react";

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <div className ="container">
                    <div className="row justify-content">
                        <div className="col-5 align-items-center">
                            <h3 className="bg-primary text-white p-3 text-center">
                                Yapılacaklar Listesi
                            </h3>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="yeni faaliyet giriniz"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary">Add</button>
                                    </div>
                            </div>
                           
                            <div className="custom-control custom-checkbox my-3">
                                <input type="checkbox" className="custom-control-input" name="" id="displayAll"/>
                                <label className="custom-control-label" for="displayAll">Display All</label>
                            </div>
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Birinci faaliyet</td>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <span>
                                            Yes
                                        </span>
                                        <span>
                                            No
                                        </span>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div >
                    </div >
            </div >
           
        )
    }
}

export default MainComponent;