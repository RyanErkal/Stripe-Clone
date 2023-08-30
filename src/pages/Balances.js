import React from "react";

export default function Balances() {
	return (
		<>
			<h1 class="text-3xl font-bold m-4 p-4">Balances</h1>
			<div class="m-4 grid grid-cols-2">
				<div>
					<div class="m-4">
						<p class="text-l font-bold">Available Balance</p>
						<p class="text-2xl font-bold">£0.00</p>
					</div>
					<div class="m-4">
						<p class="text-l font-bold">Pending Balance</p>
						<p class="text-2xl font-bold">£423.00</p>
					</div>
					<div class="m-4">
						<p class="text-l font-bold">Total Balance</p>
						<p class="text-2xl font-bold">£5343.00</p>
					</div>
				</div>
				<div>
					<div class="m-4">
						<p class="text-l font-bold">Available Payouts</p>
						<p class="text-2xl font-bold">£323.00</p>
					</div>
					<div class="m-4">
						<p class="text-l font-bold">Pending Payouts</p>
						<p class="text-2xl font-bold">£4134.00</p>
					</div>
					<div class="m-4">
						<p class="text-l font-bold">Total Payouts</p>
						<p class="text-2xl font-bold">£32325.00</p>
					</div>
				</div>
			</div>
		</>
	);
}
