import React, { Fragment } from "react";

const OutputTodo = ({data}) => {
  return (
    <Fragment>
      <table className="w-50 m-auto">
        <thead>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          <td>{data}</td>
          <td><button className="btn btn-warning">Edit</button></td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tbody>
      </table>
    </Fragment>
  );
};

export default OutputTodo;
