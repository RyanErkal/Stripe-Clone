import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged
} from "firebase/auth";
import { auth } from "../components/firebase";
import { createUser } from "../components/firebase";

export default function SignUp() {
	const [signUpFormData, setSignUpFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		businessName: "",
		businessID: "",
		vatNumber: "",
		password: "",
		confirmPassword: ""
	});
	const navigate = useNavigate();

	function handleChange(e) {
		const { name, value } = e.target;
		setSignUpFormData((prev) => ({
			...prev,
			[name]: value
		}));
	}

	async function handleSubmit(e) {
		console.log("handleSubmit");
		e.preventDefault();

		await createUserWithEmailAndPassword(
			auth,
			signUpFormData.email,
			signUpFormData.password
		)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				createUser(
					user.uid,
					signUpFormData.firstName,
					signUpFormData.lastName,
					signUpFormData.email,
					signUpFormData.phoneNumber,
					signUpFormData.businessName,
					signUpFormData.businessID,
					signUpFormData.vatNumber
				);
				navigate("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				navigate("/");
			}
		});
	}, [navigate]);

	return (
		<div class="w-full h-screen flex flex-col items-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
			<div class="flex flex-col items-center justify-start h-content my-8 py-8 dark:bg-gray-800 rounded-2xl shadow-lg w-1/2">
				<h1 class="text-3xl font-bold p-8">Sign Up</h1>
				<div class="flex flex-row items-center justify-center w-1/2">
					<div class="w-full">
						<label class="flex flex-col items-center justify-center">
							First Name
						</label>
						<input
							required
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={signUpFormData.firstName}
							class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
						/>
					</div>
					<div class="ml-2 w-full">
						<label class="flex items-center justify-center">
							Last Name
						</label>
						<input
							required
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={signUpFormData.lastName}
							class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
						/>
					</div>
				</div>

				<div class="m-2 w-1/2">
					<label class="flex flex-col items-center justify-center">
						Email
					</label>
					<input
						required
						type="email"
						placeholder="john@doe.com"
						name="email"
						onChange={handleChange}
						value={signUpFormData.email}
						class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
					/>
				</div>
				<div class="m-2 w-1/2">
					<label class="flex items-center justify-center">
						Phone Number
					</label>
					<input
						required
						type="phone number"
						placeholder="+44 1234 567890"
						name="phoneNumber"
						onChange={handleChange}
						value={signUpFormData.phoneNumber}
						class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
					/>
				</div>

				<div class="m-2 w-1/2">
					<label class="flex flex-col items-center justify-center">
						Business Name
					</label>
					<input
						required
						type="text"
						placeholder="John Doe Ltd."
						name="businessName"
						onChange={handleChange}
						value={signUpFormData.businessName}
						class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
					/>
				</div>
				<div class="m-2 w-1/2">
					<label class="flex items-center justify-center">
						Business ID
					</label>
					<input
						required
						type="text"
						placeholder="12345678"
						name="businessID"
						onChange={handleChange}
						value={signUpFormData.businessID}
						class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
					/>
				</div>
				<div class="m-2 w-1/2">
					<label class="flex items-center justify-center">
						VAT Number
					</label>
					<input
						required
						type="text"
						placeholder="87654321"
						name="vatNumber"
						onChange={handleChange}
						value={signUpFormData.vatNumber}
						class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
					/>
				</div>

				<div class="m-2 w-1/2">
					<label class="flex flex-col items-center justify-center">
						Password
					</label>
					<input
						required
						type="password"
						placeholder="Password"
						name="password"
						onChange={handleChange}
						value={signUpFormData.password}
						class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
					/>
				</div>
				<div class="m-2 w-1/2">
					<label class="flex items-center justify-center">
						Confirm Password
					</label>
					<input
						required
						type="password"
						placeholder="Confirm Password"
						name="confirmPassword"
						onChange={handleChange}
						value={signUpFormData.confirmPassword}
						class="p-2 w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
					/>
				</div>

				<button
					onClick={(e) => handleSubmit(e)}
					class="py-2 px-6 m-2 bg-purple-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600">
					Login
				</button>
			</div>
		</div>
	);
}
