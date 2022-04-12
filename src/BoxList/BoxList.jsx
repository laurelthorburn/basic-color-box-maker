import React from "react";
import NewBoxForm from '../NewBoxForm/NewBoxForm'

//Place your state that contains all of the boxes here. This component should render all of the box components along with the NewBoxForm component

const BoxList = () => {
    return ( 
        <div className="BoxList">
            <NewBoxForm />

        </div>
     );
}
 
export default BoxList;