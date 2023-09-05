import React from "react";
import { DarkMode } from "./context/DarkModeProvider";
import Notifications from "./Notifications";

export default function Header() {
	const { toggleDarkMode } = React.useContext(DarkMode);
	const [showNotifications, setShowNotifications] = React.useState(false);

	console.log(showNotifications);

	return (
		<div>
			{showNotifications && (
				<Notifications
					toggle={() => setShowNotifications(!showNotifications)}
				/>
			)}
			<div class="bg-purple-600 min-w-max">
				<div class="flex justify-between items-center px-4 py-2">
					<div class="flex items-center">
						<h1 class="text-white text-2xl font-bold">Stripe</h1>
						<div class="ml-4">
							<button class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400">
								New
							</button>
						</div>
					</div>
					<div class="flex items-center">
						<div class="mr-4 flex align-center">
							<label class="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									class="sr-only peer"
									onClick={() => {
										toggleDarkMode();
									}}
								/>
								<div class="w-11 h-6 focus:outline-none focus:ring-4 focus:ring-purple-800 rounded-full bg-gray-700 peer-checked:after:translate-x-full checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-purple-400"></div>
							</label>
						</div>
						<div class="mr-4">
							<button
								class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400"
								onClick={() =>
									setShowNotifications(!showNotifications)
								}>
								Support
							</button>
						</div>
						<div>
							<button class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400">
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
