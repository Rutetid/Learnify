import React from "react";
import pfp from "../../assets/pfp.svg";

const Dashboard_Right = () => {
	return (
		<div className="bg-dashboard flex flex-col w-right ">
			<div className=" mt-7 bg-white flex items-center rounded-md ml-28 w-64">
				<img className="py-2 px-2" src={pfp} alt="" />

				<span className="">Prakhar</span>
			</div>

			<div className="bg-purple-800 mt-10 h-96 rounded-lg w-370 flex items-center justify-center text-center text-white">
				<p className="font-poppins font-bold text-2xl">
					Calendar <br /> Coming SOON!
				</p>
				<p className="font-poppins font-bold text-2xl"></p>
			</div>
		</div>
	);
};

export default Dashboard_Right;
