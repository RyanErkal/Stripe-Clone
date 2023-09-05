import React from "react";
import { useState, createContext } from "react";

const DarkMode = createContext();

export default function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(false);

	function toggleDarkMode() {
		setDarkMode(!darkMode);
		document.body.classList.toggle("dark");
		console.log("Dark Mode");
	}

	return (
		<DarkMode.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkMode.Provider>
	);
}

export { DarkMode };
