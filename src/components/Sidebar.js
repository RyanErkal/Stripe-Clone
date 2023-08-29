import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
	const activeStyle = {
		color: "#a78bfa",
		borderLeft: "4px solid #a78bfa",
		margin: "2px",
		padding: "4px 4px 4px 12px",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left"
	};

	const inactiveStyle = {
		color: "#111827",
		margin: "2px",
		padding: "4px 4px 4px 16px",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left"
	};

	return (
		<div class="h-full">
			<div class="p-2 flex flex-col">
				<NavLink
					to="/"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}
					end>
					Home
				</NavLink>
				<NavLink
					to="payments"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}>
					Payments
				</NavLink>
				<NavLink
					to="balances"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}>
					Balances
				</NavLink>
				<NavLink
					to="customers"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}>
					Customers
				</NavLink>
				<NavLink
					to="settings"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}>
					Settings
				</NavLink>
			</div>
		</div>
	);
}
