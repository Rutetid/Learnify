import React from "react";
import baloon from "../../assets/baloon.svg";
import Course_progress from "./Course_progress";
import { useEffect, useState } from "react";
import fetchUser from "../../utils/fetchUser";
import fetchCourses from "../../utils/fetchCourses";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loader/Loading";


const Dashboard_Middle = () => {

	const [user, setUser] = useState(null);
	const [userCourse, setUserCourse] = useState(null);
	const [courseRemaining, setCourseRemaining] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		async function getUser() {
			const temp = await fetchUser();
			if (!temp) {
				navigate('/login');
				return;
			}
			setUser(temp);
			if (temp?.courses?.length > 0 || temp.courses !== null) {
				const allCourses = await fetchCourses();
				const userSelection = allCourses.filter((course) => {
					return temp.courses?.some((userCourse) => userCourse.courseCode === course.code);
				});
				const userProgressArray = temp.courses;
				const newUserSelection = userSelection.map((course, index) => {
					const userProgressFind = userProgressArray.find((userProgress) => userProgress.courseCode === course.code);
					return {
						code: course.code,
						course: course.course,
						courseTitle: course.courseTitle,
						progress: userProgressFind.progress
					}
				});
				const userIncompleteCourses = newUserSelection.filter((course) => {
					return course.progress !== course.course.length;
				});
				setUserCourse(newUserSelection);
				setCourseRemaining(userIncompleteCourses);
				console.log(userIncompleteCourses);
			}
		}
		getUser();
	}, []);

	return (
		<div className="bg-dashboard flex flex-col w-50vw  ml-20vw min-h-screen ">
			{!user && !userCourse ? (
				<div className="text-2xl text-center col-span-3">
					<Loading />
				</div>
			) : (
				<>
					<div className="bg-db-secondary mt-32 ml-8 rounded-lg relative ">
						<div className="py-7 text-left px-7 font-poppins text-white flex justify-between	 ">
							<div>
								<span className="text-2xl">
									Welcome Back! <strong>{user?.username}</strong> 👋
								</span>
							</div>
							<div>
								<img
									src={baloon}
									alt=""
									className="absolute top-[-30%] right-0 mr-12"
								/>
							</div>
						</div>
					</div>

					<span className="mt-6 ml-8 font-semibold font-poppins text-2xl">
						Course Progress:
					</span>

					<div className="px-5 grid grid-cols-3">
						{userCourse?.length > 0 ? (
							userCourse?.map((course, index) => {
								if (index > 2) {
									return null;
								}
								return <Course_progress key={index} course={course} />;
							})
						) : (
							<>
								{!userCourse && (
									<>
										<div className="flex flex-col">
											<p className="text-accent-dark ml-22 h-52 w-350 flex justify-center items-center font-poppins font-semibold text-2xl">
												Go to All Courses and Select the course you want to
												start
											</p>
											<Link
												to="/all-courses"
												className="bg-purple-dark w-80 ml-22 flex justify-center items-center text-white font-bold py-2 px-4 rounded cursor-pointer"
											>
												All Courses
											</Link>
										</div>
									</>
								)}
							</>
						)}
					</div>
					{userCourse?.length > 3 && (<Link to="/your-courses"  className=" font-poppins font-semibold text-sm text-right ">
						view all -&gt;{" "} 
					</Link>)}

					{userCourse?.length > 0 && (
						<>
							<span className="mt-6 ml-8 font-semibold font-poppins text-2xl">
								Complete Tasks :{" "}
							</span>

							<div className="bg-db-secondary mt-6 ml-8 rounded-lg mb-10">
								<div className="py-7 text-left pl-7 justify-between text-white flex">
									{courseRemaining.length === 0 ? (
										<p className="text-2xl">
											Congratulations! You have completed all the tasks
										</p>
									) : (
										<>
											<div>
												<span className="font-poppins font-semibold text-2xl">
													{courseRemaining[0]?.courseTitle}
												</span>

												<p className="text-sm pt-2 font-poppins font-regular ">
													{
														courseRemaining[0]?.course[
															courseRemaining[0].progress
														].step_heading
													}
												</p>
											</div>

											<div className="text-center mr-6 flex justify-end items-end flex-col">
												<p className="border-solid border-2 w-16 h-7 pt-1 mb-2 rounded-md font-poppins font-semibold text-sm">
													{" "}
													+1xp
												</p>
												<p
													className="bg-white rounded-md pt-1 px-2 h-7 w-28 text-db-secondary font-poppins font-semibold text-sm cursor-pointer"
													onClick={() => {
														navigate(`/roadmap/${courseRemaining[0]?.code}`);
													}}
												>
													{" "}
													Complete
												</p>
											</div>
										</>
									)}
								</div>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Dashboard_Middle;
