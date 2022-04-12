import React, {useState} from "react";
import Box from '../Box/Box';
import uuid from 'uuid';

//this component should render a form that when submitted, creates a new Box. You should be able to specify the Box's width, height, and background color. When the form is submitted, clear the inputs values

const NewBoxForm = () => {

const [width, setWidth] = useState("");
const [height, setHeight] = useState("");
const [backgroundColor, setBackgroundColor] = useState("");
const [box, setBox] = useState("");

const boxArray = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        setWidth(e.target.value);
        setHeight(e.target.value);
        setBackgroundColor(e.target.value);
        boxArray.push({'height': height, 'width': width, 'backgroundColor' : backgroundColor})
        console.log(boxArray)
        setBox(boxArray.map(box =>{ return (
            <Box key={uuid()} width={`${box.width}`} height={`${box.height}`} backgroundColor={`${box.backgroundColor}`} />
        )}))
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label name="width">Width:</label>
        <input type="text" onChange={(e) => setWidth(e.target.value)} id="width" />

        <label name="height">Height:</label>
        <input type="text" onChange={(e) => setHeight(e.target.value)} id="height" />

        <label name="backgroundColor">Background Color:</label>
        <input type="text" onChange={(e) => setBackgroundColor(e.target.value)} id="backgroundColor" />
        <button>Create Your Box 🪄</button>
      </form>
      {box}
    </>
  );
};

export default NewBoxForm;
