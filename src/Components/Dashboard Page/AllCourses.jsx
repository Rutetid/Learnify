import Sidebar from "../Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import AllCoursesCard from "./AllCoursesCard";
import fetchCourses from "../../utils/fetchCourses";
import fetchUser from "../../utils/fetchUser";


const AllCourses = () => {
	const [allCourses, setAllCourses] = useState(null);
	const [userCourses, setUserCourses] = useState(null);

	useEffect(() => {
		async function courseFetch() {
			const user = await fetchUser();
			const allCoursesArray = await fetchCourses();
			const temp2 = allCoursesArray.filter((course) => {
				return user.courses?.some((userCourse) => userCourse.courseCode === course.code);
			});
			setAllCourses(allCoursesArray);
			setUserCourses(temp2);
		}
		courseFetch();
	},[])

	return (
		<div className="flex">
			<div className="">
				<Sidebar />
			</div>
			<div className="bg-dashboard ml-20vw w-83vw min-h-screen pb-28">
				<div className="grid grid-cols-3 mt-16 mx-32 gap-4">
					{
						allCourses ? (
							allCourses.map((course, index) => {
								for(let i = 0; i < userCourses.length; i++){
									if(userCourses[i].code === course.code){
										console.log('Passed');
										return <AllCoursesCard key={index} course={course} hasStarted={true} />
									}
								}
								return <AllCoursesCard key={index} course={course} hasStarted={false} />
							})
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
