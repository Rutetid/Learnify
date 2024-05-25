import React from 'react'
import line from "../../assets/line.svg";

const AllCoursesCard = ({course}) => {
  return (
			<div className="">
				<div className="rounded-2xl bg-purple-100 pb-4">
					<div className="absolute mt-7 ml-7 bg-gray-300 rounded-full w-9 h-9 flex items-center justify-center">
						{" "}
						<span className="text-black font-bold">M</span>
					</div>
					<h1 className="pl-7 pt-20 font-poppins font-medium text-xl">Coding</h1>
					<div className="pl-7  font-poppins font-semibold text-2xl w-56">
						<p>{course.courseTitle}</p>
					</div>
					<div className="flex items-center my-5 pl-7 gap-4 font-poppins font-medium text-sm">
						<p className="py-1 pl-2 px-2 h-7 rounded-lg bg-white ">HTML</p>
						<p className="py-1 px-2  h-7 rounded-lg bg-white">CSS</p>
					</div>
					<img src={line} alt="" className="my-7 ml-7  " />
					<div className=" py-3 mr-7 ml-7  bg-black  rounded-lg ">
						<p className="font-poppins font-medium text-xl text-white text-center">
							Start
						</p>
					</div>
				</div>
			</div>
		);
}

export default AllCoursesCard