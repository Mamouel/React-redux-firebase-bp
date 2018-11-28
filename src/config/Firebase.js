import * as firebase from "firebase";

const FirebaseConfig = {
    apiKey: "AIzaSyBYyLODWhfN3ScSLNCRBBOVjSrWq86GWxU",
    authDomain: "moses-a43f9.firebaseapp.com",
    databaseURL: "https://moses-a43f9.firebaseio.com",
    projectId: "moses-a43f9",
    storageBucket: "moses-a43f9.appspot.com",
    messagingSenderId: "280031790634"
};

firebase.initializeApp(FirebaseConfig);

// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos");:

export default firebase;



