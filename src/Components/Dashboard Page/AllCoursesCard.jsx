import React, { useState } from 'react'
import line from "../../assets/line.svg";
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../../utils/supabase';
import fetchUser from '../../utils/fetchUser';

const AllCoursesCard = ({ course, hasStarted, progress }) => {
	const [confirmModal, setConfirmModal] = useState(false);
	const navigate = useNavigate();

	const handleCourseStart = async () => {
		const user = await fetchUser();
		if (!user) {
			return;
		}
		if (user.courses?.length < 0 || user.courses === null) {
			const { data, error } = await supabase.from('users').update({
				courses: [{ courseCode: course.code, progress: 0 }]
			})
				.eq('user_Id', user.user_Id);
			if (error) {
				console.log(error);
				return;
			}
		} else {
			const { data, error } = await supabase.from('users').update({
				courses: [...user.courses, { courseCode: course.code, progress: 0 }]
			})
				.eq('user_Id', user.user_Id);
			if (error) {
				console.log(error);
				return;
			}
		}
		navigate(`/roadmap/${course.code}`);
	}
	return (
		<div>
			<div className="rounded-2xl bg-purple-100 pb-4 shadow-md">
			<div className="absolute mt-7 ml-7 bg-gray-300 rounded-md pl-3 pr-3 pt-1 pb-1 flex items-center justify-center">
					{" "}
					<span className="text-black font-medium">{course.code}</span>
				</div>
				<h1 className="pl-7 pt-20 font-poppins font-medium text-xl">Coding</h1>
				<div className="pl-7 h-24 font-poppins font-semibold text-2xl w-56">
					<p>{course.courseTitle}</p>
				</div>
				<div className="flex items-center my-5 pl-7 gap-4 font-poppins font-medium text-sm">
					{
						course.tags.map((tag, index) => {
							return (
								<p className="pl-3 pr-3  h-7 rounded-lg bg-white flex justify-center items-center" key={index}>{tag}</p>
							)
						})
					}
				</div>
				<img src={line} alt="" className="my-7 ml-7  " />
				{
					hasStarted ? (
						<div className=" py-3 mr-7 ml-7  bg-black  rounded-lg cursor-pointer " onClick={() => { navigate(`/roadmap/${course.code}`) }}>
							<p className="font-poppins flex justify-center items-center font-medium text-xl text-white text-center">
								{
									progress === course.course.length ? "Completed" : "Continue"
								}
							</p>
						</div>
					) : (
						<div className=" py-3 mr-7 ml-7  bg-black  rounded-lg cursor-pointer " onClick={() => { setConfirmModal(true) }}>
							<p className="font-poppins flex justify-center items-center font-medium text-xl text-white text-center">
								<button>Start</button>
							</p>
						</div>
					)
				}
			</div>
			{
				confirmModal && !hasStarted && (
					<div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50">
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg">
							<h1 className="text-2xl font-bold text-center">Are you sure you want to start this course?</h1>
							<p className="text-center mt-3">Course : {course?.courseTitle}</p>
							<p className="text-center mt-3">Course : {course?.course.length}</p>
							<div className="flex justify-center gap-5 mt-5">
								<button className="bg-red-500 text-white px-3 py-1 rounded-lg" onClick={() => setConfirmModal(false)}>No</button>
								<button className="bg-green-500 text-white px-3 py-1 rounded-lg" onClick={handleCourseStart}>Yes</button>
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
}

export default AllCoursesCard