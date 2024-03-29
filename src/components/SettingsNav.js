import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "./context/DarkModeProvider";

export default function SettingsNav() {
	const { darkMode } = useContext(DarkMode);

	const activeStyle = {
		color: "#a78bfa",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "rgba(147, 51, 234, 0.1)",
		borderRadius: "10px",
		fill: "currentColor",
		display: "flex",
		transition: "all 0.2s ease-in-out",
		padding: "0.5rem"
	};

	const inactiveStyle = {
		color: darkMode ? "#f3f4f6" : "#111827",
		fontWeight: "bold",
		textAlign: "left",
		fill: "currentColor",
		display: "flex",
		transition: "all 0.2s ease-in-out",
		padding: "0.5rem"
	};

	return (
		<div class="pt-2 flex flex-row flex-wrap xl:flex-col h-min xl:h-full dark:bg-gray-800 dark:text-gray-100 border-none xl:border xl:border-r xl:border-gray-400">
			<NavLink
				to=""
				class="px-2 py-1 xl:px-4 xl:py-2"
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
				class="px-2 py-1 xl:px-4 xl:py-2"
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
				to="plans"
				class="px-2 py-1 xl:px-4 xl:py-2"
				style={({ isActive }) =>
					isActive ? activeStyle : inactiveStyle
				}>
				<svg
					style={{ marginRight: "8px" }}
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24">
					<path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
				</svg>
				Plans
			</NavLink>
			<NavLink
				to="billing"
				class="px-2 py-1 xl:px-4 xl:py-2"
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
