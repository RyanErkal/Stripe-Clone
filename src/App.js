import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import Balances from "./pages/Balances";
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";
import CustomerDetail from "./pages/CustomerDetail";
import CustomerPayments from "./pages/CustomerPayments.js";
import CustomerSubscriptions from "./pages/CustomerSubscriptions";
import Settings from "./pages/Settings";
import SettingsAccount from "./pages/SettingsAccount";
import SettingsNotifications from "./pages/SettingsNotifications";
import SettingsPlans from "./pages/SettingsPlans";
import SettingsBilling from "./pages/SettingsBilling";
import DarkModeProvider from "./components/context/DarkModeProvider";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAea4PW7jHCrXqnsecggGNUmp6QdZ3sIMs",
	authDomain: "stripeclone-4d4bf.firebaseapp.com",
	projectId: "stripeclone-4d4bf",
	storageBucket: "stripeclone-4d4bf.appspot.com",
	messagingSenderId: "650021468172",
	appId: "1:650021468172:web:ba6e5e464a96579153d629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersCollectionRef = collection(db, "users");

export async function getUsers() {
	const snapshot = await getDocs(usersCollectionRef); // snapshot is the data returned from firebase, not in the shape we want, map over to alter shape
	const users = snapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return users;
}

console.log(getUsers());

function App() {
	return (
		<BrowserRouter>
			<DarkModeProvider>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="payments" element={<Payments />} />
						<Route path="balances" element={<Balances />} />
						<Route path="customers" element={<Customers />} />
						<Route path="customers/:name" element={<Customer />}>
							<Route index element={<CustomerDetail />} />
							<Route
								path="payments"
								element={<CustomerPayments />}
							/>
							<Route
								path="subscriptions"
								element={<CustomerSubscriptions />}
							/>
						</Route>
						<Route path="settings" element={<Settings />}>
							<Route index element={<SettingsAccount />} />
							<Route
								path="notifications"
								element={<SettingsNotifications />}
							/>
							<Route path="plans" element={<SettingsPlans />} />
							<Route
								path="billing"
								element={<SettingsBilling />}
							/>
						</Route>
					</Route>
				</Routes>
			</DarkModeProvider>
		</BrowserRouter>
	);
}

export default App;
