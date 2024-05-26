import React from "react";
import line from "../../assets/line.svg";
import { useNavigate } from "react-router-dom";

const AllCoursesCard = ({ course, progress }) => {
	const navigate = useNavigate();
	return (
		<div className="">
			<div className="rounded-2xl bg-purple-100 pb-4 shadow-md">
				<div className="absolute mt-7 ml-7 bg-gray-300 rounded-full w-9 h-9 flex items-center justify-center">
					{" "}
					<span className="text-black font-bold">M</span>
				</div>
				<h1 className="pl-7 pt-20 font-poppins font-medium text-xl">Coding</h1>
				<div className="pl-7  font-poppins font-semibold text-2xl">
					<p className="w-52">{course.courseTitle}</p>
				</div>
				<div className="flex items-center my-5 pl-7 gap-4 font-poppins font-medium text-sm">
					<p className="py-1 pl-2 px-2 h-7 rounded-lg bg-white ">HTML</p>
					<p className="py-1 px-2  h-7 rounded-lg bg-white">CSS</p>
				</div>
				<img src={line} alt="" className="mt-7 ml-7  " />

				<div className=" ml-7  text-black font-poppins pt-4 pb-2 text-sm font-medium">
					{" "}
					Completed : {progress}/{course.course.length} tasks
				</div>

				<div className=" py-3 mr-7 ml-7  bg-black rounded-lg cursor-pointer" onClick={() => { navigate(`/roadmap/${course.code}`) }}>
					<p className="font-poppins flex justify-center items-center font-medium text-xl text-white text-center">
						<button>{progress === course.course.length ? 
							"Completed" : "Continue"
						 }</button>
					</p>
				</div>

			</div>
		</div>
	);
};

export default AllCoursesCard;