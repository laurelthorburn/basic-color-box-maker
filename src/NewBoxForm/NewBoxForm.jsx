import React, { useState } from "react";
import Box from "../Box/Box";
import uuid from "uuid";

//this component should render a form that when submitted, creates a new Box. You should be able to specify the Box's width, height, and background color. When the form is submitted, clear the inputs values

const NewBoxForm = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [boxArray, setBoxArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentBox = {
      height: height,
      width: width,
      backgroundColor: backgroundColor,
    };
    setBoxArray([...boxArray, currentBox]);
  };

  const handleDelete = () => {
    console.log("You tried to delete me sucka");

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label name="width">Width:</label>
        <input
          type="text"
          onChange={(e) => setWidth(e.target.value)}
          id="width"
        />

        <label name="height">Height:</label>
        <input
          type="text"
          onChange={(e) => setHeight(e.target.value)}
          id="height"
        />

        <label name="backgroundColor">Background Color:</label>
        <input
          type="text"
          onChange={(e) => setBackgroundColor(e.target.value)}
          id="backgroundColor"
        />
        <button>Create Your Box 🪄</button>
      </form>
      {boxArray.length > 0
        ? boxArray.map((box) => {
            return (
              <>
                <Box
                  key={boxArray[box.i]}
                  width={`${box.width}`}
                  height={`${box.height}`}
                  backgroundColor={`${box.backgroundColor}`}
                />
                <button onClick={handleDelete}>Remove box</button>
              </>
            );
          })
        : ""}
    </>
  );
};

export default NewBoxForm;
