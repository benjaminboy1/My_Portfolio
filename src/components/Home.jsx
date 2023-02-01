import React from "react";
import { useEffect , useState } from "react";
import benjamin1 from "../assets/images/benjamin1.png";
import { Typewriter } from 'react-simple-typewriter'
import Modal from "./Modal";



const Home = () => {

    //modal 
    const [openModal, setOpenModal] = useState(false);

    const handleOneClose = () => setOpenModal(false);

    //dark systeme
    const[ theme, setTheme] = useState("light");
          
    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark').matches){
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }, [theme])


        const social_media = [
            "logo-instagram",
            "logo-facebook",
            "logo-linkedin",
            "logo-twitter"
            
        ];


    return(
        <section id="home"
        className="min-h-screen flex py-10 md:flex-row flex-col items-center ">

            <div className="flex-1 flex itens-center justify-center h-full">
                <img src={benjamin1} alt="" className=" h-100 mx-auto object-cover rounded-full w-100 border-cyan-500 border-b-8" />
            </div>

            <div className="flex-1">
                <div>
                    <h1 className="text-3xl text-center leading-10 font-bold">
                        <span className=" text-5xl  ">
                            Hi! There
                            <br />
                        </span>
                        My Name is <span className="text-cyan-300 md:text-center">Bnjamin Mumbita</span>
                    </h1>
                    <h1 style={{paddingTop: '3rem', margin: 'auto 0'}} className="md:text-1xl text-3xl text-center font-bold">
                        I'm a <br/>
                    <span className="text-teal-500" style={{ fontWeight: 'bold', marginLeft: '10px'}}>
                        <Typewriter 
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={400}
                        deleteSpeed={100}
                        delaySpeed={1000}
                        words={['Developer', 'Disigner', 'Tester']}
                        />
                    </span>

                    </h1>
                    <button onClick={() => setOpenModal(true)}
                     className="btn-primary mt-9 cursor-pointer animate-bounce
                      flex items-center">Call me</button>
                    
                    <div className="mt-9 text-2xl flex justify-center gap-2">
                        {
                            social_media?.map(icon=>(
                                <div key={icon} className="text-cyan-600 hover:text-gray-500 cursor-pointer  ">
                                    <ion-icon name={icon}></ion-icon>

                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
            <Modal onClose={handleOneClose} visible={openModal} />
        </section>
    )
}

export default Home;
