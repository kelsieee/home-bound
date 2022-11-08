
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, set, ref, update, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getStorage, ref as sRef, uploadBytes } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";



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
console.log(file.files)
main.addEventListener("load" , getAllDataOnce())

function getAllDataOnce(){
    const dbRef = ref(database)
    // console.log(dbRef)
    console.log("test")
    get(child(dbRef , "roomie")).then((snapshot)=>{
        var roomie = []
        snapshot.forEach(childSnapshot => {
            roomie.push(childSnapshot.val())
            
        });
        var smth = ""
    })

   
}
function createRoomie(){
    
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const name = firstname + ' ' + lastname
    const budget = document.getElementById("budget").value
    const time = document.getElementById("time").value
    const age = document.getElementById("age").value
    const location = document.getElementById("location").value
    const rooms = document.getElementById("rooms").value
    const date = document.getElementById("movedate").value
    const duration = document.getElementById("duration").value
    const introduction = document.getElementById("intro").value
    const hobbies = document.getElementById("hobbies").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const tele = document.getElementById("tele").value

    if(firstname!="" && lastname!="" && budget!="" && time!="" && age!= "" && location != "" && rooms != "" && date!=""
        && duration!="" && introduction!="" && hobbies!="" && phone!="" && email!="" && tele!=""){
            set(ref(database, 'roomie/' + name),{
                budget: budget,
                timeframe: time,
                age: age,
                location: location,
                rooms: rooms,
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

    // var storage = firebase.storage();
    const roomieimage = document.getElementById("imgPreview").value;
    var thisref = sRef(storage, roomieimage)
    console.log(thisref)

    uploadBytes(thisref, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
      
    // thisref.on('state_changed',function(snapshot) {

    // }, function(error) {
    
    // }, function() {
    // // Uploaded completed successfully, now we can get the download URL
    //     thisref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //     //getting url of image
    //     document.getElementById("url") = downloadURL;
    //     alert('uploaded successfully');
    //     saveMessage(downloadURL);
    //     });
    //     });
    // // Get values
    // var url = getInputVal('url');

    // if(roomieimage !="") {
    //     update(ref(database, 'roomie/' + "test"),{
    //         image: url
    //     })
    // }

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
    const bathroomshared = document.getElementById("bathroomshared").checked
    const bedroomquantity = document.getElementById("bedroomquantity").value
    const bedroomshared = document.getElementById("bedroomshared").checked
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


    if(title!="" && bathroomquantity!="" && bathroomshared!=null && bedroomquantity!="" && bedroomshared!=null && internet!=""
        && rent!="" && bills!="" && deposit!="" && property!="" && furnishing!="" && gender!="" && date!="" && duration!=""
        && place!=""){
            set(ref(database, 'property/' + title),{
                internet: internet,
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

            set(ref(database, `property/${title}/contact`),{
                phone: phone,
                email: email,
                tele: tele,
            })

            alert('property listed')
        }

}

if(listRoomie != null){
    listRoomie.addEventListener("click", (e)=>{
        
        createRoomie()
        getAllDataOnce()
        // uploadimage()
        
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
                window.location.href="/home.html";
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

