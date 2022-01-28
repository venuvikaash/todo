import React, { Fragment, useState } from "react";
import OutputTodo from "./OutputTodo";

const Todo = () => {
  const [todo, setTodo] = useState("");
  console.log("Todo Output", todo);
  return (
    <Fragment>
      <div className="my-5 d-flex justify-content-center">
        <form onSubmit={(e) => setTodo(e.target.value)}>
          <input type="name"  />
          <button
            className="btn btn-success ml-2"
            onClick={(e) => setTodo(e.target.value)}
          >
            + Add
          </button>
        </form>
      </div>
      <OutputTodo data={todo} />
    </Fragment>
  );
};

export default Todo;
