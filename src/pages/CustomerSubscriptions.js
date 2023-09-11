import React from "react";
import { useLocation } from "react-router-dom";

export default function CustomerDetail() {
	const customer = useLocation().state;

	return (
		<div class="m-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl">
			<h3 class="mt-4 text-xl font-bold">
				Plan:
				<span
					class={
						customer.subscription.plan === "basic"
							? "text-blue-600 font-bold bg-blue-200 py-2 px-4 mx-1 w-min rounded-full text-center"
							: customer.subscription.plan === "premium"
							? "text-purple-600 font-bold bg-purple-200 py-2 px-4 mx-1 w-min rounded-full text-center"
							: "text-orange-600 font-bold bg-orange-200 py-2 px-4 mx-1 w-min rounded-full text-center"
					}>
					{customer.subscription.plan}{" "}
				</span>
				<span
					class={
						customer.subscription.status === "active"
							? "text-green-600 font-bold bg-green-200 py-2 px-4 mx-1 w-min rounded-full text-center"
							: customer.subscription.status === "cancelled"
							? "text-red-600 font-bold bg-red-200 py-2 px-4 mx-1 w-min rounded-full text-center"
							: "text-orange-600 font-bold bg-orange-200 py-2 px-4 mx-1 w-min rounded-full text-center"
					}>
					{customer.subscription.status}
				</span>
			</h3>
			<h3 class="mt-4 text-xl font-bold">
				Start Date: {customer.subscription.date}
			</h3>
		</div>
	);
}
