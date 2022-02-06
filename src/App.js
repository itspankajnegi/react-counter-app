import React, { Fragment } from "react";
import Body from "./body/body";
import Counter from "./counterButtons/counterButtons";
import Header from "./header/header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Body />
    </Fragment>
  );
};

export default App;
