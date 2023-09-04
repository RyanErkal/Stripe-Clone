import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine,
	ResponsiveContainer
} from "recharts";

const data = [
	{
		Sales: 4000,
		Refunds: -400
	},
	{
		Sales: 3000,
		Refunds: -900
	},
	{
		Sales: 2000,
		Refunds: -200
	},
	{
		Sales: 3500,
		Refunds: -700
	},
	{
		Sales: 1900,
		Refunds: -300
	},
	{
		Sales: 2000,
		Refunds: -400
	},
	{
		Sales: 3450,
		Refunds: -900
	}
];

export default function ReNegBar() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5
				}}
				stackOffset={"sign"}>
				{/* <XAxis />
				<YAxis /> */}
				<Tooltip />
				<ReferenceLine y={0} />
				<Bar dataKey="Sales" fill="#c084fc" stackId="1" />
				<Bar dataKey="Refunds" fill="#9ca3af" stackId="1" />
			</BarChart>
		</ResponsiveContainer>
	);
}
