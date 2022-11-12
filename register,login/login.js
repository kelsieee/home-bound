import  app from '/config/newconfig.js';
import { getDatabase, set, ref, update, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";

const database = getDatabase(app);
const auth = getAuth();
const storage = getStorage()
const storageref = sRef(storage);
let loginBtn = document.getElementById('loginBtn')

if (loginBtn != null) {
    loginBtn.addEventListener("click", (e) => {
        const inputEmail = document.getElementById('inputEmail').value
        const inputPassword = document.getElementById('inputPassword').value
        console.log(inputEmail);
        if (inputEmail != '' && inputPassword != '') {
            signInWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then((userCredential) => {
                var currentdate = new Date()
                var datetime = "Last Login: " + currentdate.getDay() + "/" + currentdate.getMonth()
                    + "/" + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes()
                const user = userCredential.user;
                update(ref(database, 'users/' + user.uid), {
                    last_login: datetime
                }

                )
              
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/firebase.User
                        alert("Successfully logged in!")
                        console.log("user logged in")
                        window.location.href = "/home.html";
                        // ...
                    } else {
                        // User is signed out
                        // ...
                        console.log("user signed out")
                    }
                });
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                document.getElementById("error").innerHTML = `<div class="alert alert-danger p-10" style="font-family: Montserrat, sans-serif; color:black;">Email or Password is invalid. <br> Please try again! </div>`;
                alert(errorMessage)
            });
        }
        else{
            document.getElementById("error").innerHTML = `<div class="alert alert-danger p-10" style="font-family: Montserrat, sans-serif; color:black;">Email or Password cannot be empty</div>`;
        }
       

    })
}
