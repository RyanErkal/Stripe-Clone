import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

const data = [
	{
		"This Week": 4000,
		"Last Week": 2400
	},
	{
		"This Week": 3000,
		"Last Week": 1398
	},
	{
		"This Week": 2000,
		"Last Week": 9800
	},
	{
		"This Week": 2780,
		"Last Week": 3908
	},
	{
		"This Week": 1890,
		"Last Week": 4800
	},
	{
		"This Week": 2390,
		"Last Week": 3800
	},
	{
		"This Week": 3490,
		"Last Week": 4300
	}
];

export default function ReBar() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				data={data}
				layout="horizontal"
				margin={{
					top: 20,
					right: 0,
					left: -8,
					bottom: 0
				}}>
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				{/* <XAxis type="number" />
				<YAxis type="category" /> */}
				<Tooltip />
				{/* <Legend /> */}
				<Bar dataKey="This Week" fill="#c084fc" />
				<Bar dataKey="Last Week" fill="#9ca3af" />
			</BarChart>
		</ResponsiveContainer>
	);
}
