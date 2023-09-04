import React from "react";
import Line from "../components/charts/Line";
import Bar from "../components/charts/Bar";
import Pie from "../components/charts/Pie";
import Radar from "../components/charts/Radar";
import ReBar from "../components/charts/ReBar";
import ReArea from "../components/charts/ReArea";
import ReLine from "../components/charts/ReLine";
import Section from "../components/Section";
import ReSimpleArea from "../components/charts/ReSimpleArea";
import RePie from "../components/charts/RePie";
import "../App.css";

export default function Home() {
	return (
		<div class="min-h-max min-w-full bg-gray-100">
			<h1 class="text-3xl font-bold p-4">Dashboard</h1>
			{/* Teirs Sales */}
			<div class="grid grid-cols-12 gap-4 m-4 bg-gray-100">
				<div class="col-span-12 xl:col-span-4 h-64">
					<Section
						title="Basic"
						subheader="Sales"
						textposition="center"
						amount="£24,780"
						percentage="+27%"
						color="green">
						<ReSimpleArea teir={"basic"} />
					</Section>
				</div>
				<div class="col-span-12 xl:col-span-4 h-64">
					<Section
						title="Advanced"
						subheader="Sales"
						textposition="center"
						amount="£11,340"
						percentage="-17%"
						color="red">
						<ReSimpleArea teir={"advanced"} />
					</Section>
				</div>
				<div class="col-span-12 xl:col-span-4 h-64">
					<Section
						title="Premium"
						subheader="Sales"
						textposition="center"
						amount="£36,920"
						percentage="+67%"
						color="green">
						<ReSimpleArea teir={"premium"} />
					</Section>
				</div>
				{/* Today & This Week */}
				<div class="col-span-12 xl:col-span-6 h-96">
					<Section
						title="Today"
						subheader="Revenue"
						textposition="start"
						amount="£9,360"
						percentage="+9%"
						color="green">
						<ReArea />
					</Section>
				</div>
				<div class="col-span-12 xl:col-span-6 h-96">
					<Section
						title="This Week"
						subheader="Revenue"
						textposition="start"
						amount="£14,360"
						percentage="+21%"
						color="green">
						<ReBar />
					</Section>
				</div>
				{/* Top Products */}
				<div class="col-span-12 xl:col-span-4 h-96">
					<Section
						title="Top Products"
						subheader="Revenue"
						textposition="start">
						<RePie />
					</Section>
				</div>
				{/* Recent Payments */}
				<div class="col-span-12 xl:col-span-8 h-96">
					<Section title="Recent Payments" textposition="start">
						<table class="w-full h-full text-left">
							<thead>
								<tr>
									<th class="py-2">Product</th>
									<th class="py-2">Customer</th>
									<th class="py-2">Amount</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="py-2">Basic</td>
									<td class="py-2">John Doe</td>
									<td class="py-2">£24,780</td>
								</tr>
								<tr>
									<td class="py-2">Advanced</td>
									<td class="py-2">Jane Doe</td>
									<td class="py-2">£11,340</td>
								</tr>
								<tr>
									<td class="py-2">Premium</td>
									<td class="py-2">John Smith</td>
									<td class="py-2">£36,920</td>
								</tr>
								<tr>
									<td class="py-2">Basic</td>
									<td class="py-2">Dohn Joe</td>
									<td class="py-2">£14,870</td>
								</tr>
								<tr>
									<td class="py-2">Advanced</td>
									<td class="py-2">Mohn Soe</td>
									<td class="py-2">£21,540</td>
								</tr>
							</tbody>
						</table>
					</Section>
				</div>

				{/* <h3 class="text-l font-bold">GBP Balance</h3>
					<p>£69,420</p>
					<p class="text-sm text-gray-500">
						Last updated 2 minutes ago
					</p>
					<br />
					<h3 class="text-l font-bold">Payouts</h3>
					<p>£1234</p>
					<p class="text-sm text-gray-500">
						Last updated 2 minutes ago
					</p> */}
			</div>
			{/* This Week */}
			<div class="grid grid-cols-12 h-1/2 m-4 bg-gray-100 rounded-2xl shadow-xl">
				<h2 class="col-span-12 text-2xl font-bold mt-4 p-4">
					This Week
				</h2>
				<div class="col-span-12 xl:col-span-4 h-96 m-4 p-4 bg-gray-100 rounded-xl shadow-xl">
					<h3 class="text-l font-bold">Products Sold</h3>
					<div class="h-full">
						<ReBar />
					</div>
				</div>
				<div class="col-span-12 xl:col-span-4 h-96 m-4 p-4 bg-gray-100 rounded-xl shadow-xl">
					<h3 class="text-l font-bold absolute">Payments</h3>
					<Pie />
				</div>
				<div class="col-span-12 xl:col-span-4 h-96 m-4 p-4 bg-gray-100 rounded-xl shadow-xl">
					<h3 class="text-l font-bold absolute">Attributes</h3>
					<Radar />
				</div>
				<div class="col-span-12 xl:col-span-4 h-96 m-4 p-4 bg-gray-100 rounded-xl shadow-xl">
					<ReBar />
				</div>
				<div class="col-span-12 xl:col-span-4 h-96 m-4 p-4 bg-gray-100 rounded-xl shadow-xl">
					<ReArea />
				</div>
			</div>
		</div>
	);
}
