import React from "react";
import {
	useParams,
	Link,
	NavLink,
	Outlet,
	useLocation
} from "react-router-dom";

export default function Customer() {
	const customer = useLocation().state;

	const activeStyle = {
		color: "#a78bfa",
		borderBottom: "4px solid #a78bfa",
		margin: "4px",
		padding: "4px",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left"
	};

	const inactiveStyle = {
		color: "#111827",
		margin: "4px",
		padding: "4px",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left"
	};

	const params = useParams();
	return (
		<>
			<h1 class="text-3xl font-bold m-4 p-4">{params.name}</h1>
			<div class="m-4">
				<Link
					to="/customers"
					class="bg-purple-200 px-4 p-2 m-2 border border-purple-300 rounded-full hover:bg-purple-300 transition-all">
					Back to Customers
				</Link>
			</div>
			<div class="m-6">
				<NavLink
					to=""
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}
					state={customer}
					end>
					Details
				</NavLink>
				<NavLink
					to="payments"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}
					state={customer}>
					Payments
				</NavLink>
				<NavLink
					to="subscriptions"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}
					state={customer}>
					Subscriptions
				</NavLink>
			</div>
			<Outlet />
		</>
	);
}
