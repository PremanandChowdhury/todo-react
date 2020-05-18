import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    // destructuring the props
    const { item, onChange, onSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <div className="input-group-append">
              <div className="input-group-text text-white bg-primary">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo list items"
              value={item}
              onChange={onChange}
            />
            <button
              type="submit"
              className="btn btn-block btn-primary mt-4 text-uppercase"
            >
              include
            </button>
          </div>
        </form>
      </div>
    );
  }
}
