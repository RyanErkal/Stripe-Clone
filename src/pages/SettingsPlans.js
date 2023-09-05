import React from "react";

export default function SettingsPlans() {
	return (
		<div>
			<h1 class="text-2xl font-bold m-4 p-4">Plans</h1>
			<div class="ml-4 pl-4">
				<h3 class="mt-4 text-md font-bold">Current Plan</h3>
				<div class="mt-4 text-2xl max-w-min px-4 py-2 font-bold text-orange-100 bg-orange-400 rounded-full">
					Advanced
				</div>
				<p class="ml-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
					This workspace's Advanced plan is set to{" "}
					<span class="font-bold">£349</span> per month renews on 1st
					april 2023
				</p>
				<div class="ml-2 flex flex-row items-center justify-start">
					<input type="checkbox" class="" />
					<span class="ml-2 text-sm text-gray-500 dark:text-gray-400">
						Pay Annually (-20%)
					</span>
				</div>
			</div>
		</div>
	);
}
