import React, {useState} from "react";

//this component should render a form that when submitted, creates a new Box. You should be able to specify the Box's width, height, and background color. When the form is submitted, clear the inputs values

const NewBoxForm = () => {

const [width, setWidth] = useState("");
const [height, setHeight] = useState("");
const [backgroundColor, setBackgroundColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("You clicked submit")
        console.log(width)
        console.log(height)
        console.log(backgroundColor)
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label name="width">Width:</label>
        <input type="number" onChange={(e) => setWidth(e.target.value)} id="width" />

        <label name="height">Height:</label>
        <input type="number" onChange={(e) => setHeight(e.target.value)} id="height" />

        <label name="backgroundColor">Background Color:</label>
        <input type="text" onChange={(e) => setBackgroundColor(e.target.value)} id="backgroundColor" />
        <button>Create Your Box 🪄</button>
      </form>
      
    </>
  );
};

export default NewBoxForm;
