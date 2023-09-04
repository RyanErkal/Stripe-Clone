import React from "react";
import { useLocation } from "react-router-dom";

export default function CustomerDetail() {
	const customer = useLocation().state;

	const payments = customer.orders.map((order) => (
		<tr class="text-left" key={order.amount}>
			<td>£{order.amount}</td>
			<td>
				<div
					class={
						order.status === "succeeded"
							? "text-green-600 font-bold bg-green-200 py-2 px-4 w-min rounded-full text-center"
							: order.status === "failed"
							? "text-red-600 font-bold bg-red-200 py-2 px-4 w-min rounded-full text-center"
							: "text-orange-600 font-bold bg-orange-200 py-2 px-4 w-min rounded-full text-center"
					}>
					{order.status}
				</div>
			</td>
			<td>{order.date}</td>
		</tr>
	));

	return (
		<table class="table-fixed min-w-full m-8 p-4">
			<thead>
				<tr class="text-left">
					<th>AMOUNT</th>
					<th>STATUS</th>
					<th>DATE</th>
				</tr>
			</thead>
			<tbody>{payments}</tbody>
		</table>
	);
}
