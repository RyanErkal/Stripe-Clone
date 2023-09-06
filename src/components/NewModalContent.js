import React from "react";

export default function NewModalContent({ closeModal }) {
	return (
		<div class="w-full h-full p-8 flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
			<h1 class="text-2xl font-bold">New</h1>
			<select class="mt-2 dark:bg-gray-700 dark:text-gray-100 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-600">
				<option value="payment">Payment</option>
				<option value="subscription">Subscription</option>
				<option value="invoice">Invoice</option>
			</select>
			<input
				type="text"
				placeholder="Product"
				class="p-2 m-2 dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
			/>
			<input
				type="text"
				placeholder="Amount"
				class="p-2 m-2 dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
			/>
			<h3 class="text-xl font-bold mt-2">Options</h3>
			<div class="flex mt-2">
				<input type="checkbox" />
				<span class="ml-2">Save card</span>
			</div>
			<div class="flex mt-2">
				<input type="checkbox" />
				<span class="ml-2">Require Phone Number</span>
			</div>
			<div class="flex mt-2">
				<input type="checkbox" />
				<span class="ml-2">Require Address</span>
			</div>
			<div class="flex mt-2">
				<input type="checkbox" />
				<span class="ml-2">Add Custom Fields</span>
			</div>
			<button
				onClick={closeModal}
				class="absolute top-0 right-0 p-4 cursor-pointer hover:text-red-600">
				<svg
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24">
					<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
				</svg>
			</button>
		</div>
	);
}
