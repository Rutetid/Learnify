import Sidebar from "../Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import AllCoursesCard from "./AllCoursesCard";
import fetchCourses from "../../utils/fetchCourses";


const AllCourses = () => {
	const [allCourses, setAllCourses] = useState(null);

	useEffect(() => {
		async function courseFetch() {
			setAllCourses(await fetchCourses());
		}
		courseFetch();
	})

	return (
		<div className="flex">
			<div className="">
				<Sidebar />
			</div>
			<div className="bg-dashboard ml-20vw w-83vw min-h-screen pb-28">
				<div className="grid grid-cols-3 mt-16 mx-32 gap-4">
					{
						allCourses ? (
							allCourses.map((course, index) => (
								<AllCoursesCard key={index} course={course} />
							))
						) : (
							<div className="text-2xl text-center col-span-3">Loading...</div>
						)
					}
				</div>
			</div>
		</div>
	);
};

export default AllCourses;
