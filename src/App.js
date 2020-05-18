import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  // STATE
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  // HELPER METHODS:

  // input change state actions
  onChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  // submit button state changes
  onSubmit = (e) => {
    // prevents the default loading of the page
    e.preventDefault();

    // update the id:uuid and the title:item
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];

    // set the state of the props
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };

  // clear button state changes
  clearList = () => {
    // reset the items to initial empty state
    this.setState({
      items: [],
    });
  };

  // delete icon state changes
  onDelete = (id) => {
    // delete a particular item of the list
    const filteredItem = this.state.items.filter((item) => item.id !== id);

    // set the state of the items list after deletion
    this.setState({
      items: filteredItem,
    });
  };

  // edit icon state changes
  onEdit = (id) => {
    console.log("edited item");
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
