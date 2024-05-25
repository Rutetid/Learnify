import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard_Middle from "./Dashboard_Middle";
import Dashboard_Right from "./Dashboard_Right";

export default function Dashboard({user, userCourse}) {
	return (
		<div className="flex">
			<Sidebar user={user}/>
			<Dashboard_Middle user={user} userCourse={userCourse} />
			<Dashboard_Right user={user} />
		</div>
	);
}
