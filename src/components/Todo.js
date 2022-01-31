import React, { Fragment, useState } from "react";
import OutputTodo from "./OutputTodo";

const Todo = () => {
  const [todo, setTodo] = useState("");
  console.log("Todo Output", todo);

  const setData = () => {
    localStorage.setItem(todo);
  };
  return (
    <Fragment>
      <div className="my-5 d-flex justify-content-center">
        <form>
          <input type="name" onChange={(e) => setTodo(e)} />
          <button className="btn btn-success ml-2" onClick={(e) => setData(e)}>
            + Add
          </button>
        </form>
      </div>
      <OutputTodo data={todo} />
    </Fragment>
  );
};

export default Todo;
