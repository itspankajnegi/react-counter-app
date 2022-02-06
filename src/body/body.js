import React, { Fragment } from "react";
import { styles } from "../counterButtons/styles";
import CounterButtons from "../counterButtons/counterButtons";

const Body = () => {
  return (
    <Fragment>
      <div style={styles.container}>
        <div>
          <CounterButtons />
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
