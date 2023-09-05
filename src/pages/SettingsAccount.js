import React from "react";

export default function SettingsAccount() {
	return (
		<div>
			<h1 class="text-2xl font-bold m-4 p-4">Account</h1>

			<div class="ml-4 pl-4">
				<h2 class="text-xl font-bold">Business Profile</h2>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit.
				</p>
			</div>

			<div class="m-4 p-4">
				<h2 class="text-xl font-bold">Business Details</h2>
				<div class="flex w-full">
					<div class="flex flex-col justify-center items-start mt-4 mr-8 w-1/3">
						<label for="name" class="text-sm text-gray-400">
							Business Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							class="focus:outline-none focus:none border-b focus:border-purple-400 dark:bg-gray-800 p-2 w-full"
							placeholder="Loral Ltd."
						/>
					</div>
					<div class="flex flex-col justify-center items-start mt-4 mr-8 w-1/3">
						<label for="name" class="text-sm text-gray-400">
							Business ID
						</label>
						<input
							type="text"
							id="name"
							name="name"
							class="focus:outline-none focus:none border-b focus:border-purple-400 dark:bg-gray-800 p-2 w-full"
							placeholder="Kd73hgJ89B"
						/>
					</div>
					<div class="flex flex-col justify-center items-start mt-4 w-1/3">
						<label for="name" class="text-sm text-gray-400">
							Business Location
						</label>
						<input
							type="text"
							id="name"
							name="name"
							class="focus:outline-none focus:none border-b focus:border-purple-400 dark:bg-gray-800 p-2 w-full"
							placeholder="Manchester, UK"
						/>
					</div>
				</div>
			</div>

			<div class="m-4 p-4">
				<h2 class="text-xl font-bold">Email</h2>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit.
				</p>
				<div class="flex w-full">
					<div class="flex flex-row justify-center items-center mt-4 mr-8">
						<input
							type="text"
							id="name"
							name="name"
							class="focus:outline-none focus:none border focus:border-purple-400 dark:bg-gray-800 p-2 w-full mr-4 rounded-lg"
							placeholder="admin@loral.com"
						/>
						<input
							type="button"
							value="Update"
							class="bg-purple-500 hover:bg-purple-600 text-gray-100 font-bold py-2 px-4 rounded-lg"
						/>
					</div>
				</div>
			</div>

			<div class="m-4 p-4">
				<h2 class="text-xl font-bold">Password</h2>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit.
				</p>
				<div class="flex w-full">
					<div class="flex flex-row justify-center items-center mt-4 mr-8">
						<input
							type="button"
							value="Set New Password"
							class="bg-purple-500 hover:bg-purple-600 text-gray-100 font-bold py-2 px-4 rounded-lg"
						/>
					</div>
				</div>
			</div>

			<div class="m-4 p-4">
				<h2 class="text-xl font-bold">Smart Sync for Mac</h2>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit.
				</p>
				<div class="flex w-full">
					<div class="flex flex-row justify-center items-center mt-4 mr-8">
						<label class="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value=""
								class="sr-only peer"
							/>
							<div class="w-11 h-6 focus:outline-none focus:ring-4 focus:ring-purple-800 rounded-full bg-gray-700 peer-checked:after:translate-x-full checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-purple-400"></div>
						</label>
					</div>
				</div>
			</div>

			<div class="flex justify-end items-center">
				<input
					type="button"
					value="Cancel"
					class="dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded-lg mr-4 transition-all"
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
