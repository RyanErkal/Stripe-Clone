import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = {
	basic: [
		{
			"This Month": 7080,
			"Last Month": 5090
		},
		{
			"This Month": 6000,
			"Last Month": 3000
		},
		{
			"This Month": 6700,
			"Last Month": 4000
		},
		{
			"This Month": 5000,
			"Last Month": 6000
		}
	],
	advanced: [
		{
			"This Month": 2300,
			"Last Month": 3660
		},
		{
			"This Month": 3040,
			"Last Month": 3000
		},
		{
			"This Month": 4000,
			"Last Month": 3500
		},
		{
			"This Month": 2000,
			"Last Month": 3500
		}
	],
	premium: [
		{
			"This Month": 6920,
			"Last Month": 2180
		},
		{
			"This Month": 12000,
			"Last Month": 3000
		},
		{
			"This Month": 8000,
			"Last Month": 4000
		},
		{
			"This Month": 10000,
			"Last Month": 3000
		}
	]
};

export default function ReSimpleArea({ teir }) {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				width={500}
				height={400}
				data={data[teir]}
				margin={{
					top: 10,
					right: 0,
					left: 0,
					bottom: 0
				}}>
				<Tooltip />
				<Area
					type="linear"
					dataKey="This Month"
					stroke="#7c3aed"
					strokeWidth={3}
					fill="#7c3aed"
					fillOpacity={0.2}
				/>
				<Area
					type="linear"
					dataKey="Last Month"
					stroke="#4b5563"
					strokeWidth={3}
					strokeOpacity={0.2}
					fill="#4b5563"
					fillOpacity={0.1}
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
}
