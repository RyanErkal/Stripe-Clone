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
		<tr class="text-center">
			<td class="p-2">{payment.name}</td>
			<td>£{payment.amount}</td>
			<td
				class={
					payment.status === "succeeded"
						? "text-green-600 font-bold bg-green-100"
						: "text-red-600 font-bold bg-red-100"
				}>
				{payment.status}
			</td>
			<td>{payment.date}</td>
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
					class="bg-green-200 px-4 p-2 m-2 border border-green-300 rounded-full hover:bg-green-300 transition-all">
					Succeeded
				</button>
				<button
					onClick={() => handleFilterChange("status", "failed")}
					class="bg-red-200 px-4 p-2 m-2 border border-red-300 rounded-full hover:bg-red-300 transition-all">
					Failed
				</button>
				<button
					onClick={() => handleFilterChange("status", null)}
					class="bg-gray-200 px-4 p-2 m-2 border border-gray-300 rounded-full hover:bg-gray-300 transition-all">
					Clear
				</button>
			</div>
			<table class="table-fixed w-full mt-4">
				<thead>
					<tr class="text-center">
						<th>NAME</th>
						<th>AMOUNT</th>
						<th>STATUS</th>
						<th>DATE</th>
					</tr>
				</thead>
				<tbody>{paymentList}</tbody>
			</table>
		</>
	);
}
