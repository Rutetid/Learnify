import React from "react";
import baloon from "../../assets/baloon.svg";
import Course_progress from "./Course_progress";
import { useEffect, useState } from "react";
import fetchUser from "../../utils/fetchUser";
import fetchCourses from "../../utils/fetchCourses";
import { Link, useNavigate } from "react-router-dom";


const Dashboard_Middle = () => {

	const [user, setUser] = useState(null);
	const [userCourse, setUserCourse] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		async function getUser() {
			const temp = await fetchUser();
			if (!temp) {
				navigate('/login');
				return;
			}
			setUser(temp);
			console.log(temp);
			const allCourses = await fetchCourses();
			const temp2 = allCourses.filter((course) => {
				return temp.courses?.some((userCourse) => userCourse.courseCode === course.code);
			}
			);
			const progress = temp.courses.map((course) => {
				return course.progress;
			});
			if(userCourse?.length <= 0 || userCourse === null){
				setUserCourse([{ course: temp2, progress: progress}]);
			}else{
				setUserCourse([...userCourse, { course: temp2, progress: progress}]);
			}
		}
		getUser();
	}, []);

	useEffect(()=> {
		console.log(userCourse);
	}, [userCourse]);

	return (
		<div className="bg-dashboard flex flex-col w-50vw  ml-20vw min-h-screen ">
			<div className="bg-accent-dark mt-32 ml-8 rounded-lg relative ">
				<div className="py-7 text-left px-7 font-poppins text-white flex justify-between	 ">
					<div>
						<span className="text-2xl">
							Welcome Back! <strong>{user?.username}</strong> 👋
						</span>

						<p className="text-sm pt-2">
							You have completed <strong>12 task</strong> this week!
						</p>
						<p className="text-sm ">
							Keep it up and you will be able to finish the course in no time
						</p>
					</div>
					<div>
						<img src={baloon} alt="" className="absolute top-[-60%] right-0 mr-12" />
					</div>
				</div>
			</div>

			<span className="mt-6 ml-8 font-semibold font-poppins text-2xl">
				Course Progress:
			</span>

			<div className=" flex px-5">
				{
					userCourse?.length > 0 ? userCourse?.map((course, index) => {
						return <Course_progress key={index} course={course} />
					})
						: <div className="flex flex-col">
							<p className="text-accent-dark ml-22 h-52 w-350 flex justify-center items-center font-poppins font-semibold text-2xl">Go to All Courses and Select the course you want to start</p>
							<Link to="/all-courses" className="bg-purple-dark w-80 ml-22 flex justify-center items-center text-white font-bold py-2 px-4 rounded cursor-pointer">
								All Courses
							</Link>
						</div>
				}
			</div>
			{
				userCourse?.length > 0 && <>
					<span className=" font-poppins font-semibold text-sm text-right ">
						view all -&gt;{" "}
					</span>

					<span className="mt-6 ml-8 font-semibold font-poppins text-2xl">
						Complete Tasks :{" "}
					</span>

					<div className="bg-accent-dark mt-6 ml-8 rounded-lg mb-10">
						<div className="py-7 text-left pl-7 justify-between text-white flex">
							<div>
								<span className="font-poppins font-semibold text-2xl">
									{userCourse && userCourse[0]?.course[0].courseTitle}
								</span>

								<p className="text-sm pt-2 font-poppins font-regular ">
									{
										userCourse[0]?.course[0].course[userCourse[0].progress].step_heading
									}
								</p>
							</div>

							<div className="text-center mr-6 flex justify-end items-end flex-col">
								<p className="border-solid border-2 w-16 h-7 pt-1 mb-2 rounded-md font-poppins font-semibold text-sm">
									{" "}
									+1xp
								</p>
								<p className="bg-white rounded-md pt-1 px-2 h-7 w-28 text-accent-dark font-poppins font-semibold text-sm">
									{" "}
									{
										userCourse && userCourse[0].course[0].course[userCourse[0].progress].step_heading ? "Submit Task" : "Complete"
									}
								</p>
							</div>
						</div>
					</div>
				</>
			}
		</div>
	);
};

export default Dashboard_Middle;
