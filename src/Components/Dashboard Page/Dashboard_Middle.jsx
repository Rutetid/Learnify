import React from "react";
import baloon from "../../assets/baloon.svg";
import Course_progress from "./Course_progress";


const Dashboard_Middle = () => {
	return (
		<div className="bg-dashboard flex flex-col w-50vw  ml-20vw min-h-screen ">
			<div className="bg-accent-dark mt-32 ml-8 rounded-lg relative ">
				<div className="py-7 text-left px-7 font-poppins text-white flex justify-between	 ">
					<div>
						<span className="text-2xl">
							Welcome Back! <strong>Prakhar</strong> 👋
						</span>

						<p className="text-sm pt-2">
							You have completed <strong>12 task</strong> this week!
						</p>
						<p className="text-sm ">
							Keep it up and you will be able to finish the course in no time
						</p>
					</div>
					<div>
						<img src={baloon} alt="" className="absolute top-[-60%] right-0 mr-12" />
					</div>
				</div>
			</div>

			<span className="mt-6 ml-8 font-semibold font-poppins text-2xl">
				Course Progress:
			</span>

			<div className=" flex px-5">
				<Course_progress />
				<Course_progress />
				<Course_progress />
			</div>
			<span className=" font-poppins font-semibold text-sm text-right ">
				view all -&gt;{" "}
			</span>

			<span className="mt-6 ml-8 font-semibold font-poppins text-2xl">
				Complete Tasks :{" "}
			</span>

			<div className="bg-accent-dark mt-6 ml-8 rounded-lg mb-10">
				<div className="py-7 text-left pl-7 justify-between text-white flex">
					<div>
						<span className="font-poppins font-semibold text-2xl">
							Basics of Web Development
						</span>

						<p className="text-sm pt-2 font-poppins font-regular ">
							Use anchor tag to create a website that leads to another website.
						</p>
					</div>

					<div className="text-center mr-6 flex justify-end items-end flex-col">
						<p className="border-solid border-2 w-16 h-7 pt-1 mb-2 rounded-md font-poppins font-semibold text-sm">
							{" "}
							+1xp
						</p>
						<p className="bg-white rounded-md pt-1 px-2 h-7 w-28 text-accent-dark font-poppins font-semibold text-sm">
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
