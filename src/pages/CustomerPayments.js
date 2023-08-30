import React from "react";
import { useLocation } from "react-router-dom";

export default function CustomerDetail() {
	const customer = useLocation().state;

	const payments = customer.payments.map((payment) => (
		<tr class="text-center hover:bg-purple-100">
			<td>£{payment.amount}</td>
			<td>{payment.status}</td>
			<td>{payment.date}</td>
		</tr>
	));

	return (
		<table class="table-fixed w-full mt-4">
			<thead>
				<tr class="text-center">
					<th>AMOUNT</th>
					<th>STATUS</th>
					<th>DATE</th>
				</tr>
			</thead>
			<tbody>{payments}</tbody>
		</table>
	);
}
