import line from "../../assets/line.svg";
import React from "react";

function Card() {
	return (
		<div className="flex justify-center items-center relative">
			{" "}
			{/* Add relative positioning */}
			<div className="bg-purple-400 text-lg text-white font-sans rounded-xl text-left w-60 h-64 mx-2 my-5 p-4 relative">
				{" "}
				{/* Add relative positioning */}
				<div className="absolute  bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
					{" "}
					{/* Adjust the position */}
					<span className="text-black font-bold">M</span>
				</div>
				<h1 className="mt-11 ml-2 text-black font-poppins font-medium text-sm">
					Coding
				</h1>{" "}
				{/* Adjust the margin */}
				<h1 className="ml-2 text-black font-poppins font-semibold text-xl">
					Front End
				</h1>
				<h1 className="ml-2 text-black font-poppins font-semibold text-xl">
					Web Development
				</h1>
				<img src={line} alt="" className="mt-3" />
				<button className="bg-black  font bold py-2 px-4 rounded w-full my-5">
					Start
				</button>
			</div>
		</div>
	);
}

export default Card;
