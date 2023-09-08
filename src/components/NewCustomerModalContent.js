import React, { useState } from "react";
import { newCustomer } from "./firebase.js";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function NewCustomerModalContent({ closeModal }) {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ criteriaMode: "all" });
	const onSubmit = (data) => newCustomerSubmit(data);
	const [newCustomerFormData, setNewCustomerFormData] = useState({
		name: "",
		email: "",
		location: "",
		orders: [],
		subscription: {}
	});

	async function newCustomerSubmit(data) {
		newCustomer(
			data.name,
			data.email,
			data.location,
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

	/* React.useEffect(() => {
		setError("name", {
			types: {
				required: "Name is required",
				minLength: "Please enter a valid name",
				maxLength: "Please enter a valid name",
				pattern: "Please enter a valid name"
			}
		});
	}, [setError]); */

	return (
		<div class="w-full h-full py-4 px-8 lg:py-16 lg:px-32 flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
			<h1 class="text-2xl font-bold">New Customer</h1>
			<ErrorMessage
				errors={errors}
				name="name"
				render={({ message }) => (
					<p class="font-bold text-sm text-red-500">{message}</p>
				)}
			/>
			<ErrorMessage
				errors={errors}
				name="email"
				render={({ message }) => (
					<p class="font-bold text-sm text-red-500">{message}</p>
				)}
			/>
			<ErrorMessage
				errors={errors}
				name="location"
				render={({ message }) => (
					<p class="font-bold text-sm text-red-500">{message}</p>
				)}
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				class="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
				<input
					type="text"
					placeholder="Name"
					name="name"
					onChange={handleChange}
					/* value={newCustomerFormData.name} */
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
				<input
					type="text"
					placeholder="Email"
					name="email"
					onChange={handleChange}
					/* value={newCustomerFormData.email} */
					{...register("email", {
						required: "Email is required",
						minLength: {
							value: 6,
							message: "Please enter a valid email"
						},
						maxLength: {
							value: 30,
							message: "Please enter a valid email"
						},
						pattern: {
							value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
							message: "Please enter a valid email"
						}
					})}
					class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
				/>
				<input
					type="text"
					placeholder="Location"
					name="location"
					onChange={handleChange}
					/* value={newCustomerFormData.location} */
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
