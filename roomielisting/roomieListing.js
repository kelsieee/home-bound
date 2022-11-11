import  app from '/config/newconfig.js';
import { getDatabase, set, ref, update, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";

const database = getDatabase(app);
const auth = getAuth();
const storage = getStorage()
const storageref = sRef(storage);

let mainroomie = document.getElementById("mainroomie")
mainroomie.addEventListener("load", populateR())

function populateR(){
    var url = document.URL
    console.log(url)
    var id = url.substring(url.lastIndexOf('=') + 1)
    console.log(id)

    const dbRef = ref(database)
    get(child(dbRef,"roomie")).then((snapshot)=>{
        var index = 0
        var roomie = []
        snapshot.forEach(childSnapshot=>{
            roomie.push(childSnapshot.val())
        });
        var roomieListingDiv = document.getElementById("rListingDetails")
        for(var i =0; i<roomie.length; i++){
            if(roomie[i].listId==id){
                index = i
            }
        }
    
        console.log(roomie[index])

        const rGender = roomie[index].gender
        const rAge = roomie[index].age 
        const rLoc = roomie[index].location

        const rBudget = roomie[index].budget 
        const rRooms = roomie[index].rooms 
        const rDate = roomie[index].movedate 
        const rDuration = roomie[index].duration 

        

    })
}