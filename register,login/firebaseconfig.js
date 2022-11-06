
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";



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


let signUp = document.getElementById('signUp')
let loginBtn = document.getElementById('loginBtn')
let signOutBtn = document.getElementById('signOut')
let listRoomie = document.getElementById('listRoomie')
let listProperty = document.getElementById('listProperty')

function createRoomie(){
    
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const name = firstname + ' ' + lastname
    const budget = document.getElementById("budget").value
    const time = document.getElementById("time").value
    const accommodation = document.getElementById("accommodation").value
    const date = document.getElementById("movedate").value
    const duration = document.getElementById("duration").value
    const introduction = document.getElementById("intro").value
    const hobbies = document.getElementById("hobbies").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const tele = document.getElementById("tele").value

    if(firstname!="" && lastname!="" && budget!="" && time!="" && accommodation!="" && date!=""
        && duration!="" && introduction!="" && hobbies!="" && phone!="" && email!="" && tele!=""){
            set(ref(database, 'roomie/' + name),{
                budget: budget,
                timeframe: time,
                accommodation: accommodation,
                movedate: date,
                duration: duration,
                intro: introduction,
                hobbies: hobbies,
            })
        
            set(ref(database, `roomie/${name}/contact`),{
                phone: phone,
                email: email,
                tele: tele,
            })
            alert('roomie listed')
        }
}

function uploadimage(){

    var storage = firebase.storage();
    const roomieimage = document.getElementById("imgPreview").value;
    var storageref = storage.ref();
    var thisref = storageref.child(this.name).put(roomieimage);
    thisref.on('state_changed',function(snapshot) {

    }, function(error) {
    
    }, function() {
    // Uploaded completed successfully, now we can get the download URL
        thisref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        //getting url of image
        document.getElementById("url") = downloadURL;
        alert('uploaded successfully');
        saveMessage(downloadURL);
        });
        });
    // Get values
    var url = getInputVal('url');

    if(roomieimage !="") {
        set(ref(database, 'roomie/' + this.name),{
            image: url
    
        })
    }

    // // Get values
    // var url = getInputVal('url');
    // // Save message
    // // saveMessage(url);

    // Save message to firebase database
    // function saveMessage(url){
    //     var newMessageRef = messagesRef.push();
    //     newMessageRef.set({
    //     imageurl:url,
    //     });
    // }
}


function createProperty(){
    const title = document.getElementById("title").value
    const bathroomquantity = document.getElementById("bathroomquantity").value
    const bathroomshared = document.getElementById("bathroomshared").value
    const bedroomquantity = document.getElementById("bedroomquantity").value
    const bedroomshared = document.getElementById("bedroomshared").value
    const internet = document.getElementById("internet").value
    const rent = document.getElementById("rent").value
    const bills = document.getElementById("bills").value
    const deposit = document.getElementById("deposit").value
    const property = document.getElementById("property").value
    const furnishing = document.getElementById("furnishing").value
    const gender = document.getElementById("gender").value
    const date = document.getElementById("date").value
    const duration = document.getElementById("duration").value
    const accommodation = document.getElementById("accommodation").value

    const place = document.getElementById("place").value
    const roomies = document.getElementById("roomies").value

    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const tele = document.getElementById("tele").value

    if(title!="" && bathroomquantity!="" && bathroomshared!="" && bedroomquantity!="" && bedroomshared!="" && internet!=""
        && rent!="" && bills!="" && deposit!="" && property!="" && furnishing!="" && gender!="" && date!="" && duration!=""
        && accommodation!="" && place!=""){
            set(ref(database, 'property/' + title),{
                internet: internet,
                accommodation: accommodation,
                property: property,
                furnishing: furnishing,
                gender: gender,
                date: date,
                duration: duration,
                place: place,
                roomies: roomies,
            })
        
            set(ref(database, `property/${title}/bathroom`),{
                bathroomquantity: bathroomquantity,
                bathroomshared: bathroomshared,
            })

            set(ref(database, `property/${title}/bedroom`),{
                bedroomquantity: bedroomquantity,
                bedroomshared: bedroomshared,
            })

            set(ref(database, `property/${title}/financial`),{
                rent: rent,
                bills: bills,
                deposit: deposit,
            })

            set(ref(database, `roomie/${title}/contact`),{
                phone: phone,
                email: email,
                tele: tele,
            })

            alert('property listed')
        }

}

if(listRoomie != null){
    listRoomie.addEventListener("click", (e)=>{
        createRoomie();
        uploadimage();
    })
}

if(listProperty != null){
    listProperty.addEventListener("click", (e)=>{
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


                alert('user created')
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
                alert("User Logged in!")
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
      console.log(user)
      console.log("user logged in")
      // ...
    } else {
      // User is signed out
      // ...
      console.log("user signed out")
    }
  });

