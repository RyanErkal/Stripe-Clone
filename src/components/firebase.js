import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	getDoc,
	addDoc,
	setDoc,
	collection,
	getDocs
} from "firebase/firestore/lite";
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
const db = getFirestore(app);

export const auth = getAuth(app);
export default app;

export async function createUser(
	uid,
	firstName,
	lastName,
	email,
	phoneNumber,
	bussinessName,
	bussinessID,
	vatNumber
) {
	await setDoc(doc(db, "users", uid), {
		uid,
		firstName,
		lastName,
		email,
		phoneNumber,
		bussinessName,
		bussinessID,
		vatNumber
	});
}

export async function getUser(uid) {
	const docRef = doc(db, "users", uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return docSnap.data();
	} else {
		// docSnap.data() will be undefined
		console.log("No such document!");
	}
}

export async function getCustomers() {
	const querySnapshot = await getDocs(collection(db, "customers"));
	const customers = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id
	}));
	return customers;
}

export async function newCustomer(name, email, location, subscription, orders) {
	const docRef = await addDoc(collection(db, "customers"), {
		name,
		email,
		location,
		subscription,
		orders
	});
	console.log("Document written with ID: ", docRef.id);
}
