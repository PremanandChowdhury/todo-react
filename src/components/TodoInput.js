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

            {/* change the color fo the button from primary to success when edit icon is clicked */}

            <button
              type="submit"
              // disabled to true for preventing user from adding empty item
              disabled={item ? false : true}
              className={
                editItem
                  ? "btn btn-block btn-success mt-4 text-uppercase"
                  : "btn btn-block btn-primary mt-4 text-uppercase"
              }
            >
              {editItem ? "edit Item" : "include item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
