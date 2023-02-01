import React from "react";

const Skills = () => {
        const skills = [
        { 
            logo: "logo-react",
            level: "Intermediate",
            count: 50,
            counte: "50%",
        },
        { 
           
            logo: "logo-javascript",
            level: "Beginner",
            count: 40,
            counte: '40%',
           
        },
        { 
            logo: "logo-css3",
            level: "Intermediate",
            count: 70,
            counte: '70%',
        },
        { 
            logo: "logo-html5",
            level: "Intermediate",
            count: 80,
            counte: '80%',
           
        },
        { 
            logo: "logo-figma",
            level: "advance",
            count: 87,
            counte: "87%",
        },
        ];
    return(
       <section id="skills" className="py-10 rounded-md border-2 boreder-cyan-200 relative mt-7">
        <div className="text-center">
            <h3 className="text-4xl font-semibold">
                My <span>Skills</span>
            </h3>
            <p className="text-gray-400 text-lg mt-3">All about my knowledge</p>

            <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">

                {
                    skills?.map((skill,i)=>(
                        <div key={i} className="border-2 group border-cyan-600 relative min-w-[10rem] 
                          max-w-[19rem] bg-gray-700 p-10 rounded-xl mt-4">
                    
                    <div 
                    style={{
                        background: `conic-gradient(rgb(8,145,170) 30%, #ddd ${skill.count}%)`,
                    }}
                    className="w-32 h-32 flex items-center justify-center rounded-full">
                        <div className="text-6xl w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-cyan-800">
                            <ion-icon color="secondary" name={skill.logo} ></ion-icon>
                        </div>
                    </div>
                    <p className="text-xl mt-3 ">{skill.level}</p>
                    <h3 className="text-xl mt-2">{skill.counte}</h3>
                </div>
                    ))
                }


            </div>
        </div>
       </section>
    )
}

export default Skills;