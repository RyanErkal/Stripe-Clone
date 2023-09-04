import React from "react";
import {
	AreaChart,
	Area,
	Tooltip,
	ResponsiveContainer,
	XAxis,
	YAxis
} from "recharts";

const data = [
	{
		time: "3:00",
		Today: 4356,
		Yesterday: 5467
	},
	{
		time: "6:00",
		Today: 4356,
		Yesterday: 5467
	},
	{
		time: "9:00",
		Today: 2345,
		Yesterday: 1765
	},
	{
		time: "12:00",
		Today: 4356,
		Yesterday: 5467
	},
	{
		time: "15:00",
		Today: 4563,
		Yesterday: 4262
	},
	{
		time: "18:00",
		Today: 4356,
		Yesterday: 5467
	},
	{
		time: "21:00",
		Today: 7643,
		Yesterday: 6543
	}
];

export default function ReArea() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				width={500}
				height={400}
				data={data}
				margin={{
					top: 10,
					right: 0,
					left: 0,
					bottom: 0
				}}>
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				{/* <XAxis dataKey="time" tickCount={4} />
				<YAxis tickCount={4} /> */}
				<Tooltip />
				<Area
					type="linear"
					dataKey="Today"
					stroke="#7c3aed"
					strokeWidth={3}
					fill="#7c3aed"
					fillOpacity={0.2}
				/>
				<Area
					type="linear"
					dataKey="Yesterday"
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
