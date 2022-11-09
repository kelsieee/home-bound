
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, set, ref, update, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjHnf4J60cmRVPvRx60iB1HdtYDoFus-8",
    authDomain: "wad2-login.firebaseapp.com",
    projectId: "wad2-login",
    storageBucket: "wad2-login.appspot.com",
    messagingSenderId: "416797111775",
    appId: "1:416797111775:web:f572cad671caf62a1a806a",
    databaseURL: "https://wad2-login-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const storage = getStorage()
const storageref = sRef(storage);
console.log(storage)


let signUp = document.getElementById('signUp')
let loginBtn = document.getElementById('loginBtn')
let signOutBtn = document.getElementById('signOut')
let listRoomie = document.getElementById('listRoomie')
let listProperty = document.getElementById('listProperty')
let main = document.getElementById('main')
let file = document.getElementById('inputFile')
main.addEventListener("load", getAllDataOnce())
let main_user = null

function getAllDataOnce() {
    const dbRef = ref(database)
    // console.log(dbRef)

    console.log("test")
    get(child(dbRef, "roomie")).then((snapshot) => {
        var roomie = []
        snapshot.forEach(childSnapshot => {
            roomie.push(childSnapshot.val())

        });
        var smth = 
        `
        <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2">
        `
        console.log(roomie)

        var roomieDiv = document.getElementById("roommates")
        for(var i =0; i<roomie.length; i++){
            console.log(roomie[i])
            const rName = roomie[i].name
            const rAge = roomie[i].age
            var pLoc = ""
            for(var j=0;j<roomie[i].location.length; j++){
                pLoc += `${roomie[i].location[j]}, `
            }
            pLoc = pLoc.slice(0,-2)
            // console.log(pLoc.slice(0,-2))
            const rBudget = roomie[i].budget
            const rDuration = roomie[i].duration
            smth += 
            `
            <div class="col">
                        <div class="card "style='position:relative'  id="card5">
                            <input type="checkbox" id="heart5" onchange="passValues(this)"><label  for="heart5" >&#9829</label></input>
                            <img class="img-fluid card-img-top" src="images/room/room1.jpg" alt="project-img">
                            <div class="card-body">
                                <h5 class="card-title text-success fw-bolder">${rName}, ${rAge}</h5>
                                <div class="card-text d-flex pb-2">
                                    <span><i class="bi bi-geo-alt-fill" ></i></span>
                                    <div class="fw-light fs-6 px-2">${pLoc}</div>
                                </div>
                                <div class="card-text d-flex pb-2">
                                    <span><i class="bi bi-currency-dollar"></i></span>
                                    <div class="fw-light fs-6 px-2">${rBudget} / month</div>
                                </div>
                                <div class="card-text d-flex pb-2">
                                    <span>              
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clock-fill mb-1 me-1" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                        </svg>
                                    </span>
                                    <div class="fw-light fs-6 px-2">${rDuration} months</div>
                                </div>
                            </div>
                        </div>
                    </div>
            `     
        }

        smth += `</div>`
        roomieDiv.innerHTML=smth
        console.log(roomieDiv)

    })


}
function createRoomie() {

    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const name = firstname + ' ' + lastname
    const age = document.getElementById("age").value
    const gender = document.getElementById("gender").value
    const budget = document.getElementById("budget").value

    const locations = []
    const location = document.getElementsByName("location")
    for(var checkedLoc of location){
        if(checkedLoc.checked){
            locations.push(checkedLoc.value)
        }
    }
    // console.log(locations)

    const rooms = document.getElementById("rooms").value
    const date = document.getElementById("movedate").value
    const duration = document.getElementById("duration").value
    const introduction = document.getElementById("intro").value
    const hobbies = document.getElementById("hobbies").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const tele = document.getElementById("tele").value

    if (firstname != "" && lastname != "" && age!="" && gender!="" && budget != "" && locations != null && rooms != "" && date != ""
        && duration != "" && introduction != "" && hobbies != "" && phone != "" && email != "" && tele != "") {
        set(ref(database, 'roomie/' + name), {
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
        })

        set(ref(database, `roomie/${name}/contact`), {
            phone: phone,
            email: email,
            tele: tele,
        })
        alert('roomie listed')
        window.location.href = "../home.html#project-area"
    }
}


