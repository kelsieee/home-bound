console.log("lodging")
import  app from '/config/newconfig.js';
import { getDatabase, set, ref, update, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";

const database = getDatabase(app);
const auth = getAuth();
const storage = getStorage()
const storageref = sRef(storage);
let listProperty = document.getElementById('listProperty')
let file = document.getElementById('inputFile')

function GenerateId() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
  };

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      const main_user = user
      function uploadListingImage(id) {
        if (file.files.length > 0) {
            var thisref = sRef(storage, `${main_user.uid}/Listing/${id}`)
            // console.log(file.files[0])
            uploadBytes(thisref, file.files[0]).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(thisref)
                    .then((url) => {
                        // Insert url into an <img> tag to "download"
                        // console.log(url)
                        update(ref(database, 'property/' + id), {
                            propertyImg: url
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
        
        // console.log("bye")
    
        if (title != "" && address!="" && bathroomquantity.value != "Choose Quantity" && bedroomquantity != "Choose Quantity"&& internet != ""
            && rent != "" && bills != "" && deposit != "" && property != "" && furnishing != "" && gender != "" && date != "" && duration != ""
            && place != "" && phone!="" && email!="" && tele!="" && main_user != null) {
            let id = GenerateId()
            set(ref(database, 'property/' + id), {
                title: title,
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
                uid: main_user.uid,
                listId: id
            })
    
            set(ref(database, `property/${id}/financial`), {
                rent: rent,
                bills: bills,
                deposit: deposit,
            })
    
            set(ref(database, `property/${id}/contact`), {
                phone: phone,
                email: email,
                tele: tele,
            })
    
            alert('property listed')
            uploadListingImage(id)
            setTimeout(function(){
                window.location.href = "../home.html#project-area";
             }, 2000);
            alert("Loading...")
        }
    
    }


      if (listProperty != null) {
        listProperty.addEventListener("click", (e) => {
            createProperty()
        })
    }
      // ...
    } else {
      // User is signed out
      // ...
    }
  });