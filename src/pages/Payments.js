import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "react-modal";
import NewPaymentModalContent from "../components/NewPaymentModalContent";
import { getPayments } from "../components/firebase.js";
import "../App.css";
import scrollLock from "scroll-lock";

export default function Payments() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [sort, setSort] = React.useState(null);
	const [sortDir, setSortDir] = React.useState("ascending");
	const [newPaymentModal, setNewPaymentModal] = React.useState(false);
	const [paymentData, setPaymentData] = React.useState([]);

	useEffect(() => {
		/* console.log("useEffect get payments"); */
		getPayments().then((data) => {
			setPaymentData(data);
		});
	}, []);

	function openNewPaymentModal() {
		setNewPaymentModal(true);
		scrollLock.disablePageScroll();
	}

	function closeNewPaymentModal() {
		setNewPaymentModal(false);
		scrollLock.enablePageScroll();
		/* getCustomers().then((data) => {
			setPaymentData(data);
		}); */
	}

	const filter = searchParams.get("status");

	const sortedPayments = sort
		? sortArrayOfObjects(paymentData, sort, sortDir)
		: paymentData;

	const filteredPayments = filter
		? sortedPayments.filter((payment) => payment.status === filter)
		: paymentData;

	const paymentList = filteredPayments.map((payment) => (
		<tr class="text-left" key={payment.name}>
			<td>
				<input type="checkbox" />
			</td>
			<td class="p-4">#{payment.order}</td>
			<td>{payment.date}</td>
			<td>{payment.name}</td>
			<td>£{payment.amount}</td>
			<td>
				<div
					class={
						payment.status === "succeeded"
							? "text-green-600 font-bold bg-green-200 py-2 px-4 w-min rounded-full text-center"
							: payment.status === "failed"
							? "text-red-600 font-bold bg-red-200 py-2 px-4 w-min rounded-full text-center"
							: "text-orange-600 font-bold bg-orange-200 py-2 px-4 w-min rounded-full text-center"
					}>
					{payment.status}
				</div>
			</td>
			<td>{payment.location}</td>
			<td>{payment.items}</td>
			<td>{payment.type}</td>
		</tr>
	));

	function handleFilterChange(key, value) {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	}

	function changeSort(e) {
		/* console.log("change sort"); */
		setSort(e.target.value);
	}

	function changeSortDir(e) {
		/* console.log("chnage sort dir"); */
		setSortDir(e.target.value);
	}

	React.useEffect(() => {
		/* console.log("useEffect sort"); */
		sortArrayOfObjects(paymentData, sort, sortDir);
	}, [sort, sortDir, paymentData]);

	function sortArrayOfObjects(arr, propertyName, order) {
		const sortedArr = arr.sort((a, b) => {
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

	return (
		<>
			<h1 class="text-3xl font-bold m-4 p-4">Payments</h1>
			<div class="m-4 flex flex-row justify-between">
				<div class="">
					<button
						onClick={() =>
							handleFilterChange("status", "succeeded")
						}
						class="bg-green-200 font-bold px-4 p-2 m-2 border border-green-300 rounded-full hover:bg-green-300 text-green-600 transition-all hover:shadow-xl">
						Succeeded
					</button>
					<button
						onClick={() =>
							handleFilterChange("status", "processing")
						}
						class="bg-orange-200 font-bold px-4 p-2 m-2 border border-orange-300 rounded-full hover:bg-orange-300 text-orange-600 transition-all hover:shadow-xl">
						Processing
					</button>
					<button
						onClick={() => handleFilterChange("status", "failed")}
						class="bg-red-200 font-bold px-4 p-2 m-2 border border-red-300 rounded-full hover:bg-red-300 text-red-600 transition-all hover:shadow-xl">
						Failed
					</button>
					<button
						onClick={() => handleFilterChange("status", null)}
						class="bg-gray-200 font-bold px-4 p-2 m-2 border border-gray-300 rounded-full hover:bg-gray-300 text-gray-600 transition-all hover:shadow-xl">
						Clear
					</button>
					<select
						class="m-2 py-2 px-4 dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
						onChange={changeSort}>
						<option value="sortby">Sort by</option>
						<option value="name">Name</option>
						<option value="amount">Amount</option>
						<option value="items">Items</option>
					</select>
					<select
						class="m-2 py-2 px-4 dark:bg-gray-700 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600"
						onChange={changeSortDir}>
						<option value="ascending">Ascending</option>
						<option value="descending">Descending</option>
					</select>
				</div>
				<input
					type="button"
					value="New Payment"
					onClick={openNewPaymentModal}
					class="px-4 p-2 m-2 dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-purple-600 text-gray-800 dark:text-gray-100 font-bold rounded-lg transition-all"
				/>
			</div>
			<div class="w-1/2 bg-red-100">
				<Modal
					isOpen={newPaymentModal}
					onRequestClose={closeNewPaymentModal}
					className="Modal"
					overlayClassName="Overlay"
					contentLabel="New Modal">
					<NewPaymentModalContent closeModal={closeNewPaymentModal} />
				</Modal>
			</div>
			<table class="table-auto min-w-max text-xs lg:text-base lg:w-full m-6 overflow-auto">
				<thead>
					<tr class="text-left">
						<th>
							<input type="checkbox" />
						</th>
						<th class="pl-4">ORDER</th>
						<th>DATE</th>
						<th>NAME</th>
						<th>AMOUNT</th>
						<th>STATUS</th>
						<th>LOCATION</th>
						<th>ITEMS</th>
						<th>PAYMENT TYPE</th>
					</tr>
				</thead>
				<tbody>{paymentList}</tbody>
			</table>
			<div class="flex justify-between items-center my-4 mx-8">
				<div class="basis-1/2 justify-start">
					<span class="text-sm text-gray-600 dark:text-gray-400">
						Showing <span class="font-semibold">1</span> to{" "}
						<span class="font-semibold">{paymentList.length}</span>{" "}
						of <span class="font-semibold">100</span> results
					</span>
				</div>

				<div class="flex justify-end basis-1/2 mt-2 xs:mt-0">
					<button class="flex items-center justify-center p-2 mx-2 text-sm font-medium bg-gray-600 text-gray-100 hover:text-purple-200 rounded-lg">
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
