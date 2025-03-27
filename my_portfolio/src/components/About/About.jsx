import React from "react";

function About() {
    return (
        <div className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img className="w-94 ml-4 rounded-4xl border-4 border-indigo-500 ..."
                            src="https://avatars.githubusercontent.com/u/167619585?v=4"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Crafting Seamless User Experiences & Building Modern Web Applications

                        </h2>
                        <p className="mt-6 text-gray-600">
                        "Hi, I'm a full stack developer currently pursuing my B.Tech in the Textile branch at Odisha University of Technology and Research, Bhubaneswar, expected to graduate in 2026."
                        </p>
                        <p className="mt-4 text-gray-600">
                        I am a passionate MERN Stack Developer with a talent for building dynamic, scalable, and efficient web applications. I specialize in React and Node.js, and I am actively learning Express and MongoDB to enhance my skills. By leveraging the synergy of these technologies, I aim to deliver seamless user experiences and robust backend solutions. My approach combines creativity, problem-solving, and technical expertise."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
