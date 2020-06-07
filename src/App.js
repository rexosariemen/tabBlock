import React from "react";
import { render } from "react-dom";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <React.StrictMode>
      <>
        <Tabs />
      </>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
