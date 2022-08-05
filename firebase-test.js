// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

// let costumerRef = db.collection("costumers");

// costumerRef.get().then((querySnapshot) => {
//     querySnapshot.forEach(document => {
//         console.log(document.data());
//     })
// })

// import { initializeApp } from "firebase/app";
// import { getFirestore, 
//          collection,
//          query,
//          where, 
//          getDocs,
//          getStorage,
//          ref} from "firebase/firestore";

// import { collection, addDoc } from "firebase/firestore"; 



// const firebaseConfig = {
//     apiKey: "AIzaSyBZ8cpKMSsOL8IHyS3PTWFsFrvWSnQ-ZZU",
//     authDomain: "test2-b4560.firebaseapp.com",
//     projectId: "test2-b4560",
//     storageBucket: "test2-b4560.appspot.com",
//     messagingSenderId: "742350769616",
//     appId: "1:742350769616:web:37f028d5079c6b241abdd5",
//     measurementId: "G-CYPFV8CFT4"
//   };

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
// const { log } = require("console");
const { initializeApp, cert, ref, getDownloadURL } = require("firebase-admin/app");
const { getStorage } = require('firebase-admin/storage');
const { v4: uuid_v4 } = require('uuid')
const http = require("http");
const serviceAccount = require("./serviceAccountKey.json");

  initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'gs://test2-b4560.appspot.com/'
});

const bucket = getStorage().bucket();
const filePath = "./images/Mountain.jpg";

const upload = async (filePath) => {
  let uuid = uuid_v4();
  console.log(uuid);
  let data = await bucket.upload(filePath, {
    metadata: {
      metadata: {
        firebaseStorageDownloadTokens: uuid
      }
    }
  });
  let file = data[0]
  return  `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(file.name)}?alt=media&token=${uuid}`
  
}


http.createServer(async(req, res) => {
  try{
    let url = await upload(filePath);
    res.write(`<img src="${url}" alt="">`)
    console.log(url);
    res.end()
  } catch(err){
    console.log(err);
  }
}).listen(8080);
console.log('server running', );

upload(filePath);
// ------------------------ download jpg -----------------------
// const storage = getStorage();
// getDownloadURL(ref(storage, './images/Mountain.jpg'))
//   .then((url) => {


//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();


//     const img = document.getElementById('myimg');
//     img.setAttribute('src', url);
//   })
//   .catch((error) => {

//   });

  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Sobri",
  //     last: "Erdene",
  //     age: 30,
  //     phone: 99119911
  //   });
  
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

// ======================= users data ==============================
// ================================================================

// ---------------------- huuchin version ----------------------
// const cityRef = db.collection('users').get('Sobri');
// const doc = await cityRef.get();
// if (!doc.exists) {
//   console.log('no such documnet!');
// } else {
//   console.log('Document data:', doc,data());
// }
// ---------------------- version 9 --------------------
// const q = query(collection(db, "users"), where("first", "==", "Aaa"));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });
// --------------------- picture upload ---------------
// const storage = getStorage();
// const mountainsRef = ref(storage, 'mountain.jpg');
// const mountainImagesRef = ref(storage, 'images/mountain.jpg');

// mountainsRef.name === mountainImagesRef.name; 
// mountainsRef.fullPath === mountainImagesRef.fullPath; 