import React from "react";

export default function SupportModalContent({ closeModal }) {
	return (
		<div class="flex items-center justify-center p-16 font-bold text-3xl bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
			You can do it!
			<button
				onClick={closeModal}
				class="absolute top-0 right-0 p-4 cursor-pointer hover:text-red-600">
				<svg
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24">
					<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
				</svg>
			</button>
		</div>
	);
}
