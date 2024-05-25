import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import YourCoursesCard from "./YourCoursesCard";
import fetchCourses from "../../utils/fetchCourses";
import fetchUser from "../../utils/fetchUser";

const YourCourses = () => {

	const [userCourses, setUserCourses] = useState(null);

	useEffect(() => {
		getCourses();
	}, [])

	async function getCourses() {
		const temp = await fetchUser();
		if (!temp) {
			navigate('/login');
			return;
		}
		const allCourses = await fetchCourses();
		const temp2 = allCourses.filter((course) => {
			return temp.courses?.some((userCourse) => userCourse.courseCode === course.code);
		});
		const progress = temp.courses.map((course) => {
			return course.progress;
		});
		setUserCourses({ courses: temp2, progress: progress });
	}
	return (
		<div>
			<div className="flex">
				<div className="">
					<Sidebar />
				</div>
				<div className="bg-dashboard ml-20vw w-83vw min-h-screen pb-28">
					<div className="grid grid-cols-3 mt-16 mx-32 gap-4">
						{
							!userCourses ? (
								<div className="text-2xl text-center col-span-3">Loading...</div>
							) : (
								userCourses.courses.map((course, index) => {
									return <YourCoursesCard course={course} progress={userCourses.progress[index]} key={index} />
								})
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default YourCourses;