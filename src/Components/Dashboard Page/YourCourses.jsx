import React, {useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import YourCoursesCard from "./YourCoursesCard";
import fetchCourses from "../../utils/fetchCourses";
import fetchUser from "../../utils/fetchUser";
import Loading from "../Loader/Loading";
import { UserContext } from "../../Context/UserContext";

const YourCourses = () => {

	const { user, allCourses } = useContext(UserContext);

	const [userCourses, setUserCourses] = useState(null);


	useEffect(() => {
		getCourses();
	}, [])

	async function getCourses() {
		if (!user && localStorage.getItem('isLogged') === 'false') {
			navigate('/login');
			return;
		}
		const userSelection = allCourses.filter((course) => {
			return user.courses?.some((userCourse) => userCourse.courseCode === course.code);
		});
		const userProgressArray = user.courses;
		const newUserSelection = userSelection.map((course, index) => {
			const userProgressFind = userProgressArray.find((userProgress) => userProgress.courseCode === course.code);
			return {
				code: course.code,
				course: course.course,
				courseTitle: course.courseTitle,
				progress: userProgressFind.progress,
				tags: course.tags
			}
		});
		setUserCourses(newUserSelection);
		console.log(newUserSelection);
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
								<div className="text-2xl text-center col-span-3"><Loading /></div>
							) : (
								userCourses.length===0 ? (
									<div className="text-2xl text-center col-span-3">No Courses Found</div>
								) : (
									userCourses.map((course, index) => {
									
									return <YourCoursesCard course={course} progress={course.progress} key={index} />
								})
								)
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default YourCourses;