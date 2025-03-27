import React from "react";

function Projects() {
  return (
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
  );
}

export default Projects;
