import React, { useState } from "react";
import { newPayment } from "./firebase.js";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function NewPaymentModalContent({ closeModal }) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (data) => newPaymentSubmit(data);
	const [newPaymentFormData, setNewPaymentFormData] = useState({
		order: "",
		date: "",
		name: "",
		amount: null,
		status: "",
		location: "",
		items: null,
		type: "",
		customerID: ""
	});

	async function newPaymentSubmit(data) {
		newPayment(
			data.order,
			data.date,
			data.name,
			data.amount,
			data.status,
			data.location,
			data.items,
			data.type,
			newPaymentFormData.customerID
		);
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
				onSubmit={handleSubmit(onSubmit)}
				class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
				<input
					type="text"
					placeholder="Order #"
					name="order"
					onChange={handleChange}
					/* value={newPaymentFormData.order} */
					{...register("order", {
						required: "Order number is required",
						minLength: {
							value: 1,
							message: "Please enter a valid order number"
						},
						maxLength: {
							value: 20,
							message: "Please enter a valid order number"
						},
						pattern: {
							value: /^\d+$/,
							message: "Please enter a valid order number"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<ErrorMessage
					errors={errors}
					name="order"
					render={({ message }) => (
						<p class="font-bold text-sm text-red-500">{message}</p>
					)}
				/>
				<input
					type="text"
					placeholder="Date"
					name="date"
					onChange={handleChange}
					/* value={newPaymentFormData.date} */
					{...register("date", {
						required: "Date is required",
						minLength: {
							value: 6,
							message: "Please enter a valid date"
						},
						maxLength: {
							value: 10,
							message: "Please enter a valid date"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<ErrorMessage
					errors={errors}
					name="date"
					render={({ message }) => (
						<p class="font-bold text-sm text-red-500">{message}</p>
					)}
				/>
				<input
					type="text"
					placeholder="Name"
					name="name"
					onChange={handleChange}
					/* value={newPaymentFormData.name} */
					{...register("name", {
						required: "Name is required",
						minLength: {
							value: 2,
							message: "Please enter a valid name"
						},
						maxLength: {
							value: 20,
							message: "Please enter a valid name"
						},
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: "Please enter a valid name"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<ErrorMessage
					errors={errors}
					name="name"
					render={({ message }) => (
						<p class="font-bold text-sm text-red-500">{message}</p>
					)}
				/>
				<input
					type="text"
					placeholder="£ Amount"
					name="amount"
					onChange={handleChange}
					/* value={newPaymentFormData.amount} */
					{...register("amount", {
						required: "Amount is required",
						minLength: {
							value: 1,
							message: "Please enter a valid amount"
						},
						maxLength: {
							value: 20,
							message: "Please enter a valid amount"
						},
						pattern: {
							value: /^\d+$/,
							message: "Please enter a valid amount"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<ErrorMessage
					errors={errors}
					name="amount"
					render={({ message }) => (
						<p class="font-bold text-sm text-red-500">{message}</p>
					)}
				/>
				<input
					type="text"
					placeholder="Status"
					name="status"
					onChange={handleChange}
					/* value={newPaymentFormData.status} */
					{...register("status", {
						required: "Status is required",
						minLength: {
							value: 4,
							message: "Please enter a valid status"
						},
						maxLength: {
							value: 20,
							message: "Please enter a valid status"
						},
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: "Please enter a valid status"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<ErrorMessage
					errors={errors}
					name="status"
					render={({ message }) => (
						<p class="font-bold text-sm text-red-500">{message}</p>
					)}
				/>
				<input
					type="text"
					placeholder="Location"
					name="location"
					onChange={handleChange}
					/* value={newPaymentFormData.location} */
					{...register("location", {
						required: "Location is required",
						minLength: {
							value: 2,
							message: "Please enter a valid location"
						},
						maxLength: {
							value: 20,
							message: "Please enter a valid location"
						},
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: "Please enter a valid location"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<ErrorMessage
					errors={errors}
					name="location"
					render={({ message }) => (
						<p class="font-bold text-sm text-red-500">{message}</p>
					)}
				/>
				<input
					type="text"
					placeholder="No. of Items"
					name="items"
					onChange={handleChange}
					/* value={newPaymentFormData.items} */
					{...register("items", {
						required: "Number of items is required",
						minLength: {
							value: 1,
							message: "Please enter a valid number of items"
						},
						maxLength: {
							value: 3,
							message: "Please enter a valid number of items"
						},
						pattern: {
							value: /^\d+$/,
							message: "Please enter a valid number of items"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<ErrorMessage
					errors={errors}
					name="items"
					render={({ message }) => (
						<p class="font-bold text-sm text-red-500">{message}</p>
					)}
				/>
				<input
					type="text"
					placeholder="One Time or Recurring"
					name="type"
					onChange={handleChange}
					/* value={newPaymentFormData.type} */
					{...register("type", {
						required: "Type is required",
						minLength: {
							value: 4,
							message: "Please enter a valid type"
						},
						maxLength: {
							value: 20,
							message: "Please enter a valid type"
						},
						pattern: {
							value: /^[A-Za-z\s]*$/,
							message: "Please enter a valid type"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<ErrorMessage
					errors={errors}
					name="type"
					render={({ message }) => (
						<p class="font-bold text-sm text-red-500">{message}</p>
					)}
				/>
				{/* <input
				type="text"
				placeholder="Name"
				name="name"
				onChange={handleChange}
				value={newPaymentFormData.customerID}
				class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
			/> */}
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
