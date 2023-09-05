import React from "react";

export default function SettingsNotifications() {
	return (
		<div>
			<h1 class="text-2xl font-bold mb-4 m-1 p-1 lg:m-4 lg:p-4">
				Notifications
			</h1>
			<div class=" ml-1 pl-1 lg:ml-4 lg:pl-4">
				<h2 class="text-xl font-bold">Payments</h2>

				<div class="mt-4 pb-4 flex flex-row items-center border-b border-gray-600">
					<div class="flex flex-col justify-center items-start w-full">
						<h3 class="text-md font-bold">Successful Payment</h3>
						<p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
					<label class="justify-self-end relative inline-flex items-center cursor-pointer pr-4">
						<input type="checkbox" value="" class="sr-only peer" />
						<div class="w-11 h-6 focus:outline-none focus:ring-4 focus:ring-purple-800 rounded-full bg-gray-700 peer-checked:after:translate-x-full checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-purple-400"></div>
					</label>
				</div>

				<div class="mt-4 pb-4 flex flex-row items-center border-b border-gray-600">
					<div class="flex flex-col justify-center items-start w-full">
						<h3 class="text-md font-bold">New Payment</h3>
						<p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
					<label class="justify-self-end relative inline-flex items-center cursor-pointer pr-4">
						<input type="checkbox" value="" class="sr-only peer" />
						<div class="w-11 h-6 focus:outline-none focus:ring-4 focus:ring-purple-800 rounded-full bg-gray-700 peer-checked:after:translate-x-full checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-purple-400"></div>
					</label>
				</div>

				<div class="mt-4 pb-4 flex flex-row items-center border-b border-gray-600">
					<div class="flex flex-col justify-center items-start w-full">
						<h3 class="text-md font-bold">Failed Payment</h3>
						<p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
					<label class="justify-self-end relative inline-flex items-center cursor-pointer pr-4">
						<input type="checkbox" value="" class="sr-only peer" />
						<div class="w-11 h-6 focus:outline-none focus:ring-4 focus:ring-purple-800 rounded-full bg-gray-700 peer-checked:after:translate-x-full checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-purple-400"></div>
					</label>
				</div>

				<h2 class="text-xl font-bold mt-8">Customers</h2>

				<div class="mt-4 pb-4 flex flex-row items-center border-b border-gray-600">
					<div class="flex flex-col justify-center items-start w-full">
						<h3 class="text-md font-bold">New Customer</h3>
						<p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
					<input
						type="button"
						value="Manage"
						class="dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-purple-600 dark:border-gray-600 dark:hover:border-gray-400 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded-lg mr-4 transition-all"
					/>
				</div>

				<div class="mt-4 pb-4 flex flex-row items-center border-b border-gray-600">
					<div class="flex flex-col justify-center items-start w-full">
						<h3 class="text-md font-bold">Customer Message</h3>
						<p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
					<input
						type="button"
						value="Manage"
						class="dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-purple-600 dark:border-gray-600 dark:hover:border-gray-400 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded-lg mr-4 transition-all"
					/>
				</div>

				<div class="mt-4 pb-4 flex flex-row items-center border-b border-gray-600">
					<div class="flex flex-col justify-center items-start w-full">
						<h3 class="text-md font-bold">Customer Invite</h3>
						<p class="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
							Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est
							laborum.
						</p>
					</div>
					<span class="italic text-sm pr-2 text-gray-500 dark:text-gray-400">
						Active
					</span>
					<input
						type="button"
						value="Disable"
						class="dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-purple-600 dark:border-gray-600 dark:hover:border-gray-400 text-red-600 font-bold py-2 px-4 rounded-lg mr-4 transition-all"
					/>
				</div>

				<div class="mt-8 flex justify-end items-center">
					<input
						type="button"
						value="Cancel"
						class="dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-purple-600 dark:border-gray-600 dark:hover:border-gray-400 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded-lg mr-4 transition-all"
					/>
					<input
						type="button"
						value="Save Changes"
						class="bg-purple-500 hover:bg-purple-600 text-gray-100 font-bold py-2 px-4 rounded-lg transition-all"
					/>
				</div>
			</div>
		</div>
	);
}
