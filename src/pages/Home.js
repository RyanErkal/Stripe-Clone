import React from "react";
import Line from "../components/charts/Line";
import Pie from "../components/charts/Pie";
import World from "../components/charts/World";

export default function Home() {
	return (
		<div class="h-full">
			<h1 class="text-3xl font-bold p-4">Dashboard</h1>
			{/* Today */}
			<div class="grid grid-cols-12 h-2/6 ml-4 mr-4 bg-gray-200 rounded-2xl">
				<h2 class="col-span-12 text-xl font-bold mt-4 p-4">Today</h2>
				<div class="col-span-8 m-4 p-4 bg-gray-300 rounded-xl ">
					<Line />
				</div>
				<div class="col-span-4 m-4 p-4 bg-gray-300 rounded-2xl">
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
			<div class="grid grid-cols-12 h-2/6 m-4 bg-gray-200 rounded-2xl">
				<h2 class="col-span-12 text-xl font-bold mt-4 p-4">
					This Week
				</h2>
				<div class="col-span-4 m-4 p-4 bg-gray-300 rounded-xl ">
					<Pie />
				</div>
				<div class="col-span-4 m-4 p-4 bg-gray-300 rounded-xl ">
					<Pie />
				</div>
				<div class="col-span-4 m-4 p-4 bg-gray-300 rounded-xl ">
					<Line />
				</div>
			</div>
		</div>
	);
}
