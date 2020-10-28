import Firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAinJZsTq96CfJ7-HQmCgbIwUnDpfjyaeY",
    authDomain: "ihm-wd-aindia.firebaseapp.com",
    databaseURL: "https://ihm-wd-aindia.firebaseio.com",
    projectId: "ihm-wd-aindia",
    storageBucket: "ihm-wd-aindia.appspot.com",
    messagingSenderId: "978143349657",
    appId: "1:978143349657:web:fb3aa5ffd82f0600a26108"
  };
 

  // Initialize Firebase
  Firebase.initializeApp(firebaseConfig);

  export {Firebase}