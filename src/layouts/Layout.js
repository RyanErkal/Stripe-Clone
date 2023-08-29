import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout() {
	return (
		<>
			<Header />
			<div class="grid grid-cols-10 bg-gray-700 h-screen">
				<div class="col-span-1 bg-gray-200">
					<Sidebar />
				</div>
				<div class="col-span-9 bg-gray-100">
					<Outlet />
				</div>
			</div>
		</>
	);
}
