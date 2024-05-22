import logo from "../assets/logo.svg";
import courses from "../assets/courses.svg";
import dashboard from "../assets/dashboard.svg";
import tasks from "../assets/tasks.svg";
import folder from "../assets/folder.svg";

function Sidebar() {
	return (
		<div className="w-350 h-screen bg-sidebar">
			<div className="flex pt-12 ml-16 gap-2 items-center">
				<img src={logo} alt="" className="w-16 h-16" />
				<span className="font-kaushan text-purple-500 text-4xl">Learnify!</span>
			</div>

			<div className="grid rows">
				<div className="flex mt-16 ml-20 gap-5 items-center">
					<img src={dashboard} alt="" className="w-5 h-5" />
					<span className="font-poppins text-2xl font-medium">Dashboard</span>
				</div>
				<div className="flex mt-8 ml-20 gap-5 items-center">
					<img src={courses} alt="" className="w-6 h-6" />
					<span className="font-poppins text-2xl font-medium">All Courses</span>
				</div>
				<div className="flex mt-8 ml-20 gap-5 items-center">
					<img src={folder} alt="" className="w-5 h-5" />
					<span className="font-poppins text-2xl font-medium">
						Your Courses
					</span>
				</div>
				<div className="flex mt-8 ml-20 gap-5 items-center">
					<img src={tasks} alt="" className="w-5 h-5" />
					<span className="font-poppins text-2xl font-medium">Your Task</span>
				</div>
			</div>

			<div className="mt-20 h-60 ml-12 bg-accent-dark rounded-xl mb-9 mr-9">
				<span className="text-white font-poppins pt-24 pl-5 pr-5 text-xl block text-center">
					{" "}
					Subscription <br /> Coming SOON!
				</span>
			</div>
		</div>
	);
}

export default Sidebar;
