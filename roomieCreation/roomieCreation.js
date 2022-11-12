import  app from '/config/newconfig.js';
import { getDatabase, set, ref, update, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";

const database = getDatabase(app);
const auth = getAuth();
const storage = getStorage()
const storageref = sRef(storage);
let listRoomie = document.getElementById('listRoomie')
let file = document.getElementById('inputFile')


onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user)
    //   console.log(uid)
      if (listRoomie != null) {
        listRoomie.addEventListener("click", (e) => {
            createRoomie(user)
            
        })
    }
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href = "../register,login/login.html"

    }
  });




function uploadProfileImage(user) {

    if (file.files.length > 0) {
        var thisref = sRef(storage, `${user.uid}/profile/profileImg`)
        console.log(file.files[0])
        uploadBytes(thisref, file.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getDownloadURL(thisref)
                .then((url) => {
                    // Insert url into an <img> tag to "download"
                    console.log(url)
                    update(ref(database, 'users/' + user.uid), {
                        profileImage: url
                    })
                    update(ref(database, 'roomie/' + user.uid), {
                        roomieImg: url
                    })
                })
                .catch((error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/object-not-found':
                            // File doesn't exist
                            break;
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect the server response
                            break;
                    }
                })

        });



    }


    // else{
    //     alert("No files selected!")
    // }

}

function createRoomie(user) {
    
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const name = firstname + ' ' + lastname
    const age = document.getElementById("age").value
    const gender = document.querySelector('input[name="gender"]:checked').value
    // console.log(gender)
    const budget = document.getElementById("budget").value

    const locations = []
    const location = document.getElementsByName("location")
    for(var checkedLoc of location){
        if(checkedLoc.checked){
            locations.push(checkedLoc.value)
        }
    }
    console.log(locations)

    const rooms = document.getElementById("rooms").value
    const date = document.getElementById("movedate").value
    const duration = document.getElementById("duration").value
    const introduction = document.getElementById("intro").value
    const hobbies = document.getElementById("hobbies").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const tele = document.getElementById("tele").value

    if (firstname != "" && lastname != "" && age!="" && gender!="" && budget != "" && locations != null && rooms != "" && date != ""
        && duration != "" && introduction != "" && hobbies != "" && phone != "" && email != "" && tele != "" && user != null) {
        set(ref(database, 'roomie/' + user.uid), {
            name: name,
            age: age,
            gender: gender,
            budget: budget,
            location: locations,         
            rooms: rooms,
            movedate: date,
            duration: duration,
            intro: introduction,
            hobbies: hobbies,
            listId: user.uid
        })

        set(ref(database, `roomie/${user.uid}/contact`), {
            phone: phone,
            email: email,
            tele: tele,
        })

        // alert('roomie listed')
        console.log("listed")
        uploadProfileImage(user)
        setTimeout(function(){
            window.location.href = "../home.html#project-area";
         }, 2000);
        // alert("Loading...") 
         
    }
}