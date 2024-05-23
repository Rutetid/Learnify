import React from 'react';
import line from "../../assets/line.svg";
import progress from "../../assets/progress.svg";

const Course_progress = () => {
  return (
			<div className="flex justify-center items-center relative">
				{" "}
				<div className="bg-purple-400 text-lg text-white font-sans rounded-xl text-left w-64 mx-2 my-5 p-4 pb-12 relative">
					{" "}
					<div className="absolute  bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
						{" "}
						<span className="text-black font-bold">M</span>
					</div>
					<h1 className="mt-12 ml-2 text-black font-poppins font-medium text-xl">
						Coding
					</h1>{" "}
					<h1 className="ml-2 text-black font-poppins font-semibold text-2xl">
						Basics of Web
					</h1>
					<h1 className="ml-2 text-black font-poppins font-semibold text-2xl">
						Development
					</h1>
					<img src={line} alt="" className="mt-5 ml-3 " />
					<img src={progress} alt="" className="mt-5 ml-3 " />
					<span className="mt-5 ml-3 text-black font-poppins text-sm font-medium" > Completed: 5/20 tasks</span>
				</div>
			</div>
		);
}


export default Course_progress