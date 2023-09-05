import React from "react";
import { Link } from "react-router-dom";
import CustomerData from "../data/CustomerData.json";

export default function Customers() {
	const customerList = CustomerData.map((customer) => (
		<tr
			class="text-left hover:text-purple-600 transition-all"
			key={customer.name}>
			<th>
				<input type="checkbox" />
			</th>
			<td class="p-4">
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
			<table class="table-auto min-w-max text-xs lg:text-base lg:w-full m-6">
				<thead>
					<tr class="text-left">
						<th>
							<input type="checkbox" />
						</th>
						<th class="pl-4">NAME</th>
						<th>EMAIL</th>
						<th>PAYMENTS</th>
						<th>TOTAL SPEND</th>
					</tr>
				</thead>
				<tbody>{customerList}</tbody>
			</table>
			<div class="flex justify-between items-center my-4 mx-8">
				<div class="basis-1/2 justify-start">
					<span class="text-sm text-gray-600 dark:text-gray-400">
						Showing <span class="font-semibold">1</span> to{" "}
						<span class="font-semibold">5</span> of{" "}
						<span class="font-semibold">100</span> results
					</span>
				</div>

				<div class="flex justify-end basis-1/2 mt-2 xs:mt-0">
					<button class="flex items-center justify-center p-2 mx-2 text-sm font-medium bg-gray-600 text-gray-100 hover:text-purple-300 rounded-lg">
						<svg
							class="w-3.5 h-3.5 mr-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 5H1m0 0 4 4M1 5l4-4"
							/>
						</svg>
						Prev
					</button>
					<button class="flex items-center justify-center p-2 mx-2 text-sm font-medium bg-gray-600 text-gray-100 hover:text-purple-300 rounded-lg">
						Next
						<svg
							class="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
}

// shared UI navbar
// csutomer profile
