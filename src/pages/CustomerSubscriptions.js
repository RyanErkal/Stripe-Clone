import React from "react";
import { useLocation } from "react-router-dom";

export default function CustomerDetail() {
	const customer = useLocation().state;

	return (
		<div class="m-4 p-4">
			<h3>Plan: {customer.subscription.plan}</h3>
			<h3>Start Date: {customer.subscription.date}</h3>
		</div>
	);
}