function uploadProfileImage() {

    if (file.files.length > 0) {
        var thisref = sRef(storage, `${main_user.uid}/profile/profileImg`)
        console.log(file.files[0])
        uploadBytes(thisref, file.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getDownloadURL(thisref)
                .then((url) => {
                    // Insert url into an <img> tag to "download"
                    console.log(url)
                    update(ref(database, 'users/' + main_user.uid), {
                        profileImage: url
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


function createProperty() {
    const title = document.getElementById("title").value
    const address = document.getElementById("address").value
    const bathroomquantity = document.getElementById("bathroomquantity").value
    const bedroomquantity = document.getElementById("bedroomquantity").value
    const internet = document.getElementById("internet").value
    const rent = document.getElementById("rent").value
    const bills = document.getElementById("bills").value
    const deposit = document.getElementById("deposit").value
    const property = document.getElementById("property").value
    const furnishing = document.getElementById("furnishing").value
    const gender = document.getElementById("gender").value
    const date = document.getElementById("date").value
    const duration = document.getElementById("duration").value

    const place = document.getElementById("place").value
    const roomies = document.getElementById("roomies").value

    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const tele = document.getElementById("tele").value


    if (title != "" && address!="" && bathroomquantity.value != "Choose Quantity" && bedroomquantity != "Choose Quantity"&& internet != ""
        && rent != "" && bills != "" && deposit != "" && property != "" && furnishing != "" && gender != "" && date != "" && duration != ""
        && place != "" && phone!="" && email!="" && tele!="" && main_user != null) {
        set(ref(database, 'property/' + title), {
            address: address,
            bedroomquantity: bedroomquantity,
            bathroomquantity: bathroomquantity,
            internet: internet,
            property: property,
            furnishing: furnishing,
            gender: gender,
            date: date,
            duration: duration,
            place: place,
            roomies: roomies,
            uid: main_user.uid
        })

        set(ref(database, `property/${title}/financial`), {
            rent: rent,
            bills: bills,
            deposit: deposit,
        })

        set(ref(database, `property/${title}/contact`), {
            phone: phone,
            email: email,
            tele: tele,
        })

        alert('property listed')
    }

}

if (listRoomie != null) {
    listRoomie.addEventListener("click", (e) => {

        createRoomie()
        uploadProfileImage()

    })
}

if (listProperty != null) {
    listProperty.addEventListener("click", (e) => {
        createProperty()
    })
}



if (signUp != null) {
    signUp.addEventListener("click", (e) => {

        const username = document.getElementById("username").value;
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById('password1').value;
        const roommate = document.getElementById('inputRoommate').checked;
        const landlord = document.getElementById('inputLandlord').checked;
        var type = "Not Selected"
        if (roommate == true) {
            type = "Roommate";
        }
        else {
            type = "Landlord";
        }



        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user.uid)
                set(ref(database, 'users/' + user.uid), {
                    username: username,
                    dob: dob,
                    email: email,
                    type: type
                })


                alert('Succesfully Registered!')
                window.location.href = "login.html"

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    })
}


if (loginBtn != null) {
    loginBtn.addEventListener("click", (e) => {
        const inputEmail = document.getElementById('inputEmail').value
        const inputPassword = document.getElementById('inputPassword').value
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
                alert("Successfully logged in!")
                window.location.href = "/home.html";
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage)
            });

    })
}

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

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        main_user = user
        console.log(main_user)
        console.log("user logged in")
        // ...
    } else {
        // User is signed out
        // ...
        main_user = null
        console.log("user signed out")
    }
});

