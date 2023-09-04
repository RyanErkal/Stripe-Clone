import React from "react";
import { Link } from "react-router-dom";
import CustomerData from "../data/CustomerData.json";

export default function Customers() {
	const customerList = CustomerData.map((customer) => (
		<tr
			class="text-left hover:text-purple-800 hover:font-bold"
			key={customer.name}>
			<td class="p-4 hover:font-bold">
				<Link to={`/customers/${customer.name}`} state={customer}>
					{customer.name}
				</Link>
			</td>
			<td>{customer.email}</td>
			<td>{customer.orders.length}</td>
			<td>
				£
				{customer.orders.reduce(
					(accumulator, currentValue) =>
						accumulator + currentValue.amount,
					0
				)}
			</td>
		</tr>
	));

	return (
		<>
			<h1 class="text-3xl font-bold m-4 p-4">Customers</h1>
			<table class="table-fixed w-full m-6">
				<thead>
					<tr class="text-left">
						<th class="pl-4">NAME</th>
						<th>EMAIL</th>
						<th>PAYMENTS</th>
						<th>TOTAL SPEND</th>
					</tr>
				</thead>
				<tbody>{customerList}</tbody>
			</table>
		</>
	);
}

// shared UI navbar
// csutomer profile
