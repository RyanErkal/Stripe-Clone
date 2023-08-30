import React from "react";
import { useLocation } from "react-router-dom";

export default function CustomerDetail() {
	const customer = useLocation().state;

	return (
		<div class="m-4 p-4">
			<h3>Email: {customer.email}</h3>
			<h3>Address: {customer.address}</h3>
		</div>
	);
}
