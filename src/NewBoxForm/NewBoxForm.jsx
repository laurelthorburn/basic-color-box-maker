import React from "react";

//this component should render a form that when submitted, creates a new Box. You should be able to specify the Box's width, height, and background color. When the form is submitted, clear the inputs values

const NewBoxForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("You clicked submit")
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label name="width">Width:</label>
        <input type="text" id="width" />

        <label name="height">Height:</label>
        <input type="text" id="height" />

        <label name="backgroundColor">Background Color:</label>
        <input type="text" id="backgroundColor" />
        <button>Create Your Box 🪄</button>
      </form>
    </>
  );
};

export default NewBoxForm;
