import logo from '../../assets/logo.svg';
import courses from "../../assets/courses.svg";
import dashboard from "../../assets/dashboard.svg";
import tasks from "../../assets/tasks.svg";
import folder from "../../assets/folder.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import page from './style.module.css';

function Sidebar() {
	const [sitePath, setSitePath] = useState();
	const location = useLocation();
	useEffect(() => {
		const path = location.pathname;
		const bgPath = ['146px', '212px', '280px', '346px']
		const bgOver = document.getElementById(page.btnOver);
		switch (path) {
			case "/dashboard":
				setSitePath("dashboard");
				bgOver.style.top = bgPath[0];
				break;
			case "/all-courses":
				setSitePath("all-courses");
				bgOver.style.top = bgPath[1];
				break;
			case "/your-courses":
				setSitePath("your-courses");
				bgOver.style.top = bgPath[2];
				break;
			case "/your-task":
				setSitePath("your-task");
				bgOver.style.top = bgPath[3];
				break;
			default:
				break;
		}
	}, [])
	return (
		<div className="w-20vw flex fixed flex-col h-screen bg-white">
			<div className="flex pt-12 justify-center gap-2 items-center">
				<img src={logo} alt="" className="w-16 h-16" />
				<span className="font-kaushan text-purple-500 text-4xl">Learnify!</span>
			</div>

			<div className="flex flex-col justify-center gap-9 mt-12" id={page.btnHolder}>
				<div id={page.btnOver}></div>
				<Link to="/dashboard" className="flex gap-3 items-center">
					<img src={dashboard} alt="" className="w-5 h-5" />
					<span className={`font-poppins ${page.btn}`}>Dashboard</span>
				</Link>
				<Link to="/all-courses" className="flex gap-3 items-center">
					<img src={courses} alt="" className="w-6 h-6" />
					<span className={`font-poppins ${page.btn}`}>All Courses</span>
				</Link>
				<Link to="/your-courses" className="flex gap-3 items-center">
					<img src={folder} alt="" className="w-5 h-5" />
					<span className={`font-poppins ${page.btn}`}>
						Your Courses
					</span>
				</Link>
				<Link to="/your-task" className="flex gap-3 items-center">
					<img src={tasks} alt="" className="w-5 h-5" />
					<span className={`font-poppins ${page.btn}`}>Your Task</span>
				</Link>
			</div>

			<div className="bg-accent-dark rounded-xl " id={page.upgradePanel}>
				<span className="text-white font-poppins pt-22 pl-5 pr-5 text-xl block text-center">
					{" "}
					Subscription <br /> Coming SOON!
				</span>
			</div>
		</div>
	);
}

export default Sidebar;
