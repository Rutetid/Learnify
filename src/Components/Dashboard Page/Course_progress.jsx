import React from 'react';
import line from "../../assets/line.svg";

const Course_progress = ({course}) => {
  return (
			<div className="flex justify-center items-center relative ">
				{" "}
				<div className="shadow-md bg-gradient-to-b from-card-start to-card-end text-lg text-white rounded-xl text-left w-auto h-auto mx-2 my-5 p-4 pb-12 relative">
					{" "}
					<div className="absolute  bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
						{" "}
						<span className="text-black font-bold">M</span>
					</div>
					<h1 className="mt-12 ml-2 text-black font-poppins font-medium text-xl">
						Coding
					</h1>{" "}
					<h1
						className="ml-2 text-black font-poppins font-semibold text-2xl"
						style={{ width: "200px" , height: "100px"}}
					>
						{course?.courseTitle}
					</h1>
					<img src={line} alt="" className="mt-5 ml-3 " />
					<span className="mt-5 ml-3 text-black font-poppins text-sm font-medium">
						{" "}
						Completed: {course?.progress}/{course?.course.length} tasks
					</span>
				</div>
			</div>
		);
}


export default Course_progress