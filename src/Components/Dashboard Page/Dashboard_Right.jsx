import React, { useEffect, useState } from "react";
import pfp from "../../assets/pfp.svg";
import dropdown from "../../assets/dropdown.svg";
import fetchUser from "../../utils/fetchUser";
import { useNavigate } from "react-router-dom";

const Dashboard_Right = () => {

	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		async function getUser() {
			const temp = await fetchUser();
			setUser(temp);
			if (!temp) {
				navigate('/login');
			}
		}
		getUser();
	}, []);

	return (
		<div className="bg-dashboard flex flex-col w-30vw items-center relative">
			<div className=" mt-7 bg-white flex items-center rounded-md ml-24 w-64">
				<img className="py-2 px-2" src={pfp} alt="" />
				<div className="flex gap-24">
					<span className="font-poppins font-semibold text-lg">{user?.username}</span>
					<img className="" src={dropdown} alt="" />
				</div>
			</div>

			<div className="bg-purple-800 mt-10 h-370 rounded-lg w-370 flex items-center justify-center text-center text-white">
				<p className="font-poppins font-bold text-2xl">
					Calendar <br /> Coming SOON!
				</p>
			</div>
		</div>
	);
};

export default Dashboard_Right;
