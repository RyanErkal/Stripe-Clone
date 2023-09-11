import React from "react";
import { useContext, useState } from "react";
import {
	useParams,
	Link,
	NavLink,
	Outlet,
	useLocation
} from "react-router-dom";
import { DarkMode } from "../components/context/DarkModeProvider";
import Modal from "react-modal";
import scrollLock from "scroll-lock";
import "../App.css";
import NewCustomerPaymentModalContent from "../components/NewCustomerPaymentModalContent";
import NewCustomerSubscriptionModalContent from "../components/NewCustomerSubscriptionModalContent";

export default function Customer() {
	const customer = useLocation().state;
	const { darkMode } = useContext(DarkMode);
	const [newCustomerPaymentModal, setNewCustomerPaymentModal] =
		useState(false);
	const [newCustomerSubscriptionModal, setNewCustomerSubscriptionModal] =
		useState(false);

	const activeStyle = {
		color: "#a78bfa",
		borderBottom: "4px solid #a78bfa",
		margin: "4px",
		padding: "4px",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left"
	};

	const inactiveStyle = {
		color: darkMode ? "#f3f4f6" : "#111827",
		margin: "4px",
		padding: "4px",
		fontWeight: "bold",
		width: "100%",
		textAlign: "left"
	};

	function openNewCustomerPaymentModal() {
		setNewCustomerPaymentModal(true);
		scrollLock.disablePageScroll();
	}

	function openNewCustomerSubscriptionModal() {
		setNewCustomerSubscriptionModal(true);
		scrollLock.disablePageScroll();
	}

	function closeModal() {
		setNewCustomerPaymentModal(false);
		setNewCustomerSubscriptionModal(false);
		scrollLock.enablePageScroll();
	}

	const params = useParams();
	return (
		<>
			<h1 class="text-3xl font-bold m-4 p-4">{params.name}</h1>
			<div class="m-4">
				<Link
					to="/customers"
					class="bg-purple-200 font-bold px-4 p-2 m-2 border border-purple-300 rounded-full hover:bg-purple-300 dark:text-purple-600 transition-all">
					Back to Customers
				</Link>
			</div>
			<div class="m-6 flex flex-col lg:flex-row justify-between">
				<div>
					<NavLink
						to=""
						style={({ isActive }) =>
							isActive ? activeStyle : inactiveStyle
						}
						state={customer}
						end>
						Details
					</NavLink>
					<NavLink
						to="payments"
						style={({ isActive }) =>
							isActive ? activeStyle : inactiveStyle
						}
						state={customer}>
						Payments
					</NavLink>
					<NavLink
						to="subscriptions"
						style={({ isActive }) =>
							isActive ? activeStyle : inactiveStyle
						}
						state={customer}>
						Subscriptions
					</NavLink>
				</div>
				<div class="mt-4 lg:mt-0 flex lg:flex-row">
					<input
						type="button"
						value="New Customer Payment"
						onClick={openNewCustomerPaymentModal}
						class="mr-2 py-2 px-4 dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-purple-600 text-gray-800 dark:text-gray-100 font-bold rounded-lg transition-all"
					/>
					<input
						type="button"
						value="New Subscription"
						onClick={openNewCustomerSubscriptionModal}
						class="mx-2 py-2 px-4 dark:bg-gray-800 bg-gray-100 border border-gray-400 hover:border-purple-600 text-gray-800 dark:text-gray-100 font-bold rounded-lg transition-all"
					/>
				</div>
				<Modal
					isOpen={newCustomerPaymentModal}
					onRequestClose={closeModal}
					className="Modal"
					overlayClassName="Overlay"
					contentLabel="New Customer Payment Modal">
					<NewCustomerPaymentModalContent
						closeModal={closeModal}
						customer={customer}
					/>
				</Modal>
				<Modal
					isOpen={newCustomerSubscriptionModal}
					onRequestClose={closeModal}
					className="Modal"
					overlayClassName="Overlay"
					contentLabel="New Customer Subscription Modal">
					<NewCustomerSubscriptionModalContent
						closeModal={closeModal}
						customer={customer}
					/>
				</Modal>
			</div>
			<Outlet />
		</>
	);
}
