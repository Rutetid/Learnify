import logo from '../../assets/logo.svg';
import courses from "../../assets/courses.svg";
import dashboard from "../../assets/dashboard.svg";
import tasks from "../../assets/tasks.svg";
import folder from "../../assets/folder.svg";
import page from './style.module.css'

function Sidebar() {
	return (
		<div className="w-1/6 flex sticky flex-col h-screen bg-white">
			<div className="flex pt-12 justify-center gap-2 items-center">
				<img src={logo} alt="" className="w-16 h-16" />
				<span className="font-kaushan text-purple-500 text-4xl">Learnify!</span>
			</div>

			<div className="flex flex-col justify-center gap-9 mt-12" id={page.btnHolder}>
				<div id={page.btnOver}></div>
				<div className="flex gap-3 items-center">
					<img src={dashboard} alt="" className="w-5 h-5" />
					<span className={`font-poppins ${page.btn}`}>Dashboard</span>
				</div>
				<div className="flex gap-3 items-center">
					<img src={courses} alt="" className="w-6 h-6" />
					<span className={`font-poppins ${page.btn}`}>All Courses</span>
				</div>
				<div className="flex gap-3 items-center">
					<img src={folder} alt="" className="w-5 h-5" />
					<span className={`font-poppins ${page.btn}`}>
						Your Courses
					</span>
				</div>
				<div className="flex gap-3 items-center">
					<img src={tasks} alt="" className="w-5 h-5" />
					<span className={`font-poppins ${page.btn}`}>Your Task</span>
				</div>
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
