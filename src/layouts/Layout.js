import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout() {
	return (
		<>
			<div class="w-screen">
				<Header />
			</div>
			<div class="grid grid-cols-12 bg-red-700 h-max w-screen">
				<div class="col-span-12 lg:col-span-1 bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
					<Sidebar />
				</div>
				<div class="col-span-12 lg:col-span-11 min-h-screen overflow-auto bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
					<Outlet />
				</div>
			</div>
		</>
	);
}
