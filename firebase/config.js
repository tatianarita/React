
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhwFH7eDOUljA80io-L4Y7DgAQ-i-EuHI",
  authDomain: "viver-c632b.firebaseapp.com",
  projectId: "viver-c632b",
  storageBucket: "viver-c632b.appspot.com",
  messagingSenderId: "589657547315",
  appId: "1:589657547315:web:d5ea08e5f4c17662263946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoneApp = () => {
    return app
}