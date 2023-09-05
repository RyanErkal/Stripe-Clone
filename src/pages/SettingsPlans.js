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

			<div class="ml-4 pl-4">
				<h3 class="mt-8 text-md font-bold">Available Plans</h3>
				<div class="flex flex-row items-center justify-around">
					<div class="flex flex-col items-center bg-gray-700 p-4 mt-12 mr-8 rounded-lg w-1/3">
						<div class="relative -top-10 text-2xl max-w-min px-6 py-4 font-bold text-blue-100 bg-blue-400 rounded-full">
							Basic
						</div>

						<h3 class="text-3xl font-bold -mt-6">
							£249
							<span class="text-sm text-gray-500 dark:text-gray-400">
								/mo
							</span>
						</h3>
						<p class="text-sm font-bold mt-2">
							Great for teams up to 5
						</p>
						<input
							type="button"
							value="Downgrade"
							class="bg-gray-700 border border-gray-600 hover:border-purple-500 text-gray-100 font-bold py-2 px-4 rounded-lg mt-2 transition-all"
						/>
						<p class="mt-2 text-sm font-bold text-gray-100 dark:text-gray-100">
							What's included:
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Quis nostrud exercitation
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Quis nostrud exercitation
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
					</div>

					<div class="flex flex-col items-center bg-gray-700 p-4 mt-12 mr-8 rounded-lg w-1/3">
						<div class="relative -top-10 text-2xl max-w-min px-6 py-4 font-bold text-orange-100 bg-orange-400 rounded-full">
							Advanced
						</div>

						<h3 class="text-3xl font-bold -mt-6">
							£349
							<span class="text-sm text-gray-500 dark:text-gray-400">
								/mo
							</span>
						</h3>
						<p class="text-sm font-bold mt-2">
							Great for teams up to 25
						</p>
						<input
							type="button"
							value="Current Plan"
							disabled
							class="bg-gray-700 border border-gray-600 text-gray-100 font-bold py-2 px-4 rounded-lg mt-2 transition-all"
						/>
						<p class="mt-2 text-sm font-bold text-gray-100 dark:text-gray-100">
							What's included:
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Quis nostrud exercitation
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Quis nostrud exercitation
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
					</div>

					<div class="flex flex-col items-center bg-gray-700 p-4 mt-12 mr-8 rounded-lg w-1/3">
						<div class="relative -top-10 text-2xl max-w-min px-6 py-4 font-bold text-purple-100 bg-purple-400 rounded-full">
							Premium
						</div>

						<h3 class="text-3xl font-bold -mt-6">
							£749
							<span class="text-sm text-gray-500 dark:text-gray-400">
								/mo
							</span>
						</h3>
						<p class="text-sm font-bold mt-2">
							Great for enterprise level teams
						</p>
						<input
							type="button"
							value="Upgrade"
							class="bg-purple-500 hover:bg-purple-600 text-gray-100 font-bold py-2 px-4 rounded-lg mt-2 transition-all"
						/>
						<p class="mt-2 text-sm font-bold text-gray-100 dark:text-gray-100">
							What's included:
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Quis nostrud exercitation
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Quis nostrud exercitation
						</p>
						<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
							✔︎ Lorem ipsum dolor sit amet
						</p>
					</div>
				</div>
			</div>
			<div class="mt-8 flex justify-end items-center">
				<input
					type="button"
					value="Cancel"
					class="bg-gray-800 border border-gray-600 hover:border-gray-400 text-gray-100 font-bold py-2 px-4 rounded-lg mr-4 transition-all"
				/>
				<input
					type="button"
					value="Save Changes"
					class="bg-purple-500 hover:bg-purple-600 text-gray-100 font-bold py-2 px-4 rounded-lg transition-all"
				/>
			</div>
		</div>
	);
}
