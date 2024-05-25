import Sidebar from "../Sidebar/Sidebar";
import React from "react";
import AllCoursesCard from "./AllCoursesCard";


const AllCourses = () => {
	return (
		<div className="flex">
			<div className="">
				<Sidebar />
			</div>
			<div className="bg-dashboard ml-20vw w-83vw min-h-screen">
				<div className="grid grid-cols-3 mt-20 mx-28 gap-4">
					<AllCoursesCard />
					<AllCoursesCard />
					<AllCoursesCard />
				</div>
				<div className="grid grid-cols-3 mt-4 mx-28 gap-4">
					<AllCoursesCard />
					<AllCoursesCard />
					<AllCoursesCard />
				</div>
			</div>
		</div>
	);
};

export default AllCourses;
