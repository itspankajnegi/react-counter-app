import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styles } from "../styles/styles";

const Header = (props) => {
  const { count, numType, increment, decrement, reset, typeOfNum } = props;

  return (
    <>
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
    </>
  );
};

export default Header;
