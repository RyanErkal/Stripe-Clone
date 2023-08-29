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
		color: "#f1f5f9",
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
					class="m-2 p-2 font-bold w-full text-center"
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
					}
					class="m-2 font-bold">
					Payments
				</NavLink>
				<NavLink
					to="balances"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}
					class="m-2 font-bold">
					Balances
				</NavLink>
				<NavLink
					to="customers"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}
					class="m-2 font-bold">
					Customers
				</NavLink>
				<NavLink
					to="settings"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}
					class="m-2 font-bold">
					Settings
				</NavLink>
			</div>
		</div>
	);
}
