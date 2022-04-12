import React from "react";

//Place your state that contains all of the boxes here. This component should render all of the box components along with the NewBoxForm component

const Box = ({ width, height, backgroundColor }) => {
  console.log(width, height, backgroundColor);
  return (
    <div
      style={{
        'height': height,
        'width': width,
        'backgroundColor': backgroundColor,
      }}
    >  </div>
  );
};

export default Box;
