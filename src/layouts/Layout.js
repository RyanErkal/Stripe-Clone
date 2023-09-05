import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout() {
	return (
		<>
			<Header />
			<div class="grid grid-cols-12 bg-gray-700 h-screen w-screen">
				<div class="col-span-12 lg:col-span-2 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
					<Sidebar />
				</div>
				<div class="col-span-12 max-w-screen lg:col-span-10 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
					<Outlet />
				</div>
			</div>
		</>
	);
}
