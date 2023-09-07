import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	doc,
	getDoc,
	setDoc,
	query,
	where
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

const usersCollectionRef = collection(db, "users");

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
		console.log("Document data:");
		console.log(docSnap.data());
		const userData = { ...docSnap.data(), uid: docSnap.uid };
		return userData;
	} else {
		// docSnap.data() will be undefined in this case
		console.log("No such document!");
	}
}
