import React from "react";
import { useState, useEffect } from "react";
import { DarkMode } from "./context/DarkModeProvider";
import Notifications from "./Notifications";
import Modal from "react-modal";
import NewModalContent from "./NewModalContent";
import SupportModalContent from "./SupportModalContent";
import LoginModalContent from "./LoginModalContent";
import scrollLock from "scroll-lock";
import "../App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { getUser } from "./firebase";

Modal.setAppElement(document.getElementById("root"));

export default function Header() {
	const { toggleDarkMode } = React.useContext(DarkMode);
	const [showNotifications, setShowNotifications] = React.useState(false);
	const [newModal, setNewModal] = React.useState(false);
	const [supportModal, setSupportModal] = React.useState(false);
	const [loginModal, setLoginModal] = React.useState(false);
	const [user, setUser] = useState(null);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const uid = user.uid;
				setUser(uid);
				console.log("Header uid:", uid);
			} else {
				console.log("Header: user is logged out");
			}
		});
	}, []);

	useEffect(() => {
		if (user) {
			getUser(user).then((data) => {
				setUserData(data);
			});
		}
	}, [user]);

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("Header: Signed out successfully");
				setUser(null);
			})
			.catch((error) => {
				// An error happened.
				console.log("Header: Sign out error");
				console.log(error);
			});
	};

	function openNewModal() {
		setNewModal(true);
		scrollLock.disablePageScroll();
		console.log("open");
	}

	function openSupportModal() {
		setSupportModal(true);
		scrollLock.disablePageScroll();
		console.log("open");
	}

	function openLoginModal() {
		setLoginModal(true);
		scrollLock.disablePageScroll();
		console.log("open");
	}

	function closeModal() {
		setNewModal(false);
		setSupportModal(false);
		setLoginModal(false);
		scrollLock.enablePageScroll();
		console.log("close");
	}

	return (
		<div class="w-full bg-red-300 overflow-auto">
			{showNotifications && (
				<Notifications
					toggle={() => setShowNotifications(!showNotifications)}
				/>
			)}
			<div class="bg-purple-600 w-full">
				<Modal
					isOpen={newModal}
					onRequestClose={closeModal}
					className="Modal"
					overlayClassName="Overlay"
					contentLabel="New Modal">
					<NewModalContent closeModal={closeModal} />
				</Modal>
				<Modal
					isOpen={supportModal}
					onRequestClose={closeModal}
					className="Modal"
					overlayClassName="Overlay"
					contentLabel="Support Modal">
					<SupportModalContent closeModal={closeModal} />
				</Modal>
				<Modal
					isOpen={loginModal}
					onRequestClose={closeModal}
					className="Modal"
					overlayClassName="Overlay"
					contentLabel="Login Modal">
					<LoginModalContent closeModal={closeModal} />
				</Modal>

				<div class="flex justify-between items-center px-4 py-2">
					<div class="flex items-center">
						<h1 class="text-white text-xl lg:text-2xl font-bold">
							Stripe
						</h1>
						<div class="ml-2 xl:ml-4">
							<button
								class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400"
								onClick={openNewModal}>
								New
							</button>
						</div>
						<h1 class="text-white text-xs font-bold ml-4">
							Welcome back {userData ? userData.firstName : "..."}
						</h1>
					</div>
					<div class="flex items-center">
						<div class="mr-2 xl:mr-4 flex align-center">
							<label class="relative inline-flex items-center cursor-pointer">
								<input
									type="checkbox"
									value=""
									class="sr-only peer"
									onClick={() => {
										toggleDarkMode();
									}}
								/>
								<div class="w-11 h-6 focus:outline-none focus:ring-4 focus:ring-purple-800 rounded-full bg-gray-700 peer-checked:after:translate-x-full checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-purple-400"></div>
							</label>
						</div>
						<div class="mr-2 xl:mr-4">
							<button
								class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400"
								onClick={openSupportModal}>
								Support
							</button>
						</div>
						<div>
							<button
								class="text-white text-sm font-semibold bg-purple-500 px-4 py-2 rounded hover:bg-purple-400"
								onClick={user ? handleLogout : openLoginModal}>
								{user ? "Logout" : "Login"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
