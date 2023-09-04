import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

const data = [
	{
		uv: 4000,
		pv: 2400
	},
	{
		uv: 3000,
		pv: 1398
	},
	{
		uv: 2000,
		pv: 9800
	},
	{
		uv: 2780,
		pv: 3908
	},
	{
		uv: 1890,
		pv: 4800
	},
	{
		uv: 2390,
		pv: 3800
	},
	{
		uv: 3490,
		pv: 4300
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
					right: 4,
					left: -8,
					bottom: 20
				}}>
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				{/* <XAxis type="number" />
				<YAxis type="category" /> */}
				<Tooltip />
				{/* <Legend /> */}
				<Bar dataKey="pv" fill="#c084fc" />
				<Bar dataKey="uv" fill="#9ca3af" />
			</BarChart>
		</ResponsiveContainer>
	);
}
