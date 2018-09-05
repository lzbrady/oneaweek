import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBsfYIALzhkPtW67p9DpDTMVpwfdYgcGqY",
    authDomain: "one-a-week.firebaseapp.com",
    databaseURL: "https://one-a-week.firebaseio.com",
    projectId: "one-a-week",
    storageBucket: "one-a-week.appspot.com",
    messagingSenderId: "562474614717"
};
let fire = firebase.initializeApp(config);

export default fire;