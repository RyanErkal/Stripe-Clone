import React from "react";
import { useEffect } from "react";
import { getPayouts } from "../components/firebase";

export default function Balances() {
	const [payoutData, setPayoutData] = React.useState([]);

	useEffect(() => {
		getPayouts().then((data) => {
			setPayoutData(data);
		});
	}, []);

	const payoutList = payoutData.map((payout) => (
		<tr
			class="text-left hover:text-purple-600 transition-all"
			key={payout.id}>
			<th>
				<input type="checkbox" />
			</th>
			<td class="p-4">{payout.date}</td>
			<td>£{payout.amount}</td>
			<td>{payout.account}</td>
			<td>{payout.id}</td>
		</tr>
	));

	return (
		<div class="w-full xl:max-w-7xl">
			<h1 class="text-3xl font-bold m-4 p-4">Balances</h1>
			<div class="m-4 grid grid-cols-2 max-w-full bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl">
				<div>
					<div class="m-4">
						<p class="text-sm md:text-l font-bold">
							Available Balance
						</p>
						<p class="text-lg md:text-2xl font-bold">£0.00</p>
					</div>
					<div class="m-4">
						<p class="text-sm md:text-l font-bold">
							Pending Balance
						</p>
						<p class="text-lg md:text-2xl font-bold">£423.00</p>
					</div>
					<div class="m-4">
						<p class="text-sm md:text-l font-bold">Total Balance</p>
						<p class="text-lg md:text-2xl font-bold">£5343.00</p>
					</div>
				</div>
				<div>
					<div class="m-4">
						<p class="text-sm md:text-l font-bold">
							Available Payouts
						</p>
						<p class="text-lg md:text-2xl font-bold">£323.00</p>
					</div>
					<div class="m-4">
						<p class="text-sm md:text-l font-bold">
							Pending Payouts
						</p>
						<p class="text-lg md:text-2xl font-bold">£4134.00</p>
					</div>
					<div class="m-4">
						<p class="text-sm md:text-l font-bold">Total Payouts</p>
						<p class="text-lg md:text-2xl font-bold">£32325.00</p>
					</div>
				</div>
			</div>
			<h1 class="text-3xl font-bold m-4 p-4">Payouts</h1>
			<div class="flex justify-between m-4">
				<div class=""></div>
			</div>

			<table class="table-auto min-w-max text-xs lg:text-base lg:w-full m-6">
				<thead>
					<tr class="text-left">
						<th>
							<input type="checkbox" />
						</th>
						<th class="pl-4">DATE</th>
						<th>AMOUNT</th>
						<th>ACCOUNT NO.</th>
						<th>TRANSACTION ID</th>
					</tr>
				</thead>
				<tbody>{payoutList}</tbody>
			</table>
			<div class="flex justify-between items-center my-4 mx-8">
				<div class="basis-1/2 justify-start">
					<span class="text-sm text-gray-600 dark:text-gray-400">
						Showing <span class="font-semibold">1</span> to{" "}
						<span class="font-semibold">{payoutList.length}</span>{" "}
						of <span class="font-semibold">100</span> results
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
		</div>
	);
}
