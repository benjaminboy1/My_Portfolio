import React from "react";
import benja from "../assets/images/benja.jpg"

const Testimonials = () => {
        const social_medias = [
            "logo-linkedin",
            "logo-twitter",
             "logo-facebook",
             "mail-unread",
             "logo-stackoverflow"
        ];


        return(
        <section id="testimonials" className="">
        <div className="text-center">
            <h3 className="text-4xl font-semibold">
                My <span>Testimonials</span>
            </h3>
            <p className="text-gray-400 text-lg my-3">All about testimonials</p>
        </div>

        <div className="grid md:grid-cols-1 lg:flex mx-auto gap-5 mt-3 py-2 items-center group ">

            <div className="dark:bg-white/10 bg-gray-500  cursor-pointer group-hover:blur-sm p-4 hover:!blur-none rounded-xl group-hover:scale-[0.85]  ">
                
                <img src={benja} className=" h-20 w-20 mx-auto border-green-300 border-4 rounded-full" alt=""/>
                
                <h4 className="uppercase font-bold text-center text-green-300 opacity-70">
                        Gracias
                 <h3 className=" font-semibold text-gray-300 opacity-90 text-sm">Web designer</h3></h4>
                
                    <p className="text-sm leading-5 font-light opacity-50 text-center">
                        Lorem ipsum dolor sit amet consectetur .<br/> 
                        Fugit error ut labore dignissimos est maiore<br/>
                         his numquam esse iusto molestias omnis quos dicta,<br/> 
                         similique explicabo ab saepe?
                    </p>
                    <button className="flex items-center justify-center content-center mx-auto rounded-full btn-primari px-2 mt-2  animate-bounce">
                        Show more
                    </button>

                    <div className=" flex items-center justify-center gap-2">
                        { social_medias?.map(icon=>(
                            <div key={icon} className="text-cyan-600 hover:text-gray-100 cursor-pointer">
                                <ion-icon name={icon}></ion-icon>
                            </div>
                        ))

                        }
                    </div>

            </div>
            <div className="dark:bg-white/10 bg-gray-500  cursor-pointer group-hover:blur-sm p-4 hover:!blur-none rounded-xl group-hover:scale-[0.85]  ">
                
                <img src={benja} className=" h-20 w-20 mx-auto border-green-300 border-4 rounded-full" alt=""/>
                
                <h4 className="uppercase font-bold text-center text-green-300 opacity-70">
                        Gracias
                 <h3 className=" font-semibold text-gray-300 opacity-90 text-sm">Web designer</h3></h4>
                
                    <p className="text-sm leading-5 font-light opacity-50 text-center">
                        Lorem ipsum dolor sit amet consectetur .<br/> 
                        Fugit error ut labore dignissimos est maiore<br/>
                         hic numquam esse iusto molestias omnis quos dicta,<br/> 
                         similique explicabo ab saepe?
                    </p>
                    <button className="flex items-center justify-center content-center mx-auto rounded-full btn-primari px-2 mt-2  animate-bounce">
                        Show more
                    </button>

                    <div className=" flex items-center justify-center gap-2">
                        { social_medias?.map(icon=>(
                            <div key={icon} className="text-cyan-600 hover:text-gray-100 cursor-pointer">
                                <ion-icon name={icon}></ion-icon>
                            </div>
                        ))

                        }
                    </div>

            </div>
            <div className="dark:bg-white/10 bg-gray-500  cursor-pointer group-hover:blur-sm p-4 hover:!blur-none rounded-xl group-hover:scale-[0.85]  ">
                
                <img src={benja} className=" h-20 w-20 mx-auto border-green-300 border-4 rounded-full" alt=""/>
                
                <h4 className="uppercase font-bold text-center text-green-300 opacity-70">
                        Gracias
                 <h3 className=" font-semibold text-gray-300 opacity-90 text-sm">Web designer</h3></h4>
                
                    <p className="text-sm leading-5 font-light opacity-50 text-center">
                        Lorem ipsum dolor sit amet consectetur .<br/> 
                        Fugit error ut labore dignissimos est maiore<br/>
                         hic numquam esse iusto molestias omnis quos dicta,<br/> 
                         similique explicabo ab saepe?
                    </p>
                    <button className="flex items-center justify-center content-center mx-auto rounded-full btn-primari px-2 mt-2  animate-bounce">
                        Show more
                    </button>

                    <div className=" flex items-center justify-center gap-2">
                        { social_medias?.map(icon=>(
                            <div key={icon} className="text-cyan-600 hover:text-gray-100 cursor-pointer">
                                <ion-icon name={icon}></ion-icon>
                            </div>
                        ))

                        }
                    </div>

            </div>
            <div className="dark:bg-white/10 bg-gray-500  cursor-pointer group-hover:blur-sm p-4 hover:!blur-none rounded-xl group-hover:scale-[0.85]  ">
                
                <img src={benja} className=" h-20 w-20 mx-auto border-green-300 border-4 rounded-full" alt=""/>
                
                <h4 className="uppercase font-bold text-center text-green-300 opacity-70">
                        Gracias
                 <h3 className=" font-semibold text-gray-300 opacity-90 text-sm">Web designer</h3></h4>
                
                    <p className="text-sm leading-5 font-light opacity-50 text-center">
                        Lorem ipsum dolor sit amet consectetur .<br/> 
                        Fugit error ut labore dignissimos est maiore<br/>
                         hic numquam esse iusto molestias omnis quos dicta,<br/> 
                         similique explicabo ab saepe?
                    </p>
                    <button className="flex items-center justify-center content-center mx-auto rounded-full btn-primari px-2 mt-2  animate-bounce">
                        Show more
                    </button>

                    <div className=" flex items-center justify-center gap-2">
                        { social_medias?.map(icon=>(
                            <div key={icon} className="text-cyan-600 hover:text-gray-100 cursor-pointer">
                                <ion-icon name={icon}></ion-icon>
                            </div>
                        ))

                        }
                    </div>

            </div>
            
            
        
        </div>

       </section>
        )
}
export default Testimonials