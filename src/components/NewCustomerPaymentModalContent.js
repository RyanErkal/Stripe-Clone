import React from "react";
import { useState } from "react";
import { newCustomerOrder } from "./firebase.js";

export default function NewCustomerPaymentModalContent({
	closeModal,
	customer
}) {
	const [newPaymentFormData, setNewPaymentFormData] = useState({
		date: "",
		amount: 0,
		status: ""
	});

	async function handleSubmit() {
		newCustomerOrder(customer.id, {
			date: newPaymentFormData.date,
			amount: parseInt(newPaymentFormData.amount),
			status: newPaymentFormData.status
		});
		closeModal();
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setNewPaymentFormData((prev) => ({
			...prev,
			[name]: value
		}));
	}

	return (
		<div class="w-full h-full py-4 px-8 lg:py-16 lg:px-32 flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
			<h1 class="text-2xl font-bold">New Payment</h1>
			<form
				onSubmit={handleSubmit}
				class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
				<input
					type="text"
					placeholder="Date"
					name="date"
					onChange={handleChange}
					value={newPaymentFormData.date}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<input
					type="number"
					placeholder="Amount"
					name="amount"
					onChange={handleChange}
					value={newPaymentFormData.amount}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<input
					type="text"
					placeholder="Status"
					name="status"
					onChange={handleChange}
					value={newPaymentFormData.status}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>

				<button
					onClick={(e) => handleSubmit(e)}
					class="py-2 px-6 m-2 bg-purple-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600">
					Create
				</button>
			</form>

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
