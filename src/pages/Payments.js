import React from "react";
import { useSearchParams } from "react-router-dom";
import PaymentData from "../data/PaymentData.json";

export default function Payments() {
	const [searchParams, setSearchParams] = useSearchParams();

	const filter = searchParams.get("status");

	const filteredPayments = filter
		? PaymentData.filter((payment) => payment.status === filter)
		: PaymentData;

	const paymentList = filteredPayments.map((payment) => (
		<tr class="text-left" key={payment.name}>
			<td class="p-4">{payment.order}</td>
			<td>{payment.date}</td>
			<td>{payment.name}</td>
			<td>£{payment.amount}</td>
			<td>
				<div
					class={
						payment.status === "succeeded"
							? "text-green-600 font-bold bg-green-200 py-2 px-4 w-min rounded-full text-center"
							: payment.status === "failed"
							? "text-red-600 font-bold bg-red-200 py-2 px-4 w-min rounded-full text-center"
							: "text-orange-600 font-bold bg-orange-200 py-2 px-4 w-min rounded-full text-center"
					}>
					{payment.status}
				</div>
			</td>
			<td>{payment.location}</td>
			<td>{payment.items}</td>
			<td>{payment.type}</td>
		</tr>
	));

	function handleFilterChange(key, value) {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	}

	return (
		<>
			<h1 class="text-3xl font-bold m-4 p-4">Payments</h1>
			<div class="m-4">
				<button
					onClick={() => handleFilterChange("status", "succeeded")}
					class="bg-green-200 px-4 p-2 m-2 border border-green-300 rounded-full hover:bg-green-300 transition-all hover:shadow-xl">
					Succeeded
				</button>
				<button
					onClick={() => handleFilterChange("status", "processing")}
					class="bg-orange-200 px-4 p-2 m-2 border border-orange-300 rounded-full hover:bg-orange-300 transition-all hover:shadow-xl">
					Processing
				</button>
				<button
					onClick={() => handleFilterChange("status", "failed")}
					class="bg-red-200 px-4 p-2 m-2 border border-red-300 rounded-full hover:bg-red-300 transition-all hover:shadow-xl">
					Failed
				</button>
				<button
					onClick={() => handleFilterChange("status", null)}
					class="bg-gray-200 px-4 p-2 m-2 border border-gray-300 rounded-full hover:bg-gray-300 transition-all hover:shadow-xl">
					Clear
				</button>
			</div>
			<table class="table-auto min-w-max lg:w-full m-6">
				<thead>
					<tr class="text-left">
						<th class="pl-4">ORDER</th>
						<th>DATE</th>
						<th>NAME</th>
						<th>AMOUNT</th>
						<th>STATUS</th>
						<th>LOCATION</th>
						<th>ITEMS</th>
						<th>PAYMENT TYPE</th>
					</tr>
				</thead>
				<tbody>{paymentList}</tbody>
			</table>
		</>
	);
}
