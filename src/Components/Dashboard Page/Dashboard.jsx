import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard_Middle from "./Dashboard_Middle";
import Dashboard_Right from "./Dashboard_Right";
import Loading from "../Loader/Loading";

export default function Dashboard() {
	return (
		<div className="flex">
			<>
				<Sidebar />
				<Dashboard_Middle />
				<Dashboard_Right />
			</>
		</div>
	);
}
