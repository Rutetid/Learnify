import React from 'react'
import line from "../../assets/line.svg";

const AllCoursesCard = () => {
  return (
			<div className="">
				<div className="rounded-lg bg-yellow-100 ">
					<div className="pt-7 h-8 w-8  bg-white rounded-full">
						<p className="font-poppins font-medium text-2xl">M</p>
					</div>
					<h1 className="pl-2 mt-7 font-poppins font-medium text-xl">Coding</h1>
					<div className="pl-2  font-poppins font-semibold text-2xl">
						<p>Basics of Web</p>
						<p>Development</p>
					</div>
					<div className="flex items-center mt-8 pl-2 gap-4 font-poppins font-medium text-sm">
						<p className="py-1 pl-2 px-2 h-7 rounded-lg bg-white ">HTML</p>
						<p className="py-1 px-2  h-7 rounded-lg bg-white">CSS</p>
					</div>
					<img src={line} alt="" className="mt-5 ml-3 mb-7 " />
					<div className=" py-4 ml-2  bg-black  rounded-lg ">
						<p className="font-poppins font-medium text-xl text-white text-center">
							Start
						</p>
					</div>
				</div>
			</div>
		);
}

export default AllCoursesCard