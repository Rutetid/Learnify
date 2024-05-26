import LandingPage from "./Components/Landing Page/LandingPage";
import Dashboard from "./Components/Dashboard Page/Dashboard";
import AllCourses from "./Components/Dashboard Page/AllCourses";
import YourCourses from "./Components/Dashboard Page/YourCourses";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login Page/LoginPage";
import RegisterPage from "./Components/Register Page/RegisterPage";
import { useEffect, useState } from "react";
import fetchUser from "./utils/fetchUser";
import Roadmap from "./Components/RoadMap Page/Roadmap";

function App() {
	// State to store user information (null initially)
	const [user, setUser] = useState(null);

	// Fetch user data on component mount
	useEffect(() => {
		const getUser = async () => {
			const fetchedUser = await fetchUser();
			setUser(fetchedUser);
		};

		getUser();
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage user={user} />} />
				<Route path="/dashboard" element={<Dashboard user={user} />} />
				<Route path='/login' element={<LoginPage user={user} />} />
				<Route path='/register' element={<RegisterPage user={user} />} />
				<Route path='/all-courses' element={<AllCourses />} />
				<Route path='/your-courses' element={<YourCourses />} />
				<Route path='/roadmap/:courseCode' element={<Roadmap />} />
			</Routes>
		</>
	);
}

export default App;