import React from "react";

export default function Notifications({ toggle }) {
	return (
		<div class="absolute h-screen w-96 top-0 -right-96 bg-red-100 transition-all -translate-x-96 duration-300">
			<h1>Notifications</h1>
			<button onClick={toggle}>Close</button>
		</div>
	);
}
