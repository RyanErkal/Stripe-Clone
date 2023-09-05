import React from "react";
import { Outlet } from "react-router-dom";
import SettingsNav from "../components/SettingsNav";

export default function Settings() {
	return (
		<div class="min-h-max min-w-full bg-gray-100 dark:bg-gray-900">
			<h1 class="text-3xl font-bold m-4 p-4">Settings</h1>
			<div class="grid grid-cols-12 gap-4 bg-gray-100 dark:bg-gray-800 h-full m-4 p-4 rounded-2xl shadow-lg">
				<div class="col-span-2">
					<SettingsNav />
				</div>
				<div class="col-span-10">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
