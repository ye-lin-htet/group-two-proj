import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyAHuflxProO9Eynk3x2HfGAuO2j3Mn5144",
    authDomain: "group2-a03da.firebaseapp.com",
    databaseURL: "https://group2-a03da.firebaseio.com",
    projectId: "group2-a03da",
    storageBucket: "group2-a03da.appspot.com",
    messagingSenderId: "959987930930",
    appId: "1:959987930930:web:cb59d504456abefcf5292b",
    measurementId: "G-3V5784N7K0"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()