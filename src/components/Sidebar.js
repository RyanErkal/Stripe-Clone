import React from "react";
import { NavLink } from "react-router-dom";
import { DarkMode } from "./context/DarkModeProvider";
import { useContext } from "react";

export default function Sidebar() {
	const { darkMode } = useContext(DarkMode);

	const activeStyle = {
		color: "#a78bfa",
		borderLeft: "4px solid #a78bfa",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left",
		transition: "all 0.2s ease-in-out"
	};

	const inactiveStyle = {
		color: darkMode ? "#f3f4f6" : "#111827",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left",
		transition: "all 0.2s ease-in-out"
	};

	return (
		<div class="h-full w-screen hidden xs:flex">
			<div class="p-2 flex flex-row sm:flex-col h-min w-full dark:bg-gray-800 dark:text-gray-100">
				<NavLink
					to="/"
					className="text-sm md:text-base px-2 py-1"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}
					end>
					Home
				</NavLink>
				<NavLink
					to="payments"
					className="text-sm md:text-base px-2 py-1"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}>
					Payments
				</NavLink>
				<NavLink
					to="customers"
					className="text-sm md:text-base px-2 py-1"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}>
					Customers
				</NavLink>
				<NavLink
					to="balances"
					className="text-sm md:text-base px-2 py-1"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}>
					Balances
				</NavLink>
				<NavLink
					to="settings"
					className="text-sm md:text-base px-2 py-1"
					style={({ isActive }) =>
						isActive ? activeStyle : inactiveStyle
					}>
					Settings
				</NavLink>
			</div>
		</div>
	);
}
