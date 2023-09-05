import React from "react";

export default function SettingsBilling() {
	return (
		<div>
			<h1 class="text-2xl font-bold m-1 mb-2 p-1 lg:m-4 lg:p-4">
				Billing & Invoices
			</h1>
			<div class="m-1 p-1 lg:ml-4 lg:pl-4">
				<h2 class="text-xl font-bold">Billing Information</h2>
				<h3 class="mt-4 text-md font-bold">Payment Method</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Mastercard ending in 1234{" "}
					<span class="ml-1 text-purple-400 hover:text-purple-300 cursor-pointer">
						Edit
					</span>
				</p>
				<h3 class="mt-4 text-md font-bold">Billing Interval</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Monthly{" "}
					<span class="ml-1 text-purple-400 hover:text-purple-300 cursor-pointer">
						Edit
					</span>
				</p>
				<h3 class="mt-4 text-md font-bold">VAT Numver</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					UK1234ABC{" "}
					<span class="ml-1 text-purple-400 hover:text-purple-300 cursor-pointer">
						Edit
					</span>
				</p>
				<h3 class="mt-4 text-md font-bold">Billing Address</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Tatooine, Outer Rim{" "}
					<span class="ml-1 text-purple-400 hover:text-purple-300 cursor-pointer">
						Edit
					</span>
				</p>

				<h2 class="mt-8 text-xl font-bold">Invoices</h2>
				<h3 class="mt-4 text-md font-bold">Month</h3>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Mar 2023 Advanced Plan - Monthly £349.00{" "}
					<span class="ml-1 text-purple-400 hover:text-purple-300 cursor-pointer">
						Download
					</span>
				</p>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Feb 2023 Advanced Plan - Monthly £349.00{" "}
					<span class="ml-1 text-purple-400 hover:text-purple-300 cursor-pointer">
						Download
					</span>
				</p>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					Jan 2023 Advanced Plan - Monthly £349.00{" "}
					<span class="ml-1 text-purple-400 hover:text-purple-300 cursor-pointer">
						Download
					</span>
				</p>
				<span class="text-sm text-purple-400 hover:text-purple-300 cursor-pointer">
					See More
				</span>
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
	);
}
