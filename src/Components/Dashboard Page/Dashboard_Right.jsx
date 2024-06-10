import React, { useEffect, useState, useContext } from "react";
import dropdown from "../../assets/dropdown.svg";
import fetchUser from "../../utils/fetchUser";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase";
import { UserContext } from "../../Context/UserContext";

const Dashboard_Right = () => {

	const { user, setUser } = useContext(UserContext);

	const navigate = useNavigate();
	const [userModal, setUserModal] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('isLogged') === 'false' || !localStorage.getItem('isLogged')) {
			navigate('/login');
		}
	}, []);

	const handleModal = () => {
		setUserModal(!userModal);
	}

	const handleLogout = async () => {
		await supabase.auth.signOut();
		localStorage.setItem('isLogged', 'false');
		setUser(null);
		navigate('/login');
	}


	return (
		<div className="bg-dashboard flex flex-col w-30vw items-center relative">
			<div className="p-2 mt-7 bg-white flex items-center rounded-md ml-24 w-64 cursor-pointer relative" onClick={handleModal}>
				<div className="bg-db-secondary mr-2 h-10 w-10 rounded-md flex justify-center items-center">
					<img src="pfp.png" alt="" className="invert h-7" />
				</div>
				<div className="flex gap-24">
					<span className="font-poppins font-semibold text-lg">{user?.username}</span>
					<img className="" src={dropdown} alt="" />
				</div>
				{
					userModal && (
						<div className="absolute bg-white rounded-md mt-2 w-64 h-14 flex flex-col justify-center left-0 items-center top-14" onClick={handleLogout}>
							<p className="font-poppins font-semibold text-lg py-2">Logout</p>
						</div>
					)
				}
			</div>

			<div className="bg-db-secondary mt-10 h-370 rounded-lg w-370 flex items-center justify-center text-center text-white">
				<p className="font-poppins font-bold text-2xl">
					Calendar <br /> Coming SOON!
				</p>
			</div>
		</div>
	);
};

export default Dashboard_Right;
