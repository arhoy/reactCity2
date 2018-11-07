
// {/* <script src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyBmltWvC8Z8qjQUQ7Rbx1aQtY-9gL4HxLQ",
//     authDomain: "reactcity-101.firebaseapp.com",
//     databaseURL: "https://reactcity-101.firebaseio.com",
//     projectId: "reactcity-101",
//     storageBucket: "reactcity-101.appspot.com",
//     messagingSenderId: "614974497102"
//   };
//   firebase.initializeApp(config);
// </script> */}


// initial imports
import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


var config = {
        apiKey: "AIzaSyBmltWvC8Z8qjQUQ7Rbx1aQtY-9gL4HxLQ",
        authDomain: "reactcity-101.firebaseapp.com",
        databaseURL: "https://reactcity-101.firebaseio.com",
        projectId: "reactcity-101",
        storageBucket: "reactcity-101.appspot.com",
        messagingSenderId: "614974497102"
      };







firebase.initializeApp(config);

// connect with the database
const firebaseDB = firebase.database();

// get the data defined in firebase -- see the documentation -- getting data, so need to work with promises.
        // firebaseDB.ref('matches').once('value')
        //     .then((data)=>{
        //         console.log(data.val())
        //     })

// request `matches` inside the firebase db: https://console.firebase.google.com/project/reactcity-101/database/reactcity-101/data
// import firbaseMatches inside the component or container you want it to render on: In this case it is the matches component
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');

export {
    firebase,
    firebaseDB,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams
}