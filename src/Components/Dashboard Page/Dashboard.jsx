import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import page from "./style.module.css";
import Dashboard_Middle from "./Dashboard_Middle";

export default function Dashboard() {
	return (
		<div className="flex">
			<Sidebar />
			<Dashboard_Middle />
		</div>
	);
}
