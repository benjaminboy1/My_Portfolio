import React from "react";

const Contacts = () => {
    return(
        <section id="contacts" className="py-10 px-3">
        <div className="text-center mt-8">
            <h3 className="text-4xl font-semibold">
               Contact<span> Me</span>
            </h3>
            <p className="text-gray-400 text-lg my-3">All about contacts</p>

            <div className="dark:bg-white/10 bg-gray-500 mt-16 md:flex-row flex-col gap-6 max-w-5xl border-2 border-cyan-800 p-6 rounded-lg mx-auto">
                <form className="flex flex-col flex-1 gap-5">
                <input type="text" placeholder="Your Names" className=" mt-2 "/>
                <input type="Email" placeholder="Your Adress" className="mt-2 "/>
                <textarea placeholder="Your Message" className="mt-2" rows={10}></textarea>
                <button className="btn-primary w-fit animate-bounce mt-4 py-4">Send</button>
                </form>
               
            </div>
        </div>

       </section>
    )
}

export default Contacts;