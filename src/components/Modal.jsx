import React from "react";
import {FcCancel} from 'react-icons/fc';
import call from "../assets/images/call.jpg";



const Modal = ({ visible, onClose}) => {
    const handleOnClose = (e) => {
        if (e.target.id === "things")
            onClose();
    };

    if(!visible) return null;

   

    return(
        <div 
        id="things"
        onClick={handleOnClose}
        className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center ">
            <div className="px-4 rounded-lg bg-gray-400">
            <button className="float-right  text-3xl " onClick={onClose} ><FcCancel /></button>

            <div className="mt-2 ">
            <img alt="" className="h-28 w-28 rounded-full border-4 border-green-400"  src={call} />
            </div>
           
            <div className="mt-5">
                
                <h2 className="text-center text-teal-700 font-semibold ">BENJAMIN MUMBITA</h2>
                <div className=" p-4 border-t mx-4 mt-4">
                <p>benjaminmumbita10@gmail.com</p>
                <p>(243) 826 838 377</p>
            </div>
            </div>
            
            </div>
            
        </div>
    )
}

export default Modal;