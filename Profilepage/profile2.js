import  app from '/config/newconfig.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const auth = getAuth();

let signOutBtn = document.getElementById('signOut')

if (signOutBtn != null) {
  signOutBtn.addEventListener("click", (e) => {
      signOut(auth).then(() => {
          // Sign-out successful.
          alert("Successfully Signed Out!")
      }).catch((error) => {
          // An error happened.
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)

      });
  })
}