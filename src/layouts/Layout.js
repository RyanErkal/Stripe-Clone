import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout() {
	return (
		<>
			<Header />
			<div class="flex flex-col xl:flex-row bg-gray-100 h-screen">
				<div class="h-content bg-gray-100 shadow-xl">
					<Sidebar />
				</div>
				<div class="w-full h-full bg-gray-100">
					<Outlet />
				</div>
			</div>
		</>
	);
}
