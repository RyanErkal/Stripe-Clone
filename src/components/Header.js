import React from "react";

export default function Header() {
	return (
		<div class="bg-purple-600">
			<div class="flex justify-between items-center px-4 py-2">
				<div class="flex items-center">
					<h1 class="text-white text-2xl font-bold">Stripe</h1>
					<div class="ml-4">
						<button class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400">
							New
						</button>
					</div>
				</div>
				<div class="flex items-center">
					<div class="mr-4 flex align-center">
						<label class="relative inline-flex items-center cursor-pointer">
							<input
								type="checkbox"
								value=""
								class="sr-only peer"
							/>
							<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-400"></div>
						</label>
					</div>
					<div class="mr-4">
						<button class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400">
							Support
						</button>
					</div>
					<div>
						<button class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400">
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
