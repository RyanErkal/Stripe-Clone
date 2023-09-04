import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Tooltip,
	Label
} from "recharts";

const data = [
	{ name: "Product A", value: 500 },
	{ name: "Product B", value: 400 },
	{ name: "Product C", value: 300 }
];
const COLORS = ["#9333ea", "#c084fc", "#e9d5ff"];

export default function RePie() {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart>
				<Pie
					data={data}
					innerRadius={70}
					outerRadius={140}
					paddingAngle={-5}
					dataKey="value">
					<Cell key={`cell-${1}`} fill={COLORS[0]} />
					<Cell key={`cell-${2}`} fill={COLORS[1]} />
					<Cell key={`cell-${3}`} fill={COLORS[2]} />
				</Pie>
				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	);
}
