import React from "react";
import baloon from "../../assets/baloon.svg";
import Course_progress from "./Course_progress";


const Dashboard_Middle = () => {
	return (
		<div className="bg-dashboard flex flex-col w-middle ">
			<div className="bg-accent-dark mt-32 ml-8 mr-4 rounded-lg  ">
				<div className="py-7 text-left pl-7 font-poppins text-white">
					<span className="text-2xl">Welcome Back! Prakhar 👋</span>

					<p className="text-sm pt-2">You have completed 12 task this week!</p>
					<p className="text-sm ">
						Keep it up and you will be able to finish the course in no time
					</p>
				</div>
			</div>

			<span className="mt-6 ml-8 font-semibold font-poppins text-2xl">
				Course Progress:
			</span>

			<div className=" flex pl-6">
				<Course_progress />
				<Course_progress />
				<Course_progress />
				
			</div>
			<span className="mt-2 font-poppins font-semibold text-sm text-right pr-5">
				view all -&gt;{" "}
			</span>

			<span className="mt-6 ml-8 font-semibold font-poppins text-2xl">
				Complete Tasks :{" "}
			</span>

			<div className="bg-accent-dark mt-6 ml-8 mr-4 rounded-lg mb-10">
				<div className="py-7 text-left pl-7 justify-between text-white flex">
					<div>
						<span className="font-poppins font-semibold text-2xl">
							Basics of Web Development
						</span>

						<p className="text-sm pt-2 font-poppins font-regular ">
							Use anchor tag to create a website that leads to another website.
						</p>
					</div>

					<div className="text-center mr-10 flex justify-end items-end flex-col">
						<p className="border w-16 mb-2 font-poppins font-semibold text-sm">
							{" "}
							+1xp
						</p>
						<p className="border w-24 font-poppins font-semibold text-sm">
							{" "}
							Submit Task
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard_Middle;
