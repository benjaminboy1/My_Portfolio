import React, { useEffect, useState } from "react";
import { BsMoonFill,  BsSunFill} from 'react-icons/bs';
import { AiOutlineMenuFold,  AiOutlineMenuUnfold  } from 'react-icons/ai';



const Navbar = () => {
     const [sticky, setSticky] = useState(true);
     const [open, setOpen] = useState(false)
     const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link:"#about" },
        { name: "SKILLS", link:"#skills" },
        { name: "PROJECTS", link:"#projects" },
        { name: "TESTIMONIALS", link:"#testimonilas" },
        { name: "CONTACTS", link:"#contacts" },
    ];
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
           // const nav = document.querySelector("nav")
            window.scrollY >= 0 ? setSticky(true) : setSticky(true);
        })
    },[])

    // var darkmode

    const[ theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark"); 
        }
    }, [theme]);

    //dark systeme
    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark').matches){
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }, [])

    //le function de la connexion
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return(
        
      <nav 
        className={`fixed w-full left-0 top-0 z-[999] ${
            sticky ? "bg-gradient-to-r from-cyan-700 via-teal-500 to-slate-900 text-gray-900" : "text-gray-700" 
        }`}>

            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <h4 className="text-4x1 uppercase font-bold">
                        Benjamin<span className="text-cyan-600">-</span>Mumbita
                    </h4>

                </div>

                <div className={` ${sticky ? 'md:backdrop-blur-3xl' : 'text-gray-700'
                        } text-gray-900 md:block hidden px-7 font-medium `}
                        >
                     
                  
                    <ul className="flex items-center gap-1 py-2 text-lg text-cyan-300">
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className="px-6 hover:text-gray-300">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li> 
                        ))}


           <button onClick={handleThemeSwitch}>
                {theme === 'light' ? <BsMoonFill className="hover:text-gray-300"/> : <BsSunFill className="hover:text-gray-300"/>}
            </button>
                    </ul>
                    

                </div>

                <div 
                onClick={() => setOpen(!open)}
                className={`z-[999] ${
                    open ? "text-cyan-300" : "text-cyan-400"
                } text-3xl md:hidden `}    
                >
                {
                    open ? <AiOutlineMenuUnfold/> :  <AiOutlineMenuFold />
                }
                
              
               
                </div>

                <div className={`md:hidden text-cyan-300 absolute w-2/3 min-h-screen px-7 font-medium py-5 bg-gradient-to-r from-cyan-700 to-cyan-900
                 top-0 duration-200
                  ${ open ? "right-0" : "right-[-100%]"
                }`} >

                   <div className="mt-9 py-5">
                   <button className="text-2xl gap-1 " onClick={handleThemeSwitch}>
                    {theme === 'light' ?
                     <BsMoonFill className="hover:text-gray-300"/> 
                     : <BsSunFill className="hover:text-gray-300"/>}
                    </button>
                   </div>
                        
                    

                    <ul className="flex flex-col justify-center h-full gap-10 py-10 text-center leading-10">
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className="px-6 hover:text-gray-500">
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                
                 
                
            </div>
      </nav>
     
      
    )
    

}

export default Navbar;
