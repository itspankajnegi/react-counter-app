import React, { Fragment, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styles } from "../styles/styles";

const Header = () => {
  const [numType, setNumType] = useState("even");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(count * 0);
  };

  const typeOfNum = () => {
    if (count % 2 == 0) {
      setNumType("even");
    } else {
      setNumType("odd");
    }
  };

  return (
    <Fragment>
      <div style={styles.header}>
        <div>
          <span style={styles.marginLeft}>
            Count is : <span style={styles.spanFont}>{numType}</span>
          </span>
        </div>
        <div style={styles.marginRight}>
          <Stack spacing={2} direction="row" style={styles.counterAlignment}>
            <Button
              onClick={() => {
                decrement();
                typeOfNum();
              }}
            >
              <RemoveCircleOutlineIcon />
            </Button>
            <span style={styles.spanFont}>{count}</span>
            <Button
              onClick={() => {
                increment();
                typeOfNum();
              }}
            >
              <AddCircleOutlineIcon />
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                reset();
                typeOfNum();
              }}
            >
              Reset
            </Button>
          </Stack>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
