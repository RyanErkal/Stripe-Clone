import React from "react";
import { Link } from "react-router-dom";
import CustomerData from "../data/CustomerData.json";

export default function Customers() {
	const customerList = CustomerData.map((customer) => (
		<tr class="text-center hover:bg-purple-100" key={customer.name}>
			<td class="p-2 hover:font-bold">
				<Link to={`/customers/${customer.name}`} state={customer}>
					{customer.name}
				</Link>
			</td>
			<td>{customer.email}</td>
			<td>{customer.payments.length}</td>
			<td>
				£
				{customer.payments.reduce(
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
			<table class="table-fixed w-full mt-4">
				<thead>
					<tr class="text-center">
						<th>NAME</th>
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
