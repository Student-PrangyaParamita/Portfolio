import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hello, <br /> I'm Prangya Paramita Priyadarshinee.
                            <span className="hidden sm:block text-4xl"></span>
                        </h2>

                        <Link
                            className="inline-flex text-white text-3xl items-center px-6 py-3 font-medium hover:opacity-75"
                            to="/"
                        >
                            (MERN stack Developer)
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full drop-shadow-lg ">
                    <img className="w-100 rounded-4xl border-4 border-indigo-500 ..." src="https://img.freepik.com/premium-photo/anime-girl-programmer-working-computer-with-code-screen_1282444-131494.jpg" alt="image1" />
                </div>
            </aside>

            {/* About */}

            <div className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                <h2 className="text-4xl font-bold text-white text-center mb-7">About Me</h2>
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

            {/* Skills */ }
            <h2 className="text-4xl font-bold text-white text-center mb-15 mt-8">Skills</h2>
            <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-10 mb-40">
                <div className="grid grid-cols-10 gap-10 ...">
                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-red-500">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className="w-20 h-20" />
                    </div>
                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-blue-500">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" className="w-20 h-20" />
                    </div>
                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-teal-300">
                    <img src="https://camo.githubusercontent.com/52643e404ca1a1d90beb0095ebddda4b16b8c30dfcfeb5d42355a2df037c7c8e/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667" alt="tailwind" className="w-20 h-20" />
                    </div>
                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-yellow-300">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className="w-20 h-20" />
                    </div>

                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-green-500">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongo" className="w-20 h-20" />
                    </div>
                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-white">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" className="w-20 h-20" />
                    </div>
                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-blue-400">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className="w-20 h-20" />
                    </div>
                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-green-600">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="node" className="w-20 h-20" />
                    </div>

                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-blue-400">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" className="w-20 h-20" />
                    </div>

                    <div className="items-center p-1 drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4 bg-yellow-500">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" className="w-20 h-20" />
                    </div>
                </div>

            </div>

            {/* Projects */ }
            <h2 className="text-4xl font-bold text-white text-center mb-7 mt-8">Projects</h2>
            <div class="grid grid-cols-3 gap-10 m-10">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4">
                    <div>
                        <img
                        src="https://avatars.githubusercontent.com/u/167619585?v=4"
                        alt="image"
                        width="100%"
                        height="100%" className="rounded-md h-78 mb-4"
                        />
                    </div>
                    <section className=" flex justify-around">
                        <button className="mx-1 flex items-center justify-center px-8 py-3 text-lg text-white font-bold">
                        Portfolio
                        <br />
                        [React.js | tailwindcss]
                        </button>
                    </section>
                </div>

                <div className="container mx-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4">
                    <div>
                        <img
                        src="https://cdn-icons-png.flaticon.com/512/8586/8586891.png"
                        alt="image"
                        width="100%"
                        height="100%" className="rounded-md h-78 mb-4"
                        />
                    </div>
                    <section className=" flex justify-around">
                        <button className="mx-1 flex items-center justify-center px-8 py-3 text-lg text-white font-bold">
                        Quiz App
                        <br />
                        [HTML | CSS | JavaScript]
                        </button>
                    </section>
                </div>

                <div className="container mx-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4">
                    <div>
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQulVUqBF35rVHIZIa2ORZuphkoE_E0eZ5GqA&s"
                        alt="image"
                        width="100%"
                        height="100%" className="rounded-md h-78 mb-4"
                        />
                    </div>
                    <section className=" flex justify-around">
                        <button className="mx-1 flex items-center justify-center px-8 py-3 text-lg text-white font-bold">
                        ToDo List
                        <br />
                        [HTML | CSS | JavaScript]
                        </button>
                    </section>
                </div>

                <div className="container mx-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4">
                <div>
                    <img
                        src="https://www.southernliving.com/thmb/sLBVbaEJf4ZERTAfrwPcvUN-blI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ravioli_Lasagna_010-c251db1faa1d4e0d8e2708396dc41525.jpg"
                        alt="image"
                        width="100%"
                        height="100%" className="rounded-md h-78 mb-4"
                    />
                    </div>
                    <section className=" flex justify-around">
                    <button className="mx-1 flex items-center justify-center px-8 py-3 text-lg text-white font-bold">
                        Recipe App
                        <br />
                        [HTML | CSS | JavaScript | API]
                        </button>
                    </section>
                </div>

                <div className="container mx-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4">
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcZNJxUsFRWZV8NrQwQzxROBKHjRoOobQpg&s"
                        alt="image"
                        width="100%"
                        height="100%" className="rounded-md h-78 mb-4"
                    />
                    </div>
                    <section className=" flex justify-around">
                    <button className="mx-1 flex items-center justify-center px-8 py-3 text-lg text-white font-bold">
                        Password Generator
                        <br />
                        [React.js | tailwindcss]
                        </button>
                    </section>
                </div>

                <div className="container mx-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  drop-shadow-2xl shadow-2xl rounded-3xl border-gray-300 border-4">
                <div>
                    <img
                        src="https://c8.alamy.com/comp/2AFPT5C/financial-chart-up-infographic-diagram-of-making-money-with-gold-coins-graph-investment-growth-gold-business-market-vector-illustration-2AFPT5C.jpg"
                        alt="image"
                        width="100%"
                        height="100%" className="rounded-md h-78 mb-4"
                    />
                    </div>
                    <section className=" flex justify-around">
                    <button className="mx-1 flex items-center justify-center px-8 py-3 text-lg text-white font-bold">
                        Currency Converter
                        <br />
                        [React.js | tailwindcss | API]
                        </button>
                    </section>
                </div>


            </div>

            {/* Contact Me */ }

            <h2 className="text-4xl font-bold text-white text-center mt-15">Contact Me</h2>
            <div className="relative flex items-top justify-center min-h-[500px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                    Get in touch:
                                </h1>
                                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div className="flex items-center mt-8 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Cuttack, Odisha, 754034
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +91 9938500285
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        pppriyadarshinee.2003@gmail.com
                                    </div>
                                </div>
                            </div>

                            <form className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label for="name" className="hidden">
                                        Full Name
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label for="email" className="hidden">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label for="tel" className="hidden">
                                        Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="tel"
                                        id="tel"
                                        placeholder="Telephone Number"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
