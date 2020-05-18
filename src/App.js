import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default class App extends Component {
  // STATE
  state = {
    items: [
      { id: 1, title: "wake up " },
      { id: 2, title: "breakfast" },
    ],
    id: uuid,
    item: "",
    editItem: false,
  };

  // HELPER METHODS
  // input change state actions
  onChange = (e) => {
    console.log("change");
  };

  // submit button state changes
  onSubmit = (e) => {
    console.log("submit");
  };

  // clear button state changes
  clearList = () => {
    console.log("clear list");
  };

  // delete icon state changes
  onDelete = (id) => {
    console.log(`delete ${id}`);
  };

  // edit icon state changes
  onEdit = (id) => {
    console.log(`edit ${id}`);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">to do input</h3>

              <TodoInput
                item={this.state.item}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                editItem={this.state.editItem}
              />

              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
