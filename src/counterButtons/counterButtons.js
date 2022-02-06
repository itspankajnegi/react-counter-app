import React, { Fragment, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styles } from "./styles";

const CounterButtons = (props) => {
  const { type } = props;

  const [count, setCount] = useState(0);

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
      <Stack spacing={2} direction="row" style={styles.counterAlignment}>
        <Button onClick={decrement}>
          <RemoveCircleOutlineIcon />
        </Button>
        <span style={styles.spanFont}>{count}</span>
        <Button onClick={increment}>
          <AddCircleOutlineIcon />
        </Button>
        <Button variant="contained" onClick={reset}>
          Reset
        </Button>
      </Stack>
      <div style={styles.marginTop}>
        <span>
          Hey, the <span style={styles.spanFont}>{count}</span> % 2 =
          <span style={styles.spanFont}>{count % 2}</span>
        </span>
      </div>
    </Fragment>
  );
};

export default CounterButtons;
