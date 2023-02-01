import React from "react";

const Modaly = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === "container")
         onClose();
    };

    if(!visible) return null;

    return(

        <div 
        id="container"
        onClick={handleOnClose}
        className="fixed inset-0 flex justify-center items-center bg-opacity-30 backdrop-blur-sm">
           <div className="bg-cyan-100 p-2 rounded">
            <p>benja</p>
            <button onClick={onClose}>x</button>
            </div> 
        </div>
    )
}

export default Modaly;