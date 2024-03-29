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
import SignUp from "./pages/SignUp";

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
						<Route path="signup" element={<SignUp />} />
					</Route>
				</Routes>
			</DarkModeProvider>
		</BrowserRouter>
	);
}

export default App;
