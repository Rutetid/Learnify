import LandingPage from "./Components/Landing Page/LandingPage";
import Dashboard from "./Components/Dashboard Page/Dashboard";
import AllCourses from "./Components/Dashboard Page/AllCourses";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/allcourses" element={<AllCourses />} />
			</Routes>
		</>
	);
}

export default App;
