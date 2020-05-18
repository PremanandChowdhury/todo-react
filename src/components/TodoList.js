import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, onEdit, onDelete, clearList } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">to do list</h3>

        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              onEdit={() => onEdit(item.id)}
              onDelete={() => onDelete(item.id)}
            />
          );
        })}

        <button
          type="bttton"
          className="btn btn-block btn-danger text-uppercase mt-5"
          onClick={clearList}
        >
          clear List
        </button>
      </ul>
    );
  }
}
