import "./Child.css";
import React from "react";

const Child = () => {
  return (
    // <React.Fragment>
    <>
    <div className="component">
      <h3>Hello Component</h3>
    </div>
    <h3>Hello Fragment</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Quia veniam minima quo architecto, quis tenetur at, ut nostrum fuga itaque ipsa illo dolorum nisi laudantium necessitatibus!
      Eos voluptatum tempore ad.
    </p>
    {/* // </React.Fragment> */}
    </>
  );
};

export default Child;
