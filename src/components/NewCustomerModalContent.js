import React, { useState } from "react";
import { newCustomer } from "./firebase";

export default function NewCustomerModalContent({ closeModal }) {
	const [newCustomerFormData, setNewCustomerFormData] = useState({
		name: "",
		email: "",
		location: "",
		orders: [],
		subscription: {}
	});

	async function handleSubmit(e) {
		e.preventDefault();
		newCustomer(
			newCustomerFormData.name,
			newCustomerFormData.email,
			newCustomerFormData.location,
			newCustomerFormData.subscription,
			newCustomerFormData.orders
		);
		closeModal();
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setNewCustomerFormData((prev) => ({
			...prev,
			[name]: value
		}));
	}

	return (
		<div class="w-full h-full py-4 px-8 lg:py-16 lg:px-32 flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
			<h1 class="text-2xl font-bold">New Customer</h1>
			<input
				type="text"
				placeholder="Name"
				name="name"
				onChange={handleChange}
				value={newCustomerFormData.name}
				class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
			/>
			<input
				type="text"
				placeholder="Email"
				name="email"
				onChange={handleChange}
				value={newCustomerFormData.email}
				class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
			/>
			<input
				type="text"
				placeholder="Location"
				name="location"
				onChange={handleChange}
				value={newCustomerFormData.location}
				class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
			/>
			<button
				onClick={(e) => handleSubmit(e)}
				class="py-2 px-6 m-2 bg-purple-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600">
				Create
			</button>

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
