
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAJygPAczMSo_Buj87xS4P-UBly8yqWrWI",
  authDomain: "chat-app-91e2e.firebaseapp.com",
  projectId: "chat-app-91e2e",
  storageBucket: "chat-app-91e2e.firebasestorage.app",
  messagingSenderId: "400835489609",
  appId: "1:400835489609:web:e59dfe4c5eebfb47f4f498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      name: "",
      email,
      avatar: "",
      bio: "Hey there, I am using Chat App",
      lastSeen: Date.now()
    })

    await setDoc(doc(db, "chats", user.uid), {
      chatsData: []
    })

  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)

  } catch (error) {
   console.error(error);
   toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

export {auth, db, signup, login, logout};