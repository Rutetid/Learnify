import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import YourCoursesCard from "./YourCoursesCard";

const YourCourses = () => {
  return (
			<div>
				<div className="flex">
					<div className="">
						<Sidebar />
					</div>
					<div className="bg-dashboard ml-20vw w-83vw min-h-screen pb-28">
						<div className="grid grid-cols-3 mt-16 mx-32 gap-4">
							<YourCoursesCard />
							<YourCoursesCard />
							<YourCoursesCard />
						</div>
						<div className="grid grid-cols-3 mt-4 mx-32 gap-4">
							<YourCoursesCard />
							<YourCoursesCard />
							<YourCoursesCard />
						</div>
					</div>
				</div>
			</div>
		);
}

export default YourCourses;