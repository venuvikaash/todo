import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState();

  const handleToggle = (e) => {
    setToggle(!toggle);
    console.log("E", e.target);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={(e) => handleToggle(e)}>
        {toggle ? <>ON</> : <>OFF</>}
      </button>
    </div>
  );
};

export default Toggle;
