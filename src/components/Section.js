import React from "react";

export default function Section({
	title,
	subheader,
	textposition,
	amount,
	percentage,
	color,
	children
}) {
	return (
		<div
			class={`flex flex-col justify-center items-${textposition} h-full my-4 mx-0 p-4 rounded-2xl shadow-lg dark:bg-gray-800`}>
			<h3 class="text-xl font-bold">{title}</h3>
			<p class="text-sm font-bold text-gray-500">{subheader}</p>
			<p
				class={`text-3xl font-bold flex justify-${textposition} items-center`}>
				{amount}
				{percentage && (
					<span
						class={`text-sm ${
							color === "green"
								? "bg-green-200 text-green-600"
								: "bg-red-200 text-red-600"
						} p-2 m-2 rounded-full`}>
						{percentage}
					</span>
				)}
			</p>
			{children}
		</div>
	);
}
