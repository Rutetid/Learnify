import LandingPage from "./Components/Landing Page/LandingPage";
import Dashboard from "./Components/Dashboard Page/Dashboard";
import AllCourses from "./Components/Dashboard Page/AllCourses";
import YourCourses from "./Components/Dashboard Page/YourCourses";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login Page/LoginPage";
import RegisterPage from "./Components/Register Page/RegisterPage";
import { useEffect, useState, useContext } from "react";
import fetchUser from "./utils/fetchUser";
import Roadmap from "./Components/RoadMap Page/Roadmap";
import {UserContext} from './Context/UserContext'
import fetchCourses from "./utils/fetchCourses";

function App() {

	const userState = useContext(UserContext);

	// const [user, setUser] = useState(null);

	// Fetch user data on component mount
	useEffect(() => {
		const getUser = async () => {
			const fetchedUser = await fetchUser();
			userState.setUser(fetchedUser);
			const allCourses = await fetchCourses();
			userState.setAllCourses(allCourses);
			localStorage.setItem('isLogged', fetchedUser ? 'true' : 'false');
		};

		getUser();
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/all-courses' element={<AllCourses />} />
				<Route path='/your-courses' element={<YourCourses />} />
				<Route path='/roadmap/:courseCode' element={<Roadmap />} />
			</Routes>
		</>
	);
}

export default App;