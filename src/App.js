import React, { Fragment } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <Fragment>
      <div className="container-fluid d-flex flex-column justify-content-center">
        <Todo />
      </div>
    </Fragment>
  );
}

export default App;
