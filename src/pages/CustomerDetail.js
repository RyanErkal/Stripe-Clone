import React from "react";
import { useLocation } from "react-router-dom";

export default function CustomerDetail() {
	const customer = useLocation().state;

	return (
		<div class="m-4 p-4 bg-gray-100 rounded-2xl shadow-xl">
			<h3 class="text-xl font-bold">Email: {customer.email}</h3>
			<h3 class="mt-4 text-xl font-bold">
				Location: {customer.location}
			</h3>
		</div>
	);
}
