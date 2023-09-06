import { initializeApp } from "firebase/app";
/* import {
	getFirestore,
	collection
} from "firebase/firestore/lite"; */
import { getAuth } from "firebase/auth";

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
/* const db = getFirestore(app); */

export const auth = getAuth(app);
export default app;

/* const usersCollectionRef = collection(db, "users"); */

/* export async function getUsers() {
	const snapshot = await getDocs(usersCollectionRef);
	const users = snapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return users;
}

export async function getUser() {
	const q = query(usersCollectionRef, where("username", "==", "tester"));
	const snapshot = await getDocs(q);
	const user = snapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return user;
} */
