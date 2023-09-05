import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "./context/DarkModeProvider";

export default function SettingsNav() {
	const { darkMode } = useContext(DarkMode);

	const activeStyle = {
		color: "#a78bfa",
		margin: "2px",
		padding: "6px 4px 6px 12px",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left",
		backgroundColor: "rgba(147, 51, 234, 0.1)",
		borderRadius: "10px",
		fill: "currentColor",
		display: "flex"
	};

	const inactiveStyle = {
		color: darkMode ? "#f3f4f6" : "#111827",
		margin: "2px",
		padding: "6px 4px 6px 12px",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left",
		fill: "currentColor",
		display: "flex"
	};

	return (
		<div class="p-2 flex flex-row lg:flex-col h-min lg:h-full dark:bg-gray-800 dark:text-gray-100 border-r border-gray-400">
			<NavLink
				to=""
				style={({ isActive }) =>
					isActive ? activeStyle : inactiveStyle
				}
				end>
				<svg
					style={{ marginRight: "8px" }}
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24">
					<path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
				</svg>
				Account
			</NavLink>
			<NavLink
				to="notifications"
				style={({ isActive }) =>
					isActive ? activeStyle : inactiveStyle
				}>
				<svg
					style={{ marginRight: "8px" }}
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24">
					<path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
				</svg>
				Notifications
			</NavLink>
			<NavLink
				to="billing"
				style={({ isActive }) =>
					isActive ? activeStyle : inactiveStyle
				}>
				<svg
					style={{ marginRight: "8px" }}
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24">
					<path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
				</svg>
				Billing
			</NavLink>
		</div>
	);
}
