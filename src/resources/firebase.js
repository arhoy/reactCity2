
// <script src="https://www.gstatic.com/firebasejs/5.5.6/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAvjHyetrnd6mkBo9PRXHdpdMqdPUO2iug",
//     authDomain: "mycity122.firebaseapp.com",
//     databaseURL: "https://mycity122.firebaseio.com",
//     projectId: "mycity122",
//     storageBucket: "mycity122.appspot.com",
//     messagingSenderId: "515213579370"
//   };
//   firebase.initializeApp(config);
// </script>

// initial imports
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

// config get from firebase
const config = {
        apiKey: "AIzaSyAvjHyetrnd6mkBo9PRXHdpdMqdPUO2iug",
        authDomain: "mycity122.firebaseapp.com",
        databaseURL: "https://mycity122.firebaseio.com",
        projectId: "mycity122",
        storageBucket: "mycity122.appspot.com",
        messagingSenderId: "515213579370"
      };

firebase.initializeApp(config);

// connect with the database
const firebaseDB = firebase.database()

// get the data defined in firebase -- see the documentation -- getting data, so need to work with promises.
        // firebaseDB.ref('matches').once('value')
        //     .then((data)=>{
        //         console.log(data.val())
        //     })

const firebaseMatches = firebaseDB.ref('matches');

export {
    firebase,
    firebaseMatches
}