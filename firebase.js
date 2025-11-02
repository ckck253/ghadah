// firebase.js
// Put this file in the same folder as your HTML files.
// This uses the config you created earlier for project "ghadah-class".

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2kF5QreVx8G7frZiz5RZMEukjwIhmLGc",
  authDomain: "ghadah-class.firebaseapp.com",
  projectId: "ghadah-class",
  storageBucket: "ghadah-class.appspot.com",
  messagingSenderId: "508662795233",
  appId: "1:508662795233:web:67009c0ee392301a7520a0",
  measurementId: "G-D9F3WKQZWJ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
