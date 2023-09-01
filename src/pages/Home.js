import React from "react";
import Line from "../components/charts/Line";
import Bar from "../components/charts/Bar";
import Pie from "../components/charts/Pie";
import Radar from "../components/charts/Radar";

export default function Home() {
	return (
		<div class="h-content bg-gray-100">
			<h1 class="text-3xl font-bold p-4">Dashboard</h1>
			{/* Today */}
			<div class="grid grid-cols-12 h-1/2 m-4 bg-gray-100 rounded-2xl shadow-xl">
				<h2 class="col-span-12 text-2xl font-bold mt-4 p-4">Today</h2>
				<div class="col-span-12 xl:col-span-9 h-96 m-4 p-4 bg-gray-100 rounded-2xl shadow-xl">
					<Line />
				</div>
				<div class="col-span-12 xl:col-span-3 m-4 p-4 bg-gray-100 rounded-2xl shadow-xl">
					<h3 class="text-l font-bold">GBP Balance</h3>
					<p>£69,420</p>
					<p class="text-sm text-gray-500">
						Last updated 2 minutes ago
					</p>
					<br />
					<h3 class="text-l font-bold">Payouts</h3>
					<p>£1234</p>
					<p class="text-sm text-gray-500">
						Last updated 2 minutes ago
					</p>
				</div>
			</div>
			{/* This Week */}
			<div class="grid grid-cols-12 h-1/2 m-4 bg-gray-100 rounded-2xl shadow-xl">
				<h2 class="col-span-12 text-2xl font-bold mt-4 p-4">
					This Week
				</h2>
				<div class="col-span-12 xl:col-span-4 h-96 m-4 p-4 bg-gray-100 rounded-xl shadow-xl">
					<h3 class="text-l font-bold absolute">Products Sold</h3>
					<Bar />
				</div>
				<div class="col-span-12 xl:col-span-4 h-96 m-4 p-4 bg-gray-100 rounded-xl shadow-xl">
					<h3 class="text-l font-bold absolute">Payments</h3>
					<Pie />
				</div>
				<div class="col-span-12 xl:col-span-4 h-96 m-4 p-4 bg-gray-100 rounded-xl shadow-xl">
					<h3 class="text-l font-bold absolute">Attributes</h3>
					<Radar />
				</div>
			</div>
		</div>
	);
}
