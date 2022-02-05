import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Todo = ({ toggle, isOpen, text, cancelButton, deleteButton }) => {
  return (
    <Fragment>
      {isOpen && <button onClick={toggle}>Open Modal</button>}
      <h1>{text}</h1>
      <button>{cancelButton}</button>
      <button>{deleteButton}</button>
    </Fragment>
  );
};

export default Todo;
