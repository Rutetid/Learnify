import line from "../../assets/line.svg";
import React from "react";

function Card({text , tags}) {

	return (
		<div className="">
			<div className="rounded-2xl bg-gradient-to-b from-card-start to-card-end pb-4 shadow-lg">
				<div className="absolute mt-7 ml-7 bg-gray-300 rounded-full w-9 h-9 flex items-center justify-center">
					{" "}
					<span className="text-black font-bold">M</span>
				</div>
				<h1 className="pl-7 pt-20 font-poppins font-medium text-xl ">Coding</h1>
				<div className="pl-7 w-52 font-poppins font-semibold text-2xl ">
					<p>{text}</p>
					
				</div>
				<div className="flex items-center my-5 pl-7 gap-2 font-poppins font-medium text-sm">
					{
						tags.map((tag, index) => {
							return <p key={index} className="py-1 px-2 text-center h-7 rounded-lg bg-white">{tag}</p>
						})
					}
					{/* <p className="py-1 px-2  h-7 rounded-lg bg-white">CSS</p> */}
				</div>
			</div>
		</div>
	);
}

export default Card;
