import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { Link } from "react-router-dom";

export default function LoginModalContent({ closeModal }) {
	const [loginFormData, setLoginFormData] = useState({
		email: "",
		password: ""
	});

	async function handleSubmit(e) {
		console.log("handleSubmit");
		e.preventDefault();

		await signInWithEmailAndPassword(
			auth,
			loginFormData.email,
			loginFormData.password
		)
			.then((userCredential) => {
				const user = userCredential.user;
				closeModal();
				console.log("Login Modal User:");
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("Login Modal Error:");
				console.log(errorCode, errorMessage);
			});
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setLoginFormData((prev) => ({
			...prev,
			[name]: value
		}));
	}

	return (
		<div class="w-full h-full py-4 px-8 lg:py-16 lg:px-32 flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
			<h1 class="text-2xl font-bold">Login</h1>
			<input
				type="text"
				placeholder="Email"
				name="email"
				onChange={handleChange}
				value={loginFormData.email}
				class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
				value={loginFormData.password}
				class="p-2 m-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
			/>
			<p class="text-sm text-gray-500">test5@demo.com 123456</p>
			<button
				onClick={(e) => handleSubmit(e)}
				class="py-2 px-6 m-2 bg-purple-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600">
				Login
			</button>
			<Link to="/signup" onClick={closeModal}>
				<input
					type="button"
					value="Sign Up"
					class="dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 text-gray-800 dark:text-gray-100 font-bold py-2 px-4 rounded-lg transition-all"
				/>
			</Link>
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
