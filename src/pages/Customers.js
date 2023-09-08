import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCustomers } from "../components/firebase.js";
import Modal from "react-modal";
import scrollLock from "scroll-lock";
import NewCustomerModalContent from "../components/NewCustomerModalContent";
import "../App.css";

export default function Customers() {
	const [sort, setSort] = React.useState(null);
	const [sortDir, setSortDir] = React.useState("ascending");
	const [customerData, setCustomerData] = React.useState([]);
	const [newCustomerModal, setNewCustomerModal] = React.useState(false);

	function openNewCustomerModal() {
		setNewCustomerModal(true);
		scrollLock.disablePageScroll();
	}

	function closeNewCustomerModal() {
		setNewCustomerModal(false);
		scrollLock.enablePageScroll();
		getCustomers().then((data) => {
			setCustomerData(data);
		});
	}

	const sortedCustomers = sort
		? sortArrayOfObjects(customerData, sort, sortDir)
		: customerData;

	useEffect(() => {
		getCustomers().then((data) => {
			setCustomerData(data);
		});
	}, []);

	function sortArrayOfObjects(arr, propertyName, order) {
		const sortedArr = arr.sort((a, b) => {
			if (propertyName === "total") {
				if (getTotalSpend(a) < getTotalSpend(b)) {
					return -1;
				}
				if (getTotalSpend(a) > getTotalSpend(b)) {
					return 1;
				}
				return 0;
			}
			if (a[propertyName] < b[propertyName]) {
				return -1;
			}
			if (a[propertyName] > b[propertyName]) {
				return 1;
			}
			return 0;
		});
		if (order === "descending") {
			return sortedArr.reverse();
		}
		return sortedArr;
	}

	function getTotalSpend(customer) {
		return customer.orders.reduce(
			(accumulator, currentValue) => accumulator + currentValue.amount,
			0
		);
	}

	function changeSort(e) {
		setSort(e.target.value);
	}

	function changeSortDir(e) {
		setSortDir(e.target.value);
	}

	const customerList = sortedCustomers.map((customer) => (
		<tr
			class="text-left hover:text-purple-600 transition-all"
			key={customer.id}>
			<th>
				<input type="checkbox" />
			</th>
			<td class="p-4">
				<Link to={`/customers/${customer.name}`} state={customer}>
					{customer.name}
				</Link>
			</td>
			<td>{customer.email}</td>
			<td>{customer.orders.length}</td>
			<td>
				£
				{customer.orders.reduce(
					(accumulator, currentValue) =>
						accumulator + currentValue.amount,
					0
				)}
			</td>
		</tr>
	));

	return (
		<>
			<h1 class="text-3xl font-bold m-4 p-4">Customers</h1>
			<div class="flex justify-between m-4">
				<div class="">
					<select
						class="mx-2 py-2 px-4 dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
						onChange={changeSort}>
						<option value="sortby">Sort by</option>
						<option value="name">Name</option>
						<option value="orders">Payments</option>
						<option value="total">Total Spend</option>
					</select>
					<select
						class="mx-2 py-2 px-4 dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
						onChange={changeSortDir}>
						<option value="ascending">Ascending</option>
						<option value="descending">Descending</option>
					</select>
				</div>
				<input
					type="button"
					value="New Customer"
					onClick={openNewCustomerModal}
					class="mx-2 py-2 px-4 dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-purple-600 text-gray-800 dark:text-gray-100 font-bold rounded-lg transition-all"
				/>
			</div>
			<Modal
				isOpen={newCustomerModal}
				onRequestClose={closeNewCustomerModal}
				className="Modal"
				overlayClassName="Overlay"
				contentLabel="New Modal">
				<NewCustomerModalContent closeModal={closeNewCustomerModal} />
			</Modal>
			<table class="table-auto min-w-max text-xs lg:text-base lg:w-full m-6">
				<thead>
					<tr class="text-left">
						<th>
							<input type="checkbox" />
						</th>
						<th class="pl-4">NAME</th>
						<th>EMAIL</th>
						<th>PAYMENTS</th>
						<th>TOTAL SPEND</th>
					</tr>
				</thead>
				<tbody>{customerList}</tbody>
			</table>
			<div class="flex justify-between items-center my-4 mx-8">
				<div class="basis-1/2 justify-start">
					<span class="text-sm text-gray-600 dark:text-gray-400">
						Showing <span class="font-semibold">1</span> to{" "}
						<span class="font-semibold">5</span> of{" "}
						<span class="font-semibold">100</span> results
					</span>
				</div>

				<div class="flex justify-end basis-1/2 mt-2 xs:mt-0">
					<button class="flex items-center justify-center p-2 mx-2 text-sm font-medium bg-gray-600 text-gray-100 hover:text-purple-300 rounded-lg">
						<svg
							class="w-3.5 h-3.5 mr-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 5H1m0 0 4 4M1 5l4-4"
							/>
						</svg>
						Prev
					</button>
					<button class="flex items-center justify-center p-2 mx-2 text-sm font-medium bg-gray-600 text-gray-100 hover:text-purple-300 rounded-lg">
						Next
						<svg
							class="w-3.5 h-3.5 ml-2"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							/>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
}

// shared UI navbar
// csutomer profile
