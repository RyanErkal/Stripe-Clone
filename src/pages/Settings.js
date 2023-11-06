import React from "react";
import { Outlet } from "react-router-dom";
import SettingsNav from "../components/SettingsNav";

export default function Settings() {
	return (
		<div class="w-full h-max bg-gray-100 dark:bg-gray-900 xl:max-w-7xl">
			<h1 class="text-3xl font-bold m-2 p-2 xl:m-4 xl:p-4">Settings</h1>
			<div class="grid grid-cols-12 gap-4 bg-gray-100 dark:bg-gray-800 h-full m-2 lg:m-4 p-2 lg:p-4 rounded-2xl shadow-lg">
				<div class="col-span-12 xl:col-span-2">
					<SettingsNav />
				</div>
				<div class="col-span-12 xl:col-span-10">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
