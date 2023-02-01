import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projet1 from "../assets/images/projet1.jpeg";
import projet2 from "../assets/images/projet2.jpeg";
import projet3 from "../assets/images/projet3.jpeg";
import projet4 from "../assets/images/projet4.jpeg";
import projet5 from "../assets/images/projet5.jpeg";
import projet6 from "../assets/images/projet6.jpeg";
import benjamin4 from "../assets/images/benjamin4.png";




import "swiper/css";
import "swiper/css/pagination";
import {Pagination,Autoplay} from 'swiper';


const Projects = () => {
    const projects =[
        {   
            img: projet1, 
            name:'The best team',
            gitthub_link :'https://benjaminboy1.github.io/benjamin-first-Project/#', 
            live_link:"https://www.realmadrid.com "
        },

        {
            img: projet2,
            name:'Outher club',
            gitthub_link :'ttps://www.psg.fr',
            live_link:"https://fcbayern.com"
        },
        {   
            img: projet3, 
            name:'Show the details',
            gitthub_link :'https://www.barcelo.com',
            live_link:"https://www.liverpoolfc.com"
        },
        {   img: projet4, 
            name:'one of the favorite team',
            gitthub_link :'https://fr.mancity.com',
            live_link:"https://www.arsenal.com"
        },
        {   img: projet5, 
            name:'Angland teams',
            gitthub_link :'https://www.manutd.com ',
            live_link:"https://en.atleticodemadrid.com"
        },
        {   
            img: projet6,
            name:'Allez leo messi',
            gitthub_link :'https://www.chelseafc.com',
            live_link:"https://www.om.fr"
        },
    ]
    return(
        <section id="projects" className="py-10">
        <div className="text-center">
            <h3 className="text-4xl font-semibold">
                My <span>Projects</span>
            </h3>
            <p className="text-gray-400 text-lg my-3">All about my projects</p>
        </div>
        <br/>
        <div className="flex max-w-6xl px-5 max-auto items-center relative">
            <div className="lg:w-3/4 w-full">

                <Swiper 
                slidePerview={1.2}
                spaceBetween={20} 
                breakpoints={{
                    768:{
                        slidesPerView: 2, 
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                    pagination={{
                        clickable: true,
                    
                }} 
                modules={[Pagination, Autoplay]}>
                   
                   {
                    projects.map((project_info,i)=>(
                         
                        <SwiperSlide key={i}>
                        <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                            <img src={project_info.img} alt="" className="rounded-lg" />
                            <h3 className="text-xl my-4">{project_info.name}</h3>
                            <div className="flex gap-3 space-x-1">
                                <a href={project_info.gitthub_link} className="text-cyan-500 hover:text-gray-900 bg-gray-200 px-2 py-1 inline-block rounded-bl-lg animate-bounce">
                                    Github
                                </a>
                                
                                <a href={project_info.live_link} className="text-cyan-500 hover:text-gray-900 bg-gray-200 px-2 py-1 inline-block rounded-tr-lg animate-bounce">
                                    Show the video 
                                </a>

                            </div>

                        </div>

                    </SwiperSlide>

                    
                    ))
                   }
                </Swiper>
            </div>
            <div className="lg:w-99 h-full border-8 rounded-full">
                <img src={benjamin4} alt="" className=" rounded-full" />
            </div>
            

        </div>

       </section>
    )
}

export default Projects;