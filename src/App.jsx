import LandingPage from "./Components/Landing Page/LandingPage";
import Dashboard from "./Components/Dashboard Page/Dashboard";
import AllCourses from "./Components/Dashboard Page/AllCourses";
import YourCourses from "./Components/Dashboard Page/YourCourses";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login Page/LoginPage";
import RegisterPage from "./Components/Register Page/RegisterPage";
import { useEffect, useState } from "react";
import fetchUser from "./utils/fetchUser";
import supabase from "./utils/supabase";

function App() {
	// State to store user information (null initially)
	const [user, setUser] = useState(null);

	// State to store user's enrolled courses with progress (null initially)
	const [userCourse, setUserCourse] = useState(null);

	// Fetch user data on component mount
	useEffect(() => {
		const getUser = async () => {
			const fetchedUser = await fetchUser();
			setUser(fetchedUser);

			// If user is logged in, fetch their enrolled courses
			if (fetchedUser) {
				await getCourse(fetchedUser);
			}
		};

		getUser();
	}, []);

	// Fetch user's enrolled courses from Supabase
	const getCourse = async (user) => {
		const courseTitles = await supabase.from('course_titles').select('*');
		const steps = [];

		// Loop through course titles
		for (let title of courseTitles.data) {
			const courseSteps = await supabase
				.from('course_steps')
				.select('*')
				.eq('course_code', title.course_code);

			if (courseSteps.error) {
				console.error(courseSteps.error);
			} else {
				steps.push(...courseSteps.data); // Spread operator to combine arrays
			}
		}

		// Format course data with headings and descriptions (same logic)
		const formattedData = steps.reduce((acc, curr) => {
			// Check if the heading already exists
			if (!acc.find(obj => obj.step_heading === curr.step_heading)) {
				// If it doesn't, create a new object with heading and an empty description array
				acc.push({ step_heading: curr.step_heading, step_description: [], isSubmit: curr.isSubmit, code: curr.course_code });
			}

			// Find the existing object with the matching heading
			const matchingObject = acc.find(obj => obj.step_heading === curr.step_heading);

			// Add the current description to the existing object's description array (maintains order)
			matchingObject.step_description.push(curr.step_description);

			return acc;
		}, []);

		const courseList = formattedData; // Assuming formattedData is defined elsewhere

		// Combine course list with user's progress for enrolled courses
		const userCourses = [];
		for (let course of courseList) {
			for (let userCourse of user.courses) {
				if (course.code === userCourse.code) {
					userCourses.push({ course });
					break; // Exit inner loop once a match is found for a course
				}
			}
		}

		let obj = [];
		for(let i = 0; i < courseTitles.data.length; i++){
			const filteredCourse = userCourses.filter(course => course.course.code === courseTitles.data[i].course_code);
			const certainCourse = user.courses.find(course => course.code === courseTitles.data[i].course_code);

			obj[i] = {courseTitle: courseTitles.data[i].course_title, course: filteredCourse, progress: certainCourse.at};
		}
		setUserCourse(obj);
		console.log(obj);
	};

	return (
		<>
			<Routes>

				<Route path="/" element={<LandingPage user={user} />} />
				<Route path="/dashboard" element={<Dashboard user={user} userCourse={userCourse} />} />
				<Route path='/login' element={<LoginPage user={user} />} />
				<Route path='/register' element={<RegisterPage user={user} />} />
				<Route path='/all-courses' element={<AllCourses />} />
				<Route path='/your-courses' element={<YourCourses />} />


			</Routes>
		</>
	);
}

export default App;