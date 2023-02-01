import React from "react";
import circle from '../assets/images/circle.png';


const Circly = () => {
    return(
        <section>

    <img src={circle} alt="" className="z-20 w-9 absolute left-52 top-32 animate-ping"/>
    <img src={circle} alt="" className="z-20 w-9 absolute right-76 bottom-56 animate-ping"/>
    <img src={circle} alt="" className="z-20 w-9 absolute right-10 top-20 animate-ping"/>
    <img src={circle} alt="" className="z-20 w-9 absolute right-44 bottom-44 animate-ping"/>
    <img src={circle} alt="" className="z-20 w-9 absolute right-96 top-36 animate-ping"/>
        </section>
    )
}

export default Circly;