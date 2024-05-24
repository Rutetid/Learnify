import LandingPage from "./Components/Landing Page/LandingPage";
import Dashboard from "./Components/Dashboard Page/Dashboard";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login Page/LoginPage";
import RegisterPage from "./Components/Register Page/RegisterPage";
import { useEffect, useState } from "react";
import supabase from "./utils/supabase";
import { useNavigate } from "react-router-dom";

function App() {

	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		checkUser();
	},[])

	const checkUser = async () => {
		let { data, error } = await supabase.auth.getUser();
		if (data) {
			let userID = data.user.id;
			let userData = await supabase.from('users').select('*').eq('user_Id', userID);
			setUser(userData.data[0]);
		}
	}

	return (
		<>
			<Routes>
				<Route path="/" element={<LandingPage user={user}/>} />
				<Route path="/dashboard" element={<Dashboard user={user}/>} />
				<Route path='/login' element={<LoginPage user={user}/>} />
				<Route path='/register' element={<RegisterPage user={user}/>} />
			</Routes>
		</>
	);
}

export default App;