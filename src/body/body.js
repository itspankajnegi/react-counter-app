import React from "react";
import { styles } from "../styles/styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Body = (props) => {
  const { count, increment, decrement, reset, typeOfNum } = props;

  return (
    <>
      <div style={styles.container}>
        <div>
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
          <div style={styles.marginTop}>
            <span>
              Hey, the <span style={styles.spanFont}>{count}</span> % 2 =
              <span style={styles.spanFont}>{count % 2}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
