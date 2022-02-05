import React, { Fragment, useState } from "react";
import Todo from "./Components/Todo";
import Counter from "./counter/counter";

function App(props) {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <Fragment>
      <Counter />
      <div style={styles.container}>
        <button onClick={decrement} style={styles.decrementStyle}>
          -
        </button>
        <div style={styles.heading}>{count}</div>
        <button onClick={increment} style={styles.incrementStyle}>
          +
        </button>
      </div>
      <div style={styles.container}>
        <button onClick={reset} style={styles.resetStyle}>
          RESET
        </button>
      </div>
      <p style={styles.container}>Loading...</p>
      <Todo
        toggle={toggleModal}
        isOpen={isOpen}
        text="Do you want to open the modal?"
        cancelButton="Cancel"
        deleteButton="Delete"
      />
    </Fragment>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  heading: {
    fontSize: 30,
  },
  decrementStyle: {
    fontSize: 30,
    cursor: "pointer",
    padding: "0px 10px",
    backgroundColor: "#FF1700",
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    marginRight: "10px",
  },
  incrementStyle: {
    fontSize: 30,
    cursor: "pointer",
    padding: "0px 10px",
    backgroundColor: "#519259",
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    marginLeft: "10px",
  },
  resetStyle: {
    fontSize: 20,
    cursor: "pointer",
    padding: "0px 10px",
    backgroundColor: "#FF1700",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    margin: 10,
  },
};

export default App;
