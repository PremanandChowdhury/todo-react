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
  // 1. on click event occurs, fetch the event value and set the item

  onChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  // submit button state changes
  // 1. control the loading of the page.
  // 2. update the id and the title of the new item
  // 3. update the items list
  // 4. set the update to the initial state of the props.

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
  // 1. reset the list when clearlist is clicked

  clearList = () => {
    // reset the items to initial empty state
    this.setState({
      items: [],
    });
  };

  // delete icon state changes
  // 1. filter out the item from the list
  // 2. update the items list

  onDelete = (id) => {
    // delete a particular item of the list
    const filteredItem = this.state.items.filter((item) => item.id !== id);

    // set the state of the items list after deletion
    this.setState({
      items: filteredItem,
    });
  };

  // edit icon state changes
  // 1. delete item from list
  // 2. store the deleted item
  // 3. update the item to the input form for modification

  onEdit = (id) => {
    // delete a particular item of the list
    const filteredItem = this.state.items.filter((item) => item.id !== id);

    // fetch the selected item
    const selectedItem = this.state.items.find((item) => item.id === id);

    // setting the item to be edited
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
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
