import React from "react";

export default function SettingsBilling() {
	return (
		<div>
			<h1 class="text-2xl font-bold m-4 p-4">Billing & Invoices</h1>
			<div class="ml-4 pl-4">
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
		</div>
	);
}
