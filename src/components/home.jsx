import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from  "./ChatMessage";
import { auth, app } from "../firebase/firebase";

const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);
  const dummy = useRef();
  const messagesRef = collection(firestore, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(q, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-full w-3/4 justify-center mx-auto">
      <br />
      <br />
      <br />
      <main className="flex-1 overflow-y-auto">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
      <form className="flex items-center" onSubmit={sendMessage}>
        <input
          className="flex-1 bg-gray-400 text-black px-4 py-2 rounded-l-lg focus:outline-none"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type.."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          type="submit"
          disabled={!formValue}
        >
          🕊️
        </button>
      </form>
    </div>
  );
}

export default App;
