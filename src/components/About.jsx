import React from "react";
import cover_etter from "../assets/cover_etter.pdf";
import benjamin2 from "../assets/images/benjamin2.png";


const About = () => {

    const info=[
        {text: 'years experience', count:'02'},
        {text: 'Completed Projects', count:'12'},
        {text: 'Companie Work', count:'01'},

    ]

    return(
        <section id="about" className="py-10 text-white">
            
            <div className="text-center mt-8"> 
                <h3 className="text-4xl font-semibold text-black">
                    About <span>Me</span>
                </h3>
            
                <p className="text-gray-400 my-3 text-lg">my introduction</p>
                <div className="flex md:flex-row flex-col-reverse
                 items-center mt-4 md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                <div className="py-2">
                <div className="text-gray-400 my-2 mt-4">
                    <p className="text-justify leading-7">
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Assumenda consequatur
                         porro minus nam obcaecati temporibus 
                         soluta harum, ut perspiciatis aspernatur 
                         rem, adipisci error illo vero voluptas 
                         optio voluptates laudantium voluptatum.
                         Lorem ipsum dolor sit amet consectetur 
                         adipisicing elit. Dolor autem repudiandae 
                         praesentium maxime corrupti error suscipit 
                         mollitia dicta quidem est deleniti eaque 
                         iure officiis, tempore veritatis fuga maiores a itaque!
                    </p>
                    <div className="flex mt-10  items-center gap-10 sm:gap-9">

                           {info.map((content) => (
                                <div key={content.text} className=" border-2 border-bg-gray-200 rounded-lg px-2">
                                    <h3 className="md:text-4xl text-2xl 
                                    font-semibold dark:text-white"> 
                                    {content.count}<span className="text-cyan-500">+</span>{" "}
                                    </h3>
                                    <span  className="md:text-base text-sm">{content.text}</span>
                                 </div>
                            ))
                            }  
                           
                       </div>
                       <br />
                       <br />
                       <a href={cover_etter} download>
                       <button className="btn-primary animate-bounce">Get my CV</button>
                       </a>
                    </div> 
                </div>

               <div className="flex-1 flex justify-center items-center">
                            <div className="lg:w-96 h-full relative sm:w-10/11 w-11/12 max-w-sm circle">
                                
                                <img src={benjamin2}
                                alt="" 
                                className="object-cover"/>
                            </div>
               </div> 
            </div>
        </div>
    
     </section>
    );
};

export default About;