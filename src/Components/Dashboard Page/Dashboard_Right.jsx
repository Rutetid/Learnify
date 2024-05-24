import React from "react";
import pfp from "../../assets/pfp.svg";
import dropdown from "../../assets/dropdown.svg";

const Dashboard_Right = () => {
	return (
		<div className="bg-dashboard flex flex-col w-30vw items-center relative">
			<div className=" mt-7 bg-white flex items-center rounded-md ml-24 w-64">
				<img className="py-2 px-2" src={pfp} alt="" />
				<div className="flex gap-24">
					<span className="font-poppins font-semibold text-lg">Prakhar</span>
					<img className="" src={dropdown} alt="" />
				</div>
			</div>

			<div className="bg-purple-800 mt-10 h-370 rounded-lg w-370 flex items-center justify-center text-center text-white">
				<p className="font-poppins font-bold text-2xl">
					Calendar <br /> Coming SOON!
				</p>
			</div>
		</div>
	);
};

export default Dashboard_Right;
